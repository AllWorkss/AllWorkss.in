import React, { useState } from 'react';
import { Stethoscope, CheckCircle2, Clock, Zap, MessageSquare, AlertCircle } from 'lucide-react';

export default function SmartParchiSandbox() {
  const [selectedTeeth, setSelectedTeeth] = useState([14, 21]);
  const [patientToken, setPatientToken] = useState(14);
  const [tokenTime, setTokenTime] = useState(2.8);
  const [pillInventory, setPillInventory] = useState(500);
  const [showToast, setShowToast] = useState(false);
  const [pudiyaPills, setPudiyaPills] = useState(9); // Paracetamol 3 days TDS

  const toggleTooth = (tNum) => {
    if (selectedTeeth.includes(tNum)) {
      setSelectedTeeth(selectedTeeth.filter((t) => t !== tNum));
    } else {
      setSelectedTeeth([...selectedTeeth, tNum]);
    }
  };

  const handleGenerateToken = () => {
    const nextT = patientToken + 1;
    setPatientToken(nextT);
    const speed = (Math.random() * 1.5 + 1.8).toFixed(1);
    setTokenTime(speed);
    setPillInventory((prev) => Math.max(0, prev - pudiyaPills));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 relative overflow-hidden">
      
      {/* Toast Alert Simulation */}
      {showToast && (
        <div className="absolute top-4 right-4 z-50 bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-mono animate-bounce">
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Alert Dispatched to Patient: Token #{patientToken} Confirmed!</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" /> Clinical EMR & Dispensary Sandbox
          </div>
          <h3 className="font-heading text-xl font-bold text-white mt-1">
            SmartParchi (स्मार्टपर्ची) Live Demo
          </h3>
        </div>
        <button
          onClick={handleGenerateToken}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-cyan-glow active:scale-95"
        >
          <Clock className="w-4 h-4" />
          Generate Sub-5s Token (#{patientToken + 1})
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Interactive Dental SVG Chart (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Specialty Dental 32-Teeth SVG Canvas</span>
            <span className="text-emerald-400 font-bold">{selectedTeeth.length} Teeth Selected</span>
          </div>

          {/* Upper Jaw Arch */}
          <div className="space-y-1">
            <div className="text-[10px] text-slate-500 font-mono text-center uppercase">Upper Arch (Maxillary)</div>
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              {[18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28].map((t) => (
                <button
                  key={t}
                  onClick={() => toggleTooth(t)}
                  className={`w-7 h-8 rounded-lg text-[10px] font-mono font-bold transition-all ${
                    selectedTeeth.includes(t)
                      ? 'bg-brand-cyan text-slate-950 shadow-cyan-glow scale-110'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xs text-slate-400 font-mono pt-2 border-t border-slate-800/80 flex items-center justify-between">
            <span>Clinical Add-ons: + Wound Dressing ₹150</span>
            <span className="text-brand-cyan font-bold">Procedure Recorded</span>
          </div>
        </div>

        {/* Right Column: Pudiya Calculator & Token Stats (5 Cols) */}
        <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
            <span>Token Execution Speed</span>
            <span className="text-emerald-400 font-bold">{tokenTime}s (Target &lt; 5s)</span>
          </div>

          <div className="space-y-2">
            <div className="text-slate-300 font-bold">Pudiya Loose Pill Dispensary</div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-slate-400 text-[10px]">Paracetamol 650mg (TDS x 3d)</div>
                <div className="text-white font-bold">{pudiyaPills} Tablets / Patient</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-slate-400">Live Inventory</div>
                <div className="text-brand-cyan font-bold">{pillInventory} Tab Left</div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-[11px]">
              <AlertCircle className="w-3.5 h-3.5" /> Split Khata Debt Ledger
            </div>
            <div className="text-[10px] text-slate-300">
              Patient paid ₹200 UPI + ₹150 Khata. Permanent Udhar alert set for next OPD visit.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
