import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center font-sans">
      <div className="text-8xl font-black text-blue-500 mb-4 tracking-tighter">404</div>
      <h1 className="text-3xl font-extrabold text-white mb-2">Page Not Found</h1>
      <p className="text-slate-400 text-sm max-w-md mb-8">
        The page you are looking for does not exist or has been moved within the Allworkss ecosystem.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
        <Link href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow font-bold">
          🏠 Go Home
        </Link>
        <Link href="/about-founder" className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-xl font-bold">
          👤 About Founder
        </Link>
        <a href="https://allworkss.space" target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 text-cyan-400 rounded-xl font-bold">
          ABIS SaaS ↗
        </a>
      </div>

      <p className="mt-12 text-xs text-slate-500">
        Contact support at <a href="mailto:theallworkss@gmail.com" className="text-blue-400 hover:underline">theallworkss@gmail.com</a>
      </p>
    </div>
  );
}
