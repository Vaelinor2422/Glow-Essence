import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { useRouter } from '@/context/RouterContext';

export function BlogPage() {
  const { navigate } = useRouter();

  return (
    <div className="container-page py-12 lg:py-16">
      <div className="flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl font-semibold text-brand-ink sm:text-5xl"
        >
          Blog
        </motion.h1>
        <p className="mt-3 max-w-md text-sm text-brand-stone">
          Skincare education, rituals, and stories from the Glow Essence team.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
            className="group relative cursor-pointer overflow-hidden rounded-[2rem] shadow-card"
            onClick={() => navigate({ name: 'blog-detail', blogId: post.id })}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-pink/20 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span className="font-serif text-4xl font-semibold opacity-80">{post.number}</span>
                <span className="mt-2 inline-block w-fit rounded-full bg-white/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide backdrop-blur">
                  {post.category}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85 line-clamp-2">{post.excerpt}</p>
                <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-transform group-hover:translate-x-1">
                  See More <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 rounded-full bg-brand-pink px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-accent"
        >
          View All <ArrowRight size={16} />
        </motion.button>
      </div>
    </div>
  );
}
