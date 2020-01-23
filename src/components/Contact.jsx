import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-left"></div>
      <div className="contact-right">
        <div className="section-title">Contact</div>
        <div className="contact-content">
          <div className="contacy-item">
            <i class="envelope icon large"></i>
            <a
              href="mailto:ec12990@gmail.com"
              target="_blank">
              <p>ec12990@gmail.com</p>
            </a>
          </div>
          <div className="contacy-item">
            <i class="instagram icon large"></i>
            <a
              href="https://www.instagram.com/thoughtsbyelbia_/"
              target="_blank">
              <p>@thoughtsbyelbia_</p>
            </a>
          </div>


        </div>
      </div>
    </div>
  )
}
