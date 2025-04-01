import ReactGA from 'react-ga';

export const initGA = (trackingId: string) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize(trackingId);
  }
};

export const logPageView = () => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
};