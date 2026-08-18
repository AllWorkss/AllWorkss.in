import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, User, ArrowUpRight } from 'lucide-react';

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! 👋 I am the Allworkss AI Assistant. How can I help you audit your business, optimize marketing, deploy cloud infrastructure, or launch ad campaigns today?'
    }
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (open) {
      scrollToBottom();
    }
  }, [messages, open, isTyping]);

  const handleSend = async (e) => {
    if (e) e.preventDefault();
    const userText = inputMsg.trim();
    if (!userText) return;

    // Append User Message
    const newMessages = [...messages, { sender: 'user', text: userText }];
    setMessages(newMessages);
    setInputMsg('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/v1/bot/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });

      const data = await res.json();
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: data.reply || 'Thank you for reaching out! You can run our instant business audit from the dashboard or drop your WhatsApp number.' }
      ]);
    } catch (err) {
      console.error("Chatbot API error:", err);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: 'I am temporarily optimizing connections. Feel free to explore our 5 audit modules or connect via WhatsApp (+91 99673 76681)!'
        }
      ]);
    }
  };

  const sendQuickQuery = (text) => {
    setInputMsg(text);
    setTimeout(() => {
      handleSend();
    }, 100);
  };

  const whatsappUrl = "https://wa.me/919967376681?text=Hello%20AllWorkss%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20Enterprise%20Services.";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Launcher Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Allworkss AI Chatbot"
        className="relative h-14 w-14 rounded-full bg-gradient-to-r from-brand-blue via-brand-cyan to-indigo-600 text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-105 active:scale-95 focus:outline-none border-2 border-slate-700/80 group"
      >
        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-900 animate-pulse"></div>
        {open ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white group-hover:rotate-12 transition-transform" />
        )}
      </button>

      {/* Floating Chat Modal Box */}
      {open && (
        <div className="absolute bottom-16 right-0 w-[90vw] sm:w-96 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden max-h-[540px] h-[520px] animate-fadeIn text-white">
          
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-4 border-b border-slate-800 flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-cyan p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-brand-cyan font-bold text-sm">
                  ⚡
                </div>
              </div>
              <div>
                <h3 className="text-sm font-heading font-bold leading-none text-white">
                  Allworkss AI Assistant
                </h3>
                <span className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Online • Gemini 2.0 Flash</span>
                </span>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Action Pills */}
          <div className="px-3 py-2 bg-slate-950/80 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-[10px]">
            <button
              onClick={() => sendQuickQuery("Run free business audit")}
              className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 hover:border-brand-cyan text-slate-300 whitespace-nowrap transition-colors"
            >
              🔍 Business Audit
            </button>
            <button
              onClick={() => sendQuickQuery("Inquire about Meta Ads & CAPI")}
              className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 hover:border-brand-cyan text-slate-300 whitespace-nowrap transition-colors"
            >
              🚀 Meta Paid Ads
            </button>
            <button
              onClick={() => sendQuickQuery("Deploy Cloud Run container")}
              className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 hover:border-brand-cyan text-slate-300 whitespace-nowrap transition-colors"
            >
              ☁️ Cloud DevOps
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#080D1A] text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={msg.sender === 'user' ? 'flex justify-end' : 'flex justify-start'}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white rounded-tr-none shadow-md'
                      : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-900 text-brand-cyan border border-slate-800 px-3.5 py-2 rounded-2xl text-xs flex items-center gap-1.5 shadow-sm">
                  <span className="animate-bounce">●</span>
                  <span className="animate-bounce [animation-delay:0.2s]">●</span>
                  <span className="animate-bounce [animation-delay:0.4s]">●</span>
                  <span className="text-[10px] text-slate-400 font-mono ml-1">Gemini AI typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              placeholder="Ask about audits, growth, or SEO..."
              className="flex-1 px-3.5 py-2 text-xs bg-slate-900 border border-slate-800 text-white placeholder-slate-500 rounded-xl focus:outline-none focus:border-brand-cyan transition-colors"
            />
            <button
              type="submit"
              className="px-3.5 py-2 bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-brand-cobalt hover:to-brand-blue text-white text-xs font-bold rounded-xl shadow transition-all flex items-center gap-1"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Footer Router Bar */}
          <div className="px-3 py-1.5 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
            <span>YARSA ALLWORKSS (OPC) PVT LTD</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
            >
              WhatsApp Router <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

        </div>
      )}

    </div>
  );
}
