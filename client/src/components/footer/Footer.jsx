import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p> &copy; 2024 | Montessori Koper </p>
      </div>
      <div className="footer-right">
        <a href="tel:030303838" className="footer-link">030 303 838</a>
        <a href="mailto:montessori.obala@gmail.com" className="footer-link">montessori.obala@gmail.com</a>
        <a href="https://www.facebook.com/montessori.obala/?locale=sl_SI" className="footer-link" target="_blank" rel="noopener noreferrer">FB</a>
      </div>
    </footer>
  );
}

export default Footer;
