import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Sparkles, MoreHorizontal, Undo2 } from 'lucide-react';
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
  isPaid: boolean;
  onLike: (params: {
    targetType: 'photo' | 'prompt';
    targetIndex: number;
    message?: string;
    isRose?: boolean;
    isPriority?: boolean;
  }) => boolean;
  onSkip: () => void;
  onGoBack: () => void;
}

export function ProfileCard({
  profile,
  vibeSync,
  glowResults,
  likesRemaining,
  rosesRemaining,
  isPaid,
  onLike,
  onSkip,
  onGoBack,
}: ProfileCardProps) {
  const [selectedTarget, setSelectedTarget] = useState<{
    type: 'photo' | 'prompt';
    index: number;
  } | null>(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const isPromptGlowing = (promptId: string) => {
    return glowResults.promptGlows[promptId]?.glow ?? false;
  };

  const isPhotoGlowing = (index: number) => {
    return glowResults.photoGlows[index]?.glow ?? false;
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
        className="pb-24 relative"
      >
        {/* Name, gender, and badges — above the image */}
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h1 className="font-hinge-serif text-2xl font-semibold text-foreground">{profile.name}</h1>
              <span className="text-sm text-muted-foreground">
                {profile.gender?.toLowerCase() === 'female' ? 'she/her' : profile.gender?.toLowerCase() === 'male' ? 'he/him' : profile.gender}
              </span>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              {profile.bandwidthStatus && <BandwidthStatusPill status={profile.bandwidthStatus} />}
              {profile.showVibeSync && vibeSync.hasSync && <VibeSync result={vibeSync} />}
            </div>
          </div>
        </div>

        {/* Profile Photo - Hero */}
        {profile.photos.length > 0 && (
          <div className="px-4 pb-2">
            <div className={isPhotoGlowing(0) ? 'rose-glow-shimmer' : ''}>
              <div className="relative rounded-2xl overflow-hidden">
                <img src={profile.photos[0].url} alt={profile.name} className="w-full aspect-[3/4] object-cover" loading="lazy" />
                {isPhotoGlowing(0) && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-card/90 backdrop-blur-sm rounded-full px-2.5 py-1">
                    <Sparkles size={12} className="text-hinge-gold" />
                    <span className="text-[10px] font-medium text-foreground">{glowResults.photoGlows[0]?.sharedTags.join(', ')}</span>
                  </div>
                )}
                <button onClick={(e) => { e.stopPropagation(); setSelectedTarget({ type: 'photo', index: 0 }); }}
                  className="absolute bottom-3 right-3 bg-card/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg hover:bg-card transition-colors">
                  <Heart size={20} className="text-primary" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Interleaved photos and prompts */}
        <div className="space-y-3 px-4">
          {(() => {
            const items: React.ReactNode[] = [];
            const remainingPhotos = profile.photos.slice(1);
            const prompts = profile.prompts;
            let photoIdx = 0;
            let promptIdx = 0;

            while (promptIdx < prompts.length || photoIdx < remainingPhotos.length) {
              if (promptIdx < prompts.length) {
                const prompt = prompts[promptIdx];
                const pi = promptIdx;
                items.push(
                  <PromptCard key={prompt.id} prompt={prompt}
                    isGlowing={isPromptGlowing(prompt.id)}
                    sharedInterests={glowResults.promptGlows[prompt.id]?.sharedInterests || []}
                    onLike={() => setSelectedTarget({ type: 'prompt', index: pi })}
                  />
                );
                promptIdx++;
              }
              if (photoIdx < remainingPhotos.length) {
                const actualPhotoIndex = photoIdx + 1;
                const pi = actualPhotoIndex;
                items.push(
                  <div key={`photo-${pi}`}
                    className={`mt-3 ${isPhotoGlowing(pi) ? 'rose-glow-shimmer' : ''}`}
                  >
                    <div className="relative rounded-2xl overflow-hidden">
                      <img src={remainingPhotos[photoIdx].url} alt={`${profile.name} photo ${pi + 1}`}
                        className="w-full aspect-[3/4] object-cover" loading="lazy" />
                      {isPhotoGlowing(pi) && (
                        <div className="absolute top-3 left-3 flex items-center gap-1 bg-card/90 backdrop-blur-sm rounded-full px-2.5 py-1">
                          <Sparkles size={12} className="text-hinge-gold" />
                          <span className="text-[10px] font-medium text-foreground">{glowResults.photoGlows[pi]?.sharedTags.join(', ')}</span>
                        </div>
                      )}
                      <button onClick={(e) => { e.stopPropagation(); setSelectedTarget({ type: 'photo', index: pi }); }}
                        className="absolute bottom-3 right-3 bg-card/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg hover:bg-card transition-colors">
                        <Heart size={20} className="text-primary" />
                      </button>
                    </div>
                  </div>
                );
                photoIdx++;
              }
            }
            return items;
          })()}
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
}: {
  prompt: { id: string; question: string; answer: string };
  isGlowing: boolean;
  sharedInterests: string[];
  onLike: () => void;
}) {
  return (
    <div className="mt-3">
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
    </div>
  );
}
