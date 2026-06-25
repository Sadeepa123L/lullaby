import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            mirror: true,
            easing: 'ease-out-cubic',
            offset: 50,
        });

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        lenis.on('scroll', () => {
            AOS.refresh();
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="app-container">
                            <Navbar />
                            <Hero />
                            <WhyChooseUs />
                            <FeaturedProducts />
                            <Contact />
                            <Footer />
                        </div>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;