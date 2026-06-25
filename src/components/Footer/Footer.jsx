import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand-section" data-aos="fade-up" data-aos-duration="1000">
                    <div className="navbar-brand">
                        <span style={{ color: 'var(--mint-green)' }}>L</span>
                        <span style={{ color: 'var(--cream-yellow)' }}>u</span>
                        <span style={{ color: 'var(--soft-purple)' }}>l</span>
                        <span style={{ color: 'var(--cream-yellow)' }}>l</span>
                        <span style={{ color: 'var(--soft-blue)' }}>a</span>
                        <span style={{ color: 'var(--primary-coral)' }}>b</span>
                        <span style={{ color: 'var(--soft-blue)' }}>y</span>
                    </div>
                    <p className="footer-desc">
                        Caring for your little one with love and premium products. Quality you can trust for your baby's comfort.
                    </p>
                    <div className="footer-socials">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                    </div>
                </div>

                <div className="footer-links" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-contact" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <h4>Contact Info</h4>
                    <p>hello@lullaby.lk</p>
                    <p>+94 77 123 4567</p>
                    <p>123 Baby Lane, Colombo 03</p>
                </div>
            </div>

            <div className="footer-bottom" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="600">
                <p>&copy; 2026 Lullaby Baby Shop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;