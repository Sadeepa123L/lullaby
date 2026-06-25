import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const navRefs = useRef([]);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Products', href: '#products' },
    ];

    useEffect(() => {
        if (window.innerWidth > 768) {
            const currentIndex = hoverIndex !== null ? hoverIndex : activeIndex;
            if (currentIndex !== null && navRefs.current[currentIndex]) {
                const el = navRefs.current[currentIndex];
                setIndicatorStyle({
                    left: el.offsetLeft,
                    width: el.offsetWidth,
                    opacity: 1
                });
            }
        } else {
            setIndicatorStyle({ opacity: 0 });
        }
    }, [activeIndex, hoverIndex, isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = (index) => {
        setActiveIndex(index);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="container navbar-container">
                {/* Logo with fade-right animation */}
                <div className="navbar-brand" data-aos="fade-right" data-aos-duration="800">
                    <span style={{ color: 'var(--mint-green)' }}>L</span>
                    <span style={{ color: 'var(--cream-yellow)' }}>u</span>
                    <span style={{ color: 'var(--soft-purple)' }}>l</span>
                    <span style={{ color: 'var(--cream-yellow)' }}>l</span>
                    <span style={{ color: 'var(--soft-blue)' }}>a</span>
                    <span style={{ color: 'var(--primary-coral)' }}>b</span>
                    <span style={{ color: 'var(--soft-blue)' }}>y</span>
                </div>

                {/* Mobile Menu Button with fade-left animation */}
                <button className="mobile-menu-btn" onClick={toggleMobileMenu} data-aos="fade-left" data-aos-duration="800">
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </button>

                <nav className={`navbar-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    {/* Nav Pills with fade-down animation and delay */}
                    <div className="nav-pill-container" onMouseLeave={() => setHoverIndex(null)} data-aos="fade-down" data-aos-delay="150" data-aos-duration="800">
                        <div className="nav-indicator" style={indicatorStyle}></div>
                        <ul>
                            {navItems.map((item, index) => (
                                <li
                                    key={item.name}
                                    ref={(el) => (navRefs.current[index] = el)}
                                    onMouseEnter={() => setHoverIndex(index)}
                                    onClick={() => closeMobileMenu(index)}
                                >
                                    <a
                                        href={item.href}
                                        className={(hoverIndex === index) || (hoverIndex === null && activeIndex === index) ? 'active-text' : ''}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="navbar-action-mobile">
                        <a href="#contact" className="contact-btn" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
                    </div>
                </nav>

                {/* Desktop Action Button with fade-left animation and delay */}
                <div className="navbar-action desktop-only" data-aos="fade-left" data-aos-delay="300" data-aos-duration="800">
                    <a href="#contact" className="contact-btn">Contact Us</a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;