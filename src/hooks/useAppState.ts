import { useState, useCallback, useEffect } from 'react';
import { AppTab, Like, Match, ChatMessage, BandwidthStatus } from '@/types';
import {
  discoverProfiles,
  initialLikesReceived,
  initialMatches,
  initialChatMessages,
  userProfile,
  likesReceivedProfiles,
  matchProfiles,
} from '@/data/mockData';
import { toast } from 'sonner';

const FREE_LIKE_LIMIT = 8;
const REFUND_TIMEOUT_MS = 60000; // 1 minute for demo

export function useAppState() {
  const [activeTab, setActiveTab] = useState<AppTab>('discover');
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [likesSent, setLikesSent] = useState<Like[]>([]);
  const [likesReceived, setLikesReceived] = useState<Like[]>(initialLikesReceived);
  const [matches, setMatches] = useState<Match[]>(initialMatches);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(initialChatMessages);
  const [likesRemaining, setLikesRemaining] = useState(FREE_LIKE_LIMIT);
  const [rosesRemaining, setRosesRemaining] = useState(3);
  const [isPaid] = useState(false);
  const [userBandwidth, setUserBandwidth] = useState<BandwidthStatus>('ready');
  const [showRefundPopup, setShowRefundPopup] = useState<{ profileName: string } | null>(null);
  const [activeChatMatchId, setActiveChatMatchId] = useState<string | null>(null);

  // Effort Insurance: check for unreplied likes after timeout
  useEffect(() => {
    const interval = setInterval(() => {
      setLikesSent((prev) => {
        const now = Date.now();
        const updated = prev.map((like) => {
          if (
            !like.refunded &&
            !like.read &&
            like.message &&
            now - like.timestamp > REFUND_TIMEOUT_MS
          ) {
            const profile = discoverProfiles.find((p) => p.id === like.toProfileId);
            if (profile) {
              setShowRefundPopup({ profileName: profile.name });
              setLikesRemaining((r) => r + 1);
            }
            return { ...like, refunded: true };
          }
          return like;
        });
        return updated;
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const sendLike = useCallback(
    (params: {
      profileId: string;
      targetType: 'photo' | 'prompt';
      targetIndex: number;
      message?: string;
      isRose?: boolean;
      isPriority?: boolean;
    }) => {
      if (!isPaid && likesRemaining <= 0) {
        toast.error('No likes remaining. Upgrade to send more!');
        return false;
      }

      const like: Like = {
        id: `like_${Date.now()}`,
        fromProfileId: 'aman',
        toProfileId: params.profileId,
        targetType: params.targetType,
        targetIndex: params.targetIndex,
        message: params.message,
        isRose: params.isRose,
        isPriority: params.isPriority,
        timestamp: Date.now(),
        read: false,
        refunded: false,
      };

      setLikesSent((prev) => [...prev, like]);
      if (!isPaid) setLikesRemaining((r) => r - 1);
      if (params.isRose) setRosesRemaining((r) => r - 1);

      // Move to next profile
      setCurrentProfileIndex((i) => i + 1);
      toast.success(params.isRose ? 'Rose sent! 🌹' : 'Like sent! ❤️');
      return true;
    },
    [isPaid, likesRemaining]
  );

  const skipProfile = useCallback(() => {
    setCurrentProfileIndex((i) => i + 1);
  }, []);

  const matchWithLike = useCallback(
    (likeId: string) => {
      const like = likesReceived.find((l) => l.id === likeId);
      if (!like) return;

      const profile = likesReceivedProfiles.find((p) => p.id === like.fromProfileId);
      if (!profile) return;

      const newMatch: Match = {
        id: `match_${Date.now()}`,
        profileId: profile.id,
        lastMessage: like.message,
        lastMessageTimestamp: like.timestamp,
        lastMessageFrom: 'match',
        unread: true,
        isNew: true,
      };

      setMatches((prev) => [newMatch, ...prev]);
      setLikesReceived((prev) => prev.filter((l) => l.id !== likeId));
      toast.success(`It's a match with ${profile.name}! 🎉`);
    },
    [likesReceived]
  );

  const dismissLike = useCallback((likeId: string) => {
    setLikesReceived((prev) => prev.filter((l) => l.id !== likeId));
  }, []);

  const sendMessage = useCallback(
    (matchId: string, text: string) => {
      const msg: ChatMessage = {
        id: `msg_${Date.now()}`,
        matchId,
        from: 'user',
        text,
        timestamp: Date.now(),
      };
      setChatMessages((prev) => [...prev, msg]);
      setMatches((prev) =>
        prev.map((m) =>
          m.id === matchId
            ? { ...m, lastMessage: text, lastMessageTimestamp: Date.now(), lastMessageFrom: 'user', unread: false, isNew: false }
            : m
        )
      );

      // Simulate reply after a short delay
      setTimeout(() => {
        const replyMsg: ChatMessage = {
          id: `msg_${Date.now() + 1}`,
          matchId,
          from: 'match',
          text: getAutoReply(),
          timestamp: Date.now(),
        };
        setChatMessages((prev) => [...prev, replyMsg]);
        setMatches((prev) =>
          prev.map((m) =>
            m.id === matchId
              ? { ...m, lastMessage: replyMsg.text, lastMessageTimestamp: replyMsg.timestamp, lastMessageFrom: 'match', unread: true }
              : m
          )
        );
      }, 3000);
    },
    []
  );

  const currentProfile = discoverProfiles[currentProfileIndex] || null;

  const getVibeSync = useCallback(
    (profileId: string) => {
      const profile = discoverProfiles.find((p) => p.id === profileId);
      if (!profile) return { hasSync: false, label: '' };

      const userVibe = userProfile.vibeData;
      const theirVibe = profile.vibeData;

      const msgMatch = userVibe.avgMessageLength >= 1 && theirVibe.avgMessageLength >= 1;
      const replyMatch = userVibe.avgReplyTimeMinutes <= 1 && theirVibe.avgReplyTimeMinutes <= 1;

      if (msgMatch && replyMatch) {
        return {
          hasSync: true,
          label: 'Fast-Paced Match',
          detail: isPaid ? 'Both reply in <1min' : undefined,
        };
      }
      if (msgMatch) {
        return {
          hasSync: true,
          label: 'Shared Style',
          detail: isPaid ? 'Both write thoughtful messages' : undefined,
        };
      }
      return { hasSync: false, label: '' };
    },
    [isPaid]
  );

  return {
    activeTab,
    setActiveTab,
    currentProfile,
    currentProfileIndex,
    likesSent,
    likesReceived,
    likesReceivedProfiles,
    matches,
    matchProfiles: [...matchProfiles, ...likesReceivedProfiles],
    chatMessages,
    likesRemaining,
    rosesRemaining,
    isPaid,
    userBandwidth,
    setUserBandwidth,
    showRefundPopup,
    setShowRefundPopup,
    activeChatMatchId,
    setActiveChatMatchId,
    sendLike,
    skipProfile,
    matchWithLike,
    dismissLike,
    sendMessage,
    getVibeSync,
    hasMoreProfiles: currentProfileIndex < discoverProfiles.length,
  };
}

function getAutoReply(): string {
  const replies = [
    "That's so sweet of you to say! 😊",
    "I'd love that! When are you free?",
    "Haha you're funny! Tell me more about yourself.",
    "That's exactly what I was thinking!",
    "You seem really interesting. What do you do for fun?",
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}
