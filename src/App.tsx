import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from '@/components/home/Hero';
import { PromoCards } from '@/components/home/PromoCards';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { BrandStory } from '@/components/home/BrandStory';
import { ProductPage } from '@/pages/ProductPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';
import { BlogPage } from '@/pages/BlogPage';
import { BlogDetailPage } from '@/pages/BlogDetailPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { CartProvider } from '@/context/CartContext';
import { RouterProvider, useRouter } from '@/context/RouterContext';

function CurrentPage() {
  const { route } = useRouter();

  switch (route.name) {
    case 'home':
      return (
        <>
          <Hero />
          <PromoCards />
          <FeaturedProducts />
          <BrandStory />
        </>
      );
    case 'product':
      return <ProductPage />;
    case 'product-detail':
      return <ProductDetailPage productId={route.productId} />;
    case 'blog':
      return <BlogPage />;
    case 'blog-detail':
      return <BlogDetailPage blogId={route.blogId} />;
    case 'about':
      return <AboutPage />;
    case 'contact':
      return <ContactPage />;
    default:
      return <Hero />;
  }
}

function Shell() {
  const { route } = useRouter();
  const routeKey = JSON.stringify(route);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={routeKey}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <CurrentPage />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <CartProvider>
        <Shell />
      </CartProvider>
    </RouterProvider>
  );
}

export default App;
