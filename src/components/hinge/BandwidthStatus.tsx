import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BandwidthStatus as BandwidthType } from '@/types';

const statusConfig: Record<BandwidthType, { label: string; color: string; description: string }> = {
  ready: { label: 'Ready to Connect', color: 'bg-hinge-success/15 text-hinge-success', description: 'Open to chatting' },
  focusing: { label: 'Focusing on Matches', color: 'bg-hinge-orange/15 text-hinge-orange', description: 'Prioritizing existing' },
  weekend: { label: 'Weekend Spark ✨', color: 'bg-primary/10 text-primary', description: 'Active on weekends' },
};

interface BandwidthStatusProps {
  status: BandwidthType;
}

export function BandwidthStatusPill({ status }: BandwidthStatusProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const config = statusConfig[status];

  return (
    <div className="relative">
      <button
        onClick={() => setShowTooltip(!showTooltip)}
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${config.color}`}
      >
        {config.label}
      </button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.95 }}
            className="absolute top-full left-0 mt-1.5 bg-foreground text-background text-[11px] font-medium px-3 py-1.5 rounded-lg whitespace-nowrap z-50 shadow-lg"
          >
            {config.description}
            <div className="absolute -top-1 left-4 w-2 h-2 bg-foreground rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
