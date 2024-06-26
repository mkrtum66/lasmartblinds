import React from "react";
import "./contactUsPage.scss";
import { Container } from "react-bootstrap";
import Title from "../../components/title";
import { LazyLoadImage } from "react-lazy-load-image-component";
import location from "../../assets/icons/location-tf.png";
import phone from "../../assets/icons/phone-call-tf.png";
import mail from "../../assets/icons/mail-tf.png";

const ContactUsPage = () => {
  return (
    <div className="contactUsPage page-wrapper">
      <Container>
        <div className="row">
          <div className="col-md-6">
            <Title>Contact Us</Title>
            <p className="mb-4">
              Minimalist styling is not about creating a cold, hard, empty white
              box of a home. It is about using simple and natural forms, and
              taking away layers without losing the aesthetic appeal of the
              space.
            </p>
            <div className="visit-us mb-4">
              <p className="mb-1">
                <b>Visit Us:</b>
              </p>
              <p>
                If you prefer face-to-face discussions or need to see our
                products and services in person, we welcome you to visit our
                showroom. Our friendly team will be on hand to guide you through
                our offerings and answer any questions you may have.
              </p>
            </div>
            <div className="contact-info-wrapper mb-3">
              <p className="mb-2">
                <b>Contact Information:</b>
              </p>
              <p className="contact-info">
                <a
                  href="https://maps.apple.com/?address=1808%20Victory%20Blvd,%20Glendale,%20CA%20%2091201,%20United%20States&ll=34.162655,-118.302846&q=1808%20Victory%20Blvd"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LazyLoadImage
                    src={location}
                    alt="img"
                    width={"20px"}
                    height={"auto"}
                  />
                  <span>1808 S Victory Blvd, Glendale, CA 91201</span>
                </a>
              </p>
              <p className="contact-info">
                <a href="tel:+18182818136">
                  <LazyLoadImage
                    src={phone}
                    alt="img"
                    width={"20px"}
                    height={"auto"}
                  />
                  <span>+1 (818) 281-8136</span>
                </a>
              </p>
              <p className="contact-info">
                <a href="mailto:lasmartblinds@gmail.com">
                  <LazyLoadImage
                    src={mail}
                    alt="img"
                    width={"20px"}
                    height={"auto"}
                  />
                  <span>lasmartblinds@gmail.com</span>
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6602.716887822873!2d-118.30764541224418!3d34.16275220379627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bff6fa27c81f%3A0xa65c8df98888f906!2s1808%20S%20Victory%20Blvd%2C%20Glendale%2C%20CA%2091201!5e0!3m2!1sen!2sus!4v1719092003548!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUsPage;
