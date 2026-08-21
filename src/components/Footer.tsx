import { Flower2, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { useRouter } from '@/context/RouterContext';

const columns: { title: string; links: string[] }[] = [
  { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Sustainability'] },
  { title: 'Products', links: ['Face Care', 'Body Care', 'Serum & Oils', 'Best Sellers'] },
  { title: 'Support', links: ['FAQs', 'Blog', 'Contact Us', 'Shipping & Returns'] },
];

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-to-br from-brand-lightPink via-brand-softPink/40 to-brand-lightPink">
      {/* Soft sakura decorations */}
      <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-brand-softPink/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-48 w-48 rounded-full bg-brand-cyan/30 blur-3xl" />

      <div className="container-page relative grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/70">
              <Flower2 size={18} className="text-brand-pink" />
            </span>
            <span className="text-lg font-semibold">Glow Essence</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-stone">
            Clean, mindful skincare crafted to bring out your natural radiance. Cruelty-free, gently effective, and made for every day.
          </p>
          <div className="mt-5 flex items-center gap-2.5">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-brand-pink transition-transform hover:scale-110 hover:bg-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-brand-ink">{col.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      if (link === 'About Us') navigate({ name: 'about' });
                      else if (link === 'Blog') navigate({ name: 'blog' });
                      else if (link === 'Contact Us') navigate({ name: 'contact' });
                    }}
                    className="text-sm text-brand-stone transition-colors hover:text-brand-pink"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/50">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-brand-stone sm:flex-row">
          <p>© 2026 Glow Essence. All rights reserved.</p>
          <p>Crafted with care for skin and planet.</p>
        </div>
      </div>
    </footer>
  );
}
