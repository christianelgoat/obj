import React from 'react';
import type { KpiCardData } from '../types';

interface KpiCardProps {
  data: KpiCardData;
}

const CheckIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
);


const KpiCard: React.FC<KpiCardProps> = ({ data }) => {
  const { icon, iconBgClass, iconColorClass, title, description, kpiLabel, kpi, metaLabel, meta, plazoLabel, plazo } = data;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${iconBgClass} mb-4`}>
        {/* FIX: Removed the type assertion 'as React.ReactElement'. With the updated KpiCardData type, TypeScript can correctly infer the props of the icon element. */}
        {React.cloneElement(icon, { className: `w-8 h-8 ${iconColorClass}` })}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 text-base mb-4 flex-grow">{description}</p>
      
      <div className="space-y-3 text-base">
        {kpi && (
            <div>
                <strong className="font-semibold text-slate-700">{kpiLabel}</strong>
                <span className="text-slate-600 ml-1">{kpi}</span>
            </div>
        )}

        {Array.isArray(meta) ? (
          <div>
             <strong className="font-semibold text-slate-700">{kpiLabel || metaLabel}</strong>
             <ul className="mt-2 space-y-2">
                {meta.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{item}</span>
                    </li>
                ))}
             </ul>
          </div>
        ) : meta && (
          <div>
            <strong className="font-semibold text-slate-700">{metaLabel}</strong>
            <span className="text-slate-600 ml-1">{meta}</span>
          </div>
        )}
        
        <div>
            <strong className="font-semibold text-slate-700">{plazoLabel}</strong>
            <span className="text-slate-600 ml-1">{plazo}</span>
        </div>
      </div>
    </div>
  );
};

export default KpiCard;
