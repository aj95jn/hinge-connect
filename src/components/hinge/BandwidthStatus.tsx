import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BandwidthStatus as BandwidthType } from '@/types';

const statusConfig: Record<BandwidthType, { label: string; color: string; freeDesc: string; paidDesc: string }> = {
  ready: {
    label: 'Ready to Connect',
    color: 'bg-purple-900 text-white',
    freeDesc: 'Open & active today',
    paidDesc: 'Has <3 active chats and was active today',
  },
  focusing: {
    label: 'Focusing on Matches',
    color: 'bg-purple-900 text-white',
    freeDesc: 'Busy with other chats',
    paidDesc: 'In deep conversations with current matches right now',
  },
  weekend: {
    label: 'Weekend Spark ✨',
    color: 'bg-purple-900 text-white',
    freeDesc: 'More active on weekends',
    paidDesc: 'Active but hasn\'t started a new chat in 48-72 hours',
  },
  new_vibes: {
    label: 'Opening for New Vibes',
    color: 'bg-purple-900 text-white',
    freeDesc: 'New & ready to meet',
    paidDesc: 'New user or empty queue — wide open for connections',
  },
};

interface BandwidthStatusProps {
  status: BandwidthType;
  isPaid?: boolean;
}

export function BandwidthStatusPill({ status, isPaid = false }: BandwidthStatusProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const config = statusConfig[status];

  const dismiss = useCallback(() => setShowTooltip(false), []);

  useEffect(() => {
    if (!showTooltip) return;
    const timer = setTimeout(dismiss, 2000);
    return () => clearTimeout(timer);
  }, [showTooltip, dismiss]);

  const description = isPaid ? config.paidDesc : config.freeDesc;

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
            <span className="text-[9px] uppercase tracking-wider opacity-60 block mb-0.5">Bandwidth</span>
            {description}
            <div className="absolute -top-1 left-4 w-2 h-2 bg-foreground rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
