import ReactGA from 'react-ga4';

const initializeAnalytics = () => {
  ReactGA.initialize('G-74ZE7F9SWN'); // Replace with your Measurement ID
};

const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
};

export { initializeAnalytics, logPageView };
