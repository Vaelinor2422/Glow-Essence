import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from '@/context/RouterContext';

export function AboutPage() {
  const { navigate } = useRouter();

  return (
    <div className="container-page py-12 lg:py-16">
      {/* Top: images left, content right */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-5"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-card">
            <img
              src="https://images.pexels.com/photos/15831825/pexels-photo-15831825.jpeg?auto=compress&cs=tinysrgb&h=520&w=940"
              alt="Skincare research lab"
              className="h-64 w-full object-cover sm:h-72"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="overflow-hidden rounded-[1.75rem] shadow-card">
              <img
                src="https://images.pexels.com/photos/13068364/pexels-photo-13068364.jpeg?auto=compress&cs=tinysrgb&h=440&w=620"
                alt="Glow Essence store"
                className="h-44 w-full object-cover sm:h-52"
              />
            </div>
            <div className="overflow-hidden rounded-[1.75rem] shadow-card">
              <img
                src="https://images.pexels.com/photos/8837730/pexels-photo-8837730.jpeg?auto=compress&cs=tinysrgb&h=440&w=620"
                alt="Team workspace"
                className="h-44 w-full object-cover sm:h-52"
              />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <h1 className="font-serif text-4xl font-semibold text-brand-pink sm:text-5xl">About Us</h1>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-brand-ink">Vision</h2>
            <p className="mt-2 text-sm leading-relaxed text-brand-stone">
              To become the leading innovator in skincare solutions that empower confidence and natural beauty across the world.
            </p>
          </div>

          <div className="mt-7">
            <h2 className="text-lg font-semibold text-brand-ink">Mission</h2>
            <ol className="mt-2 space-y-2 text-sm leading-relaxed text-brand-stone">
              <li className="flex gap-3"><span className="text-brand-pink">1.</span> Deliver high-quality, safe, and eco-friendly skincare products.</li>
              <li className="flex gap-3"><span className="text-brand-pink">2.</span> Promote self-care and skin wellness through education and innovation.</li>
              <li className="flex gap-3"><span className="text-brand-pink">3.</span> Empower communities by supporting sustainability and ethical practices.</li>
            </ol>
          </div>

          <div className="mt-7">
            <h2 className="text-lg font-semibold text-brand-ink">Company History</h2>
            <p className="mt-2 text-sm leading-relaxed text-brand-stone">
              Founded in 2017, Glow Essence began as a small home-based skincare initiative focused on natural, organic ingredients. Driven by passion and trust, it grew rapidly into a trusted brand with a loyal customer base. Today, Glow Essence continues to innovate while staying true to its roots—enhancing beauty with honesty, science, and nature.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate({ name: 'contact' })}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-pink px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-accent"
          >
            Show All <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
