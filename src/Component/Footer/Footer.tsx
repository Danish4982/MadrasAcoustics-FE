export const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section - Logo & Navigation */}
      <div className="footer-top">
        <div className="footer-left">
          <img
            src={`${process.env.PUBLIC_URL}/images/madrasAcousticsIconn-removebg-preview.png`}
            alt="Madras Acoustics Logo"
            className="footer-logo"
          />
          <div className="footer-text">
            <span className="footer-company-name">Madras Acoustics</span>
            <span className="logo-text1-down">Sound. Perfected.</span>
          </div>
        </div>


        {/* Center - Navigation Links */}
        <nav aria-label="Footer Navigation">
          <ul className="footer-nav">
            {[
               { path: "/", label: "Home" },
               { path: "/acoustics", label: "Acoustics" },
               { path: "/team", label: "Team" },
               { path: "/software", label: "Software" },
               { path: "/contact-us", label: "Contact Us" },
            ].map(({ path, label }) => (
              <li key={path}>
                <a href={path}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>


      </div>

      {/* Social Media Links - Centered on a New Line */}
      <div className="footer-social">
        {[
          { href: "tel:+918248365067", icon: "fas fa-phone", label: "Phone" },
          { href: "https://wa.me/918248365067", icon: "fab fa-whatsapp", label: "WhatsApp" },
          { href: "mailto:jeromedj@madrasacoustics.com", icon: "fas fa-envelope", label: "Email" },
          { href: "https://www.facebook.com/share/18kVHF8oaP/", icon: "fab fa-facebook-f", label: "Facebook" },
          { href: "https://instagram.com/madras_acoustics/", icon: "fab fa-instagram", label: "Instagram" },
          { href: "https://x.com/madrasacoustics?t=L0Mh48j0u6tjYhUAw00f_g&s=08", icon: "fab fa-x-twitter", label: "Instagram" },
          { href: "https://www.google.com/maps/search/?api=1&query=9/10,+Perumal+Kovil+Street,+Kotturpuram,+Chennai+600085", icon: "fas fa-map-marker-alt", label: "Location" },
        ].map(({ href, icon, label }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <i className={icon}></i>
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        Copyright &copy; {new Date().getFullYear()} Madras Acoustics - All rights reserved
      </div>
    </footer>
  );
};
