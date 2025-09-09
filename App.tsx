
import React from 'react';
import { kpiData } from './constants';
import KpiCard from './components/KpiCard';
import type { KpiCardData } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 flex flex-col items-center p-4 sm:p-8">
      <header className="text-center mb-12 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Objetivos y KPIs del Proyecto
        </h1>
        <p className="text-lg text-slate-600 mt-2">
          
        </p>
      </header>
      <main className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {kpiData.map((data: KpiCardData, index: number) => (
            <KpiCard key={index} data={data} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
