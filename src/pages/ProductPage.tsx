import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { catalogProducts, productCategories, type ProductCategory } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

type Filter = 'All' | ProductCategory;

const extraCategories: ProductCategory[] = ['More'];

export function ProductPage() {
  const [active, setActive] = useState<Filter>('All');
  const [moreOpen, setMoreOpen] = useState(false);

  const visibleCategories = productCategories.filter((c) => c !== 'More');
  const filtered = active === 'All' ? catalogProducts : catalogProducts.filter((p) => p.category === active);

  const setFilter = (f: Filter) => {
    setActive(f);
    setMoreOpen(false);
  };

  return (
    <div className="container-page py-12 lg:py-16">
      <div className="flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl font-semibold text-brand-ink sm:text-5xl"
        >
          Our Product
        </motion.h1>
        <p className="mt-3 max-w-md text-sm text-brand-stone">
          Explore our full collection of clean, effective skincare essentials.
        </p>
      </div>

      {/* Category filter */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {visibleCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              active === cat ? 'text-brand-ink' : 'text-brand-stone hover:text-brand-pink'
            }`}
          >
            {cat}
            {active === cat && (
              <motion.span
                layoutId="cat-underline"
                className="absolute -bottom-1 left-1/2 h-[3px] w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-pink to-brand-accent"
              />
            )}
          </button>
        ))}
        <div className="relative">
          <button
            onClick={() => setMoreOpen((v) => !v)}
            className={`flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              active === 'More' ? 'text-brand-ink' : 'text-brand-stone hover:text-brand-pink'
            }`}
          >
            More <ChevronDown size={14} className={moreOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
            {active === 'More' && (
              <motion.span
                layoutId="cat-underline"
                className="absolute -bottom-1 left-1/2 h-[3px] w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-pink to-brand-accent"
              />
            )}
          </button>
          {moreOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute left-1/2 top-12 z-10 w-32 -translate-x-1/2 overflow-hidden rounded-2xl border border-brand-lightPink bg-white py-1 shadow-soft"
            >
              {extraCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className="block w-full px-4 py-2 text-left text-sm text-brand-ink hover:bg-brand-lightPink hover:text-brand-pink"
                >
                  {c}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Grid */}
      <motion.div
        key={active}
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
        className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4"
      >
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-sm text-brand-stone">No products in this category yet.</p>
      )}
    </div>
  );
}
