// "use client"

// import { useEffect, useState } from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import remarkBreaks from 'remark-breaks';
// import { useAuth } from '@clerk/nextjs';
// import { fetchEventSource } from '@microsoft/fetch-event-source';

// export default function Product() {
//     const { getToken } = useAuth();
//     const [idea, setIdea] = useState<string>('…loading');

//     useEffect(() => {
//         let buffer = '';
//         (async () => {
//             const jwt = await getToken();
//             if (!jwt) {
//                 setIdea('Authentication required');
//                 return;
//             }
            
//             await fetchEventSource('/api', {
//                 headers: { Authorization: `Bearer ${jwt}` },
//                 onmessage(ev) {
//                     buffer += ev.data;
//                     setIdea(buffer);
//                 },
//                 onerror(err) {
//                     console.error('SSE error:', err);
//                     // Don't throw - let it retry
//                 }
//             });
//         })();
//     }, []); // Empty dependency array - run once on mount

//     return (
//         <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
//             <div className="container mx-auto px-4 py-12">
//                 {/* Header */}
//                 <header className="text-center mb-12">
//                     <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
//                         Business Idea Generator
//                     </h1>
//                     <p className="text-gray-600 dark:text-gray-400 text-lg">
//                         AI-powered innovation at your fingertips
//                     </p>
//                 </header>

//                 {/* Content Card */}
//                 <div className="max-w-3xl mx-auto">
//                     <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-opacity-95">
//                         {idea === '…loading' ? (
//                             <div className="flex items-center justify-center py-12">
//                                 <div className="animate-pulse text-gray-400">
//                                     Generating your business idea...
//                                 </div>
//                             </div>
//                         ) : (
//                             <div className="markdown-content text-gray-700 dark:text-gray-300">
//                                 <ReactMarkdown
//                                     remarkPlugins={[remarkGfm, remarkBreaks]}
//                                 >
//                                     {idea}
//                                 </ReactMarkdown>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }














// "use client"

// import { useEffect, useState } from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import remarkBreaks from 'remark-breaks';
// import { useAuth } from '@clerk/nextjs';
// import { fetchEventSource } from '@microsoft/fetch-event-source';
// import { Protect, PricingTable, UserButton } from '@clerk/nextjs';

// function IdeaGenerator() {
//     const { getToken } = useAuth();
//     const [idea, setIdea] = useState<string>('…loading');

//     useEffect(() => {
//         let buffer = '';
//         (async () => {
//             const jwt = await getToken();
//             if (!jwt) {
//                 setIdea('Authentication required');
//                 return;
//             }
            
//             // await fetchEventSource('/api', {
//             await fetchEventSource(process.env.NEXT_PUBLIC_BACKEND_URL + '/api', {

//                 headers: { Authorization: `Bearer ${jwt}` },
//                 onmessage(ev) {
//                     buffer += ev.data;
//                     setIdea(buffer);
//                 },
//                 onerror(err) {
//                     console.error('SSE error:', err);
//                     // Don't throw - let it retry
//                 }
//             });
//         })();
//     }, []); // Empty dependency array - run once on mount

//     return (
//         <div className="container mx-auto px-4 py-12">
//             {/* Header */}
//             <header className="text-center mb-12">
//                 <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
//                     Business Idea Generator
//                 </h1>
//                 <p className="text-gray-600 dark:text-gray-400 text-lg">
//                     AI-powered innovation at your fingertips
//                 </p>
//             </header>

//             {/* Content Card */}
//             <div className="max-w-3xl mx-auto">
//                 <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-opacity-95">
//                     {idea === '…loading' ? (
//                         <div className="flex items-center justify-center py-12">
//                             <div className="animate-pulse text-gray-400">
//                                 Generating your business idea...
//                             </div>
//                         </div>
//                     ) : (
//                         <div className="markdown-content text-gray-700 dark:text-gray-300">
//                             <ReactMarkdown
//                                 remarkPlugins={[remarkGfm, remarkBreaks]}
//                             >
//                                 {idea}
//                             </ReactMarkdown>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default function Product() {
//     return (
//         <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
//             {/* User Menu in Top Right */}
//             <div className="absolute top-4 right-4">
//                 <UserButton showName={true} />
//             </div>

//             {/* Subscription Protection */}
//             <Protect
//                 plan="premium_subscription"
//                 fallback={
//                     <div className="container mx-auto px-4 py-12">
//                         <header className="text-center mb-12">
//                             <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
//                                 Choose Your Plan
//                             </h1>
//                             <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
//                                 Unlock unlimited AI-powered business ideas
//                             </p>
//                         </header>
//                         <div className="max-w-4xl mx-auto">
//                             <PricingTable />
//                         </div>
//                     </div>
//                 }
//             >
//                 <IdeaGenerator />
//             </Protect>
//         </main>
//     );
// }


















// "use client";

// import { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import remarkBreaks from "remark-breaks";
// import { useAuth } from "@clerk/nextjs";
// import { fetchEventSource } from "@microsoft/fetch-event-source";
// import { Protect, PricingTable, UserButton } from "@clerk/nextjs";

// function IdeaGenerator() {
//     const { getToken, isLoaded } = useAuth();
//     const [idea, setIdea] = useState<string>("…loading");

//     useEffect(() => {
//         let buffer = "";

//         (async () => {
//             if (!isLoaded) return;

//             const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
//             if (!backendUrl) {
//                 setIdea("Backend URL missing in environment variables.");
//                 return;
//             }

//             const jwt = await getToken();
//             if (!jwt) {
//                 setIdea("Authentication required");
//                 return;
//             }

//             await fetchEventSource(`${backendUrl}/api`, {
//                 headers: { Authorization: `Bearer ${jwt}` },
//                 onmessage(ev) {
//                     buffer += ev.data;
//                     setIdea(buffer);
//                 },
//                 onerror(err) {
//                     console.error("SSE error:", err);
//                 }
//             });
//         })();
//     }, [isLoaded]);

//     if (!isLoaded) return <div>Loading...</div>;

//     return (
//         <div className="container mx-auto px-4 py-12">
//             <header className="text-center mb-12">
//                 <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
//                     Business Idea Generator
//                 </h1>
//                 <p className="text-gray-600 dark:text-gray-400 text-lg">
//                     AI-powered innovation at your fingertips
//                 </p>
//             </header>

//             <div className="max-w-3xl mx-auto">
//                 <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-opacity-95">
//                     <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
//                         {idea}
//                     </ReactMarkdown>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default function Product() {
//     return (
//         <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
//             <div className="absolute top-4 right-4">
//                 <UserButton showName={true} />
//             </div>

//             <Protect
//                 plan="premium_subscription"
//                 fallback={
//                     <div className="container mx-auto px-4 py-12">
//                         <header className="text-center mb-12">
//                             <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
//                                 Choose Your Plan
//                             </h1>
//                             <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
//                                 Unlock unlimited AI-powered business ideas
//                             </p>
//                         </header>
//                         <div className="max-w-4xl mx-auto">
//                             <PricingTable />
//                         </div>
//                     </div>
//                 }
//             >
//                 <IdeaGenerator />
//             </Protect>
//         </main>
//     );
// }








// "use client"

// import { useState, FormEvent } from 'react';
// import { useAuth } from '@clerk/nextjs';
// import DatePicker from 'react-datepicker';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import remarkBreaks from 'remark-breaks';
// import { fetchEventSource } from '@microsoft/fetch-event-source';
// import { Protect, PricingTable, UserButton } from '@clerk/nextjs';

// function ConsultationForm() {
//     const { getToken } = useAuth();

//     // Form state
//     const [patientName, setPatientName] = useState('');
//     const [visitDate, setVisitDate] = useState<Date | null>(new Date());
//     const [notes, setNotes] = useState('');

//     // Streaming state
//     const [output, setOutput] = useState('');
//     const [loading, setLoading] = useState(false);

//     async function handleSubmit(e: FormEvent) {
//         e.preventDefault();
//         setOutput('');
//         setLoading(true);

//         const jwt = await getToken();
//         if (!jwt) {
//             setOutput('Authentication required');
//             setLoading(false);
//             return;
//         }

//         const controller = new AbortController();
//         let buffer = '';

//         await fetchEventSource('/api', {
//             signal: controller.signal,
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${jwt}`,
//             },
//             body: JSON.stringify({
//                 patient_name: patientName,
//                 date_of_visit: visitDate?.toISOString().slice(0, 10),
//                 notes,
//             }),
//             onmessage(ev) {
//                 buffer += ev.data;
//                 setOutput(buffer);
//             },
//             onclose() { 
//                 setLoading(false); 
//             },
//             onerror(err) {
//                 console.error('SSE error:', err);
//                 controller.abort();
//                 setLoading(false);
//             },
//         });
//     }

//     return (
//         <div className="container mx-auto px-4 py-12 max-w-3xl">
//             <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
//                 Consultation Notes
//             </h1>

//             <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
//                 <div className="space-y-2">
//                     <label htmlFor="patient" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                         Patient Name
//                     </label>
//                     <input
//                         id="patient"
//                         type="text"
//                         required
//                         value={patientName}
//                         onChange={(e) => setPatientName(e.target.value)}
//                         className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
//                         placeholder="Enter patient's full name"
//                     />
//                 </div>

//                 <div className="space-y-2">
//                     <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                         Date of Visit
//                     </label>
//                     <DatePicker
//                         id="date"
//                         selected={visitDate}
//                         onChange={(d: Date | null) => setVisitDate(d)}
//                         dateFormat="yyyy-MM-dd"
//                         placeholderText="Select date"
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
//                     />
//                 </div>

//                 <div className="space-y-2">
//                     <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                         Consultation Notes
//                     </label>
//                     <textarea
//                         id="notes"
//                         required
//                         rows={8}
//                         value={notes}
//                         onChange={(e) => setNotes(e.target.value)}
//                         className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
//                         placeholder="Enter detailed consultation notes..."
//                     />
//                 </div>

//                 <button 
//                     type="submit" 
//                     disabled={loading}
//                     className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
//                 >
//                     {loading ? 'Generating Summary...' : 'Generate Summary'}
//                 </button>
//             </form>

//             {output && (
//                 <section className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8">
//                     <div className="markdown-content prose prose-blue dark:prose-invert max-w-none">
//                         <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
//                             {output}
//                         </ReactMarkdown>
//                     </div>
//                 </section>
//             )}
//         </div>
//     );
// }

// export default function Product() {
//     return (
//         <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
//             {/* User Menu in Top Right */}
//             <div className="absolute top-4 right-4">
//                 <UserButton showName={true} />
//             </div>

//             {/* Subscription Protection */}
//             <Protect
//                 plan="premium_subscription"
//                 fallback={
//                     <div className="container mx-auto px-4 py-12">
//                         <header className="text-center mb-12">
//                             <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
//                                 Healthcare Professional Plan
//                             </h1>
//                             <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
//                                 Streamline your patient consultations with AI-powered summaries
//                             </p>
//                         </header>
//                         <div className="max-w-4xl mx-auto">
//                             <PricingTable />
//                         </div>
//                     </div>
//                 }
//             >
//                 <ConsultationForm />
//             </Protect>
//         </main>
//     );
// }





"use client";

import { useState, FormEvent } from "react";
import { useAuth, UserButton } from "@clerk/nextjs";
import DatePicker from "react-datepicker";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { fetchEventSource } from "@microsoft/fetch-event-source";

function ConsultationForm() {
  const { getToken } = useAuth();

  // Form state
  const [patientName, setPatientName] = useState("");
  const [visitDate, setVisitDate] = useState<Date | null>(new Date());
  const [notes, setNotes] = useState("");

  // Streaming state
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setOutput("");
    setLoading(true);

    // 🔓 OPTIONAL: still allow anonymous usage if you want
    const jwt = await getToken();

    const controller = new AbortController();
    let buffer = "";

    // await fetchEventSource("/api", {
       await fetchEventSource('/api/consultation', {

      signal: controller.signal,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(jwt && { Authorization: `Bearer ${jwt}` }),
      },
      body: JSON.stringify({
        patient_name: patientName,
        date_of_visit: visitDate?.toISOString().slice(0, 10),
        notes,
      }),
      onmessage(ev) {
        buffer += ev.data;
        setOutput(buffer);
      },
      onclose() {
        setLoading(false);
      },
      onerror(err) {
        console.error("SSE error:", err);
        controller.abort();
        setLoading(false);
      },
    });
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
        Consultation Notes
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
      >
        <div>
          <label className="block text-sm font-medium mb-1">
            Patient Name
          </label>
          <input
            required
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Date of Visit
          </label>
          <DatePicker
            selected={visitDate}
            onChange={(d) => setVisitDate(d)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Consultation Notes
          </label>
          <textarea
            required
            rows={8}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          {loading ? "Generating Summary..." : "Generate Summary"}
        </button>
      </form>

      {output && (
  <section className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8">
    <div className="prose dark:prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
        {output}
      </ReactMarkdown>
    </div>
  </section>
)}

    </div>
  );
}

export default function Product() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* User Menu (optional, still works for logged-in users) */}
      <div className="absolute top-4 right-4">
        <UserButton showName />
      </div>

      {/* 🔓 Unrestricted form */}
      <ConsultationForm />
    </main>
  );
}
