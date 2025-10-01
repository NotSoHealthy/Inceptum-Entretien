import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="site-wrapper">
      <Header />
      <main id="page" className="page">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
