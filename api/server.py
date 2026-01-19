import os
from pathlib import Path
from fastapi import FastAPI, Depends
from fastapi.responses import StreamingResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi_clerk_auth import ClerkConfig, ClerkHTTPBearer, HTTPAuthorizationCredentials
import requests
import json

app = FastAPI()

# -------------------- CORS --------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------- Clerk Auth --------------------
clerk_config = ClerkConfig(jwks_url=os.getenv("CLERK_JWKS_URL"))
clerk_guard = ClerkHTTPBearer(clerk_config)

# -------------------- Gemini Config --------------------
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

GEMINI_URL = (
    "https://generativelanguage.googleapis.com/"
    "v1beta/models/gemini-2.5-flash:generateContent"
)

# -------------------- Models --------------------
class Visit(BaseModel):
    patient_name: str
    date_of_visit: str
    notes: str

# -------------------- Prompts --------------------
system_prompt = """
You are provided with notes written by a doctor from a patient's visit.
Your job is to summarize the visit for the doctor and provide an email.
Reply with exactly three sections with the headings:
### Summary of visit for the doctor's records
### Next steps for the doctor
### Draft of email to patient in patient-friendly language
"""

def user_prompt_for(visit: Visit) -> str:
    return f"""Create the summary, next steps and draft email for:
Patient Name: {visit.patient_name}
Date of Visit: {visit.date_of_visit}
Notes:
{visit.notes}"""

# -------------------- API --------------------
@app.post("/api/consultation")
def consultation_summary(
    visit: Visit,
    creds: HTTPAuthorizationCredentials = Depends(clerk_guard),
):
    user_id = creds.decoded["sub"]  # unchanged behavior

    prompt_text = f"{system_prompt}\n\n{user_prompt_for(visit)}"

    headers = {
        "x-goog-api-key": GEMINI_API_KEY,
        "Content-Type": "application/json",
    }

    payload = {
        "contents": [
            {
                "parts": [{"text": prompt_text}]
            }
        ]
    }

    response = requests.post(GEMINI_URL, headers=headers, json=payload)
    result = response.json()

    if "error" in result:
        def error_stream():
            yield f"data: Gemini API Error: {result['error']['message']}\n\n"
        return StreamingResponse(error_stream(), media_type="text/event-stream")

    try:
        final_text = result["candidates"][0]["content"]["parts"][0]["text"]
    except Exception:
        final_text = f"Unexpected Gemini response format:\n{json.dumps(result)}"

    # -------- SSE Streaming (same behavior) --------
    def event_stream():
        for line in final_text.split("\n"):
            yield f"data: {line}\n\n"
            yield "data:  \n"

    return StreamingResponse(event_stream(), media_type="text/event-stream")

# -------------------- Health --------------------
@app.get("/health")
def health_check():
    return {"status": "healthy"}

# -------------------- Static Files (Next.js Export) --------------------
static_path = Path("static")

if static_path.exists():
    @app.get("/")
    async def serve_root():
        return FileResponse(static_path / "index.html")

    app.mount("/", StaticFiles(directory="static", html=True), name="static")
