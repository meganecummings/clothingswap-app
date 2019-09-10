import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <footer>
        <div class="footer-content">
          <span class="footer-content__item">© 2018 Meg Cummings</span>
          <span class="footer-content__item footer-content__divider"> / </span>
          <span class="footer-content__item"><a href="/">Home</a></span>
          <span class="footer-content__item footer-content__divider"> / </span>
          <span class="footer-content__item"><a href="/items">Items</a></span>
          <span class="footer-content__item footer-content__divider"> / </span>
          <span class="footer-content__item"><a href="/events">Events</a></span>
        </div>
      </footer>
    )
}

export default Footer;