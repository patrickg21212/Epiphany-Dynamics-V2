// Google Analytics 4 Configuration
export const GA_MEASUREMENT_ID = 'G-5B61XZ9M1H';

export const initGA4 = () => {
  // GA4 is initialized in index.html, but we can add safety checks here if needed
  if (!window.gtag) {
    console.warn('GA4 not initialized');
  }
};

export const logEvent = (
  eventName: string,
  params?: { [key: string]: any }
) => {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  } else {
    console.debug(`[GA4] Event: ${eventName}`, params);
  }
};

export const logPageView = (url: string) => {
  if (window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  } else {
    console.debug(`[GA4] Page View: ${url}`);
  }
};
