export interface Prompt {
  id: string;
  question: string;
  answer: string;
  isBridgeBuilder?: boolean; // AI-identified best icebreaker
  bridgeGhostText?: string; // AI ghost text suggestion
}

export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  photos: string[];
  prompts: Prompt[];
  bandwidthStatus: 'ready' | 'focusing' | 'weekend';
  vibeData: {
    avgMessageLength: number; // in sentences
    avgReplyTimeMinutes: number;
  };
}

export interface Like {
  id: string;
  fromProfileId: string;
  toProfileId: string;
  targetType: 'photo' | 'prompt';
  targetIndex: number;
  message?: string;
  isRose?: boolean;
  isPriority?: boolean;
  timestamp: number;
  read: boolean;
  refunded: boolean;
}

export interface Match {
  id: string;
  profileId: string;
  lastMessage?: string;
  lastMessageTimestamp?: number;
  lastMessageFrom?: 'user' | 'match';
  unread: boolean;
  isNew: boolean; // "tap to chat" highlight
}

export interface ChatMessage {
  id: string;
  matchId: string;
  from: 'user' | 'match';
  text: string;
  timestamp: number;
}

export type AppTab = 'discover' | 'likes' | 'matches';

export type BandwidthStatus = 'ready' | 'focusing' | 'weekend';

export interface VibeSyncResult {
  hasSync: boolean;
  label: string;
  detail?: string; // for paid users
}
