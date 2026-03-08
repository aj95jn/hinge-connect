import { BandwidthStatus as BandwidthType } from '@/types';

const statusConfig: Record<BandwidthType, { label: string; color: string }> = {
  ready: { label: 'Ready to Connect', color: 'bg-hinge-success/15 text-hinge-success' },
  focusing: { label: 'Focusing on Matches', color: 'bg-hinge-orange/15 text-hinge-orange' },
  weekend: { label: 'Weekend Spark ✨', color: 'bg-primary/10 text-primary' },
};

interface BandwidthStatusProps {
  status: BandwidthType;
}

export function BandwidthStatusPill({ status }: BandwidthStatusProps) {
  const config = statusConfig[status];

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>
      {config.label}
    </span>
  );
}
