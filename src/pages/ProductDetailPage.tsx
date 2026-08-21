import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Minus, Plus, ShoppingBag, Zap } from 'lucide-react';
import { getProductById, allProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useRouter } from '@/context/RouterContext';
import { formatIDR } from '@/lib/format';
import { Rating } from '@/components/Rating';
import { ProductCard } from '@/components/ProductCard';

export function ProductDetailPage({ productId }: { productId: string }) {
  const product = getProductById(productId);
  const { navigate } = useRouter();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<'information' | 'ingredients' | 'reviews'>('information');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="container-page py-24 text-center">
        <p className="text-sm text-brand-stone">Product not found.</p>
        <button onClick={() => navigate({ name: 'product' })} className="mt-4 text-sm font-semibold text-brand-pink">
          Back to products
        </button>
      </div>
    );
  }

  const related = allProducts.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const fallbackRelated = allProducts.filter((p) => p.id !== product.id).slice(0, 4);
  const relatedProducts = related.length >= 2 ? related : fallbackRelated;

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="container-page py-10 lg:py-14">
      <button
        onClick={() => navigate({ name: 'product' })}
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand-stone transition-colors hover:text-brand-pink"
      >
        <ArrowLeft size={16} /> Back to products
      </button>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2rem] bg-brand-lightPink"
        >
          <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
          {product.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-brand-pink shadow-soft">
              {product.badge}
            </span>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-pink">{product.category}</span>
          <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight text-brand-ink sm:text-4xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3">
            <Rating value={product.rating} size={16} />
            <span className="text-sm text-brand-stone">{product.rating} · {product.reviews} reviews</span>
          </div>
          <p className="mt-5 text-2xl font-semibold text-brand-ink">{formatIDR(product.price)}</p>
          <p className="mt-5 text-sm leading-relaxed text-brand-stone">{product.description}</p>

          {/* Quantity + actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-full border border-brand-lightPink">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="flex h-10 w-10 items-center justify-center text-brand-stone hover:text-brand-pink">
                <Minus size={16} />
              </button>
              <span className="w-10 text-center text-sm font-semibold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="flex h-10 w-10 items-center justify-center text-brand-stone hover:text-brand-pink">
                <Plus size={16} />
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleAdd}
              className="inline-flex items-center gap-2 rounded-full bg-brand-pink px-7 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-accent"
            >
              {added ? <Check size={16} /> : <ShoppingBag size={16} />}
              {added ? 'Added!' : 'Add to Cart'}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleAdd}
              className="inline-flex items-center gap-2 rounded-full border border-brand-pink/60 px-7 py-3 text-sm font-semibold text-brand-pink transition-colors hover:bg-brand-lightPink"
            >
              <Zap size={16} /> Buy Now
            </motion.button>
          </div>

          {/* Tabs */}
          <div className="mt-10 border-b border-brand-lightPink">
            {(['information', 'ingredients', 'reviews'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative mr-7 pb-3 text-sm font-medium capitalize transition-colors ${
                  tab === t ? 'text-brand-ink' : 'text-brand-stone hover:text-brand-pink'
                }`}
              >
                {t}
                {tab === t && (
                  <motion.span layoutId="tab-underline" className="absolute -bottom-px left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-brand-pink to-brand-accent" />
                )}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm leading-relaxed text-brand-stone">
            {tab === 'information' && <p>{product.information}</p>}
            {tab === 'ingredients' && <p>{product.ingredients}</p>}
            {tab === 'reviews' && (
              <div className="space-y-4">
                {[
                  { name: 'Sara P.', text: 'Lightweight and absorbed quickly. My skin felt calm and hydrated all day.' },
                  { name: 'Lia M.', text: 'Lovely texture and the packaging feels premium. Would repurchase.' },
                ].map((r) => (
                  <div key={r.name} className="rounded-2xl bg-brand-lightPink p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-brand-ink">{r.name}</p>
                      <Rating value={5} size={12} />
                    </div>
                    <p className="mt-1.5 text-sm text-brand-stone">{r.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Related */}
      <div className="mt-24">
        <h2 className="font-serif text-2xl font-semibold text-brand-ink sm:text-3xl">You May Also Like</h2>
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {relatedProducts.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
