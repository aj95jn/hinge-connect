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
  vibeData: { avgMessageLength: 4, avgReplyTimeMinutes: 0.5, profileReadTimeSec: 20 },
};

export const discoverProfiles: Profile[] = [
  {
    id: 'sarah', name: 'Sarah', gender: 'Female', location: 'Brooklyn, NY', verified: true,
    photos: [
      { url: sarahProfile, tags: ['city', 'travel'] },
      { url: sarah2, tags: ['food', 'cooking'] },
      { url: sarah3, tags: ['hiking', 'outdoors'] },
    ],
    prompts: [
      { id: 'p1', question: 'My biggest travel fail', answer: 'Getting lost in Tokyo without a map and loving it.', interests: ['travel', 'adventure'], isBridgeBuilder: true, bridgeGhostText: 'What\'s your best travel mishap?' },
      { id: 'p2', question: 'The hallmark of a good relationship is', answer: 'Being able to sit in silence together and it feeling like the most interesting conversation.', interests: ['philosophy', 'deep-conversations'] },
      { id: 'p3', question: 'I\'m weirdly attracted to', answer: 'People who can cook a full meal from whatever\'s left in the fridge. That\'s a superpower.', interests: ['cooking', 'food', 'humor'] },
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
      { url: maya2, tags: ['books', 'deep-conversations'] },
    ],
    prompts: [
      { id: 'p4', question: 'Change my mind about', answer: 'Dog-earing pages. Some of us like our books to look lived-in, not pristine.', interests: ['books', 'humor'] },
      { id: 'p5', question: 'Two truths and a lie', answer: 'I\'ve read War and Peace twice. I once meditated for 10 days straight. I can touch my nose with my tongue.', interests: ['books', 'yoga', 'humor'] },
      { id: 'p6', question: 'A boundary of mine is', answer: 'No phones at dinner. If the food\'s good and the company\'s better, the screen can wait.', interests: ['mindfulness', 'food', 'deep-conversations'] },
    ],
    preferences: ['books', 'yoga', 'art', 'wellness'],
    bandwidthStatus: 'weekend', showVibeSync: false,
    vibeData: { avgMessageLength: 2, avgReplyTimeMinutes: 30 },
    vitals: { age: 25, gender: 'Woman', orientation: 'Bisexual' },
  },
  {
    id: 'emma', name: 'Emma', gender: 'Female', location: 'Williamsburg, NY', verified: true,
    photos: [
      { url: emmaProfile, tags: ['music', 'social'] },
      { url: emma2, tags: ['music', 'karaoke'] },
    ],
    prompts: [
      { id: 'p7', question: 'The dorkiest thing about me', answer: 'I have a spreadsheet ranking every pizza place in Brooklyn. Currently at 47 entries.', interests: ['food', 'humor', 'organization'] },
      { id: 'p8', question: 'I bet you can\'t', answer: 'Beat me at Scrabble. I have a winning streak going since 2019. It\'s a whole personality at this point.', interests: ['humor', 'games'] },
      { id: 'p9', question: 'After work you can find me', answer: 'At whatever dive bar has the best jukebox. Bonus points if they serve tater tots.', interests: ['music', 'nightlife', 'food'] },
    ],
    preferences: ['music', 'nightlife', 'fashion', 'humor'],
    showVibeSync: true,
    vitals: { age: 26, gender: 'Woman', orientation: 'Straight', ethnicity: 'Mixed', datingGoals: 'Looking for a relationship', relationshipType: 'Monogamy' },
    vibeData: { avgMessageLength: 5, avgReplyTimeMinutes: 0.3 },
  },
  {
    id: 'sophia', name: 'Sophia', gender: 'Female', location: 'West Village, NY', verified: true,
    photos: [
      { url: sophiaProfile, tags: ['art', 'music'] },
    ],
    prompts: [
      { id: 'sp1', question: 'My therapist would say I', answer: 'Use cooking elaborate meals as a coping mechanism. And honestly? It works.', interests: ['cooking', 'food', 'humor'] },
      { id: 'sp2', question: 'One thing I\'d love to know about you', answer: 'What you\'d choose for your last meal. It says everything about a person.', interests: ['food', 'deep-conversations', 'philosophy'] },
      { id: 'sp3', question: 'Dating me is like', answer: 'Getting a personal tour guide to every hidden gem in the city. I know places Google doesn\'t.', interests: ['adventure', 'travel', 'exploration'] },
    ],
    preferences: ['wine', 'art', 'music', 'romance'],
    bandwidthStatus: 'ready', showVibeSync: true,
    vitals: { age: 29, gender: 'Woman', orientation: 'Straight', religion: 'Spiritual', politics: 'Liberal' },
    vibeData: { avgMessageLength: 5, avgReplyTimeMinutes: 0.8 },
  },
  {
    id: 'lily', name: 'Lily', gender: 'Female', location: 'Midtown, NY',
    photos: [
      { url: lilyProfile, tags: ['music', 'food'] },
    ],
    prompts: [
      { id: 'lp1', question: 'My most controversial opinion', answer: 'Breakfast for dinner is superior to dinner for dinner. Every. Single. Time.', interests: ['food', 'humor'] },
      { id: 'lp2', question: 'I want someone who', answer: 'Sends me songs at 2am with "this reminded me of you" and means it.', interests: ['music', 'romance', 'deep-conversations'] },
      { id: 'lp3', question: 'This year I really want to', answer: 'Learn to DJ. I already have strong opinions about transitions, so I\'m halfway there.', interests: ['music', 'creative', 'ambition'] },
    ],
    preferences: ['food', 'music', 'tech', 'humor'],
    vitals: { age: 24, gender: 'Woman', orientation: 'Straight' },
    bandwidthStatus: 'focusing',
    vibeData: { avgMessageLength: 3, avgReplyTimeMinutes: 2 },
  },
  {
    id: 'ava', name: 'Ava', gender: 'Female', location: 'Harlem, NY', verified: true,
    photos: [
      { url: avaProfile, tags: ['community', 'outdoors'] },
    ],
    prompts: [
      { id: 'ap1', question: 'I\'m the type of texter who', answer: 'Sends voice notes instead of typing because tone matters and autocorrect is not my friend.', interests: ['humor', 'deep-conversations'] },
      { id: 'ap2', question: 'Together we could', answer: 'Start a supper club where the theme changes every month. This month: West African fusion.', interests: ['food', 'cooking', 'community'] },
      { id: 'ap3', question: 'My real life superpower is', answer: 'Making strangers feel like old friends within 5 minutes. It\'s a gift and sometimes a curse.', interests: ['social', 'community', 'empathy'] },
    ],
    preferences: ['music', 'dancing', 'volunteering', 'food', 'community'],
    vitals: { age: 28, gender: 'Woman', orientation: 'Queer', ethnicity: 'Black', religion: 'Christian', datingGoals: 'Looking for a relationship' },
    showVibeSync: true, bandwidthStatus: 'ready',
    vibeData: { avgMessageLength: 4, avgReplyTimeMinutes: 0.4 },
  },
  {
    id: 'chloe', name: 'Chloe', gender: 'Female', location: 'Chelsea, NY',
    photos: [
      { url: chloeProfile, tags: ['hiking', 'outdoors'] },
    ],
    prompts: [
      { id: 'cp1', question: 'My non-negotiable', answer: 'Weekend mornings are sacred. Coffee, no phone, and at least 30 minutes of doing absolutely nothing.', interests: ['mindfulness', 'outdoors'] },
      { id: 'cp2', question: 'I guarantee you that', answer: 'I will out-hike you. But I\'ll also carry the snacks, so it evens out.', interests: ['hiking', 'outdoors', 'humor'] },
      { id: 'cp3', question: 'Proof I have good taste', answer: 'I\'ve found the best croissant in every neighborhood I\'ve lived in. Currently in Chelsea, it\'s Maman.', interests: ['food', 'adventure', 'exploration'] },
    ],
    vitals: { age: 26, gender: 'Woman', orientation: 'Straight', relationshipType: 'Open to options' },
    preferences: ['fitness', 'hiking', 'climbing', 'adventure', 'outdoors'],
    bandwidthStatus: 'weekend',
    vibeData: { avgMessageLength: 3, avgReplyTimeMinutes: 5 },
  },
  {
    id: 'mia', name: 'Mia', gender: 'Female', location: 'Greenwich Village, NY', verified: true,
    photos: [
      { url: miaProfile, tags: ['books', 'deep-conversations'] },
    ],
    prompts: [
      { id: 'mp1', question: 'A shower thought I had recently', answer: 'If our pets could talk, they\'d probably be disappointed in how much screen time we have.', interests: ['humor', 'pets', 'philosophy'] },
      { id: 'mp2', question: 'The key to my heart is', answer: 'Remembering the name of a book I mentioned once in passing and actually reading it.', interests: ['books', 'deep-conversations', 'romance'] },
      { id: 'mp3', question: 'I\'ll fall for you if', answer: 'You can make me laugh at a funeral. Too dark? Maybe. But life\'s too short for boring humor.', interests: ['humor', 'deep-conversations'] },
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
