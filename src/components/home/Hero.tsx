import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from '@/context/RouterContext';

export function Hero() {
  const { navigate } = useRouter();

  return (
    <section className="container-page pt-4 lg:pt-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-lightPink via-brand-softPink/60 to-brand-lightPink">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-brand-cyan/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/3 h-40 w-40 rounded-full bg-brand-softPink/70 blur-3xl" />

        <div className="relative grid grid-cols-1 items-center gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-4 lg:px-8 lg:py-10">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-pink backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-pink" />
              Special Collaboration!
            </span>

            <h1 className="mt-4 font-serif text-[2.4rem] leading-[1.1] tracking-tight text-brand-ink sm:text-4xl lg:text-[3.2rem]">
              <span className="font-medium">Elegant Makeup</span>
              <br />
              <span className="font-bold">For Every Moment</span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-stone sm:text-[15px]">
              Experience the power of advanced skincare technology formulated to hydrate, repair, and rejuvenate your skin for a visibly smoother, healthier, and more radiant complexion.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate({ name: 'product' })}
                className="inline-flex items-center gap-2 rounded-full bg-brand-pink px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-accent"
              >
                Shop Now <ArrowRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate({ name: 'about' })}
                className="inline-flex items-center gap-2 rounded-full border border-brand-pink/60 bg-white/60 px-7 py-3.5 text-sm font-semibold text-brand-pink backdrop-blur transition-colors hover:bg-white"
              >
                View
              </motion.button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-card lg:aspect-[4/5]">
              <img
                src="https://images.pexels.com/photos/9774868/pexels-photo-9774868.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                alt="Model with skincare products"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-4 bottom-8 hidden rounded-2xl bg-white/90 px-4 py-3 shadow-soft backdrop-blur sm:block"
            >
              <p className="text-[11px] font-medium uppercase tracking-wide text-brand-stone">New In</p>
              <p className="text-sm font-semibold text-brand-ink">Raspberry Glow Serum</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-3 top-10 hidden h-14 w-14 items-center justify-center rounded-full bg-brand-cyan/80 shadow-soft backdrop-blur sm:flex"
            >
              <span className="text-xs font-semibold text-brand-ink">SPF 50+</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
