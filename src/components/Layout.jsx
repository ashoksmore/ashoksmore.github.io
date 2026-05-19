import { useLocation } from 'react-router-dom';
import Header from './Header';
import HomeHero from './HomeHero';
import SiteNav from './SiteNav';
import Footer from './Footer';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isBeyond = pathname === '/beyond-code';

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      {isHome ? <HomeHero /> : <Header compact />}
      <SiteNav />
      <main
        id="main-content"
        className={
          isHome
            ? 'page-main page-main--home'
            : isBeyond
              ? 'page-main page-main--beyond'
              : 'page-main'
        }
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
