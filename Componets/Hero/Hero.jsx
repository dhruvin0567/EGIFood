"use client";

import Image from "next/image";

export default function Hero() {
  const heroImage = "/img/Home/hero.webp";

  return (
    <section className="relative w-full h-[80vh] min-h-[420px]">
      <Image
        src={heroImage}
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="container">
          <div className="glass-box text-white">
            <p className="hero-title">Welcome To</p>
            <h1>EGI Food Corp</h1>
            <p className="hero-title">Imported Middle Eastern Food Products</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </section>

  );
}
