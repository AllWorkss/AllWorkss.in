import React, { useState } from 'react';
import { ShieldCheck, Award, Sparkles, ArrowRight, RotateCcw, CheckCircle2, AlertTriangle, Zap, MessageSquare } from 'lucide-react';

export default function BusinessHealthQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      id: 'gst_compliance',
      question: 'How do you handle GST filing reconciliations and MCA compliance checks?',
      options: [
        { label: 'Automated Real-Time AI API Sync', score: 25, status: 'Optimal' },
        { label: 'Monthly CA Manual Reconciliation', score: 15, status: 'Moderate' },
        { label: 'Ad-hoc Quarterly Spreadsheets', score: 5, status: 'At Risk' }
      ]
    },
    {
      id: 'inventory_deadstock',
      question: 'What is your current inventory deadstock & return rate across channels?',
      options: [
        { label: 'Below 3% (Real-Time Multi-Channel Sync)', score: 25, status: 'Optimal' },
        { label: '3% - 10% (Siloed Marketplace Portals)', score: 15, status: 'Moderate' },
        { label: 'Above 10% / Untracked Stock Anomalies', score: 5, status: 'At Risk' }
      ]
    },
    {
      id: 'digital_attribution',
      question: 'How are your Meta/Google ads tracked for server-side conversion signal match?',
      options: [
        { label: 'Meta CAPI + 100% Server Deduplication', score: 25, status: 'Optimal' },
        { label: 'Standard Browser Pixel Only', score: 12, status: 'Moderate' },
        { label: 'No Tracking / Untracked Paid Traffic', score: 0, status: 'At Risk' }
      ]
    },
    {
      id: 'cloud_infra',
      question: 'How is your web infrastructure and API backend hosted?',
      options: [
        { label: 'Serverless Autoscaling (Cloud Run / AWS)', score: 25, status: 'Optimal' },
        { label: 'Shared VPS / Legacy WordPress Hosting', score: 12, status: 'Moderate' },
        { label: 'Unmanaged On-Prem / Frequent Downtime', score: 0, status: 'At Risk' }
      ]
    }
  ];

  const handleSelectOption = (option) => {
    const nextAnswers = { ...answers, [questions[currentStep].id]: option };
    setAnswers(nextAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
      triggerConfetti();
    }
  };

  const triggerConfetti = async () => {
    if (typeof window !== 'undefined') {
      try {
        const confetti = (await import('canvas-confetti')).default;
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error('Confetti error:', err);
      }
    }
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((acc, opt) => acc + (opt?.score || 0), 0);
  };

  const score = calculateScore();

  const getScoreRating = (s) => {
    if (s >= 80) return { title: 'Enterprise Ready (Tier-1 Growth)', color: 'text-emerald-400', badge: 'bg-emerald-500/10 border-emerald-500/30' };
    if (s >= 50) return { title: 'Moderate Optimization Opportunity', color: 'text-amber-400', badge: 'bg-amber-500/10 border-amber-500/30' };
    return { title: 'High Anomaly Risk & Revenue Leakage', color: 'text-rose-400', badge: 'bg-rose-500/10 border-rose-500/30' };
  };

  const rating = getScoreRating(score);

  const resetQuiz = () => {
    setAnswers({});
    setCurrentStep(0);
    setCompleted(false);
  };

  const whatsappMessage = `Hello Yasar Sir, I just completed the Enterprise Business Health Diagnostic on AllWorkss.in with a Score of ${score}/100 (${rating.title}). I would like to schedule a consultation to audit our setup.`;
  const whatsappUrl = `https://wa.me/919967376681?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Rapid Business Diagnostic
          </div>
          <h3 className="font-heading text-xl font-bold text-white tracking-tight">
            Enterprise Business Health &amp; Anomaly Index
          </h3>
        </div>
        <div className="text-xs font-mono text-slate-400">
          Supervised by CTO Yasar Intakhab Khan
        </div>
      </div>

      {!completed ? (
        <div className="space-y-6">
          {/* Progress Indicator */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-400 font-mono">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Completed</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full transition-all duration-300 rounded-full"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Title */}
          <div className="space-y-3">
            <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
              {questions[currentStep].question}
            </h4>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3">
            {questions[currentStep].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt)}
                className="w-full text-left p-4 rounded-2xl bg-slate-950/70 hover:bg-slate-800/90 border border-slate-800 hover:border-blue-500/40 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition duration-200 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-blue-400 text-blue-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt.label}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="space-y-6 animate-fadeIn">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-slate-950 border border-blue-500/40 relative shadow-inner">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-mono">
                {score}
              </div>
              <span className="text-[10px] font-mono text-slate-400 absolute bottom-1">/ 100</span>
            </div>

            <div className="space-y-1">
              <span className={`inline-block px-3.5 py-1 rounded-full border text-xs font-mono font-bold ${rating.badge} ${rating.color}`}>
                {rating.title}
              </span>
              <h4 className="text-xl font-bold text-white">Diagnostic Health Audit Complete</h4>
              <p className="text-slate-300 text-xs max-w-md mx-auto leading-relaxed">
                Based on your operational inputs, our executive AI framework has calculated an Enterprise Health Rating of <span className="text-cyan-400 font-bold">{score}/100</span>.
              </p>
            </div>
          </div>

          {/* Breakdown Score Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {Object.entries(answers).map(([key, value], idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1">
                <div className="flex justify-between font-mono text-slate-400">
                  <span className="uppercase">{key.replace('_', ' ')}</span>
                  <span className="text-cyan-400 font-bold">+{value.score} pts</span>
                </div>
                <div className="text-slate-200 font-medium truncate">{value.label}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-lg shadow-blue-600/25 transition flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Consult CTO with Score</span>
            </a>

            <a
              href="https://allworkss.space"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 hover:border-cyan-500/40 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1 uppercase tracking-wider"
            >
              <span>Explore ABIS SaaS</span> ↗
            </a>

            <button
              onClick={resetQuiz}
              className="p-3 bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 rounded-xl transition shrink-0"
              title="Retake Quiz"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
