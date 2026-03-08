import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Edit3, Plus, X, Sparkles } from 'lucide-react';
import { AnimatedAvatar } from './AnimatedAvatar';
import { Profile, BandwidthStatus } from '@/types';
import { BandwidthStatusPill } from './BandwidthStatus';

const ALL_INTERESTS = [
  'travel', 'philosophy', 'cooking', 'hiking', 'music',
  'deep-conversations', 'entrepreneurship', 'food', 'outdoors',
  'books', 'yoga', 'art', 'fitness', 'photography', 'movies',
  'gaming', 'fashion', 'coffee', 'wine', 'dancing', 'writing',
  'volunteering', 'pets', 'sports', 'tech', 'humor', 'nightlife',
];

interface UserProfileScreenProps {
  profile: Profile;
  onUpdateProfile: (updates: Partial<Profile>) => void;
  onUpdateBandwidth: (status: BandwidthStatus) => void;
}

export function UserProfileScreen({ profile, onUpdateProfile, onUpdateBandwidth }: UserProfileScreenProps) {
  const [editingPrompt, setEditingPrompt] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  const [showInterestPicker, setShowInterestPicker] = useState(false);

  const handleSavePrompt = (promptId: string) => {
    const updatedPrompts = profile.prompts.map((p) =>
      p.id === promptId ? { ...p, answer: editText } : p
    );
    onUpdateProfile({ prompts: updatedPrompts });
    setEditingPrompt(null);
  };

  const toggleInterest = (interest: string) => {
    const current = profile.preferences;
    const updated = current.includes(interest)
      ? current.filter((i) => i !== interest)
      : [...current, interest];
    onUpdateProfile({ preferences: updated });
  };

  const bandwidthOptions: { value: BandwidthStatus; label: string }[] = [
    { value: 'ready', label: 'Ready to Connect' },
    { value: 'focusing', label: 'Focusing on Matches' },
    { value: 'weekend', label: 'Weekend Spark ✨' },
  ];

  return (
    <div className="px-4 pt-4 pb-24">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
          <User size={36} className="text-primary" />
        </div>
        <div>
          <h2 className="font-hinge-serif text-2xl font-semibold text-foreground">
            {profile.name}
          </h2>
          <span className="text-sm text-muted-foreground">{profile.gender}</span>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-0.5">
            <MapPin size={14} />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>

      {/* Bandwidth Status */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-foreground mb-3">Your Status</h3>
        <div className="flex flex-wrap gap-2">
          {bandwidthOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onUpdateBandwidth(opt.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                profile.bandwidthStatus === opt.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-accent'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Preferences / Interests */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-foreground flex items-center gap-1.5">
            <Sparkles size={14} className="text-hinge-gold" />
            Your Interests
          </h3>
          <button
            onClick={() => setShowInterestPicker(!showInterestPicker)}
            className="text-xs text-primary font-medium"
          >
            {showInterestPicker ? 'Done' : 'Edit'}
          </button>
        </div>
        <p className="text-xs text-muted-foreground mb-3">
          These are used to find common ground and highlight matching prompts with a rose glow.
        </p>
        <div className="flex flex-wrap gap-2">
          {profile.preferences.map((interest) => (
            <motion.span
              key={interest}
              layout
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
            >
              {interest}
              {showInterestPicker && (
                <button onClick={() => toggleInterest(interest)}>
                  <X size={12} className="text-muted-foreground hover:text-destructive" />
                </button>
              )}
            </motion.span>
          ))}
        </div>

        {showInterestPicker && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="mt-3 pt-3 border-t border-border"
          >
            <p className="text-xs text-muted-foreground mb-2">Add more interests:</p>
            <div className="flex flex-wrap gap-2">
              {ALL_INTERESTS.filter((i) => !profile.preferences.includes(i)).map((interest) => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Plus size={12} />
                  {interest}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Your Prompts */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-foreground mb-3">Your Prompts</h3>
        <div className="space-y-3">
          {profile.prompts.map((prompt) => (
            <div key={prompt.id} className="bg-card rounded-2xl p-4 border border-border">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                {prompt.question}
              </p>

              {editingPrompt === prompt.id ? (
                <div className="space-y-2">
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full bg-muted rounded-xl p-3 text-sm text-foreground resize-none h-20 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSavePrompt(prompt.id)}
                      className="px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-medium"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingPrompt(null)}
                      className="px-4 py-1.5 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-2">
                  <p className="text-foreground font-hinge-serif text-base leading-relaxed">
                    {prompt.answer}
                  </p>
                  <button
                    onClick={() => {
                      setEditingPrompt(prompt.id);
                      setEditText(prompt.answer);
                    }}
                    className="p-1.5 rounded-full hover:bg-muted transition-colors flex-shrink-0"
                  >
                    <Edit3 size={14} className="text-muted-foreground" />
                  </button>
                </div>
              )}

              {prompt.interests && prompt.interests.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {prompt.interests.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Vibe Stats */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Your Vibe Stats</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card rounded-2xl p-4 border border-border text-center">
            <p className="text-2xl font-hinge-serif font-semibold text-primary">
              {profile.vibeData.avgMessageLength}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Avg. sentence length</p>
          </div>
          <div className="bg-card rounded-2xl p-4 border border-border text-center">
            <p className="text-2xl font-hinge-serif font-semibold text-primary">
              {profile.vibeData.avgReplyTimeMinutes < 1
                ? `${Math.round(profile.vibeData.avgReplyTimeMinutes * 60)}s`
                : `${profile.vibeData.avgReplyTimeMinutes}m`}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Avg. reply time</p>
          </div>
        </div>
      </div>
    </div>
  );
}
