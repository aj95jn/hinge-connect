import { Profile, Like, Match, ChatMessage } from '@/types';

export const userProfile: Profile = {
  id: 'aman',
  name: 'Aman',
  age: 27,
  location: 'New York, NY',
  photos: [],
  prompts: [],
  bandwidthStatus: 'ready',
  vibeData: {
    avgMessageLength: 4,
    avgReplyTimeMinutes: 0.5,
  },
};

export const discoverProfiles: Profile[] = [
  {
    id: 'sarah',
    name: 'Sarah',
    age: 25,
    location: 'Brooklyn, NY',
    photos: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&h=800&fit=crop',
    ],
    prompts: [
      {
        id: 'p1',
        question: 'A life goal of mine',
        answer: 'To visit every continent before 30. Just got back from Tokyo and it completely changed my perspective on life.',
        isBridgeBuilder: true,
        bridgeGhostText: 'Ask about her trip to Tokyo!',
      },
      {
        id: 'p2',
        question: 'I get along best with people who',
        answer: 'Can debate philosophy over cheap wine and still laugh about it the next morning.',
      },
      {
        id: 'p3',
        question: 'My simple pleasures',
        answer: 'Sunday morning farmers markets, a good podcast on a rainy day, and homemade pasta.',
      },
    ],
    bandwidthStatus: 'focusing',
    vibeData: {
      avgMessageLength: 4,
      avgReplyTimeMinutes: 0.5,
    },
  },
  {
    id: 'maya',
    name: 'Maya',
    age: 26,
    location: 'Manhattan, NY',
    photos: [
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop',
    ],
    prompts: [
      {
        id: 'p4',
        question: 'The way to win me over is',
        answer: 'Show up with a book recommendation and tell me why it matters to you.',
        isBridgeBuilder: true,
        bridgeGhostText: 'Share your favorite book and why!',
      },
      {
        id: 'p5',
        question: 'My most irrational fear',
        answer: 'That my houseplants are secretly judging my life choices.',
      },
      {
        id: 'p6',
        question: 'Typical Sunday',
        answer: 'Yoga at sunrise, brunch with friends, then getting lost in a museum.',
      },
    ],
    bandwidthStatus: 'ready',
    vibeData: {
      avgMessageLength: 2,
      avgReplyTimeMinutes: 30,
    },
  },
  {
    id: 'emma',
    name: 'Emma',
    age: 24,
    location: 'Williamsburg, NY',
    photos: [
      'https://images.unsplash.com/photo-1521310192545-4ac7951413f0?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=600&h=800&fit=crop',
    ],
    prompts: [
      {
        id: 'p7',
        question: 'I\'m convinced that',
        answer: 'The best conversations happen after midnight with strangers who become friends.',
      },
      {
        id: 'p8',
        question: 'Green flags I look for',
        answer: 'You remember the little things, you\'re kind to waiters, and you can laugh at yourself.',
        isBridgeBuilder: true,
        bridgeGhostText: 'Tell her about a time you laughed at yourself!',
      },
      {
        id: 'p9',
        question: 'My go-to karaoke song',
        answer: 'Don\'t Stop Believin\' — and yes, I do the air guitar.',
      },
    ],
    bandwidthStatus: 'weekend',
    vibeData: {
      avgMessageLength: 5,
      avgReplyTimeMinutes: 0.3,
    },
  },
];

export const initialLikesReceived: Like[] = [
  {
    id: 'like1',
    fromProfileId: 'jessica',
    toProfileId: 'aman',
    targetType: 'prompt',
    targetIndex: 0,
    message: 'Your travel stories sound amazing! Where\'s next on the list?',
    timestamp: Date.now() - 3600000,
    read: false,
    refunded: false,
  },
];

export const likesReceivedProfiles: Profile[] = [
  {
    id: 'jessica',
    name: 'Jessica',
    age: 26,
    location: 'SoHo, NY',
    photos: [
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&h=800&fit=crop',
    ],
    prompts: [
      {
        id: 'jp1',
        question: 'My simple pleasures',
        answer: 'Coffee shop hopping and people watching.',
      },
    ],
    bandwidthStatus: 'ready',
    vibeData: {
      avgMessageLength: 3,
      avgReplyTimeMinutes: 1,
    },
  },
];

export const initialMatches: Match[] = [
  {
    id: 'match1',
    profileId: 'olivia',
    lastMessage: 'That hiking trail sounds incredible!',
    lastMessageTimestamp: Date.now() - 7200000,
    lastMessageFrom: 'match',
    unread: true,
    isNew: false,
  },
];

export const matchProfiles: Profile[] = [
  {
    id: 'olivia',
    name: 'Olivia',
    age: 25,
    location: 'Upper East Side, NY',
    photos: [
      'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=600&h=800&fit=crop',
    ],
    prompts: [],
    bandwidthStatus: 'ready',
    vibeData: {
      avgMessageLength: 3,
      avgReplyTimeMinutes: 5,
    },
  },
];

export const initialChatMessages: ChatMessage[] = [
  {
    id: 'msg1',
    matchId: 'match1',
    from: 'user',
    text: 'Hey Olivia! I noticed you love hiking too. Have you tried the Breakneck Ridge trail?',
    timestamp: Date.now() - 14400000,
  },
  {
    id: 'msg2',
    matchId: 'match1',
    from: 'match',
    text: 'That hiking trail sounds incredible! I\'ve been meaning to try it. Want to go sometime?',
    timestamp: Date.now() - 7200000,
  },
];
