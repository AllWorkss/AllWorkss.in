import React from 'react';
import Link from 'next/link';

export default function ServiceCard({ service, pillarKey, id, icon, title, description, features, whatsappMessage, className }) {
  const serviceObj = service || {
    id: id,
    title: title,
    name: title,
    description: description,
    shortDescription: description,
    features: features || [],
    icon: icon || '⚡'
  };

  const currentPillarKey = pillarKey || 'services';
  const serviceId = serviceObj.id || id;
  const serviceDetailUrl = `/services/${currentPillarKey}/${serviceId}`;
  
  const defaultMsg = whatsappMessage || `Hello Yasar Sir, I would like to schedule a strategic consultation for: ${serviceObj.title || serviceObj.name}.`;
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919967376681';
  const whatsappConsultUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMsg)}`;

  const cardTitle = serviceObj.title || serviceObj.name;
  const cardDesc = serviceObj.shortDescription || serviceObj.description;
  const cardFeatures = serviceObj.keyHighlights || serviceObj.features || [];

  return (
    <div className={`bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300 ${className || ''}`}>
      <div>
        {/* Category Icon & Badge */}
        <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-xl mb-4 shadow-sm">
          {serviceObj.icon || '⚡'}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white tracking-tight">{cardTitle}</h3>
        <p className="text-slate-300 text-xs mt-2 leading-relaxed">{cardDesc}</p>

        {/* Feature Checkpoints */}
        {cardFeatures && cardFeatures.length > 0 && (
          <ul className="mt-4 space-y-2 text-xs text-slate-300">
            {cardFeatures.map((point, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✔</span> {point}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* DUAL ACTION BUTTON BAR */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-2.5">
        {/* Button 1: Direct Consultation */}
        <a
          href={whatsappConsultUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-md shadow-blue-600/20 transition flex items-center justify-center gap-1.5"
        >
          <span>📅</span> Schedule Consult
        </a>

        {/* Button 2: See More Details Redirect */}
        <Link
          href={serviceDetailUrl}
          className="w-full sm:flex-1 py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1"
        >
          See More <span>→</span>
        </Link>
      </div>
    </div>
  );
}

