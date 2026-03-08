import { Profile, Like, Match, ChatMessage } from '@/types';

// Simple profile images
import sarahProfile from '@/assets/sarah-profile-new.jpg';
import sarah2 from '@/assets/sarah-2-simple.jpg';
import sarah3 from '@/assets/sarah-3-simple.jpg';
import mayaProfile from '@/assets/maya-profile-new.jpg';
import maya2 from '@/assets/maya-2-simple.jpg';
import emmaProfile from '@/assets/emma-profile-new.jpg';
import emma2 from '@/assets/emma-2-simple.jpg';
import jessicaProfile from '@/assets/jessica-profile-new.jpg';
import oliviaProfile from '@/assets/olivia-profile-new.jpg';
import sophiaProfile from '@/assets/sophia-profile-new.jpg';
import lilyProfile from '@/assets/lily-profile-new.jpg';
import avaProfile from '@/assets/ava-profile-new.jpg';
import chloeProfile from '@/assets/chloe-profile-new.jpg';
import miaProfile from '@/assets/mia-profile-new.jpg';

export const userProfile: Profile = {
  id: 'aman',
  name: 'Aman',
  gender: 'Male',
  location: 'New York, NY',
  photos: [],
  prompts: [
    { id: 'up1', question: 'A life goal of mine', answer: 'To build something that outlasts me — and travel the world while doing it.', interests: ['travel', 'entrepreneurship'] },
    { id: 'up2', question: 'I get along best with people who', answer: 'Love deep conversations about philosophy, life, and what makes people tick.', interests: ['philosophy', 'deep-conversations'] },
    { id: 'up3', question: 'My simple pleasures', answer: 'Cooking a new recipe from scratch, long hikes, and vinyl records on a Sunday.', interests: ['cooking', 'hiking', 'music'] },
  ],
  preferences: ['travel', 'philosophy', 'cooking', 'hiking', 'music', 'deep-conversations', 'entrepreneurship', 'food', 'outdoors'],
  bandwidthStatus: 'ready',
  vibeData: { avgMessageLength: 4, avgReplyTimeMinutes: 0.5 },
};

export const discoverProfiles: Profile[] = [
  {
    id: 'sarah', name: 'Sarah', gender: 'Female', location: 'Brooklyn, NY', verified: true,
    photos: [
      { url: sarahProfile, tags: ['city', 'casual'] },
      { url: sarah2, tags: ['food', 'outdoors'] },
      { url: sarah3, tags: ['hiking', 'outdoors'] },
    ],
    prompts: [
      { id: 'p1', question: 'A life goal of mine', answer: 'To visit every continent before 30. Just got back from Tokyo and it completely changed my perspective on life.', interests: ['travel', 'adventure', 'tokyo'] },
      { id: 'p2', question: 'I get along best with people who', answer: 'Can debate philosophy over cheap wine and still laugh about it the next morning.', interests: ['philosophy', 'deep-conversations', 'humor'] },
      { id: 'p3', question: 'My simple pleasures', answer: 'Sunday morning farmers markets, a good podcast on a rainy day, and homemade pasta.', interests: ['cooking', 'food', 'relaxation'] },
    ],
    preferences: ['travel', 'philosophy', 'cooking', 'adventure'],
    bandwidthStatus: 'focusing', showVibeSync: true,
    vibeData: { avgMessageLength: 4, avgReplyTimeMinutes: 0.5 },
    vitals: { age: 27, gender: 'Woman', orientation: 'Straight', religion: 'Hindu', politics: 'Not Political', ethnicity: 'South Asian', datingGoals: 'Figuring out my dating goals', relationshipType: 'Monogamy' },
  },
  {
    id: 'maya', name: 'Maya', gender: 'Female', location: 'Manhattan, NY',
    photos: [
      { url: mayaProfile, tags: ['books', 'intellectual'] },
      { url: maya2, tags: ['books', 'café'] },
    ],
    prompts: [
      { id: 'p4', question: 'The way to win me over is', answer: 'Show up with a book recommendation and tell me why it matters to you.', interests: ['books', 'intellectual', 'deep-conversations'] },
      { id: 'p5', question: 'My most irrational fear', answer: 'That my houseplants are secretly judging my life choices.', interests: ['humor', 'plants'] },
      { id: 'p6', question: 'Typical Sunday', answer: 'Yoga at sunrise, brunch with friends, then getting lost in a museum.', interests: ['yoga', 'art', 'social'] },
    ],
    preferences: ['books', 'yoga', 'art', 'wellness'],
    bandwidthStatus: 'weekend', showVibeSync: false,
    vibeData: { avgMessageLength: 2, avgReplyTimeMinutes: 30 },
    vitals: { age: 25, gender: 'Woman', orientation: 'Bisexual' },
  },
  {
    id: 'emma', name: 'Emma', gender: 'Female', location: 'Williamsburg, NY', verified: true,
    photos: [
      { url: emmaProfile, tags: ['nightlife', 'social'] },
      { url: emma2, tags: ['music', 'karaoke'] },
    ],
    prompts: [
      { id: 'p7', question: 'I\'m convinced that', answer: 'The best conversations happen after midnight with strangers who become friends.', interests: ['deep-conversations', 'social', 'nightlife'] },
      { id: 'p8', question: 'Green flags I look for', answer: 'You remember the little things, you\'re kind to waiters, and you can laugh at yourself.', interests: ['kindness', 'humor', 'empathy'] },
      { id: 'p9', question: 'My go-to karaoke song', answer: 'Don\'t Stop Believin\' — and yes, I do the air guitar.', interests: ['music', 'fun', 'karaoke'] },
    ],
    preferences: ['music', 'nightlife', 'fashion', 'humor'],
    showVibeSync: true,
    vitals: { age: 26, gender: 'Woman', orientation: 'Straight', ethnicity: 'Mixed', datingGoals: 'Looking for a relationship', relationshipType: 'Monogamy' },
    vibeData: { avgMessageLength: 5, avgReplyTimeMinutes: 0.3 },
  },
  {
    id: 'sophia', name: 'Sophia', gender: 'Female', location: 'West Village, NY', verified: true,
    photos: [
      { url: sophiaProfile, tags: ['city', 'elegant'] },
    ],
    prompts: [
      { id: 'sp1', question: 'A perfect date looks like', answer: 'Wine tasting followed by a walk through the village, ending at a hidden jazz bar.', interests: ['wine', 'music', 'adventure'] },
      { id: 'sp2', question: 'My creative outlet', answer: 'Painting. There\'s something about putting brush to canvas that quiets everything else.', interests: ['art', 'creative', 'mindfulness'] },
      { id: 'sp3', question: 'I\'m looking for someone who', answer: 'Appreciates the little things — a good sunset, a handwritten note, an unexpected detour.', interests: ['romance', 'adventure', 'mindfulness'] },
    ],
    preferences: ['wine', 'art', 'music', 'romance'],
    bandwidthStatus: 'ready', showVibeSync: true,
    vitals: { age: 29, gender: 'Woman', orientation: 'Straight', religion: 'Spiritual', politics: 'Liberal' },
    vibeData: { avgMessageLength: 5, avgReplyTimeMinutes: 0.8 },
  },
  {
    id: 'lily', name: 'Lily', gender: 'Female', location: 'Midtown, NY',
    photos: [
      { url: lilyProfile, tags: ['city', 'casual'] },
    ],
    prompts: [
      { id: 'lp1', question: 'The quickest way to my heart', answer: 'Take me to a hole-in-the-wall ramen spot and share your Spotify Wrapped.', interests: ['food', 'music', 'adventure'] },
      { id: 'lp2', question: 'My hidden talent', answer: 'I can play three instruments but can\'t carry a tune to save my life.', interests: ['music', 'humor'] },
      { id: 'lp3', question: 'I geek out on', answer: 'True crime podcasts, keyboard shortcuts, and perfectly organized spreadsheets.', interests: ['tech', 'podcasts', 'organization'] },
    ],
    preferences: ['food', 'music', 'tech', 'humor'],
    vitals: { age: 24, gender: 'Woman', orientation: 'Straight' },
    bandwidthStatus: 'focusing',
    vibeData: { avgMessageLength: 3, avgReplyTimeMinutes: 2 },
  },
  {
    id: 'ava', name: 'Ava', gender: 'Female', location: 'Harlem, NY', verified: true,
    photos: [
      { url: avaProfile, tags: ['city', 'casual'] },
    ],
    prompts: [
      { id: 'ap1', question: 'My happy place', answer: 'A live jazz session in a dim-lit bar where everyone\'s swaying and nobody\'s on their phone.', interests: ['music', 'dancing', 'nightlife'] },
      { id: 'ap2', question: 'On weekends you\'ll find me', answer: 'At the community garden or teaching dance to kids at the rec center.', interests: ['volunteering', 'dancing', 'outdoors'] },
      { id: 'ap3', question: 'Something I\'ll never shut up about', answer: 'How underrated Harlem\'s food scene is. Fight me on it.', interests: ['food', 'community', 'culture'] },
    ],
    preferences: ['music', 'dancing', 'volunteering', 'food', 'community'],
    vitals: { age: 28, gender: 'Woman', orientation: 'Queer', ethnicity: 'Black', religion: 'Christian', datingGoals: 'Looking for a relationship' },
    showVibeSync: true, bandwidthStatus: 'ready',
    vibeData: { avgMessageLength: 4, avgReplyTimeMinutes: 0.4 },
  },
  {
    id: 'chloe', name: 'Chloe', gender: 'Female', location: 'Chelsea, NY',
    photos: [
      { url: chloeProfile, tags: ['city', 'sporty'] },
    ],
    prompts: [
      { id: 'cp1', question: 'My biggest flex', answer: 'I can boulder a V6 and still make it to brunch by 11.', interests: ['fitness', 'climbing', 'social'] },
      { id: 'cp2', question: 'Unpopular opinion', answer: 'Morning runs are better than evening ones. The city at 6am is a different world.', interests: ['fitness', 'outdoors', 'adventure'] },
      { id: 'cp3', question: 'We\'ll get along if', answer: 'You can keep up on a hike and aren\'t afraid to try something new.', interests: ['hiking', 'adventure', 'outdoors'] },
    ],
    vitals: { age: 26, gender: 'Woman', orientation: 'Straight', relationshipType: 'Open to options' },
    preferences: ['fitness', 'hiking', 'climbing', 'adventure', 'outdoors'],
    bandwidthStatus: 'weekend',
    vibeData: { avgMessageLength: 3, avgReplyTimeMinutes: 5 },
  },
  {
    id: 'mia', name: 'Mia', gender: 'Female', location: 'Greenwich Village, NY', verified: true,
    photos: [
      { url: miaProfile, tags: ['books', 'city'] },
    ],
    prompts: [
      { id: 'mp1', question: 'My love language is', answer: 'Recommending you a book and then texting you every chapter to see if you cried yet.', interests: ['books', 'deep-conversations', 'humor'] },
      { id: 'mp2', question: 'Best thing about me', answer: 'My cat already likes everyone, so you\'ve got that going for you.', interests: ['pets', 'humor'] },
      { id: 'mp3', question: 'I\'m secretly really into', answer: 'Writing short stories about strangers I observe at cafés. You might already be a character.', interests: ['writing', 'creative', 'observation'] },
    ],
    preferences: ['books', 'writing', 'pets', 'deep-conversations'],
    showVibeSync: true, bandwidthStatus: 'ready',
    vibeData: { avgMessageLength: 6, avgReplyTimeMinutes: 0.2 },
    vitals: { age: 25, gender: 'Woman', orientation: 'Bisexual', politics: 'Progressive', datingGoals: 'Something serious', relationshipType: 'Monogamy' },
  },
];

export const initialLikesReceived: Like[] = [
  {
    id: 'like1', fromProfileId: 'jessica', toProfileId: 'aman',
    targetType: 'prompt', targetIndex: 0,
    message: 'Your travel stories sound amazing! Where\'s next on the list?',
    timestamp: Date.now() - 3600000, read: false, refunded: false,
  },
];

export const likesReceivedProfiles: Profile[] = [
  {
    id: 'jessica', name: 'Jessica', gender: 'Female', location: 'SoHo, NY',
    photos: [
      { url: jessicaProfile, tags: ['coffee', 'social'] },
    ],
    prompts: [
      { id: 'jp1', question: 'My simple pleasures', answer: 'Coffee shop hopping and people watching.', interests: ['coffee', 'social'] },
    ],
    preferences: ['coffee', 'travel', 'social'],
    bandwidthStatus: 'ready',
    vibeData: { avgMessageLength: 3, avgReplyTimeMinutes: 1 },
  },
];

export const initialMatches: Match[] = [
  {
    id: 'match1', profileId: 'olivia',
    lastMessage: 'That hiking trail sounds incredible!',
    lastMessageTimestamp: Date.now() - 7200000,
    lastMessageFrom: 'match', unread: true, isNew: false,
  },
];

export const matchProfiles: Profile[] = [
  {
    id: 'olivia', name: 'Olivia', gender: 'Female', location: 'Upper East Side, NY',
    photos: [
      { url: oliviaProfile, tags: ['outdoors', 'city'] },
    ],
    prompts: [],
    preferences: ['hiking', 'outdoors', 'travel'],
    bandwidthStatus: 'ready',
    vibeData: { avgMessageLength: 3, avgReplyTimeMinutes: 5 },
  },
];

export const initialChatMessages: ChatMessage[] = [
  { id: 'msg1', matchId: 'match1', from: 'user', text: 'Hey Olivia! I noticed you love hiking too. Have you tried the Breakneck Ridge trail?', timestamp: Date.now() - 14400000 },
  { id: 'msg2', matchId: 'match1', from: 'match', text: 'That hiking trail sounds incredible! I\'ve been meaning to try it. Want to go sometime?', timestamp: Date.now() - 7200000 },
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
    books: ['Ask what she\'s reading!', 'Share your favorite book!'],
    art: ['What\'s her favorite art style?', 'Which gallery does she love?'],
    fitness: ['What\'s her workout routine?', 'Ask about her climbing goals!'],
    dancing: ['What style does she dance?', 'Ask about her favorite music to dance to!'],
    wine: ['What\'s her favorite region?', 'Red or white — start a friendly debate!'],
    pets: ['Tell her about your favorite animal!', 'Ask about her cat!'],
    writing: ['Ask what she\'s working on!', 'Share a story idea!'],
  };

  for (const interest of sharedInterests) {
    const ghosts = interestGhosts[interest];
    if (ghosts) return ghosts[Math.floor(Math.random() * ghosts.length)];
  }

  return 'You have something in common — say hi!';
}
