import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            name: "Cozy Sleep Onesie",
            price: "Rs. 2,500",
            image: "https://placehold.co/400x400/transparent/333?text=Onesie",
            bgColor: "#f0f7ff", // Very light blue
            tag: "Best Seller"
        },
        {
            id: 2,
            name: "Soft Organic Plush Toy",
            price: "Rs. 1,800",
            image: "https://placehold.co/400x400/transparent/333?text=Plush+Toy",
            bgColor: "#f2fcf8", // Very light mint
            tag: "New"
        },
        {
            id: 3,
            name: "Gentle Baby Lotion",
            price: "Rs. 1,200",
            image: "https://placehold.co/400x400/transparent/333?text=Lotion",
            bgColor: "#f8f4ff", // Very light purple 
            tag: ""
        },
        {
            id: 4,
            name: "Cotton Muslin Swaddle",
            price: "Rs. 2,100",
            image: "https://placehold.co/400x400/transparent/333?text=Swaddle",
            bgColor: "#fffdf0", // Very light yellow
            tag: ""
        },
    ];

    return (
        <section className="modern-featured" id="products">
            <div className="container">
                <div className="modern-section-header">
                    <span className="subtitle" data-aos="fade-down">Discover</span>
                    <h2 className="title" data-aos="fade-up" data-aos-delay="100">Our Favorites</h2>
                </div>

                <div className="modern-product-grid">
                    {products.map((product, index) => (
                        <div
                            className="modern-product-card"
                            key={product.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            <div
                                className="modern-product-image-wrapper"
                                style={{ backgroundColor: product.bgColor }}
                            >
                                {product.tag && <span className="product-badge">{product.tag}</span>}
                                <button className="wishlist-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                </button>
                                <img src={product.image} alt={product.name} className="product-img" />
                            </div>

                            <div className="modern-product-info">
                                <h3 className="modern-product-title">{product.name}</h3>
                                <div className="modern-product-bottom">
                                    <span className="modern-product-price">{product.price}</span>
                                    <button className="modern-add-cart-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;