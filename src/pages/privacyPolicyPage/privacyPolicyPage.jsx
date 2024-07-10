import React from 'react';
import './privacyPolicyPage.scss';

import { Container } from 'react-bootstrap';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacyPolicyPage page-wrapper">
      <Container>
        <h2>Privacy Policy</h2>
        <p>Last Updated: 06/22/2024</p>
        <p>
          At <span className="fw-bold">LA SMART BLINDS</span>, we are committed to ensuring the
          privacy and security of your personal information. This Privacy Policy outlines how we
          collect, use, disclose, and safeguard your data when you visit our website or engage with
          our glass services.
        </p>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">
            1. What do we do with your information?
          </p>
          <p>
            When you purchase something from our store, as part of the buying and selling process,
            we collect the personal information you give us such as your name, address and email
            address.
          </p>
          <p>
            When you browse our store, we also automatically receive your computer’s internet
            protocol (IP) address in order to provide us with information that helps us learn about
            your browser and operating system.
          </p>
          <p>
            Email marketing: With your permission, we may send you emails about our store, new
            products and other updates.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">2. How do you get my consent?</p>
          <p>
            When you provide us with personal information to complete a transaction, verify your
            credit card, place an order, arrange for a delivery or return a purchase, we imply that
            you consent to our collecting it and using it for that specific reason only.
          </p>
          <p>
            If we ask for your personal information for a secondary reason, like marketing, we will
            either ask you directly for your expressed consent, or provide you with an opportunity
            to say no.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">3. How do I withdraw my consent?</p>
          <p>
            If after you opt-in, you change your mind, you may withdraw your consent for us to
            contact you, for the continued collection, use or disclosure of your information, at
            anytime, by contacting us at
            <a href="mailto:info@lasmartblinds.com">
              <span> info@lasmartblinds.com</span>
            </a>
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">4. Disclosure:</p>
          <p>
            We may disclose your personal information if we are required by law to do so or if you
            violate our Terms of Service.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">5. Cookies and Tracking:</p>
          <p>
            Our website may use cookies and similar tracking technologies to enhance user
            experience. You can modify your browser settings to control cookie preferences.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">6. Payment:</p>
          <p>
            All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI
            Security Standards Council, which is a joint effort of brands like Visa, MasterCard,
            American Express and Discover.
          </p>
          <p>
            PCI-DSS requirements help ensure the secure handling of credit card information by our
            store and its service providers.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">7. Third-party services:</p>
          <p>
            In general, the third-party providers used by us will only collect, use and disclose
            your information to the extent necessary to allow them to perform the services they
            provide to us.
          </p>
          <p>
            However, certain third-party service providers, such as payment gateways and other
            payment transaction processors, have their own privacy policies in respect to the
            information we are required to provide to them for your purchase-related transactions.
          </p>
          <p>
            For these providers, we recommend that you read their privacy policies so you can
            understand the manner in which your personal information will be handled by these
            providers.
          </p>
          <p>
            In particular, remember that certain providers may be located in or have facilities that
            are located in a different jurisdiction than either you or us. So if you elect to
            proceed with a transaction that involves the services of a third-party service provider,
            then your information may become subject to the laws of the jurisdiction(s) in which
            that service provider or its facilities are located.
          </p>
          <p>
            As an example, if you are located in Canada and your transaction is processed by a
            payment gateway located in the United States, then your personal information used in
            completing that transaction may be subject to disclosure under United States
            legislation, including the Patriot Act.
          </p>
          <p>
            Once you leave our store’s website or are redirected to a third-party website or
            application, you are no longer governed by this Privacy Policy or our website’s Terms of
            Service.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">8. Security:</p>
          <p>
            To protect your personal information, we take reasonable precautions and follow industry
            best practices to make sure it is not inappropriately lost, misused, accessed,
            disclosed, altered or destroyed.
          </p>
          <p>
            If you provide us with your credit card information, the information is encrypted using
            secure socket layer technology (SSL) and stored with a AES-256 encryption. Although no
            method of transmission over the Internet or electronic storage is 100% secure, we follow
            all PCI-DSS requirements and implement additional generally accepted industry standards.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">9. Age of consent:</p>
          <p>
            By using this site, you represent that you are at least the age of majority in your
            state or province of residence and you have given us your consent to allow any of your
            minor dependents to use this site.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">10. Changes to Privacy Policy:</p>
          <p>
            We reserve the right to modify this privacy policy at any time, so please review it
            frequently. Changes and clarifications will take effect immediately upon their posting
            on the website. If we make material changes to this policy, we will notify you here that
            it has been updated, so that you are aware of what information we collect, how we use
            it, and under what circumstances, if any, we use and/or disclose it.
          </p>
          <p>
            If our store is acquired or merged with another company, your information may be
            transferred to the new owners so that we may continue to sell products to you.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">11. Contact Us:</p>
          <p>
            If you have any questions or concerns regarding our Privacy Policy, please contact us at
            <a href="mailto:info@lasmartblinds.com">
              <span> info@lasmartblinds.com</span>
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicyPage;
