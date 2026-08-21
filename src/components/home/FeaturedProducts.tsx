import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { featuredProducts } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { useRouter } from '@/context/RouterContext';

export function FeaturedProducts() {
  const { navigate } = useRouter();

  return (
    <section className="container-page mt-12 lg:mt-16">
      <div className="flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink"
        >
          Our Collection
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-serif text-3xl font-semibold text-brand-ink sm:text-4xl"
        >
          Featured Products
        </motion.h2>
        <p className="mt-3 max-w-md text-sm text-brand-stone">
          Thoughtfully formulated essentials your skin will love, every single day.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {featuredProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate({ name: 'product' })}
          className="inline-flex items-center gap-2 rounded-full bg-brand-pink px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-accent"
        >
          View All <ArrowRight size={16} />
        </motion.button>
      </div>
    </section>
  );
}
