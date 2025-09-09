import type React from 'react';

export interface KpiCardData {
  // FIX: Changed icon type from React.ReactNode to React.ReactElement for better type safety with React.cloneElement.
  icon: React.ReactElement;
  iconBgClass: string;
  iconColorClass: string;
  title: string;
  description: string;
  kpiLabel: string;
  kpi: string;
  metaLabel: string;
  meta: string | string[];
  plazoLabel: string;
  plazo: string;
}
