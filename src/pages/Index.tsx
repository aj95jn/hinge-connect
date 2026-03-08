import { AnimatePresence } from 'framer-motion';
import { useAppState } from '@/hooks/useAppState';
import { BottomNav } from '@/components/hinge/BottomNav';
import { ProfileCard } from '@/components/hinge/ProfileCard';
import { LikesYouScreen } from '@/components/hinge/LikesYouScreen';
import { MessagingScreen } from '@/components/hinge/MessagingScreen';
import { UserProfileScreen } from '@/components/hinge/UserProfileScreen';
import { RefundPopup } from '@/components/hinge/RefundPopup';
import { Heart } from 'lucide-react';

const Index = () => {
  const state = useAppState();

  const matchesUnread = state.matches.filter((m) => m.unread).length;

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border px-4 py-3 flex items-center justify-between">
        <h1 className="font-hinge-serif text-xl font-bold text-foreground tracking-tight">
          hinge
        </h1>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Heart size={12} className="text-hinge-rose" fill="currentColor" />
          <span>{state.likesRemaining} likes</span>
        </div>
      </div>

      {/* Content */}
      <div className="min-h-[calc(100vh-120px)] overflow-y-auto">
        {state.activeTab === 'discover' && (
          <>
            {state.hasMoreProfiles && state.currentProfile ? (
              <ProfileCard
                profile={state.currentProfile}
                vibeSync={state.getVibeSync(state.currentProfile.id)}
                glowResults={state.getGlowResults(state.currentProfile)}
                likesRemaining={state.likesRemaining}
                rosesRemaining={state.rosesRemaining}
                onLike={(params) =>
                  state.sendLike({
                    profileId: state.currentProfile!.id,
                    ...params,
                  })
                }
                onSkip={state.skipProfile}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-[60vh] px-8 text-center">
                <Heart size={48} className="text-muted-foreground/30 mb-4" />
                <h2 className="font-hinge-serif text-xl text-foreground mb-2">
                  You're all caught up!
                </h2>
                <p className="text-sm text-muted-foreground">
                  Check back later for new profiles.
                </p>
              </div>
            )}
          </>
        )}

        {state.activeTab === 'likes' && (
          <LikesYouScreen
            likes={state.likesReceived}
            profiles={state.likesReceivedProfiles}
            onMatch={state.matchWithLike}
            onDismiss={state.dismissLike}
          />
        )}

        {state.activeTab === 'matches' && (
          <MessagingScreen
            matches={state.matches}
            profiles={state.matchProfiles}
            chatMessages={state.chatMessages}
            activeChatMatchId={state.activeChatMatchId}
            onOpenChat={state.setActiveChatMatchId}
            onCloseChat={() => state.setActiveChatMatchId(null)}
            onSendMessage={state.sendMessage}
          />
        )}

        {state.activeTab === 'profile' && (
          <UserProfileScreen
            profile={state.userProfile}
            onUpdateProfile={state.updateUserProfile}
            onUpdateBandwidth={(status) => {
              state.updateUserProfile({ bandwidthStatus: status });
              state.setUserBandwidth(status);
            }}
          />
        )}
      </div>

      {/* Bottom Nav */}
      <BottomNav
        activeTab={state.activeTab}
        onTabChange={state.setActiveTab}
        likesCount={state.likesReceived.length}
        matchesUnread={matchesUnread}
      />

      {/* Refund Popup */}
      <AnimatePresence>
        {state.showRefundPopup && (
          <RefundPopup
            profileName={state.showRefundPopup.profileName}
            onClose={() => state.setShowRefundPopup(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
