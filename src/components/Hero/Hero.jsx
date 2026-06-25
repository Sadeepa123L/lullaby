import React from 'react';
import './Hero.css';
import HomeImage from '../../assets/HomeImg.jpg';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <h4 className="sub-heading" data-aos="fade-up">Welcome to Lullaby</h4>
                    <h1 data-aos="fade-up" data-aos-delay="100">The Gentle Touch Your Baby Deserves</h1>
                    <p data-aos="fade-up" data-aos-delay="200">
                        Discover premium, safe, and adorable products curated with love for your little one's comfort and joy.
                    </p>
                    <div className="hero-buttons" data-aos="fade-up" data-aos-delay="300">
                        <button className="btn btn-primary">Shop Collection</button>
                        <button className="btn btn-secondary">Learn More</button>
                    </div>
                </div>
                <div className="hero-image" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                    {/* Placeholder image - Replace with your actual baby image later */}
                    <div className="image-blob">
                        <img src={HomeImage} alt="Happy Baby" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;