import { Heart, MessageCircle, Search, User } from 'lucide-react';
import { AppTab } from '@/types';
import { motion } from 'framer-motion';

interface BottomNavProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
  likesCount: number;
  matchesUnread: number;
}

export function BottomNav({ activeTab, onTabChange, likesCount, matchesUnread }: BottomNavProps) {
  const tabs: { key: AppTab; icon: typeof Search; label: string; badge?: number }[] = [
    { key: 'discover', icon: Search, label: 'Discover' },
    { key: 'likes', icon: Heart, label: 'Likes', badge: likesCount },
    { key: 'matches', icon: MessageCircle, label: 'Matches', badge: matchesUnread },
    { key: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 max-w-md mx-auto">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className="relative flex flex-col items-center gap-0.5 px-4 py-1"
          >
            <div className="relative">
              <tab.icon
                size={22}
                className={activeTab === tab.key ? 'text-primary' : 'text-muted-foreground'}
                fill={activeTab === tab.key && tab.key !== 'profile' ? 'currentColor' : 'none'}
              />
              {tab.badge && tab.badge > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1.5 -right-2 bg-hinge-rose text-primary-foreground text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center"
                >
                  {tab.badge}
                </motion.span>
              )}
            </div>
            <span
              className={`text-[10px] font-medium ${
                activeTab === tab.key ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {tab.label}
            </span>
            {activeTab === tab.key && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-2 w-1 h-1 rounded-full bg-primary"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
