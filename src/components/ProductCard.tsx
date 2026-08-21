import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useRouter } from '@/context/RouterContext';
import { formatIDR } from '@/lib/format';
import { Rating } from '@/components/Rating';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();
  const { navigate } = useRouter();

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.4), ease: 'easeOut' }}
      className="group flex flex-col"
    >
      <button
        onClick={() => navigate({ name: 'product-detail', productId: product.id })}
        className="relative block aspect-square w-full overflow-hidden rounded-3xl bg-brand-lightPink"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-brand-pink shadow-soft backdrop-blur">
            {product.badge}
          </span>
        )}
      </button>

      <div className="mt-4 flex flex-col gap-1.5 px-1">
        <Rating value={product.rating} reviews={product.reviews} showCount />
        <button
          onClick={() => navigate({ name: 'product-detail', productId: product.id })}
          className="text-left text-[15px] font-medium leading-snug text-brand-ink transition-colors hover:text-brand-pink"
        >
          {product.name}
        </button>
        <p className="text-sm font-semibold text-brand-ink">{formatIDR(product.price)}</p>

        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={() => addToCart(product)}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-lightPink px-4 py-2 text-xs font-semibold text-brand-pink transition-all hover:scale-[1.03] hover:bg-brand-softPink active:scale-95"
          >
            <ShoppingCart size={14} strokeWidth={2.2} />
            Shop Now
          </button>
        </div>
      </div>
    </motion.article>
  );
}
