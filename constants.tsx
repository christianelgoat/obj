
import React from 'react';
import type { KpiCardData } from './types';

const IconDevicePhoneMobile: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
);

const IconCode: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
  </svg>
);

const IconChartBar: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

const IconTrophy: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 0 1 9 0Zm0 0c0 .533.424.966.944 1.026a10.438 10.438 0 0 1 1.096.044 1.5 1.5 0 0 0 1.259-2.252.375.375 0 0 0-.528-.271 9.755 9.755 0 0 1-1.742-.321 9.75 9.75 0 0 0-5.964-.044 1.5 1.5 0 0 0-1.26 2.252c.241.62.775 1.043 1.385 1.13.39.057.784.085 1.18.085h.01a1.5 1.5 0 0 0 1.492-1.353c.04-.37.072-.743.096-1.118Zm-9 0c0 .533-.424.966-.944 1.026a10.438 10.438 0 0 0-1.096.044 1.5 1.5 0 0 1-1.259-2.252.375.375 0 0 1 .528-.271 9.755 9.755 0 0 0 1.742-.321 9.75 9.75 0 0 1 5.964-.044 1.5 1.5 0 0 1 1.26 2.252c-.241.62-.775 1.043-1.385 1.13a10.49 10.49 0 0 1-2.36 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 1.5c-4.142 0-7.5 2.015-7.5 4.5 0 1.562.91 2.94 2.25 3.75v1.5c0 .621.504 1.125 1.125 1.125h8.25c.621 0 1.125-.504 1.125-1.125v-1.5c1.34-.81 2.25-2.188 2.25-3.75 0-2.485-3.358-4.5-7.5-4.5Z" />
    </svg>
);


export const kpiData: KpiCardData[] = [
  {
    icon: <IconDevicePhoneMobile />,
    iconBgClass: 'bg-blue-100',
    iconColorClass: 'text-blue-600',
    title: 'OE1: Diseño y Desarrollo',
    description: 'Crear un prototipo funcional (MVP) del sistema de gestión de inventario.',
    kpiLabel: 'KPI:',
    kpi: 'MVP desarrollado y funcional.',
    metaLabel: 'Meta:',
    meta: '1 prototipo entregado.',
    plazoLabel: 'Plazo:',
    plazo: 'Primeros 3 meses.',
  },
  {
    icon: <IconCode />,
    iconBgClass: 'bg-purple-100',
    iconColorClass: 'text-purple-600',
    title: 'OE2: Implementación',
    description: 'Validar la solución con un programa piloto en MYPES gastronómicas.',
    kpiLabel: 'KPI:',
    kpi: 'Número de MYPES en piloto.',
    metaLabel: 'Meta:',
    meta: 'Mínimo 5 MYPES.',
    plazoLabel: 'Plazo:',
    plazo: 'Cuarto mes del ciclo.',
  },
  {
    icon: <IconChartBar />,
    iconBgClass: 'bg-green-100',
    iconColorClass: 'text-green-600',
    title: 'OE3: Medición de Impacto',
    description: 'Medir mejoras en eficiencia operativa y sostenibilidad en los negocios.',
    kpiLabel: 'KPIs y Metas:',
    kpi: '',
    metaLabel: '',
    meta: [
      '≥ 15% de reducción de desperdicio.',
      '≥ 25% de reducción de tiempo de gestión.',
    ],
    plazoLabel: 'Plazo:',
    plazo: 'Al finalizar el ciclo.',
  },
  {
    icon: <IconTrophy />,
    iconBgClass: 'bg-yellow-100',
    iconColorClass: 'text-yellow-600',
    title: 'OE4: Adopción y Formación',
    description: 'Asegurar la correcta adopción de la tecnología mediante la formación de usuarios.',
    kpiLabel: 'KPI:',
    kpi: 'Tasa de competencia post-capacitación.',
    metaLabel: 'Meta:',
    meta: '90% de usuarios aprueban.',
    plazoLabel: 'Plazo:',
    plazo: 'Durante la fase piloto.',
  },
];
