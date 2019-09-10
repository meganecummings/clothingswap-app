import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="wrap">
        <h2>Get in Touch</h2>
          <form className="contact" action="https://formspree.io/megcummings@gmail.com" method="POST"   >
            <input type="text" placeholder="Full Name" name="full-name" className="col-third" />
            <input type="email" placeholder="Email" name="email" className="col-third" />
            <input type="text" placeholder="Subject" name="subject" className="col-third" />
            <textarea name="" id="" cols="30" rows="10" name="message" placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Contact;