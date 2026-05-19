import { useLocation } from 'react-router-dom';
import Header from './Header';
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
      <Header compact={!isHome} />
      <SiteNav />
      <main id="main-content" className="page-main">
        {children}
      </main>
      <Footer />
    </>
  );
}
