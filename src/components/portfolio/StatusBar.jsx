import React from 'react';

export default function StatusBar() {
  return (
    <div className="w-full bg-foreground text-background py-2.5">
      <div className="flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
        <span className="text-[11px] uppercase tracking-[0.12em] font-medium">
          Available for remote contracts
        </span>
      </div>
    </div>
  );
}