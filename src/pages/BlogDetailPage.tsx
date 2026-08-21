import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { getBlogById, blogPosts } from '@/data/blog';
import { useRouter } from '@/context/RouterContext';

export function BlogDetailPage({ blogId }: { blogId: string }) {
  const post = getBlogById(blogId);
  const { navigate } = useRouter();

  if (!post) {
    return (
      <div className="container-page py-24 text-center">
        <p className="text-sm text-brand-stone">Article not found.</p>
        <button onClick={() => navigate({ name: 'blog' })} className="mt-4 text-sm font-semibold text-brand-pink">
          Back to blog
        </button>
      </div>
    );
  }

  const related = blogPosts.filter((b) => b.id !== post.id).slice(0, 2);

  return (
    <div>
      {/* Hero image */}
      <div className="relative h-[44vh] min-h-[300px] w-full overflow-hidden">
        <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-brand-ink/20 to-transparent" />
      </div>

      <article className="container-page -mt-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl rounded-[2rem] bg-white p-7 shadow-card sm:p-10"
        >
          <button
            onClick={() => navigate({ name: 'blog' })}
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-stone transition-colors hover:text-brand-pink"
          >
            <ArrowLeft size={16} /> Back to blog
          </button>

          <span className="inline-block rounded-full bg-brand-lightPink px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-pink">
            {post.category}
          </span>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-brand-ink sm:text-4xl">{post.title}</h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-brand-stone">
            <span className="inline-flex items-center gap-1.5"><User size={13} /> {post.author}</span>
            <span className="inline-flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
            <span className="inline-flex items-center gap-1.5"><Clock size={13} /> {post.readTime}</span>
          </div>

          <div className="mt-7 space-y-5 text-[15px] leading-[1.8] text-brand-ink/80">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </motion.div>

        {/* Related */}
        <div className="mx-auto mt-16 max-w-5xl">
          <h2 className="font-serif text-2xl font-semibold text-brand-ink">Related Articles</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {related.map((r, i) => (
              <motion.article
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => navigate({ name: 'blog-detail', blogId: r.id })}
                className="group flex cursor-pointer gap-4 overflow-hidden rounded-3xl bg-brand-lightPink p-3 transition-shadow hover:shadow-soft"
              >
                <img src={r.image} alt={r.title} className="h-28 w-28 rounded-2xl object-cover" />
                <div className="flex flex-col justify-center">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-pink">{r.category}</span>
                  <h3 className="mt-1 font-serif text-lg font-semibold leading-tight text-brand-ink">{r.title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-stone group-hover:text-brand-pink">
                    Read more <ArrowRight size={13} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
