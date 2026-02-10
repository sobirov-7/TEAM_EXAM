import React from 'react';
import './Footer.css';
import logo1 from '../assets/Logo.svg'
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        <div className="footer-column align-right">
          <h3 className="footer-heading">Contact Us</h3>
          
          <div className="contact-group">
            <span className="contact-label">Email</span>
            <span className="contact-value">needhelp@Organia.com</span>
          </div>

          <div className="contact-group">
            <span className="contact-label">Phone</span>
            <span className="contact-value">666 888 888</span>
          </div>

          <div className="contact-group">
            <span className="contact-label">Address</span>
            <span className="contact-value">88 road, borklyn street, USA</span>
          </div>
        </div>


        <div className="footer-column brand-column">
          <div className="brand-logo">
			<img src={logo1} alt="" />
          </div>
          
          <p className="brand-desc">
            Simply dummy text of the printing and typesetting industry.
            Lorem Ipsum simply dummy text of the printing
          </p>

          <div className="social-icons">
            <div className="icon-circle">
                <FaInstagram />
            </div>
            <div className="icon-circle">
                <FaFacebookF />
            </div>
            <div className="icon-circle">
                <FaTwitter />
            </div>
            <div className="icon-circle">
                <FaPinterestP />
            </div>
          </div>
        </div>


        <div className="footer-column align-left">
          <h3 className="footer-heading">Utility Pages</h3>
          <ul className="footer-links">
            <li>Style Guide</li>
            <li>404 Not Found</li>
            <li>Password Protected</li>
            <li>Licences</li>
            <li>Changelog</li>
          </ul>
        </div>

      </div>


      <div className="footer-copyright">
        Copyright © <b>Organick</b>
      </div>
    </footer>
  )
}

export default Footer;