import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <footer>
        <div className="footer-content">
          <span className="footer-content__item">© 2019 Meg Cummings</span>
          <span className="footer-content__item footer-content__divider"> / </span>
          <span className="footer-content__item"><a href="/">Home</a></span>
          <span className="footer-content__item footer-content__divider"> / </span>
          <span className="footer-content__item"><a href="/items">Items</a></span>
          <span className="footer-content__item footer-content__divider"> / </span>
          <span className="footer-content__item"><a href="/events">Events</a></span>
        </div>
      </footer>
    )
}

export default Footer;