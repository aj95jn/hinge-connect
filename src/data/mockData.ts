import { Profile, Like, Match, ChatMessage } from '@/types';

import sarah1 from '@/assets/sarah-1.jpg';
import sarah2 from '@/assets/sarah-2.jpg';
import sarah3 from '@/assets/sarah-3.jpg';
import sarah4 from '@/assets/sarah-4.jpg';
import sarah5 from '@/assets/sarah-5.jpg';
import sarah6 from '@/assets/sarah-6.jpg';
import maya1 from '@/assets/maya-1.jpg';
import maya2 from '@/assets/maya-2.jpg';
import maya3 from '@/assets/maya-3.jpg';
import maya4 from '@/assets/maya-4.jpg';
import emma1 from '@/assets/emma-1.jpg';
import emma2 from '@/assets/emma-2.jpg';
import emma3 from '@/assets/emma-3.jpg';
import jessica1 from '@/assets/jessica-1.jpg';
import olivia1 from '@/assets/olivia-1.jpg';

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
    photos: [sarah1, sarah2, sarah3, sarah4, sarah5, sarah6],
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
    photos: [maya1, maya2, maya3, maya4],
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
    photos: [emma1, emma2, emma3],
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
    photos: [jessica1],
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
    photos: [olivia1],
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
