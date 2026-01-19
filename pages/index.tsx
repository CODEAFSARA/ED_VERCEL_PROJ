
// "use client"

// import { useEffect, useState } from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import remarkBreaks from 'remark-breaks';

// export default function Home() {
//     const [idea, setIdea] = useState<string>('…loading');

//     useEffect(() => {
//         const evt = new EventSource('/api');
//         let buffer = '';

//         evt.onmessage = (e) => {
//             buffer += e.data;
//             setIdea(buffer);
//         };
//         evt.onerror = () => {
//             console.error('SSE error, closing');
//             evt.close();
//         };

//         return () => { evt.close(); };
//     }, []);

//     return (
//         <main className="p-8 font-sans">
//             <h1 className="text-3xl font-bold mb-4">
//                 Business Idea Generator
//             </h1>
//             <div className="w-full max-w-2xl p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md">
//                 <div className="prose prose-gray dark:prose-invert max-w-none">
//                     <ReactMarkdown 
//                         remarkPlugins={[remarkGfm, remarkBreaks]}
//                     >
//                         {idea}
//                     </ReactMarkdown>
//                 </div>
//             </div>
//         </main>
//     );
// }

// "use client"

// import Link from 'next/link';
// import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
//       <div className="container mx-auto px-4 py-12">
//         {/* Navigation */}
//         <nav className="flex justify-between items-center mb-12">
//           <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
//             IdeaGen
//           </h1>
//           <div>
//             <SignedOut>
//               <SignInButton mode="modal">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
//                   Sign In
//                 </button>
//               </SignInButton>
//             </SignedOut>
//             <SignedIn>
//               <div className="flex items-center gap-4">
//                 <Link 
//                   href="/product" 
//                   className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
//                 >
//                   Go to App
//                 </Link>
//                 <UserButton afterSignOutUrl="/" />
//               </div>
//             </SignedIn>
//           </div>
//         </nav>
//         {/* Hero Section */}
//         <div className="text-center py-24">
//           <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
//             Generate Your Next
//             <br />
//             Big Business Idea
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
//             Harness the power of AI to discover innovative business opportunities tailored for the AI agent economy
//           </p>
          
//           <SignedOut>
//             <SignInButton mode="modal">
//               <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105">
//                 Get Started Free
//               </button>
//             </SignInButton>
//           </SignedOut>
//           <SignedIn>
//             <Link href="/product">
//               <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105">
//                 Generate Ideas Now
//               </button>
//             </Link>
//           </SignedIn>
//         </div>
//       </div>
//     </main>
//   );
// }





// "use client"

// import Link from 'next/link';
// import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
//       <div className="container mx-auto px-4 py-12">
//         {/* Navigation */}
//         <nav className="flex justify-between items-center mb-12">
//           <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
//             IdeaGen Pro
//           </h1>
//           <div>
//             <SignedOut>
//               <SignInButton mode="modal">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
//                   Sign In
//                 </button>
//               </SignInButton>
//             </SignedOut>
//             <SignedIn>
//               <div className="flex items-center gap-4">
//                 <Link 
//                   href="/product" 
//                   className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
//                 >
//                   Go to App
//                 </Link>
//                 <UserButton showName={true} />
//               </div>
//             </SignedIn>
//           </div>
//         </nav>

//         {/* Hero Section */}
//         <div className="text-center py-24">
//           <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
//             Generate Your Next
//             <br />
//             Big Business Idea
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
//             Harness the power of AI to discover innovative business opportunities tailored for the AI agent economy
//           </p>
          
//           {/* Pricing Preview */}
//           <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 max-w-sm mx-auto mb-8">
//             <h3 className="text-2xl font-bold mb-2">Premium Subscription</h3>
//             <p className="text-4xl font-bold text-blue-600 mb-2">$10<span className="text-lg text-gray-600">/month</span></p>
//             <ul className="text-left text-gray-600 dark:text-gray-400 mb-6">
//               <li className="mb-2">✓ Unlimited idea generation</li>
//               <li className="mb-2">✓ Advanced AI models</li>
//               <li className="mb-2">✓ Priority support</li>
//             </ul>
//           </div>
          
//           <SignedOut>
//             <SignInButton mode="modal">
//               <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105">
//                 Start Your Free Trial
//               </button>
//             </SignInButton>
//           </SignedOut>
//           <SignedIn>
//             <Link href="/product">
//               <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105">
//                 Access Premium Features
//               </button>
//             </Link>
//           </SignedIn>
//         </div>
//       </div>
//     </main>
//   );
// }




"use client"

import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            MediNotes Pro
          </h1>
          <div>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-4">
                <Link 
                  href="/product" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Go to App
                </Link>
                <UserButton showName={true} />
              </div>
            </SignedIn>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center py-16">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Transform Your
            <br />
            Consultation Notes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            AI-powered assistant that generates professional summaries, action items, and patient communications from your consultation notes
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Professional Summaries</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Generate comprehensive medical record summaries from your notes
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                <div className="text-3xl mb-4">✅</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Action Items</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Clear next steps and follow-up actions for every consultation
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Patient Emails</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Draft clear, patient-friendly email communications automatically
                </p>
              </div>
            </div>
          </div>
          
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105">
                Start Free Trial
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link href="/product">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105">
                Open Consultation Assistant
              </button>
            </Link>
          </SignedIn>
        </div>

        {/* Trust Indicators */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>HIPAA Compliant • Secure • Professional</p>
        </div>
      </div>
    </main>
  );
}