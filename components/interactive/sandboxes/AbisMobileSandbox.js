import React, { useState } from 'react';
import { Smartphone, CheckCircle2, Lock, Download, Zap, CreditCard, ShieldCheck } from 'lucide-react';

export default function AbisMobileSandbox() {
  const [activeStep, setActiveStep] = useState('home');
  const [downloadingPdf, setDownloadingPdf] = useState(false);

  const triggerRazorpayCheckout = () => {
    setActiveStep('razorpay');
    setTimeout(() => {
      setActiveStep('success');
    }, 1500);
  };

  const triggerPdfDownload = () => {
    setDownloadingPdf(true);
    setTimeout(() => {
      setDownloadingPdf(false);
    }, 2000);
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 relative overflow-hidden">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" /> Native Android Mobile Gateway
          </div>
          <h3 className="font-heading text-xl font-bold text-white mt-1">
            ABIS Native Android App Viewport
          </h3>
        </div>
        <span className="text-xs font-mono text-slate-400">com.allworkss.abis</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Mobile Viewport Shell (6 Cols) */}
        <div className="md:col-span-6 flex justify-center">
          <div className="w-64 h-[380px] rounded-[36px] bg-slate-950 border-4 border-slate-800 p-3 shadow-2xl relative flex flex-col justify-between overflow-hidden">
            
            {/* Phone Top Notch */}
            <div className="w-24 h-4 bg-slate-900 rounded-b-xl mx-auto flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-slate-800"></div>
            </div>

            {/* Mobile Viewport Content */}
            <div className="my-auto space-y-4 text-center px-2">
              
              {activeStep === 'home' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 border border-brand-cyan/40 mx-auto flex items-center justify-center text-brand-cyan font-heading font-extrabold text-sm">
                    ABIS
                  </div>
                  <div className="text-xs font-bold text-white">AllWorkss Intelligence</div>
                  <div className="text-[10px] text-slate-400 font-mono">Google OAuth 2.0 Authenticated</div>

                  <button
                    onClick={triggerRazorpayCheckout}
                    className="w-full py-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-[11px] font-bold uppercase tracking-wider shadow-md"
                  >
                    Test Razorpay Checkout
                  </button>
                </div>
              )}

              {activeStep === 'razorpay' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 mx-auto flex items-center justify-center animate-spin">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-blue-400 font-mono">Razorpay Gateway...</div>
                  <div className="text-[10px] text-slate-400">Processing test payment ₹1,499</div>
                </div>
              )}

              {activeStep === 'success' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-emerald-400 font-mono">Payment Success!</div>
                  
                  <button
                    onClick={triggerPdfDownload}
                    className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-mono flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    {downloadingPdf ? 'Android Manager Download...' : 'Download Report PDF'}
                  </button>
                </div>
              )}

            </div>

            {/* Phone Home Indicator Bar */}
            <div className="w-20 h-1 bg-slate-800 rounded-full mx-auto"></div>
          </div>
        </div>

        {/* Technical Explanations (6 Cols) */}
        <div className="md:col-span-6 space-y-4 text-xs font-mono">
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="text-brand-cyan font-bold flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" /> Secure Android WebView Wrapper
            </div>
            <p className="text-slate-300 leading-relaxed text-[11px]">
              Engineered natively in Java with zero third-party paid SDKs. Handles OAuth redirects &amp; Razorpay payment callbacks without leaving the app container.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="text-emerald-400 font-bold flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5" /> Android Download Manager
            </div>
            <p className="text-slate-300 leading-relaxed text-[11px]">
              Directly routes executive report downloads and PDF receipts into the native Android storage downloads folder with system progress notifications.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
