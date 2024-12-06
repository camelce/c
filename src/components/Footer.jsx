import React from 'react';
import '../styles/dark_mode.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

    <footer
    className="footer"
      // style={{
      //   backgroundColor: '#333',
      //   color: '#fff',
      //   padding: '20px 0',
      //   textAlign: 'center',
      //   fontFamily: 'Arial, sans-serif',
      // }}
    >
      <div
    className="footerdiv"
      //  style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}
      >
        {/* روابط الصفحات */}
        <div className="footer-1">
          <h3 className="footer-2">Quick Links</h3>
          <ul className="footer-3">
            <li><Link to={`/news`} className="footer-4">News</Link></li>
            <li><Link to={`/articles`} className="footer-4">Articles</Link></li>
            <li><Link to={`/jobs`} className="footer-4">Jobs</Link></li>
            <li><Link to={`/`} className="footer-4">About Us</Link></li>
            <li><Link to={`/`} className="footer-4">Contact</Link></li>
          </ul>
        </div>

        {/* معلومات الاتصال */}
        <div className="footer-5">
          <h3 className="footer-6">Contact Us</h3>
          <p>Email: There is no email available yet.</p>
          <p>Phone: +no phone number</p>
          <p>Address: The address is currently unavailable.</p>
          {/* <p>Address: 123 Maple Street, Toronto, ON, Canada</p> */}
        </div>

        {/* أيقونات التواصل الاجتماعي */}
        <div className="footer-7">
          <h3 className="footer-8">Follow Us</h3>
          <div className="footer-9">
            {/* <a href="https://www.facebook.com/CamelCo/" target="_blank" rel="noopener noreferrer" className="footer-10">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="footer-11" />
            </a>
            <a href="https://www.instagram.com/camel__c/" target="_blank" rel="noopener noreferrer" className="footer-12">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="footer-13" />
            </a> */}
            <a href="https://t.me/+3lN1q7QIqUowMTg0" target="_blank" rel="noopener noreferrer" className="footer-14" >
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="footer-15" />
            </a>
          </div>
        </div>
      </div>

      {/* حقوق الطبع والنشر */}
      <div 
        className="footer-16"
      // style={{ borderTop: '1px solid #4CAF50', paddingTop: '10px', marginTop: '20px', fontSize: '0.9rem' }}
      >
        &copy; 2020 CamelC. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
