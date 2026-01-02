import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { logPageView } from '../lib/analytics';

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Log page view on route change
    logPageView(location.pathname + location.search);
  }, [location]);
};
