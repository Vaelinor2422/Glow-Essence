import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useRouter, type Route } from '@/context/RouterContext';
import { allProducts } from '@/data/products';

const navItems: { label: string; route: Route }[] = [
  { label: 'Home', route: { name: 'home' } },
  { label: 'Product', route: { name: 'product' } },
  { label: 'Blog', route: { name: 'blog' } },
  { label: 'About Us', route: { name: 'about' } },
  { label: 'Contact', route: { name: 'contact' } },
];

export function Navbar() {
  const { route, navigate } = useRouter();
  const { count, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const userRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (userRef.current && !userRef.current.contains(e.target as Node)) setUserOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const activeName = route.name === 'product-detail' ? 'product' : route.name === 'blog-detail' ? 'blog' : route.name;

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-brand-lightPink bg-white/90 backdrop-blur-md">
        <div className="container-page flex h-[72px] items-center justify-between gap-4">
          {/* Logo */}
          <button onClick={() => navigate({ name: 'home' })} className="flex items-center gap-2.5">
            <Logo />
            <span className="text-lg font-semibold tracking-tight text-brand-ink">
              Glow <span className="text-brand-pink">Essence</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.route)}
                className={`relative text-sm font-medium transition-colors hover:text-brand-pink ${
                  activeName === item.label.toLowerCase() ||
                  (item.label === 'Product' && activeName === 'product') ||
                  (item.label === 'Blog' && activeName === 'blog')
                    ? 'text-brand-ink'
                    : 'text-brand-stone'
                }`}
              >
                {item.label}
                {(activeName === item.label.toLowerCase() ||
                  (item.label === 'Product' && activeName === 'product') ||
                  (item.label === 'Blog' && activeName === 'blog')) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-1/2 h-[3px] w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-pink to-brand-accent"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            <IconButton label="Search" onClick={() => setSearchOpen(true)}>
              <Search size={19} strokeWidth={2} />
            </IconButton>
            <IconButton label="Cart" onClick={openCart}>
              <div className="relative">
                <ShoppingCart size={19} strokeWidth={2} />
                {count > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-pink px-1 text-[10px] font-semibold text-white">
                    {count}
                  </span>
                )}
              </div>
            </IconButton>

            <div ref={userRef} className="relative hidden sm:block">
              <IconButton label="Account" onClick={() => setUserOpen((v) => !v)}>
                <User size={19} strokeWidth={2} />
                <ChevronDown size={13} strokeWidth={2.2} className="mt-0.5 text-brand-stone" />
              </IconButton>
              <AnimatePresence>
                {userOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-12 w-44 overflow-hidden rounded-2xl border border-brand-lightPink bg-white py-2 shadow-soft"
                  >
                    {['Profile', 'Orders', 'Wishlist', 'Sign In'].map((label) => (
                      <button
                        key={label}
                        onClick={() => setUserOpen(false)}
                        className="block w-full px-4 py-2 text-left text-sm text-brand-ink transition-colors hover:bg-brand-lightPink hover:text-brand-pink"
                      >
                        {label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full text-brand-ink transition-colors hover:bg-brand-lightPink lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-brand-ink/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed right-0 top-0 z-50 flex h-full w-[80%] max-w-xs flex-col bg-white p-6 lg:hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Logo />
                  <span className="font-semibold">Glow Essence</span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="rounded-full p-2 hover:bg-brand-lightPink">
                  <X size={20} />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      navigate(item.route);
                      setMobileOpen(false);
                    }}
                    className={`rounded-xl px-4 py-3 text-left text-base font-medium transition-colors hover:bg-brand-lightPink ${
                      activeName === item.label.toLowerCase() ? 'text-brand-pink' : 'text-brand-ink'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2 border-t border-brand-lightPink pt-4 text-sm text-brand-stone">
                <button className="rounded-xl px-4 py-2.5 text-left hover:bg-brand-lightPink">Profile</button>
                <button className="rounded-xl px-4 py-2.5 text-left hover:bg-brand-lightPink">Orders</button>
                <button className="rounded-xl px-4 py-2.5 text-left hover:bg-brand-lightPink">Wishlist</button>
                <button className="rounded-xl px-4 py-2.5 text-left font-semibold text-brand-pink hover:bg-brand-lightPink">Sign In</button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} onNavigate={(p) => {
        navigate({ name: 'product-detail', productId: p.id });
        setSearchOpen(false);
      }} />
    </>
  );
}

function IconButton({ children, label, onClick }: { children: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="flex h-10 items-center justify-center gap-0.5 rounded-full px-2.5 text-brand-ink transition-colors hover:bg-brand-lightPink hover:text-brand-pink"
    >
      {children}
    </button>
  );
}

function Logo() {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-lightPink to-brand-softPink">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF9FAF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c0-3 2-5 2-5s2 2 2 5-2 5-2 5-2-2-2-5Z" />
        <path d="M12 12c3 0 5 2 5 2s-2 2-5 2-5-2-5-2 2-2 5-2Z" />
        <path d="M12 12c0 3-2 5-2 5s-2-2-2-5 2-5 2-5 2 2 2 5Z" />
        <path d="M12 12c-3 0-5-2-5-2s2-2 5-2 5 2 5 2-2 2-5 2Z" />
        <circle cx="12" cy="12" r="1.4" fill="#F58BFF" stroke="none" />
      </svg>
    </span>
  );
}

function SearchOverlay({ open, onClose, onNavigate }: { open: boolean; onClose: () => void; onNavigate: (p: { id: string }) => void }) {
  const [query, setQuery] = useState('');
  const results = query.trim()
    ? allProducts.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-white/70 px-4 pt-24 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-brand-lightPink px-5 py-4">
              <Search size={20} className="text-brand-pink" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-brand-stone"
              />
              <button onClick={onClose} className="rounded-full p-1 text-brand-stone hover:bg-brand-lightPink">
                <X size={18} />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {query.trim() === '' ? (
                <p className="px-4 py-6 text-center text-sm text-brand-stone">Type to search our products</p>
              ) : results.length === 0 ? (
                <p className="px-4 py-6 text-center text-sm text-brand-stone">No products found for "{query}"</p>
              ) : (
                results.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => onNavigate(p)}
                    className="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-colors hover:bg-brand-lightPink"
                  >
                    <img src={p.image} alt={p.name} className="h-12 w-12 rounded-xl object-cover" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-brand-ink">{p.name}</p>
                      <p className="text-xs text-brand-stone">{p.category}</p>
                    </div>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
