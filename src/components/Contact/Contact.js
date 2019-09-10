import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="wrap">
        <h2>Get in Touch</h2>
          <form className="contact">
            <input type="text" placeholder="Full Name" className="col-third" />
            <input type="email" placeholder="Email" className="col-third" />
            <input type="text" placeholder="Subject" className="col-third" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Contact;