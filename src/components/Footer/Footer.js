import React from 'react';
// import './Footer.css';

const Footer = () => {
    return (
      <footer>
        <div className="wrap">
          <div className="social-links">
            <a href="https://www.facebook.com/megan.cummings.790"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href="https://twitter.com/megcummings"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/meganecummings/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
          </div>
          <input type="text" placeholder="Email Address" />
          <button type="submit">Subscribe</button>
        </div>

        <p className="copyright">&copy;2019 Meg Cummings</p>
      </footer>
    )
}

export default Footer;