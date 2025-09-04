import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  const informationLinks = [
    { label: "Home", href: "/", active: true },
    { label: "Contact Us", href: "#" },
  ];

  const accountLinks = [
    { label: "Your Account", href: "/account" },
    { label: "Brands", href: "/brands" },
    { label: "Wishlist", href: "/wishlist" },
  ];

  const paymentMethods = ["PayPal", "American Express", "Visa", "MasterCard"];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logos">
            <div className="logo-container">
              <img
                src="/img/Home/logo.webp"
                alt="EGI Food Logo"
                className="logo-img main-logo"
              />
            </div>
            <div className="halal-logo-container">
              <img
                src="/img/Home/halal-img.-logo.webp"
                alt="Halal Certified"
                className="logo-img halal-logo"
              />
            </div>
          </div>

          {/* Information Section */}
          <div className="footer-section">
            <h3 className="footer-title">Information</h3>
            <ul className="footer-links">
              {informationLinks.map((link, index) => (
                <li key={index} className="footer-link-item">
                  <MdOutlineKeyboardDoubleArrowRight className="arrow" />
                  <a
                    href={link.href}
                    className={`footer-link ${link.active ? "active" : ""}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* My Account Section (Dynamic) */}
          <div className="footer-section">
            <h3 className="footer-title">My Account</h3>
            <ul className="footer-links">
              {accountLinks.map((link, index) => (
                <li key={index} className="footer-link-item">
                  <MdOutlineKeyboardDoubleArrowRight className="arrow" />
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section">
            <h3 className="footer-title">Contact info.</h3>
            <div className="footer-links contact-info">
              <div className="contact-item">
                <span className="contact-icon location-icon"></span>
                <span className="contact-text">
                  4475 S Clinton Ave, South Plainfield, NJ 07080
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-icon email-icon"></span>
                <span className="contact-text">Info@egifood.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon phone-icon"></span>
                <span className="contact-text">+1 551-221-6865</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom with Dynamic Payments */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © EGI Food Corp 2025. All Rights Reserved.
            </div>
            <div className="payment-methods">
              {paymentMethods.map((method, index) => (
                <div key={index} className="payment-method">
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
