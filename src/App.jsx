import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { initializeAnalytics, logPageView } from './analytics';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/header';
import Footer from './components/footer';
import ScrollTopButton from './components/scrollTopButton';

import HomePage from './pages/homepage';
import ContactUsPage from './pages/contactUsPage';
import ProductPage from './pages/productPage';
import PrivacyPolicyPage from './pages/privacyPolicyPage';
import AccessibilityPage from './pages/accessibilityPage';
import FaqPage from './pages/faqPage';
import OurJobsPage from './pages/ourJobsPage';
// import CommercialPage from './pages/commercialPage';

import ScrollToTop from './utils/scrollToTop';
import ServicesPage from './pages/servicesPage';
import LoginPage from './pages/loginPage';
import AdminPage from './pages/adminPage';
import ProtectedRoute from './utils/hoc/protectedRoute';
import TermsAndConditions from './pages/termsAndConditions/termsAndConditions';

const App = () => {
  const [myRef, setMyRef] = useState();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    initializeAnalytics();
    logPageView();
  }, []);

  return (
    <div className="App">
      <RouteTracker />
      <ScrollToTop />
      <Header setMyRef={setMyRef} />
      <div className="myBody">
        <Routes>
          <Route path={'/'} element={<HomePage myRef={myRef} />} />
          <Route path={'/products'} element={<ProductPage />} />
          <Route path={'/our-jobs'} element={<OurJobsPage />} />
          <Route path={'/services'} element={<ServicesPage />} />
          <Route path={'/contact-us'} element={<ContactUsPage />} />
          <Route path={'/terms&conditions'} element={<TermsAndConditions />} />

          <Route path={'/faq'} element={<FaqPage />} />
          <Route path={'/accessibility'} element={<AccessibilityPage />} />
          <Route path={'/privacy-policy'} element={<PrivacyPolicyPage />} />

          <Route path={'/login'} element={<LoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
      <ScrollTopButton />
    </div>
  );
};

const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
};

export default App;
