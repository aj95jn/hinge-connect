import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Sparkles, Flame, User } from 'lucide-react';
import { Profile, VibeSyncResult, GlowResult } from '@/types';
import { VibeSync } from './VibeSync';
import { BandwidthStatusPill } from './BandwidthStatus';
import { LikePanel } from './LikePanel';
import { toast } from 'sonner';

interface ProfileCardProps {
  profile: Profile;
  vibeSync: VibeSyncResult;
  glowResults: GlowResult;
  likesRemaining: number;
  rosesRemaining: number;
  onLike: (params: {
    targetType: 'photo' | 'prompt';
    targetIndex: number;
    message?: string;
    isRose?: boolean;
    isPriority?: boolean;
  }) => boolean;
  onSkip: () => void;
}

interface DropZone {
  key: string;
  ref: HTMLDivElement | null;
}

export function ProfileCard({
  profile,
  vibeSync,
  glowResults,
  likesRemaining,
  rosesRemaining,
  onLike,
  onSkip,
}: ProfileCardProps) {
  const [selectedTarget, setSelectedTarget] = useState<{
    type: 'photo' | 'prompt';
    index: number;
  } | null>(null);
  const [glowOverride, setGlowOverride] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dropZonesRef = useRef<DropZone[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const registerDropZone = (key: string, el: HTMLDivElement | null) => {
    const existing = dropZonesRef.current.findIndex((z) => z.key === key);
    if (existing >= 0) {
      dropZonesRef.current[existing].ref = el;
    } else if (el) {
      dropZonesRef.current.push({ key, ref: el });
    }
  };

  const isPromptGlowing = (promptId: string) => {
    if (glowOverride !== null) return glowOverride === `prompt:${promptId}`;
    return glowResults.promptGlows[promptId]?.glow ?? false;
  };

  const getGhostText = () => {
    if (!selectedTarget || selectedTarget.type !== 'prompt') return undefined;
    const prompt = profile.prompts[selectedTarget.index];
    if (!prompt) return undefined;
    if (isPromptGlowing(prompt.id)) {
      return glowResults.promptGlows[prompt.id]?.ghostText || prompt.bridgeGhostText;
    }
    return undefined;
  };

  const handleDragEnd = (_: any, info: { point: { x: number; y: number } }) => {
    setIsDragging(false);
    const { x, y } = info.point;

    for (const zone of dropZonesRef.current) {
      if (!zone.ref) continue;
      const rect = zone.ref.getBoundingClientRect();
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        setGlowOverride(zone.key);
        toast.success('🌹 Bridge Builder moved — AI is learning your preference');
        return;
      }
    }
  };

  const currentGlowKey = (() => {
    if (glowOverride) return glowOverride;
    for (const prompt of profile.prompts) {
      if (glowResults.promptGlows[prompt.id]?.glow) return `prompt:${prompt.id}`;
    }
    return null;
  })();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={profile.id}
        ref={containerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="pb-24 relative"
      >
        {/* Header */}
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <User size={20} className="text-muted-foreground" />
            </div>
            <div>
              <h1 className="font-hinge-serif text-2xl font-semibold text-foreground">
                {profile.name}
              </h1>
              <span className="text-xs text-muted-foreground">{profile.gender}</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">{likesRemaining} likes left</div>
        </div>

        <div className="px-4 pb-2 flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{profile.location}</span>
          {profile.bandwidthStatus && (
            <BandwidthStatusPill status={profile.bandwidthStatus} />
          )}
        </div>

        {/* Vibe Sync badge */}
        {profile.showVibeSync && vibeSync.hasSync && (
          <div className="px-4 pb-2">
            <VibeSync result={vibeSync} />
          </div>
        )}

        {/* Prompts only */}
        <div className="space-y-3 px-4">
          {profile.prompts.map((prompt, i) => (
            <PromptCard
              key={prompt.id}
              prompt={prompt}
              isGlowing={isPromptGlowing(prompt.id)}
              sharedInterests={glowResults.promptGlows[prompt.id]?.sharedInterests || []}
              isDragActive={isDragging}
              onLike={() => setSelectedTarget({ type: 'prompt', index: i })}
              registerRef={(el) => registerDropZone(`prompt:${prompt.id}`, el)}
            />
          ))}
        </div>

        {/* Skip button */}
        <div className="flex justify-center py-6">
          <button
            onClick={onSkip}
            className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <X size={24} className="text-muted-foreground" />
          </button>
        </div>

        {/* Floating Bridge Builder Icon — Draggable */}
        {currentGlowKey && (
          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0.1}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            whileDrag={{ scale: 1.2, zIndex: 100 }}
            className="fixed bottom-24 right-6 z-50 cursor-grab active:cursor-grabbing"
            style={{ touchAction: 'none' }}
          >
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-hinge-rose to-hinge-gold flex items-center justify-center shadow-xl">
                <Flame size={24} className="text-primary-foreground" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[9px] font-medium px-2 py-1 rounded-md whitespace-nowrap"
              >
                Drag to move glow
              </motion.div>
              {isDragging && (
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="absolute inset-0 rounded-full bg-hinge-gold/20"
                />
              )}
            </div>
          </motion.div>
        )}

        {/* Like Panel */}
        <AnimatePresence>
          {selectedTarget && (
            <LikePanel
              ghostText={getGhostText()}
              rosesRemaining={rosesRemaining}
              onSend={(message, isRose, isPriority) => {
                const success = onLike({
                  targetType: selectedTarget.type,
                  targetIndex: selectedTarget.index,
                  message: message || undefined,
                  isRose,
                  isPriority,
                });
                if (success) setSelectedTarget(null);
              }}
              onCancel={() => setSelectedTarget(null)}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}

function PromptCard({
  prompt,
  isGlowing,
  sharedInterests,
  isDragActive,
  onLike,
  registerRef,
}: {
  prompt: { id: string; question: string; answer: string };
  isGlowing: boolean;
  sharedInterests: string[];
  isDragActive: boolean;
  onLike: () => void;
  registerRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div className="mt-3" ref={registerRef}>
      <div className={`${isGlowing ? 'rose-glow-shimmer' : ''} ${isDragActive && !isGlowing ? 'ring-2 ring-dashed ring-hinge-gold/30 rounded-2xl' : ''}`}>
        <div className="bg-card rounded-2xl p-5 relative">
          {isGlowing && sharedInterests.length > 0 && (
            <div className="flex items-center gap-1.5 mb-3">
              <Sparkles size={14} className="text-hinge-gold" />
              <span className="text-[11px] font-medium text-hinge-orange">
                You both love: {sharedInterests.join(', ')}
              </span>
            </div>
          )}
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            {prompt.question}
          </p>
          <p className="text-foreground font-hinge-serif text-lg leading-relaxed">{prompt.answer}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onLike();
            }}
            className="absolute bottom-3 right-3 bg-muted rounded-full p-2 hover:bg-accent transition-colors"
          >
            <Heart size={18} className="text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
}
