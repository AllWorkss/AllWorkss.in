import React, { useState } from 'react';
import { FileSpreadsheet, Download, RefreshCw, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import ExcelJS from 'exceljs';

export default function CostFlowSandbox() {
  const [materialCost, setMaterialCost] = useState(1450);
  const [markupPercent, setMarkupPercent] = useState(25);
  const [isDownloading, setIsDownloading] = useState(false);

  const scrapPercent = 0.05; // 5%
  const scrapRecaptured = materialCost * scrapPercent;
  const netMaterial = materialCost - scrapRecaptured;
  const laborCost = 350;
  const machineWear = 85;
  const baseCost = netMaterial + laborCost + machineWear;
  const finalPrice = baseCost * (1 + markupPercent / 100);

  const generateExcelSheet = async () => {
    try {
      setIsDownloading(true);
      const workbook = new ExcelJS.Workbook();
      const sheet = workbook.addWorksheet('CostFlow Live Sheet');

      sheet.columns = [
        { header: 'Cost Component', key: 'name', width: 30 },
        { header: 'Value (INR)', key: 'val', width: 20 },
        { header: 'Excel Formula Applied', key: 'formula', width: 35 },
      ];

      sheet.addRow({ name: 'Raw Material Cost', val: materialCost, formula: 'RAW INPUT' });
      sheet.addRow({ name: 'Scrap Deduction (5%)', val: -scrapRecaptured, formula: '=-B2*0.05' });
      sheet.addRow({ name: 'Labor Shift Cost', val: laborCost, formula: 'RAW INPUT' });
      sheet.addRow({ name: 'Machine Wear Overhead', val: machineWear, formula: 'RAW INPUT' });
      sheet.addRow({ name: 'Net Manufacturing Subtotal', val: { formula: 'SUM(B2:B5)' }, formula: '=SUM(B2:B5)' });
      sheet.addRow({ name: `Final Selling Price (${markupPercent}% Markup)`, val: { formula: `B6*(1+${markupPercent}/100)` }, formula: `=B6*(1+${markupPercent}/100)` });

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `CostFlow_Live_Sheet_${materialCost}_${markupPercent}pct.xlsx`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Excel generation error:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" /> Interactive Sandbox
          </div>
          <h3 className="font-heading text-xl font-bold text-white mt-1">
            CostFlow AI Costing Engine Demo
          </h3>
        </div>
        <button
          onClick={generateExcelSheet}
          disabled={isDownloading}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-emerald-600/20 active:scale-95"
        >
          {isDownloading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
          Download Real .XLSX Sheet
        </button>
      </div>

      {/* Input Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
          <label className="text-xs font-mono text-slate-400 flex justify-between">
            <span>Raw Material Cost (INR/Kg):</span>
            <span className="text-brand-cyan font-bold">₹{materialCost}</span>
          </label>
          <input
            type="range"
            min="500"
            max="5000"
            step="50"
            value={materialCost}
            onChange={(e) => setMaterialCost(Number(e.target.value))}
            className="w-full accent-brand-cyan cursor-pointer"
          />
        </div>

        <div className="space-y-1.5 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
          <label className="text-xs font-mono text-slate-400 flex justify-between">
            <span>Target Profit Markup (%):</span>
            <span className="text-emerald-400 font-bold">{markupPercent}%</span>
          </label>
          <input
            type="range"
            min="5"
            max="100"
            step="5"
            value={markupPercent}
            onChange={(e) => setMarkupPercent(Number(e.target.value))}
            className="w-full accent-emerald-400 cursor-pointer"
          />
        </div>
      </div>

      {/* Mini Node Graph Flow Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
        {/* Node 1 */}
        <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2 relative">
          <div className="text-[11px] font-mono text-slate-400 font-bold uppercase">Node 1: Raw Input</div>
          <div className="text-sm font-bold text-white">Net Material Cost</div>
          <div className="text-xs font-mono text-brand-cyan font-bold">₹{netMaterial.toFixed(2)}</div>
          <div className="text-[10px] text-emerald-400 font-mono">Formula: =A1*(1-0.05)</div>
        </div>

        {/* Node 2 */}
        <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2 relative">
          <div className="text-[11px] font-mono text-slate-400 font-bold uppercase">Node 2: Overheads</div>
          <div className="text-sm font-bold text-white">Labor + Machine</div>
          <div className="text-xs font-mono text-white font-bold">₹{laborCost + machineWear}</div>
          <div className="text-[10px] text-slate-400 font-mono">Shift Fixed Rates</div>
        </div>

        {/* Node 3 (Output Result) */}
        <div className="p-4 rounded-2xl bg-brand-blue/15 border border-brand-cyan/40 space-y-2 relative shadow-cyan-glow">
          <div className="text-[11px] font-mono text-brand-cyan font-bold uppercase">Node 3: Final Price</div>
          <div className="text-sm font-bold text-white">Recommended Selling</div>
          <div className="text-base font-mono text-emerald-400 font-extrabold">₹{finalPrice.toFixed(2)}</div>
          <div className="text-[10px] text-brand-cyan font-mono">Formula: =SUM(Nodes)*(1+{markupPercent}%)</div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <CheckCircle2 className="w-4 h-4" /> Live Client-Side Excel Formula Exporter Enabled
        </span>
        <span className="text-slate-400">5 Presets Ready</span>
      </div>
    </div>
  );
}
