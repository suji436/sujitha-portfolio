import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = () => {
  const { toast } = usePortfolio();

  if (!toast) return null;

  const isError = toast.type === 'error';
  const isInfo = toast.type === 'info';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border backdrop-blur-md transition-all animate-bounce-in bg-white/95 dark:bg-darkbg-card/95 border-lavender-200 dark:border-lavender-800 text-slate-800 dark:text-slate-100">
      {isError ? (
        <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
      ) : isInfo ? (
        <Info className="w-5 h-5 text-blue-500 shrink-0" />
      ) : (
        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
      )}
      <span className="text-sm font-medium">{toast.message}</span>
    </div>
  );
};
