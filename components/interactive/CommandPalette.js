import React, { useState, useEffect } from 'react';
import { Search, Terminal, X, ArrowRight, CornerDownLeft, Sparkles, BookOpen, Layers } from 'lucide-react';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cliMode, setCliMode] = useState(false);
  const [cliHistory, setCliHistory] = useState([
    { type: 'system', text: 'AllWorkss GRIF CLI v2.4 (Type "whoami", "cat stack.json", "consult --book", or "clear")' }
  ]);
  const [cliInput, setCliInput] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const searchItems = [
    { title: 'CostFlow (CSF Costing)', category: 'Product', link: '#ecosystem', desc: 'Universal AI/ML costing platform with Excel formulas' },
    { title: 'SmartParchi EMR', category: 'Product', link: '#ecosystem', desc: 'Clinical EMR, dental canvas, and pudiya calculator' },
    { title: 'GRIF Assistant', category: 'Product', link: '#ecosystem', desc: 'Telegram AI executive & PC command center' },
    { title: 'ZenithAlgo Pro Terminal', category: 'Product', link: '#ecosystem', desc: 'Algorithmic trading & indicator studio' },
    { title: 'ABIS Mobile App', category: 'Product', link: '#ecosystem', desc: 'Native Android WebView gateway for ABIS' },
    { title: 'SAP ERP & Legacy Transformation', category: 'Consulting', link: '#services', desc: 'Modernizing legacy SAP architectures & microservices' },
    { title: 'Custom Cloud & Gemini AI', category: 'Consulting', link: '#services', desc: 'Serverless Cloud Run & RAG vector search pipelines' },
    { title: 'Founder & Trust Credentials', category: 'Credentials', link: '#credentials', desc: 'Yasar Intakhab Khan, M.Sc. Data Science & AWS Certified' },
  ];

  const filteredItems = searchItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCliSubmit = (e) => {
    e.preventDefault();
    const cmd = cliInput.trim().toLowerCase();
    setCliHistory(prev => [...prev, { type: 'input', text: `$ ${cliInput}` }]);

    if (cmd === 'whoami') {
      setCliHistory(prev => [...prev, { 
        type: 'output', 
        text: 'Yasar Intakhab Khan | Founder & Lead Architect\nDegrees: M.Sc. Data Science & IT\nCertifications: AWS Certified Cloud Practitioner\nEntity: YARSA ALLWORKSS (OPC) PRIVATE LIMITED\nGSTIN: 277AABCY875P1Z9' 
      }]);
    } else if (cmd === 'cat stack.json') {
      setCliHistory(prev => [...prev, { 
        type: 'output', 
        text: JSON.stringify({
          frontend: ["Next.js 14", "TypeScript", "TailwindCSS", "Framer Motion"],
          backend: ["Python FastAPI", "Google Cloud Run", "Gemini API", "PostgreSQL"],
          mobile: ["Native Android Java", "Razorpay SDK"],
          trading: ["Upstox API v2", "ICICI Breeze"]
        }, null, 2)
      }]);
    } else if (cmd === 'consult --book') {
      setCliHistory(prev => [...prev, { type: 'output', text: 'Routing to WhatsApp Consultation Dispatcher...' }]);
      window.open('https://wa.me/919967376681?text=Hello%20AllWorkss%20Team%2C%20I%20am%20booking%20via%20CLI.', '_blank');
    } else if (cmd === 'clear') {
      setCliHistory([]);
    } else {
      setCliHistory(prev => [...prev, { type: 'output', text: `Command not recognized: "${cmd}". Available: "whoami", "cat stack.json", "consult --book", "clear"` }]);
    }
    setCliInput('');
  };

  return (
    <>
      {/* Persistent Floating Command Search Badge */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0B132B]/90 border border-brand-cyan/40 text-slate-200 text-xs font-mono shadow-2xl hover:shadow-cyan-glow transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <Sparkles className="w-4 h-4 text-brand-cyan animate-pulse" />
        <span>Search / CLI</span>
        <kbd className="px-2 py-0.5 rounded bg-slate-800 text-[10px] border border-slate-700 text-slate-300 font-sans">
          Ctrl + K
        </kbd>
      </button>

      {/* Command Palette Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-2xl bg-[#0B132B] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            
            {/* Header & Mode Switch */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCliMode(false)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    !cliMode ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Search className="w-3.5 h-3.5 inline mr-1" /> Search Directory
                </button>
                <button
                  onClick={() => setCliMode(true)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    cliMode ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5 inline mr-1" /> CLI Terminal
                </button>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mode A: Fuzzy Search */}
            {!cliMode ? (
              <div className="flex flex-col flex-1 overflow-hidden">
                <div className="p-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                    <Search className="w-4 h-4 text-brand-cyan" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products, services, tech stack, founder..."
                      className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none"
                      autoFocus
                    />
                  </div>
                </div>

                <div className="p-4 space-y-2 overflow-y-auto max-h-[50vh]">
                  {filteredItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-brand-cyan/40 transition-all text-xs group"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white group-hover:text-brand-cyan transition-colors">{item.title}</span>
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 font-mono">{item.category}</span>
                        </div>
                        <p className="text-slate-400 text-[11px] mt-0.5">{item.desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              /* Mode B: CLI Terminal Mode */
              <div className="flex flex-col flex-1 p-4 bg-slate-950 font-mono text-xs overflow-hidden">
                <div className="flex-1 overflow-y-auto space-y-2 max-h-[50vh] text-slate-300">
                  {cliHistory.map((h, idx) => (
                    <div key={idx} className={h.type === 'input' ? 'text-brand-cyan font-bold' : h.type === 'system' ? 'text-slate-400' : 'text-emerald-400 whitespace-pre-wrap'}>
                      {h.text}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleCliSubmit} className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-2">
                  <span className="text-brand-cyan font-bold">$</span>
                  <input
                    type="text"
                    value={cliInput}
                    onChange={(e) => setCliInput(e.target.value)}
                    placeholder="whoami / cat stack.json / consult --book..."
                    className="w-full bg-transparent text-white focus:outline-none font-mono"
                    autoFocus
                  />
                  <button type="submit" className="text-slate-500 hover:text-white">
                    <CornerDownLeft className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}

            {/* Footer hints */}
            <div className="p-3 bg-slate-950 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex items-center justify-between">
              <span>Press ESC to close</span>
              <span>YARSA ALLWORKSS (OPC) PRIVATE LIMITED</span>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
