import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BandwidthStatus as BandwidthType } from '@/types';

const statusConfig: Record<BandwidthType, { label: string; color: string; description: string }> = {
  ready: { label: 'Ready to Connect', color: 'bg-purple-900 text-white', description: 'Open to chatting' },
  focusing: { label: 'Focusing on Matches', color: 'bg-purple-900 text-white', description: 'Prioritizing existing' },
  weekend: { label: 'Weekend Spark ✨', color: 'bg-purple-900 text-white', description: 'Active on weekends' },
};

interface BandwidthStatusProps {
  status: BandwidthType;
}

export function BandwidthStatusPill({ status }: BandwidthStatusProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const config = statusConfig[status];

  const dismiss = useCallback(() => setShowTooltip(false), []);

  useEffect(() => {
    if (!showTooltip) return;
    const timer = setTimeout(dismiss, 2000);
    return () => clearTimeout(timer);
  }, [showTooltip, dismiss]);

  return (
    <div className="relative" onClick={dismiss}>
      <button
        onClick={(e) => { e.stopPropagation(); setShowTooltip((v) => !v); }}
        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${config.color}`}
      >
        {config.label}
      </button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.95 }}
            onClick={dismiss}
            className="absolute top-full left-0 mt-1.5 bg-foreground text-background text-[11px] font-medium px-3 py-1.5 rounded-lg whitespace-nowrap z-50 shadow-lg cursor-pointer"
          >
            {config.description}
            <div className="absolute -top-1 left-4 w-2 h-2 bg-foreground rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
