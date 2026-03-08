import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

interface RefundPopupProps {
  profileName: string;
  onClose: () => void;
}

export function RefundPopup({ profileName, onClose }: RefundPopupProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-[100] flex items-center justify-center px-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-card rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl"
      >
        <div className="w-14 h-14 rounded-full bg-hinge-success/15 flex items-center justify-center mx-auto mb-4">
          <ShieldCheck size={28} className="text-hinge-success" />
        </div>
        <h3 className="font-hinge-serif text-xl font-semibold text-foreground mb-2">
          Like Returned
        </h3>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
          {profileName} stayed busy, we've returned your Like so you can find a new connection.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-primary text-primary-foreground rounded-full py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Got it
        </button>
      </motion.div>
    </motion.div>
  );
}
