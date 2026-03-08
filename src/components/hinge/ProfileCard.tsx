import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Sparkles } from 'lucide-react';
import { Profile, VibeSyncResult, GlowResult } from '@/types';
import { VibeSync } from './VibeSync';
import { BandwidthStatusPill } from './BandwidthStatus';
import { LikePanel } from './LikePanel';

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
  // glowOverride: if set, only this item glows (key = "prompt:id" or "photo:index")
  const [glowOverride, setGlowOverride] = useState<string | null>(null);

  const isPromptGlowing = (promptId: string) => {
    if (glowOverride !== null) return glowOverride === `prompt:${promptId}`;
    return glowResults.promptGlows[promptId]?.glow ?? false;
  };

  const isPhotoGlowing = (index: number) => {
    if (glowOverride !== null) return glowOverride === `photo:${index}`;
    return glowResults.photoGlows[index]?.glow ?? false;
  };

  const handleDragGlow = (key: string) => {
    setGlowOverride(key);
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
          {profile.photos.map((photo, i) => (
            <div key={`photo-${i}`}>
              {/* Photo with optional glow — click to drag glow here */}
              <div
                className={isPhotoGlowing(i) ? 'rose-glow-shimmer cursor-pointer' : 'cursor-pointer'}
                onClick={() => handleDragGlow(`photo:${i}`)}
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={photo.url}
                    alt={`${profile.name} photo ${i + 1}`}
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                  />
                  {isPhotoGlowing(i) && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-card/90 backdrop-blur-sm rounded-full px-2.5 py-1">
                      <Sparkles size={12} className="text-hinge-gold" />
                      <span className="text-[10px] font-medium text-foreground">
                        {glowResults.photoGlows[i]?.sharedTags.join(', ')}
                      </span>
                    </div>
                  )}
                  {!isPhotoGlowing(i) && (glowResults.photoGlows[i]?.sharedTags?.length ?? 0) > 0 && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-card/60 backdrop-blur-sm rounded-full px-2.5 py-1 opacity-60">
                      <span className="text-[10px] text-muted-foreground">Tap to move glow here</span>
                    </div>
                  )}
                  <button
                    onClick={() => setSelectedTarget({ type: 'photo', index: i })}
                    className="absolute bottom-3 right-3 bg-card/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg hover:bg-card transition-colors"
                  >
                    <Heart size={20} className="text-primary" />
                  </button>
                </div>
              </div>

              {/* Insert prompt after every 2 photos */}
              {i % 2 === 1 && profile.prompts[Math.floor(i / 2)] && (
                <PromptCard
                  prompt={profile.prompts[Math.floor(i / 2)]}
                  isGlowing={isPromptGlowing(profile.prompts[Math.floor(i / 2)].id)}
                  sharedInterests={
                    glowResults.promptGlows[profile.prompts[Math.floor(i / 2)].id]?.sharedInterests || []
                  }
                  onLike={() =>
                    setSelectedTarget({ type: 'prompt', index: Math.floor(i / 2) })
                  }
                  onDragGlow={() =>
                    handleDragGlow(`prompt:${profile.prompts[Math.floor(i / 2)].id}`)
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
                isGlowing={isPromptGlowing(prompt.id)}
                sharedInterests={glowResults.promptGlows[prompt.id]?.sharedInterests || []}
                onLike={() => setSelectedTarget({ type: 'prompt', index: actualIndex })}
                onDragGlow={() => handleDragGlow(`prompt:${prompt.id}`)}
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
  isGlowing,
  sharedInterests,
  onLike,
  onDragGlow,
}: {
  prompt: { id: string; question: string; answer: string };
  isGlowing: boolean;
  sharedInterests: string[];
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
    </motion.div>
  );
}
