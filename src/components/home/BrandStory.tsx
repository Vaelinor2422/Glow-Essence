import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from '@/context/RouterContext';

export function BrandStory() {
  const { navigate } = useRouter();

  return (
    <section className="container-page mt-20 lg:mt-28">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-lightPink via-brand-softPink/50 to-brand-lightPink">
        <div className="pointer-events-none absolute -right-10 top-10 h-56 w-56 rounded-full bg-brand-cyan/30 blur-3xl" />

        <div className="relative grid grid-cols-1 items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-20">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">Brand Story</span>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-brand-ink sm:text-4xl lg:text-5xl">
              Crafted for
              <br />
              Your Routine
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-brand-stone sm:text-[15px]">
              <p>
                We believe that skincare should be simple, effective, and mindful. Our vision is to bring out natural beauty that blends seamlessly with your daily life. Through clean and transparent formulations, we are committed to providing skincare that not only looks good but also feels good.
              </p>
              <p>
                We craft our products with carefully selected natural ingredients that are gentle yet effective for all skin types. Committed to being cruelty-free, we never test on animals and avoid harmful chemicals. At Glow Essence, we believe in clean beauty—natural, ethical, and kind to both your skin and the planet.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate({ name: 'about' })}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-pink px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-accent"
            >
              Read More <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card">
              <img
                src="https://images.pexels.com/photos/9774785/pexels-photo-9774785.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                alt="Brand story model"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floral accent */}
            <motion.div
              animate={{ rotate: [0, 8, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-5 -top-5 flex h-16 w-16 items-center justify-center rounded-full bg-white/80 shadow-soft backdrop-blur"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF9FAF" strokeWidth="1.4" strokeLinecap="round">
                <path d="M12 12c0-3 2-5 2-5s2 2 2 5-2 5-2 5-2-2-2-5Z" />
                <path d="M12 12c3 0 5 2 5 2s-2 2-5 2-5-2-5-2 2-2 5-2Z" />
                <path d="M12 12c0 3-2 5-2 5s-2-2-2-5 2-5 2-5 2 2 2 5Z" />
                <path d="M12 12c-3 0-5-2-5-2s2-2 5-2 5 2 5 2-2 2-5 2Z" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
