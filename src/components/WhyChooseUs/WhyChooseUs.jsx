import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            title: "Premium & Safe",
            description: "100% safe, non-toxic, and ultra-soft materials carefully chosen for your baby's delicate skin.",
            bgColor: "#f0f7ff",
            iconColor: "var(--soft-blue)",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            )
        },
        {
            id: 2,
            title: "Eco-Friendly",
            description: "We care about the future. Our products are sustainably sourced and ethically manufactured.",
            bgColor: "#f2fcf8",
            iconColor: "var(--mint-green)",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                </svg>
            )
        },
        {
            id: 3,
            title: "Fast & Free Delivery",
            description: "Enjoy quick, island-wide doorstep delivery. Free shipping on all orders over Rs. 5,000.",
            bgColor: "#fff4f4",
            iconColor: "var(--primary-coral)",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
            )
        },
        {
            id: 4,
            title: "Expert Support",
            description: "Our team of baby product experts is here to help you make the best choice for your newborn.",
            bgColor: "#f8f4ff",
            iconColor: "var(--soft-purple)",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.1a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
            )
        },
        {
            id: 5,
            title: "Perfect Gifting",
            description: "Special gift wrapping and personalized notes available to make your gift extra special.",
            bgColor: "#fffdf0",
            iconColor: "var(--cream-yellow)",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 12 20 22 4 22 4 12"></polyline>
                    <rect x="2" y="7" width="20" height="5"></rect>
                    <line x1="12" y1="22" x2="12" y2="7"></line>
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                </svg>
            )
        },
        {
            id: 6,
            title: "Easy Returns",
            description: "Not satisfied? No worries. We offer a hassle-free 7-day return policy on all our items.",
            bgColor: "#f0fdf4",
            iconColor: "#4ade80",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                </svg>
            )
        }
    ];

    return (
        <section className="why-us-section" id='about'>
            <div className="container">
                <div className="why-us-header">
                    <span className="why-us-subtitle" data-aos="fade-down">The Best Choice</span>
                    <h2 className="why-us-title" data-aos="fade-up" data-aos-delay="100">Why Parents Love Lullaby</h2>
                </div>

                <div className="why-us-grid">
                    {features.map((feature, index) => (
                        <div
                            className="why-us-card"
                            key={feature.id}
                            data-aos="zoom-in-up"
                            data-aos-delay={index * 150}
                        >
                            <div
                                className="why-us-icon-wrapper"
                                style={{ backgroundColor: feature.bgColor, color: feature.iconColor }}
                            >
                                {feature.icon}
                            </div>
                            <h3 className="why-us-card-title">{feature.title}</h3>
                            <p className="why-us-card-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;