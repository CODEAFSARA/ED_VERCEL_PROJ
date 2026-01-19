# from fastapi import FastAPI
# from fastapi.responses import PlainTextResponse
# import requests
# import os
# import json

# app = FastAPI()

# # Get Gemini API key from environment variable
# GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
# # GEMINI_API_KEY = "AIzaSyBxdGMFXOQ9AfXbLnsPiyXfLkIGSEay-No"

# # Gemini endpoint
# GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent"

# @app.get("/api", response_class=PlainTextResponse)
# def idea():
#     user_prompt = "Come up with a new business idea for AI Agents"

#     headers = {
#         "x-goog-api-key": GEMINI_API_KEY,
#         "Content-Type": "application/json"
#     }

#     data = {
#         "contents": [
#             {
#                 "parts": [
#                     {"text": user_prompt}
#                 ]
#             }
#         ]
#     }

#     response = requests.post(GEMINI_URL, headers=headers, json=data)
#     result = response.json()

#     # If API returned an error
#     if "error" in result:
#         return f"Gemini API Error: {result['error']['message']}"

#     # Extract content safely
#     try:
#         return result["candidates"][0]["content"]["parts"][0]["text"]
#     except Exception as e:
#         return f"Unexpected response format: {result}"











# # import os
# # import requests

# # def handler(request):
# #     GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

# #     user_prompt = "Come up with a new business idea for AI Agents"

# #     headers = {
# #         "x-goog-api-key": GEMINI_API_KEY,
# #         "Content-Type": "application/json"
# #     }

# #     data = {
# #         "contents": [
# #             {
# #                 "parts": [
# #                     {"text": user_prompt}
# #                 ]
# #             }
# #         ]
# #     }

# #     GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent"
# #     response = requests.post(GEMINI_URL, headers=headers, json=data)
# #     result = response.json()

# #     if "error" in result:
# #         return result["error"]["message"]

# #     try:
# #         return result["candidates"][0]["content"]["parts"][0]["text"]
# #     except:
# #         return "Unexpected API Response"





# from fastapi import FastAPI
# from fastapi.responses import StreamingResponse
# import requests
# import os
# import json

# app = FastAPI()

# GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
# GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse"


# @app.get("/api")
# def idea():
#     user_prompt = "Come up with a new business idea for AI Agents"

#     headers = {
#         "x-goog-api-key": GEMINI_API_KEY,
#         "Content-Type": "application/json"
#     }

#     data = {
#         "contents": [
#             {
#                 "parts": [
#                     {"text": user_prompt}
#                 ]
#             }
#         ]
#     }

#     # Streaming request to Gemini
#     response = requests.post(
#         GEMINI_URL,
#         headers=headers,
#         json=data,
#         stream=True   # IMPORTANT for SSE streaming
#     )

#     def event_stream():
#         for line in response.iter_lines(decode_unicode=True):
#             if not line:
#                 continue

#             # SSE format from Gemini: each line starts with "data: {json}"
#             if line.startswith("data: "):
#                 payload = line.replace("data: ", "")

#                 # Parse JSON safely
#                 try:
#                     obj = json.loads(payload)
#                     parts = obj.get("candidates", [{}])[0].get("content", {}).get("parts", [])
#                     for p in parts:
#                         txt = p.get("text")
#                         if txt:
#                             # Send through SSE
#                             yield f"data: {txt}\n\n"
#                 except Exception:
#                     continue

#     return StreamingResponse(event_stream(), media_type="text/event-stream")








# import os
# import json
# import requests
# from fastapi import FastAPI, Depends
# from fastapi.responses import StreamingResponse
# from fastapi_clerk_auth import ClerkConfig, ClerkHTTPBearer, HTTPAuthorizationCredentials

# app = FastAPI()

# # Clerk Auth setup
# clerk_config = ClerkConfig(jwks_url=os.getenv("CLERK_JWKS_URL"))
# clerk_guard = ClerkHTTPBearer(clerk_config)

# # Gemini setup
# GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
# GEMINI_URL = (
#     "https://generativelanguage.googleapis.com/v1beta/models/"
#     "gemini-2.5-flash:streamGenerateContent?alt=sse"
# )

# @app.get("/api")
# def idea(creds: HTTPAuthorizationCredentials = Depends(clerk_guard)):

#     # Extract user ID from Clerk JWT (same as your original code)
#     user_id = creds.decoded["sub"]

#     user_prompt = (
#         "Reply with a new business idea for AI Agents, formatted with headings, "
#         "sub-headings, and bullet points."
#     )

#     headers = {
#         "x-goog-api-key": GEMINI_API_KEY,
#         "Content-Type": "application/json"
#     }

#     data = {
#         "contents": [
#             {
#                 "parts": [
#                     {"text": user_prompt}
#                 ]
#             }
#         ]
#     }

#     # Send streaming request to Gemini
#     response = requests.post(
#         GEMINI_URL,
#         headers=headers,
#         json=data,
#         stream=True
#     )

#     def event_stream():
#         for line in response.iter_lines(decode_unicode=True):
#             if not line:
#                 continue

#             if line.startswith("data: "):
#                 payload = line.replace("data: ", "")

#                 try:
#                     obj = json.loads(payload)
#                     parts = obj.get("candidates", [{}])[0].get("content", {}).get("parts", [])

#                     for p in parts:
#                         txt = p.get("text")
#                         if txt:
#                             # EXACT SSE format your frontend expects
#                             yield f"data: {txt}\n\n"
                
#                 except Exception:
#                     continue

#     return StreamingResponse(event_stream(), media_type="text/event-stream")



import os
import json
import requests
from fastapi import FastAPI, Depends
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from fastapi_clerk_auth import (
    ClerkConfig,
    ClerkHTTPBearer,
    HTTPAuthorizationCredentials,
)

app = FastAPI()

# -----------------------------
# Clerk Authentication
# -----------------------------
clerk_config = ClerkConfig(jwks_url=os.getenv("CLERK_JWKS_URL"))
clerk_guard = ClerkHTTPBearer(clerk_config)

# -----------------------------
# Gemini Configuration
# -----------------------------
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

GEMINI_URL = (
    "https://generativelanguage.googleapis.com/v1beta/models/"
    "gemini-2.5-flash:streamGenerateContent?alt=sse"
)

# -----------------------------
# Request Model
# -----------------------------
class Visit(BaseModel):
    patient_name: str
    date_of_visit: str
    notes: str

# -----------------------------
# Prompts (same as OpenAI)
# -----------------------------
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
{visit.notes}
"""

# -----------------------------
# API Endpoint
# -----------------------------
@app.post("/api")
def consultation_summary(
    visit: Visit,
    creds: HTTPAuthorizationCredentials = Depends(clerk_guard),
):
    # Clerk user id (for audit/logging)
    user_id = creds.decoded["sub"]

    full_prompt = f"{system_prompt}\n\n{user_prompt_for(visit)}"

    headers = {
        "x-goog-api-key": GEMINI_API_KEY,
        "Content-Type": "application/json",
    }

    payload = {
        "contents": [
            {
                "parts": [
                    {"text": full_prompt}
                ]
            }
        ]
    }

    # Streaming request to Gemini
    response = requests.post(
        GEMINI_URL,
        headers=headers,
        json=payload,
        stream=True,
        timeout=300,
    )

    def event_stream():
        for line in response.iter_lines(decode_unicode=True):
            if not line:
                continue

            # Gemini SSE lines look like: data: {json}
            if line.startswith("data: "):
                data = line.replace("data: ", "").strip()

                try:
                    obj = json.loads(data)
                    parts = (
                        obj.get("candidates", [{}])[0]
                        .get("content", {})
                        .get("parts", [])
                    )

                    for part in parts:
                        text = part.get("text")
                        if text:
                            # EXACT same SSE format as your OpenAI version
                            for l in text.split("\n"):
                                yield f"data: {l}\n\n"
                            yield "data:  \n"

                except Exception:
                    continue

    return StreamingResponse(
        event_stream(),
        media_type="text/event-stream"
    )
