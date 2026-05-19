import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Projects from './pages/Projects';
import BeyondCode from './pages/BeyondCode';
import Contact from './pages/Contact';

const pageTitles = {
  '/': 'Ashok S. More · Full Stack Software Engineer',
  '/about': 'About · Ashok S. More',
  '/work': 'Work · Ashok S. More',
  '/projects': 'Projects · Ashok S. More',
  '/beyond-code': 'Beyond Code · Ashok S. More',
  '/contact': 'Contact · Ashok S. More',
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = pageTitles[pathname] || pageTitles['/'];
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/work"
              element={
                <PageTransition>
                  <Work />
                </PageTransition>
              }
            />
            <Route
              path="/projects"
              element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              }
            />
            <Route
              path="/beyond-code"
              element={
                <PageTransition>
                  <BeyondCode />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  );
}
