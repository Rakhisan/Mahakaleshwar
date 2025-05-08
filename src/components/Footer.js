// FooterContent.js
import { Mail, Phone } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom"; // OR use <a> if React Router isn't used

import "./Footer.css"; // Import CSS normally in React

const locations = [
  {
    city: "Indore",
    address: "1206 , Skye Earth Corporate Park",
    location: "Indore , Madhya Pradesh",
    postalCode: "452010",
    phone: "+91 9039383183",
    flagUrl: "https://flagicons.lipis.dev/flags/4x3/in.svg",
    alt: "India Flag",
  },
  {
    city: "Dubai",
    address: "Duja Towers, Sheikh Zayed Road",
    location: "Dubai",
    postalCode: "UAE",
    phone: "+971-522627630",
    flagUrl: "https://flagicons.lipis.dev/flags/4x3/ae.svg",
    alt: "UAE Flag",
  },
  {
    city: "USA",
    address: "5101 34th St #A Lubbock,",
    location: "Texas",
    postalCode: "79410",
    phone: "+1(438) 802-8521",
    flagUrl: "https://flagicons.lipis.dev/flags/4x3/us.svg",
    alt: "USA Flag",
  },
  {
    city: "UK",
    address: "135 Junction Rd, Archway",
    location: "London",
    postalCode: "N19 5PX",
    phone: "+44-7727731075",
    flagUrl: "https://flagicons.lipis.dev/flags/4x3/gb.svg",
    alt: "UK Flag",
  },
];

const contacts = {
  phones: ["+91 9039383183", "+91 8319635887"],
  emails: ["hr@digiflex.ai", "info@digiflex.ai"],
};

const socialLinks = [
  { url: "https://www.instagram.com/questdigiflex", network: "instagram" },
  { url: "https://www.facebook.com/questdigiflex", network: "facebook" },
  { url: "https://x.com/QuestDigiflex", network: "x" },
  { url: "https://linkedin.com/company/quest-digiflex", network: "linkedin" },
  { url: "https://whatsapp.me/9111454949", network: "whatsapp" },
  { url: "https://www.youtube.com/@QuestDigiflex", network: "youtube" },
  { url: "https://in.pinterest.com/questdigiflex/", network: "pinterest" },
  { url: "https://digiflex.quora.com/", network: "quora" },
  { url: "https://medium.com/@questdigiflex", network: "medium" },
];

const FooterContent = () => (
  <footer className="footer">
    <div className="container">
      <div className="logoContainer">
        <Link to="/" className="logoLink">
          <img
            src="/us/app/images/logo.png"
            width={200}
            height={300}
            alt="logo"
            className="logo"
          />
        </Link>
      </div>

      <div className="divider"></div>

      <div className="contentWrapper">
        <div className="locationsGrid">
          {locations.map((loc, index) => (
            <div key={index} className="locationCard">
              <div className="locationHeader">
                <h2 className="locationCity">{loc.city}</h2>
                <img
                  src={loc.flagUrl}
                  alt={loc.alt}
                  width={40}
                  height={24}
                  className="flag"
                />
              </div>
              <p className="locationText">{loc.address}</p>
              {loc.location && <p className="locationText">{loc.location}</p>}
              {loc.postalCode && (
                <p className="locationText">{loc.postalCode}</p>
              )}
              {loc.phone && (
                <div className="phoneContainer">
                  <div className="phoneWrapper">
                    <Phone className="phoneIcon" />
                    <a
                      href={`tel:${loc.phone.replace(/[^\d+]/g, "")}`}
                      className="phoneLink"
                    >
                      {loc.phone}
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="contactsContainer">
          <h2 className="contactsHeading">Contacts</h2>
          <div className="contactsContent">
            <div className="contactGroup">
              {contacts.phones.map((phone, index) => (
                <div key={index} className="contactItem">
                  <Phone className="contactIcon" />
                  <a
                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                    className="contactLink"
                  >
                    {phone}
                  </a>
                </div>
              ))}
            </div>
            <div className="contactGroup">
              {contacts.emails.map((email, index) => (
                <div key={index} className="contactItem">
                  <Mail className="contactIcon" />
                  <a href={`mailto:${email}`} className="contactLink">
                    {email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="footerBottom">
        <div className="copyrightSection">
          <span className="copyrightText">
            2025 Digiflex. All rights reserved
          </span>
          <div className="legalLinks">
            <Link to="/privacy-policy" className="legalLink">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="legalLink">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="socialIcons">
          {socialLinks.map((social, index) => (
            <SocialIcon
              key={index}
              url={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon"
              style={{ width: 24, height: 24 }}
            />
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default FooterContent;
