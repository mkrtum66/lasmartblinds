import React, { useEffect } from 'react';
import './homePage.scss';
import { Container } from 'react-bootstrap';
import { scrollToSection } from '../../utils/scrollToSection';
import Title from '../../components/title';

import Team from '../../components/team';
import Service from '../../components/service/service';
import { services } from '../../components/service/mock';

import check from '../../assets/icons/double-check.png';
import aboutUs1 from '../../assets/aboutUs/aboutUs1.webp';
import aboutUs2 from '../../assets/aboutUs/aboutUs2.webp';
import aboutUs3 from '../../assets/aboutUs/aboutUs3.webp';
import video from '../../assets/video/videoplayback.mp4';
import AreasSlider from '../../components/areasSlider';

const HomePage = ({ myRef }) => {
  useEffect(() => {
    scrollToSection(myRef);
  }, [myRef]);

  return (
    <div className="homepage">
      <section id="welcome" className="section-wrapper">
        <video className="video-background" autoPlay muted loop playsInline preload={'metadata'}>
          <source src={video} type="video/mp4" />
        </video>
        <Container>
          <div className="center-text">
            <div className="stripe-container">
              <h1 className="stripe-background">LA SMART BLINDS</h1>
            </div>
            <h2>Beyond what you see</h2>
            <p>
              We're dedicated to bringing beauty and elegance <br /> into your life through the
              artistry of blinds.
            </p>
          </div>
        </Container>
      </section>
      <Container>
        <section id="ourCompany" className="section-wrapper ourCompany">
          <Title>Our Company</Title>
          <div className="row">
            <div className="col-md-7">
              <p>
                LA Smart Blinds is a family owned and operated business that has been serving the
                Los Angeles area for over 20 years. We pride ourselves on being experts in the
                window treatment industry and staying up to date with the latest trends in design.
                At LA Smart Blinds, we are a team of passionate professionals dedicated to
                delivering exceptional service and premium products.
              </p>
              <ul className="company-list">
                <li>
                  <div className="d-flex">
                    <img src={check} alt="img" />
                    <p>
                      <b>Customer-Centric Approach:</b> Your satisfaction is our top priority. We
                      take the time to understand your needs and preferences, offering personalized
                      solutions that exceed your expectations.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <img src={check} alt="img" />
                    <p>
                      <b>Innovation:</b> We stay at the forefront of industry trends and
                      technological advancements, providing you with the most innovative and
                      reliable products on the market.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <img src={check} alt="img" />
                    <p>
                      <b>Quality:</b> We are committed to offering only the highest quality
                      materials and craftsmanship. Our products are built to last, ensuring you
                      receive exceptional value for your investment.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <img src={check} alt="img" />
                    <p>
                      <b>Integrity:</b> We believe in transparency and honesty in all our dealings.
                      You can trust us to deliver on our promises and provide clear, straightforward
                      information about our products and services.
                    </p>
                  </div>
                </li>
              </ul>
              <p>
                Our team of local design consultants will work with you to find the perfect window
                treatments for your home or office, and we offer remote control options that allow
                you to control your blinds with your voice via Wi-Fi, Google, or Alexa. Relax and
                enjoy your new window treatments worry-free. We do it all for you at LA Smart
                Blinds!
              </p>
            </div>
            <div className="col-md-5 img-fluid img-place">
              <img src={aboutUs1} alt="img" className="img-fluid" />
            </div>
          </div>
        </section>
        <section id="purpose" className="section-wrapper ourCompany">
          <Title>WHAT MAKE US DIFFERENT</Title>
          <div className="row flex-row-reverse">
            <div className="col-md-7">
              <p>
                At LA Smart Blinds, we carry a wide range of window treatments to suit any need.
                Whether you're looking for motorization and home automation, room darkening, or
                child safety, we have a solution for you. With thousands of options to choose from,
                we can help you find the perfect fit for your home. Relax and enjoy your new window
                treatments with our hassle-free installation process. Here’s what sets us apart from
                the rest:
              </p>
              <div>
                <p className="ul-title">Innovation and Technology</p>
                <ul className="company-list">
                  <li>
                    <div className="d-flex">
                      <img src={check} alt="img" />
                      <p>
                        <b>Cutting-Edge Smart Solutions:</b> We offer the latest in smart blind
                        technology, including motorized and automated options that integrate
                        seamlessly with your smart home system. Control your blinds effortlessly
                        through remote, smartphone, or voice commands for ultimate convenience.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <img src={check} alt="img" />
                      <p>
                        <b>Energy Efficiency:</b> Our smart blinds are designed to improve energy
                        efficiency by regulating indoor temperatures, reducing your energy bills,
                        and contributing to a more sustainable environment.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <p className="ul-title">Unmatched Quality</p>
                <ul className="company-list">
                  <li>
                    <div className="d-flex">
                      <img src={check} alt="img" />
                      <p>
                        <b>Premium Materials:</b> We use only the highest quality materials to
                        ensure our products are durable, stylish, and long-lasting. Our commitment
                        to quality means you can trust that your blinds will perform flawlessly for
                        years to come.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <img src={check} alt="img" />
                      <p>
                        <b>Expert Craftsmanship:</b> Our blinds are crafted with precision and care,
                        reflecting our dedication to excellence. Each product undergoes rigorous
                        testing to ensure it meets our high standards.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 img-fluid img-place">
              <img src={aboutUs2} alt="img" className="img-fluid" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-7">
              <div>
                <p className="ul-title">Personalized Service</p>
                <ul className="company-list">
                  <li>
                    <div className="d-flex">
                      <img src={check} alt="img" />
                      <p>
                        <b>Custom Solutions:</b> We understand that every space is unique. That’s
                        why we offer customized solutions tailored to your specific needs and
                        preferences. Choose from a wide range of styles, colors, and materials to
                        create the perfect window treatments for your home or office.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <img src={check} alt="img" />
                      <p>
                        <b>Free Consultations:</b> Our expert team offers free in-home consultations
                        to understand your requirements and provide personalized recommendations. We
                        are here to guide you through every step of the process, ensuring a seamless
                        experience.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <p className="ul-title">Competitive Pricing</p>
                <ul className="company-list">
                  <li>
                    <div className="d-flex">
                      <img src={check} alt="img" />
                      <p>
                        <b>Best Rates:</b> We offer top-quality products at competitive prices. Our
                        pricing strategy is designed to provide you with the best value for your
                        money without compromising on quality.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <img src={check} alt="img" />
                      <p>
                        <b>Special Offers and Financing:</b> Take advantage of our special offers
                        and flexible financing options to make your investment even more affordable.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 img-fluid img-place">
              <img src={aboutUs3} alt="img" className="img-fluid" />
            </div>
          </div>
        </section>
        <section id="areas" className="section-wrapper areas">
          <Title>AREAS WE SERVE</Title>
          <AreasSlider />
        </section>
        <section id="team" className="section-wrapper">
          <Title>Our Team</Title>
          <Team />
        </section>
        {/*<section id="partners" className="section-wrapper">*/}
        {/*  <Title>Partners</Title>*/}
        {/*</section>*/}
        <section id="services" className="section-wrapper">
          <Title>Our Services</Title>
          <div className="row">
            {services.slice(0, 6).map(item => {
              return (
                <div key={item.id} className="col-lg-4 col-md-6 col-12 mb-4">
                  <Service imgUrl={item.icon} title={item.title} description={item.description} />
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HomePage;
