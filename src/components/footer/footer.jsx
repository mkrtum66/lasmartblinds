import React from 'react';
import './footer.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo220x_transparent.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import location from '../../assets/icons/location-tf.png';
import mail from '../../assets/icons/mail-tf.png';
import phone from '../../assets/icons/phone-call-tf.png';
import FacebookIcon from '../../assets/icons/social/facebookIcon';
import InstagramIcon from '../../assets/icons/social/instagramIcon';
import XIcon from '../../assets/icons/social/xIcon';
import PinterestIcon from '../../assets/icons/social/pinterestIcon';
import LinkedinIcon from '../../assets/icons/social/linkedinIcon';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="container">
          <div className="row justify-content-between align-items-center gap-4">
            <div className="col-md-4">
              <div className="footer-info">
                <p className="contact-info">
                  <a
                    href="https://maps.apple.com/?address=1808%20Victory%20Blvd,%20Glendale,%20CA%20%2091201,%20United%20States&ll=34.162655,-118.302846&q=1808%20Victory%20Blvd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LazyLoadImage src={location} alt="img" width={'20px'} height={'auto'} />
                    <span>1808 S Victory Blvd, Glendale, CA 91201</span>
                  </a>
                </p>
                <p className="contact-info">
                  <a href="tel:+18182818136">
                    <LazyLoadImage src={phone} alt="img" width={'20px'} height={'auto'} />
                    <span>+1 (818) 281-8136</span>
                  </a>
                </p>
                <p className="contact-info">
                  <a href="mailto:info@lasmartblinds.com">
                    <LazyLoadImage src={mail} alt="img" width={'20px'} height={'auto'} />
                    <span>info@lasmartblinds.com</span>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4 footer-links">
              <ul>
                <li>
                  <NavLink to={'/faq'}>FAQ</NavLink>
                </li>
                {/*<li>*/}
                {/*  <NavLink to={'/blog'}>Blog</NavLink>*/}
                {/*</li>*/}
                <li>
                  <NavLink to={'/terms&conditions'}>Terms & Conditions</NavLink>
                </li>
                <li>
                  <NavLink to={'/accessibility'}>Accessibility Statement</NavLink>
                </li>
                <li>
                  <NavLink to={'/privacy-policy'}>Privacy Policy</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <LazyLoadImage
                src={logo}
                alt="img"
                className="img-fluid footer-logo"
                width={'100%'}
                height={'auto'}
              />
              <div className="d-flex gap-3 mt-3 align-items-center justify-content-center">
                <FacebookIcon />
                <InstagramIcon />
                <XIcon />
                <PinterestIcon />
                <LinkedinIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="container">
          <div className="copyright">
            © Copyright{' '}
            <strong>
              <span>LA SMART BLINDS. </span>
            </strong>
            All Rights Reserved.
          </div>
          <div className="credits">
            Powered by <a href="https://www.linkedin.com/in/mkrtum-abrahamyan/">M. A.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
