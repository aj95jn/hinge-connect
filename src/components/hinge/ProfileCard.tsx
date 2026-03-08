import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X } from 'lucide-react';
import { Profile, VibeSyncResult } from '@/types';
import { VibeSync } from './VibeSync';
import { BandwidthStatusPill } from './BandwidthStatus';
import { LikePanel } from './LikePanel';

interface ProfileCardProps {
  profile: Profile;
  vibeSync: VibeSyncResult;
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

export function ProfileCard({
  profile,
  vibeSync,
  likesRemaining,
  rosesRemaining,
  onLike,
  onSkip,
}: ProfileCardProps) {
  const [selectedTarget, setSelectedTarget] = useState<{
    type: 'photo' | 'prompt';
    index: number;
  } | null>(null);
  const [glowOverrides, setGlowOverrides] = useState<Record<string, boolean>>({});

  const isGlowing = (promptId: string, promptIndex: number) => {
    if (glowOverrides[promptId] !== undefined) return glowOverrides[promptId];
    return profile.prompts[promptIndex]?.isBridgeBuilder ?? false;
  };

  const handleDragGlow = (promptId: string) => {
    // Reset all overrides, set this one as the glow
    const newOverrides: Record<string, boolean> = {};
    profile.prompts.forEach((p) => {
      newOverrides[p.id] = p.id === promptId;
    });
    setGlowOverrides(newOverrides);
  };

  const getGhostText = () => {
    if (!selectedTarget || selectedTarget.type !== 'prompt') return undefined;
    const prompt = profile.prompts[selectedTarget.index];
    if (!prompt) return undefined;
    if (isGlowing(prompt.id, selectedTarget.index)) {
      return prompt.bridgeGhostText;
    }
    return undefined;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={profile.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="pb-24"
      >
        {/* Header */}
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="font-hinge-serif text-2xl font-semibold text-foreground">
              {profile.name}, {profile.age}
            </h1>
            <VibeSync result={vibeSync} />
          </div>
          <div className="text-xs text-muted-foreground">{likesRemaining} likes left</div>
        </div>

        <div className="px-4 pb-2 flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{profile.location}</span>
          <BandwidthStatusPill status={profile.bandwidthStatus} />
        </div>

        {/* Scrollable profile content */}
        <div className="space-y-3 px-4">
          {/* Photos and prompts interleaved */}
          {profile.photos.map((photo, i) => (
            <div key={`photo-${i}`}>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={photo}
                  alt={`${profile.name} photo ${i + 1}`}
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
                <button
                  onClick={() => setSelectedTarget({ type: 'photo', index: i })}
                  className="absolute bottom-3 right-3 bg-card/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg hover:bg-card transition-colors"
                >
                  <Heart size={20} className="text-primary" />
                </button>
              </div>

              {/* Insert prompt after every 2 photos */}
              {i % 2 === 1 && profile.prompts[Math.floor(i / 2)] && (
                <PromptCard
                  prompt={profile.prompts[Math.floor(i / 2)]}
                  index={Math.floor(i / 2)}
                  isGlowing={isGlowing(
                    profile.prompts[Math.floor(i / 2)].id,
                    Math.floor(i / 2)
                  )}
                  onLike={() =>
                    setSelectedTarget({ type: 'prompt', index: Math.floor(i / 2) })
                  }
                  onDragGlow={() =>
                    handleDragGlow(profile.prompts[Math.floor(i / 2)].id)
                  }
                />
              )}
            </div>
          ))}

          {/* Remaining prompts */}
          {profile.prompts.slice(Math.floor(profile.photos.length / 2)).map((prompt, i) => {
            const actualIndex = i + Math.floor(profile.photos.length / 2);
            return (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                index={actualIndex}
                isGlowing={isGlowing(prompt.id, actualIndex)}
                onLike={() => setSelectedTarget({ type: 'prompt', index: actualIndex })}
                onDragGlow={() => handleDragGlow(prompt.id)}
              />
            );
          })}
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
  index,
  isGlowing,
  onLike,
  onDragGlow,
}: {
  prompt: { id: string; question: string; answer: string };
  index: number;
  isGlowing: boolean;
  onLike: () => void;
  onDragGlow: () => void;
}) {
  return (
    <motion.div
      className="mt-3"
      onClick={onDragGlow}
      whileTap={{ scale: 0.98 }}
    >
      <div className={isGlowing ? 'rose-glow-shimmer' : ''}>
        <div className="bg-card rounded-2xl p-5 relative">
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
    </motion.div>
  );
}
