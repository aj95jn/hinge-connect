import { motion } from 'framer-motion';
import { VibeSyncResult } from '@/types';

interface VibeSyncProps {
  result: VibeSyncResult;
}

export function VibeSync({ result }: VibeSyncProps) {
  if (!result.hasSync) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center gap-1.5 bg-secondary rounded-full px-3 py-1"
    >
      {/* Twin Circles Icon */}
      <div className="flex items-center -space-x-1">
        <div className="w-3.5 h-3.5 rounded-full border-2 border-primary bg-transparent" />
        <div className="w-3.5 h-3.5 rounded-full border-2 border-hinge-rose bg-transparent" />
      </div>
      <span className="text-xs font-medium text-secondary-foreground">{result.label}</span>
      {result.detail && (
        <span className="text-[10px] text-muted-foreground">· {result.detail}</span>
      )}
    </motion.div>
  );
}
