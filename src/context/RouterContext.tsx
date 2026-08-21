import { createContext, useContext, useState, type ReactNode } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'product' }
  | { name: 'product-detail'; productId: string }
  | { name: 'blog' }
  | { name: 'blog-detail'; blogId: string }
  | { name: 'about' }
  | { name: 'contact' };

interface RouterContextValue {
  route: Route;
  navigate: (route: Route) => void;
}

const RouterContext = createContext<RouterContextValue | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>({ name: 'home' });

  const navigate = (next: Route) => {
    setRoute(next);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <RouterContext.Provider value={{ route, navigate }}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used within RouterProvider');
  return ctx;
}
