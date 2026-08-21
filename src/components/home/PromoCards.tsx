import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from '@/context/RouterContext';

export function PromoCards() {
  const { navigate } = useRouter();

  return (
    <section className="container-page mt-10 lg:mt-14">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Card 1 — cyan */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] bg-brand-cyan px-7 py-8 sm:px-9 sm:py-10"
        >
          <div className="relative z-10 max-w-[60%]">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-ink/70">New Product</p>
            <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-brand-ink sm:text-3xl">
              Harlette Hydration Emulsion
            </h3>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate({ name: 'product' })}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-pink"
            >
              Shop Now <ArrowRight size={15} />
            </motion.button>
          </div>
          {/* Product bottle */}
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            src="https://images.pexels.com/photos/8101534/pexels-photo-8101534.jpeg?auto=compress&cs=tinysrgb&h=500&w=400"
            alt="Hydration emulsion"
            className="absolute -bottom-2 right-2 h-[88%] w-auto rounded-2xl object-cover shadow-card sm:right-6"
          />
          {/* Bubbles */}
          <div className="pointer-events-none absolute right-1/2 top-6 h-3 w-3 rounded-full bg-white/50" />
          <div className="pointer-events-none absolute right-1/3 top-16 h-5 w-5 rounded-full bg-white/40" />
          <div className="pointer-events-none absolute bottom-1/3 left-8 h-4 w-4 rounded-full bg-white/40" />
        </motion.div>

        {/* Card 2 — mint */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
          className="relative overflow-hidden rounded-[2rem] bg-brand-mint px-7 py-8 sm:px-9 sm:py-10"
        >
          <div className="relative z-10 max-w-[62%]">
            <p className="text-xs font-medium text-brand-ink/70">Create calm and moisturized skin overnight</p>
            <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-brand-ink sm:text-3xl">
              MASQUE DE NUIT CICA
            </h3>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-bold text-brand-pink">
              50% OFF
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate({ name: 'product' })}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-pink"
            >
              Shop Now <ArrowRight size={15} />
            </motion.button>
          </div>
          <motion.img
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            src="https://images.pexels.com/photos/6977944/pexels-photo-6977944.jpeg?auto=compress&cs=tinysrgb&h=500&w=400"
            alt="Overnight cica mask"
            className="absolute -bottom-2 right-2 h-[92%] w-auto rounded-2xl object-cover shadow-card sm:right-6"
          />
        </motion.div>
      </div>
    </section>
  );
}
