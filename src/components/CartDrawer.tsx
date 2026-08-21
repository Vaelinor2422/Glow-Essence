import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useRouter } from '@/context/RouterContext';
import { formatIDR } from '@/lib/format';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal, count } = useCart();
  const { navigate } = useRouter();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-ink/40 backdrop-blur-sm"
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-float"
          >
            <div className="flex items-center justify-between border-b border-brand-lightPink px-6 py-5">
              <div className="flex items-center gap-2.5">
                <ShoppingBag size={20} className="text-brand-pink" />
                <h2 className="text-base font-semibold">Your Cart ({count})</h2>
              </div>
              <button onClick={closeCart} className="rounded-full p-2 text-brand-stone transition-colors hover:bg-brand-lightPink">
                <X size={20} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-lightPink">
                  <ShoppingBag size={28} className="text-brand-pink" />
                </div>
                <p className="text-sm text-brand-stone">Your cart is empty.</p>
                <button
                  onClick={() => {
                    closeCart();
                    navigate({ name: 'product' });
                  }}
                  className="mt-2 rounded-full bg-brand-pink px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      className="flex gap-4"
                    >
                      <img src={item.product.image} alt={item.product.name} className="h-20 w-20 rounded-2xl object-cover" />
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-medium leading-snug">{item.product.name}</p>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-brand-stone transition-colors hover:text-red-500"
                            aria-label="Remove"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-brand-stone">{formatIDR(item.product.price)}</p>
                        <div className="mt-auto flex items-center gap-3">
                          <div className="flex items-center rounded-full border border-brand-lightPink">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="flex h-7 w-7 items-center justify-center text-brand-stone hover:text-brand-pink"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="flex h-7 w-7 items-center justify-center text-brand-stone hover:text-brand-pink"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <span className="text-sm font-semibold text-brand-ink">
                            {formatIDR(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-brand-lightPink px-6 py-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-brand-stone">Subtotal</span>
                    <span className="text-lg font-semibold">{formatIDR(subtotal)}</span>
                  </div>
                  <button className="w-full rounded-full bg-brand-pink py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-accent">
                    Checkout
                  </button>
                  <button
                    onClick={closeCart}
                    className="mt-2 w-full rounded-full py-2.5 text-sm font-medium text-brand-stone transition-colors hover:text-brand-pink"
                  >
                    Continue Shopping
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
