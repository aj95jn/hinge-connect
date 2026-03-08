import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VibeSyncResult } from '@/types';

const labelDescriptions: Record<string, string> = {
  'Fast-Paced Match': 'You both reply quickly',
  'Shared Style': 'Similar messaging style',
  'Weekend Spark': 'Active on weekends',
};

interface VibeSyncProps {
  result: VibeSyncResult;
}

export function VibeSync({ result }: VibeSyncProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  if (!result.hasSync) return null;

  const description = labelDescriptions[result.label] || result.label;

  return (
    <div className="relative">
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setShowTooltip(!showTooltip)}
        className="inline-flex items-center gap-1.5 bg-secondary rounded-full px-3 py-1"
      >
        <div className="flex items-center -space-x-1">
          <div className="w-3.5 h-3.5 rounded-full border-2 border-primary bg-transparent" />
          <div className="w-3.5 h-3.5 rounded-full border-2 border-hinge-rose bg-transparent" />
        </div>
        <span className="text-xs font-medium text-secondary-foreground">{result.label}</span>
        {result.detail && (
          <span className="text-[10px] text-muted-foreground">· {result.detail}</span>
        )}
      </motion.button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.95 }}
            className="absolute top-full left-0 mt-1.5 bg-foreground text-background text-[11px] font-medium px-3 py-1.5 rounded-lg whitespace-nowrap z-50 shadow-lg"
          >
            {description}
            <div className="absolute -top-1 left-4 w-2 h-2 bg-foreground rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
