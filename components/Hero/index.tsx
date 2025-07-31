import React from "react";

interface HeroProps {
  tagline?: string;
  brand?: string;
  discount?: string;
  description?: string;
  ctaText?: string;
  endDate?: string;
}

const Hero: React.FC<HeroProps> = ({
  tagline = "The best shop in tunisia",
  brand = "Shopifyy",
  discount = "20% Off",
  description = "Celebrate the enduring elegance of Anglepoise—precision-engineered lighting that defines form and function.",
  ctaText = "SHOP AND BUY",
  endDate = "Sale ends July 31th.",
}) => {
  return (
    <section className="relative">
      <img
        src="autumn.jpg"
        alt="background"
        className="absolute w-full h-full object-cover"
      />

      <div className="relative z-10 bg-gray-500/50 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-gray-200 mb-2">
            {tagline}
          </p>
          <h2 className="text-3xl font-light tracking-wide mb-3 text-white">
            {brand}
          </h2>
          <p className="text-x5 text-red-400 font-bold mb-6">{discount}</p>
          <p className="text-base leading-relaxed max-w-2xl mx-auto mb-8 text-white">
            {description} For a limited time, enjoy {discount.toLowerCase()}{" "}
            select pieces in this exclusive SHOPIFY offering. {endDate}
          </p>
          <button className="bg-black text-white py-3 px-8 uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors"></button>
          {ctaText}
        </div>
      </div>
    </section>
  );
};

export default Hero;
