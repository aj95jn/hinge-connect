import { Profile, Like, Match, ChatMessage } from '@/types';

import sarahProfile from '@/assets/sarah-profile.jpg';
import mayaProfile from '@/assets/maya-profile.jpg';
import emmaProfile from '@/assets/emma-profile.jpg';
import jessicaProfile from '@/assets/jessica-profile.jpg';
import oliviaProfile from '@/assets/olivia-profile.jpg';

export const userProfile: Profile = {
  id: 'aman',
  name: 'Aman',
  gender: 'Male',
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
    gender: 'Female',
    location: 'Brooklyn, NY',
    photos: [
      { url: sarahProfile, tags: ['city', 'casual'] },
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
    showVibeSync: true,
    vibeData: {
      avgMessageLength: 4,
      avgReplyTimeMinutes: 0.5,
    },
  },
  {
    id: 'maya',
    name: 'Maya',
    gender: 'Female',
    location: 'Manhattan, NY',
    photos: [
      { url: mayaProfile, tags: ['books', 'intellectual'] },
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
    bandwidthStatus: 'weekend',
    showVibeSync: false,
    vibeData: {
      avgMessageLength: 2,
      avgReplyTimeMinutes: 30,
    },
  },
  {
    id: 'emma',
    name: 'Emma',
    gender: 'Female',
    location: 'Williamsburg, NY',
    photos: [
      { url: emmaProfile, tags: ['nightlife', 'social'] },
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
    showVibeSync: true,
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
    gender: 'Female',
    location: 'SoHo, NY',
    photos: [{ url: jessicaProfile, tags: ['coffee', 'social'] }],
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
    gender: 'Female',
    location: 'Upper East Side, NY',
    photos: [{ url: oliviaProfile, tags: ['outdoors', 'city'] }],
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
