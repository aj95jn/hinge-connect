import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Heart, Undo2, Radio, Crown } from 'lucide-react';

interface FeaturesWalkthroughProps {
  isPaid: boolean;
}

const FEATURES = [
  {
    id: 'vibe-sync',
    title: 'Vibe Sync',
    icon: <Sparkles size={28} className="text-hinge-gold" />,
    color: 'hsl(45, 93%, 47%)',
    freeTag: 'BASIC',
    paidTag: 'FULL ACCESS',
    visual: (isPaid: boolean) => (
      <div className="flex flex-col items-center gap-3">
        {/* Mini profile mockup with Vibe Sync badge */}
        <div className="w-full max-w-[220px] bg-card rounded-2xl border border-border p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-muted" />
            <div>
              <div className="h-2.5 w-16 bg-muted rounded-full" />
              <div className="h-2 w-10 bg-muted rounded-full mt-1" />
            </div>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="flex items-center justify-center gap-1.5 bg-accent rounded-full px-3 py-1.5 mx-auto w-fit"
          >
            <Sparkles size={12} className="text-hinge-gold" />
            <span className="text-[11px] font-semibold text-foreground">
              {isPaid ? 'Shared Conversation Style' : 'Vibe Sync ✓'}
            </span>
          </motion.div>
        </div>
        <p className="text-[11px] text-muted-foreground text-center max-w-[200px]">
          {isPaid
            ? 'See exactly how you match — conversation style, reply pace, and depth.'
            : 'Badges appear on compatible profiles. Upgrade for detailed labels.'}
        </p>
      </div>
    ),
  },
  {
    id: 'bridge-builder',
    title: 'Bridge Builder',
    icon: <Heart size={28} className="text-hinge-rose" />,
    color: 'hsl(340, 70%, 50%)',
    freeTag: '2 PROFILES',
    paidTag: 'UNLIMITED',
    visual: (isPaid: boolean) => (
      <div className="flex flex-col items-center gap-3">
        {/* Mini prompt with rose glow */}
        <div className="w-full max-w-[220px] relative">
          <motion.div
            initial={{ boxShadow: '0 0 0px 0px hsla(340, 70%, 50%, 0)' }}
            animate={{
              boxShadow: [
                '0 0 10px 2px hsla(340, 70%, 50%, 0.2)',
                '0 0 20px 6px hsla(340, 70%, 50%, 0.4)',
                '0 0 10px 2px hsla(340, 70%, 50%, 0.2)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-card rounded-2xl p-4 border border-border"
            style={{ borderColor: 'hsla(340, 70%, 50%, 0.4)' }}
          >
            <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
              A life goal of mine
            </p>
            <p className="text-foreground font-hinge-serif text-sm leading-relaxed">
              Travel to Japan and learn to cook authentic ramen 🍜
            </p>
            {/* Floating stars */}
            {['top-1 left-2', 'top-0 right-4', 'bottom-2 left-6', 'bottom-1 right-2', 'top-3 right-1'].map((pos, i) => (
              <motion.span
                key={i}
                className={`absolute ${pos} text-hinge-rose text-[10px] pointer-events-none`}
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.7, 1.2, 0.7] }}
                transition={{ duration: 1.5 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
              >
                ✦
              </motion.span>
            ))}
          </motion.div>
          {/* Ghost text preview */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-2 bg-muted rounded-xl px-3 py-2"
          >
            <p className="text-[10px] text-muted-foreground italic">
              "I'd love to swap ramen spots — have you tried making it from scratch?"
            </p>
          </motion.div>
        </div>
        <p className="text-[11px] text-muted-foreground text-center max-w-[200px]">
          {isPaid
            ? 'Every matching prompt glows with AI-curated conversation starters.'
            : 'Matching prompts glow pink with ✦ stars and AI openers. Free on 2 profiles.'}
        </p>
      </div>
    ),
  },
  {
    id: 'bandwidth',
    title: 'Bandwidth',
    icon: <Radio size={28} className="text-primary" />,
    color: 'hsl(var(--primary))',
    freeTag: 'HIDDEN',
    paidTag: 'VISIBLE',
    visual: (isPaid: boolean) => (
      <div className="flex flex-col items-center gap-3">
        {/* Status pills demo */}
        <div className="flex flex-col gap-2 w-full max-w-[220px]">
          {[
            { label: 'Ready to Connect', active: true },
            { label: 'Focusing on Matches', active: false },
            { label: 'Weekend Spark ✨', active: false },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * i }}
              className={`px-4 py-2 rounded-full text-xs font-medium text-center transition-all ${
                s.active
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {s.label}
            </motion.div>
          ))}
        </div>
        <p className="text-[11px] text-muted-foreground text-center max-w-[200px]">
          {isPaid
            ? 'Your status is visible. See when others are most open to connecting.'
            : 'Set your availability. Upgrade to show it on your profile and see others\'.'}
        </p>
      </div>
    ),
  },
  {
    id: 'effort-insurance',
    title: 'Effort Insurance',
    icon: <Undo2 size={28} className="text-primary" />,
    color: 'hsl(var(--primary))',
    freeTag: '1 REFUND',
    paidTag: 'UNLIMITED',
    visual: (isPaid: boolean) => (
      <div className="flex flex-col items-center gap-3">
        {/* Refund animation */}
        <div className="w-full max-w-[220px] bg-card rounded-2xl border border-border p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              animate={{ rotate: [0, -20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            >
              <Undo2 size={20} className="text-primary" />
            </motion.div>
            <div>
              <p className="text-xs font-semibold text-foreground">Like refunded!</p>
              <p className="text-[10px] text-muted-foreground">No response after 14 days</p>
            </div>
          </div>
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="h-1 rounded-full bg-primary"
          />
          <div className="flex justify-between mt-1.5">
            <span className="text-[9px] text-muted-foreground">Sent</span>
            <span className="text-[9px] text-muted-foreground">14 days</span>
          </div>
        </div>
        <p className="text-[11px] text-muted-foreground text-center max-w-[200px]">
          {isPaid
            ? 'Unlimited refunds. Unread likes are returned automatically after 14 days.'
            : 'Get your like back if it goes unread. Free users get 1 refund — upgrade for unlimited.'}
        </p>
      </div>
    ),
  },
];

export function FeaturesWalkthrough({ isPaid }: FeaturesWalkthroughProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const feature = FEATURES[currentIndex];

  const goTo = (next: number) => {
    setDirection(next > currentIndex ? 1 : -1);
    setCurrentIndex(next);
  };

  const prev = () => goTo((currentIndex - 1 + FEATURES.length) % FEATURES.length);
  const next = () => goTo((currentIndex + 1) % FEATURES.length);

  return (
    <div className="px-4 pt-2 pb-24">
      {/* Carousel */}
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border min-h-[360px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={feature.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="flex flex-col items-center px-6 pt-6 pb-4"
          >
            {/* Icon + Title */}
            <div className="mb-1">{feature.icon}</div>
            <h3 className="font-hinge-serif text-lg font-semibold text-foreground mb-1">{feature.title}</h3>
            <span
              className={`text-[9px] font-bold px-2 py-0.5 rounded-full mb-4 ${
                isPaid
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {isPaid ? feature.paidTag : feature.freeTag}
            </span>

            {/* Visual Demo */}
            {feature.visual(isPaid)}

            {/* Upgrade CTA for free */}
            {!isPaid && (
              <button className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity">
                <Crown size={13} />
                Upgrade to unlock
              </button>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-muted transition-colors"
        >
          <ChevronLeft size={16} className="text-foreground" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-muted transition-colors"
        >
          <ChevronRight size={16} className="text-foreground" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {FEATURES.map((f, i) => (
          <button
            key={f.id}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex ? 'bg-primary w-5' : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
