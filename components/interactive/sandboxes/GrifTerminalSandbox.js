import React, { useState } from 'react';
import { Bot, Send, Mic, Mail, Terminal, Zap, CheckCircle2 } from 'lucide-react';

export default function GrifTerminalSandbox() {
  const [chatLog, setChatLog] = useState([
    { sender: 'user', text: 'GRIF, check server uptime and dispatch email to client@company.com' },
    { sender: 'grif', text: 'Haa Sir! Server uptime is 99.98% (Cloud Run asia-south1). SMTP email proposal dispatch completely executed!' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const triggerAction = (actionType) => {
    setIsTyping(true);
    let uMsg = "";
    let gMsg = "";

    if (actionType === 'voice') {
      uMsg = "🎤 [Voice Note]: 'PC ka Bluetooth toggle karo aur report bhej clear karo'";
      gMsg = "Haa Boss! Bluetooth toggled to ACTIVE. 29 local PC tools parsed and executing silently.";
    } else if (actionType === 'smtp') {
      uMsg = "📧 Command: '/email client@allworkss.space GSTIN Invoice PDF attached'";
      gMsg = "SMTP Mail Gateway Connected. Invoice PDF generated & dispatched to client@allworkss.space.";
    } else if (actionType === 'pctools') {
      uMsg = "💻 Command: 'Query PC Tools list'";
      gMsg = "GRIF PC Center Ready: Bluetooth, Alarms, Process Control, Volume, Audio Player, Remote Nodes (29 tools).";
    }

    setChatLog((prev) => [...prev, { sender: 'user', text: uMsg }]);

    setTimeout(() => {
      setChatLog((prev) => [...prev, { sender: 'grif', text: gMsg }]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 relative overflow-hidden">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" /> AI Executive OS Simulator
          </div>
          <h3 className="font-heading text-xl font-bold text-white mt-1">
            GRIF Assistant — Telegram Command Viewport
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-xs font-mono text-emerald-400 font-bold">Gemini 1.5 Pro Live</span>
        </div>
      </div>

      {/* Action Buttons Header */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => triggerAction('voice')}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold transition-all active:scale-95"
        >
          <Mic className="w-3.5 h-3.5" /> Test Voice OCR
        </button>

        <button
          onClick={() => triggerAction('smtp')}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-blue/10 hover:bg-brand-blue/20 border border-brand-blue/30 text-brand-cyan text-xs font-semibold transition-all active:scale-95"
        >
          <Mail className="w-3.5 h-3.5" /> Dispatch SMTP Mail
        </button>

        <button
          onClick={() => triggerAction('pctools')}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition-all active:scale-95"
        >
          <Terminal className="w-3.5 h-3.5" /> Query PC Tools (29 Tools)
        </button>
      </div>

      {/* Telegram Chat Simulation Window */}
      <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 max-h-64 overflow-y-auto space-y-3 font-mono text-xs">
        {chatLog.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-2xl ${
                msg.sender === 'user'
                  ? 'bg-brand-blue/20 border border-brand-cyan/40 text-brand-cyan text-right'
                  : 'bg-slate-900 border border-slate-800 text-slate-200'
              }`}
            >
              <div className="text-[10px] text-slate-400 mb-1 flex items-center gap-1">
                {msg.sender === 'user' ? 'You (Telegram)' : '👑 GRIF Assistant (Gemini API)'}
              </div>
              <p className="leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-900 border border-slate-800 text-slate-400 p-2.5 rounded-2xl text-[11px] animate-pulse">
              GRIF is thinking &amp; executing command...
            </div>
          </div>
        )}
      </div>

      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between">
        <span className="text-purple-300 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" /> Hinglish, Hindi &amp; English Multimodal Function Calling
        </span>
        <span className="text-slate-400">SQLite Memory Synced</span>
      </div>
    </div>
  );
}
