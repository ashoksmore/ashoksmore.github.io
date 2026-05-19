import { useLocation } from 'react-router-dom';
import Header from './Header';
import HomeHero from './HomeHero';
import SiteNav from './SiteNav';
import Footer from './Footer';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      {isHome ? <HomeHero /> : <Header compact />}
      <SiteNav />
      <main
        id="main-content"
        className={isHome ? 'page-main page-main--home' : 'page-main'}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
