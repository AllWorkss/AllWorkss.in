import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

export default function ZenithAlgoSandbox() {
  const [showEMA, setShowEMA] = useState(true);
  const [showSupertrend, setShowSupertrend] = useState(true);
  const [showVWAP, setShowVWAP] = useState(true);
  const [safetyGuard, setSafetyGuard] = useState(true);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Background Grid lines
    ctx.strokeStyle = '#1E293B';
    ctx.lineWidth = 1;
    for (let y = 20; y < height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Simulated Candlesticks
    const candles = [
      { open: 80, high: 95, low: 75, close: 90, buy: false, sell: false },
      { open: 90, high: 88, low: 65, close: 70, buy: false, sell: false },
      { open: 70, high: 110, low: 68, close: 105, buy: true, sell: false }, // BUY
      { open: 105, high: 125, low: 100, close: 120, buy: false, sell: false },
      { open: 120, high: 135, low: 115, close: 130, buy: false, sell: false },
      { open: 130, high: 125, low: 95, close: 100, buy: false, sell: true }, // SELL
      { open: 100, high: 115, low: 95, close: 110, buy: false, sell: false },
      { open: 110, high: 140, low: 105, close: 138, buy: true, sell: false },
    ];

    const cWidth = 18;
    const gap = 32;

    candles.forEach((c, idx) => {
      const x = 30 + idx * gap;
      const isGreen = c.close >= c.open;

      ctx.strokeStyle = isGreen ? '#10B981' : '#EF4444';
      ctx.fillStyle = isGreen ? '#10B981' : '#EF4444';

      // Draw Wick
      ctx.beginPath();
      ctx.moveTo(x + cWidth / 2, height - c.high);
      ctx.lineTo(x + cWidth / 2, height - c.low);
      ctx.stroke();

      // Draw Candle Body
      const topY = height - Math.max(c.open, c.close);
      const bHeight = Math.abs(c.close - c.open) || 2;
      ctx.fillRect(x, topY, cWidth, bHeight);

      // Signal Markers
      if (c.buy) {
        ctx.fillStyle = '#00C6FF';
        ctx.font = 'bold 10px monospace';
        ctx.fillText('▲ BUY', x - 4, height - c.high - 8);
      } else if (c.sell) {
        ctx.fillStyle = '#F59E0B';
        ctx.font = 'bold 10px monospace';
        ctx.fillText('▼ SELL', x - 6, height - c.high - 8);
      }
    });

    // Draw EMA Line if enabled
    if (showEMA) {
      ctx.strokeStyle = '#00C6FF';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(30, height - 75);
      ctx.bezierCurveTo(100, height - 95, 180, height - 120, width - 30, height - 130);
      ctx.stroke();
    }

    // Draw VWAP Line if enabled
    if (showVWAP) {
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(30, height - 85);
      ctx.lineTo(width - 30, height - 115);
      ctx.stroke();
      ctx.setLineDash([]);
    }

  }, [showEMA, showSupertrend, showVWAP]);

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 relative overflow-hidden">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" /> Quantitative Trading Sandbox
          </div>
          <h3 className="font-heading text-xl font-bold text-white mt-1">
            ZenithAlgo Pro Terminal Studio
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-emerald-400 font-bold">Upstox v2 &amp; Breeze Synced</span>
        </div>
      </div>

      {/* Indicator Toggles */}
      <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
        <label className="flex items-center gap-2 cursor-pointer bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
          <input type="checkbox" checked={showEMA} onChange={() => setShowEMA(!showEMA)} className="accent-brand-cyan" />
          <span className="text-brand-cyan font-bold">EMA (9,21)</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
          <input type="checkbox" checked={showVWAP} onChange={() => setShowVWAP(!showVWAP)} className="accent-amber-400" />
          <span className="text-amber-400 font-bold">VWAP Line</span>
        </label>

        <button
          onClick={() => setSafetyGuard(!safetyGuard)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all ${
            safetyGuard 
              ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 font-bold' 
              : 'bg-slate-900 border-slate-800 text-slate-500'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          Dad's Safety Guard (1.5% Circuit Breaker)
        </button>
      </div>

      {/* Canvas Viewport */}
      <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 flex justify-center">
        <canvas ref={canvasRef} width={360} height={180} className="w-full max-w-[360px] h-[180px]" />
      </div>

      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono flex items-center justify-between">
        <span className="text-emerald-400 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" /> 12-Month Backtesting Win Rate: 78.4%
        </span>
        <span className="text-slate-400">Max Risk: {safetyGuard ? '1.5% Locked' : 'Unrestricted'}</span>
      </div>
    </div>
  );
}
