import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if ((window as any).gtag) {
      (window as any).gtag('config', 'G-5B61XZ9M1H', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default PageTracker;
