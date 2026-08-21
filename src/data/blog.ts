export interface BlogPost {
  id: string;
  number: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'glow-up-5-steps',
    number: '01',
    category: 'Routine',
    title: 'Glow Up in 5 Steps',
    excerpt: 'A simple, science-backed evening routine that brings out your natural radiance without overwhelming your skin.',
    image: 'https://images.pexels.com/photos/29864944/pexels-photo-29864944.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Amara Lee',
    date: 'Aug 12, 2026',
    readTime: '5 min read',
    content: [
      'Great skin rarely comes from a single hero product. It comes from a handful of consistent steps, done gently, every single day. Here is a five-step evening routine we keep coming back to.',
      'Step one is a mindful cleanse. Start with a pH-balanced cleanser to lift the day away. Massage for a full sixty seconds, paying attention to the hairline and jaw. Skin that is properly cleansed absorbs everything that follows far more effectively.',
      'Step two is a hydrating toner or essence. Pressed into damp skin, it preps the barrier and makes subsequent serums feel weightless. Look for hyaluronic acid and birch sap for a comfortable, cushioned finish.',
      'Step three is the treatment layer. This is where you address your specific concern: a brightening vitamin C serum in the morning, or a calming niacinamide and peptide serum at night. Less is more, two to three drops is plenty.',
      'Step four is moisture. A ceramide-rich moisturizer seals everything in and reinforces the skin barrier overnight. Step five, the most often skipped, is SPF the next morning. No routine is complete without daily sun protection.',
    ],
  },
  {
    id: 'skincare-myths-busted',
    number: '02',
    category: 'Education',
    title: 'Skincare Myths Busted',
    excerpt: 'From pores that open and close to the idea that natural always means gentle, we separate fact from fiction.',
    image: 'https://images.pexels.com/photos/27676711/pexels-photo-27676711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Dr. Mira Tanaka',
    date: 'Jul 28, 2026',
    readTime: '6 min read',
    content: [
      'Skincare is a field rich with well-meaning advice and persistent myths. Let us clear up a few of the most common ones so you can build a routine on solid ground.',
      'Myth one: pores open and close. Pores do not have muscles. They can appear smaller when clean and less stretched, but no splash of cold water is going to close them. The most effective way to refine their appearance is consistent, gentle exfoliation.',
      'Myth two: natural ingredients are always gentler. Many natural extracts, like citrus oils, can be highly sensitizing. Meanwhile lab-made ingredients like ceramides and hyaluronic acid are identical to what your skin already produces.',
      'Myth three: you feel a product working when it tingles. Tingling often signals irritation rather than efficacy. A well-formulated product should feel comfortable and unremarkable. Listen to your skin, not the sensation.',
      'Myth four: eye cream is a marketing invention. The skin around the eye is thinner and drier, so targeted formulations can help. That said, a gentle, fragrance-free moisturizer often does the job just as well.',
    ],
  },
  {
    id: 'skincare-myths-busted-2',
    number: '03',
    category: 'Education',
    title: 'Skincare Myths Busted',
    excerpt: 'More common misconceptions, from layering order to whether you really need a toner in your routine.',
    image: 'https://images.pexels.com/photos/4735936/pexels-photo-4735936.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Dr. Mira Tanaka',
    date: 'Jul 14, 2026',
    readTime: '5 min read',
    content: [
      'Continuing our myth-busting series, here are four more misconceptions we hear from readers every week.',
      'Myth one: you should layer from heaviest to lightest. In fact, the correct order is the opposite. Apply the thinnest, most water-like textures first and finish with creams and oils so the heavier products do not block the lighter ones.',
      'Myth two: a toner is optional. A hydrating toner can transform how your skin accepts the rest of your routine. It is not about tightening or stinging, it is about hydration and prep.',
      'Myth three: more product means better results. Over-applying active ingredients often leads to irritation and a compromised barrier. A few drops of serum is almost always enough.',
      'Myth four: you will see results overnight. Most skincare takes four to eight weeks to show visible change. Consistency beats intensity every single time.',
    ],
  },
];

export const getBlogById = (id: string): BlogPost | undefined =>
  blogPosts.find((b) => b.id === id);
