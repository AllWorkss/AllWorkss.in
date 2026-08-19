import React, { useState } from 'react';
import { DollarSign, TrendingUp, Sparkles, MessageSquare, ArrowUpRight, ShieldCheck, Layers } from 'lucide-react';

export default function LiveRoiCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(1000000); // Default ₹10 Lakhs
  const [deadstockRate, setDeadstockRate] = useState(8); // Default 8%

  // Calculation Logic
  const annualRevenue = monthlyRevenue * 12;
  const annualDeadstockLoss = annualRevenue * (deadstockRate / 100);
  const unlockedCapitalModule3 = Math.round(annualDeadstockLoss * 0.65); // 65% recovery via ABIS Module 3
  const unlockedCapitalModule5 = Math.round(annualRevenue * 0.045); // 4.5% margin optimization via ABIS Module 5
  const totalSavings = unlockedCapitalModule3 + unlockedCapitalModule5;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const whatsappMessage = `Hello Yasar Sir, I used the Live ROI Calculator on AllWorkss.in. With Monthly Revenue of ${formatCurrency(monthlyRevenue)} and Deadstock Rate of ${deadstockRate}%, our estimated potential capital recovery is ${formatCurrency(totalSavings)}/year. I would like to schedule an enterprise consultation.`;
  const whatsappUrl = `https://wa.me/919967376681?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <TrendingUp className="w-3.5 h-3.5" /> Interactive Capital Estimator
          </div>
          <h3 className="font-heading text-xl font-bold text-white tracking-tight">
            Live SME Revenue &amp; Capital Recovery Calculator
          </h3>
        </div>
        <div className="text-xs font-mono text-slate-400">
          Powered by ABIS Modules 3 &amp; 5
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Slider 1: Monthly SME Revenue */}
        <div className="space-y-3 p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-slate-300 font-bold uppercase">Monthly SME Revenue:</span>
            <span className="text-cyan-400 font-extrabold text-sm">{formatCurrency(monthlyRevenue)}</span>
          </div>
          <input
            type="range"
            min={100000}
            max={5000000}
            step={50000}
            value={monthlyRevenue}
            onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500">
            <span>₹1 Lakh</span>
            <span>₹25 Lakhs</span>
            <span>₹50 Lakhs</span>
          </div>
        </div>

        {/* Slider 2: Deadstock & Return Rate */}
        <div className="space-y-3 p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-slate-300 font-bold uppercase">Deadstock / Return Rate:</span>
            <span className="text-amber-400 font-extrabold text-sm">{deadstockRate}%</span>
          </div>
          <input
            type="range"
            min={1}
            max={25}
            step={0.5}
            value={deadstockRate}
            onChange={(e) => setDeadstockRate(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500">
            <span>1% (Optimal)</span>
            <span>10% (Moderate)</span>
            <span>25% (High Leak)</span>
          </div>
        </div>
      </div>

      {/* Output Results Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
          <span className="text-[11px] font-mono text-slate-400 uppercase block">ABIS Module 3 Recovery:</span>
          <div className="text-lg font-extrabold text-cyan-400 font-mono">
            {formatCurrency(unlockedCapitalModule3)} <span className="text-[10px] font-normal text-slate-500">/yr</span>
          </div>
          <span className="text-[10px] text-slate-400 block">Inventory &amp; Marketplace Sync</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
          <span className="text-[11px] font-mono text-slate-400 uppercase block">ABIS Module 5 Recovery:</span>
          <div className="text-lg font-extrabold text-blue-400 font-mono">
            {formatCurrency(unlockedCapitalModule5)} <span className="text-[10px] font-normal text-slate-500">/yr</span>
          </div>
          <span className="text-[10px] text-slate-400 block">Margin &amp; Tax Structuring</span>
        </div>

        <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-950 border border-emerald-500/40 space-y-1 shadow-lg shadow-emerald-500/5">
          <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase block">Total Capital Unlocked:</span>
          <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300 font-mono">
            {formatCurrency(totalSavings)}
          </div>
          <span className="text-[10px] text-slate-300 block font-semibold">Estimated Annual Value</span>
        </div>
      </div>

      {/* Action Bar */}
      <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-lg shadow-blue-600/25 transition flex items-center justify-center gap-2 uppercase tracking-wider"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span>Claim Capital Recovery Plan</span>
        </a>

        <a
          href="https://allworkss.space"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1 uppercase tracking-wider"
        >
          <span>Explore ABIS Modules</span>
          <ArrowUpRight className="w-4 h-4 text-cyan-400" />
        </a>
      </div>
    </div>
  );
}
