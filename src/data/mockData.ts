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
  prompts: [
    {
      id: 'up1',
      question: 'A life goal of mine',
      answer: 'To build something that outlasts me — and travel the world while doing it.',
      interests: ['travel', 'entrepreneurship'],
    },
    {
      id: 'up2',
      question: 'I get along best with people who',
      answer: 'Love deep conversations about philosophy, life, and what makes people tick.',
      interests: ['philosophy', 'deep-conversations'],
    },
    {
      id: 'up3',
      question: 'My simple pleasures',
      answer: 'Cooking a new recipe from scratch, long hikes, and vinyl records on a Sunday.',
      interests: ['cooking', 'hiking', 'music'],
    },
  ],
  preferences: [
    'travel', 'philosophy', 'cooking', 'hiking', 'music',
    'deep-conversations', 'entrepreneurship', 'food', 'outdoors',
  ],
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
      { url: sarah1, tags: ['city', 'casual'] },
      { url: sarah2, tags: ['travel', 'tokyo'] },
      { url: sarah3, tags: ['social', 'outdoors'] },
      { url: sarah4, tags: ['food', 'outdoors'] },
      { url: sarah5, tags: ['hiking', 'outdoors'] },
      { url: sarah6, tags: ['cooking', 'food'] },
    ],
    prompts: [
      {
        id: 'p1',
        question: 'A life goal of mine',
        answer: 'To visit every continent before 30. Just got back from Tokyo and it completely changed my perspective on life.',
        interests: ['travel', 'adventure', 'tokyo'],
      },
      {
        id: 'p2',
        question: 'I get along best with people who',
        answer: 'Can debate philosophy over cheap wine and still laugh about it the next morning.',
        interests: ['philosophy', 'deep-conversations', 'humor'],
      },
      {
        id: 'p3',
        question: 'My simple pleasures',
        answer: 'Sunday morning farmers markets, a good podcast on a rainy day, and homemade pasta.',
        interests: ['cooking', 'food', 'relaxation'],
      },
    ],
    preferences: ['travel', 'philosophy', 'cooking', 'adventure'],
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
      { url: maya1, tags: ['books', 'intellectual'] },
      { url: maya2, tags: ['yoga', 'wellness'] },
      { url: maya3, tags: ['art', 'culture'] },
      { url: maya4, tags: ['social', 'food'] },
    ],
    prompts: [
      {
        id: 'p4',
        question: 'The way to win me over is',
        answer: 'Show up with a book recommendation and tell me why it matters to you.',
        interests: ['books', 'intellectual', 'deep-conversations'],
      },
      {
        id: 'p5',
        question: 'My most irrational fear',
        answer: 'That my houseplants are secretly judging my life choices.',
        interests: ['humor', 'plants'],
      },
      {
        id: 'p6',
        question: 'Typical Sunday',
        answer: 'Yoga at sunrise, brunch with friends, then getting lost in a museum.',
        interests: ['yoga', 'art', 'social'],
      },
    ],
    preferences: ['books', 'yoga', 'art', 'wellness'],
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
      { url: emma1, tags: ['nightlife', 'social'] },
      { url: emma2, tags: ['music', 'karaoke'] },
      { url: emma3, tags: ['fashion', 'city'] },
    ],
    prompts: [
      {
        id: 'p7',
        question: 'I\'m convinced that',
        answer: 'The best conversations happen after midnight with strangers who become friends.',
        interests: ['deep-conversations', 'social', 'nightlife'],
      },
      {
        id: 'p8',
        question: 'Green flags I look for',
        answer: 'You remember the little things, you\'re kind to waiters, and you can laugh at yourself.',
        interests: ['kindness', 'humor', 'empathy'],
      },
      {
        id: 'p9',
        question: 'My go-to karaoke song',
        answer: 'Don\'t Stop Believin\' — and yes, I do the air guitar.',
        interests: ['music', 'fun', 'karaoke'],
      },
    ],
    preferences: ['music', 'nightlife', 'fashion', 'humor'],
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
    photos: [{ url: jessica1, tags: ['coffee', 'social'] }],
    prompts: [
      {
        id: 'jp1',
        question: 'My simple pleasures',
        answer: 'Coffee shop hopping and people watching.',
        interests: ['coffee', 'social'],
      },
    ],
    preferences: ['coffee', 'travel', 'social'],
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
    photos: [{ url: olivia1, tags: ['outdoors', 'city'] }],
    prompts: [],
    preferences: ['hiking', 'outdoors', 'travel'],
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

// Ghost text generator based on shared interests
export function generateGhostText(sharedInterests: string[], promptAnswer: string): string {
  const interestGhosts: Record<string, string[]> = {
    travel: ['Ask about her favorite trip!', 'Where would she go next?', 'Share your travel bucket list!'],
    philosophy: ['What philosophy resonates with her?', 'Share your favorite philosophical idea!'],
    cooking: ['What\'s her signature dish?', 'Share your favorite recipe!'],
    hiking: ['Ask about her favorite trail!', 'Where does she love hiking?'],
    music: ['What music is she into?', 'Share your playlist!'],
    'deep-conversations': ['What topic keeps her up at night?', 'Share a thought that changed your perspective!'],
    food: ['Ask about her favorite restaurant!', 'What cuisine does she love?'],
    humor: ['Tell her something funny!', 'Share a joke that always lands!'],
  };

  for (const interest of sharedInterests) {
    const ghosts = interestGhosts[interest];
    if (ghosts) return ghosts[Math.floor(Math.random() * ghosts.length)];
  }

  return 'You have something in common — say hi!';
}
