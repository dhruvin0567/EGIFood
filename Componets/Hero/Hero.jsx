"use client";

import Image from "next/image";

export default function Hero() {
  const heroImage = "/img/Home/hero.webp";

  return (
    <section className="hero-section">
      <Image
        src={heroImage}
        alt="Hero Background"
        fill
        className="hero-image"
        priority
      />

      <div className="hero-overlay">
        <div className="container">
          <div className="glass-box">
            <p className="hero-title">Welcome To</p>
            <h1>EGI Food Corp</h1>
            <p className="hero-title">Imported Middle Eastern Food Products</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
