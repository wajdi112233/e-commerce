"use client";
import { useState } from "react";

interface Item {
  id: number;
  src: string;
  alt: string;
  title: string;
  oldPrice: string;
  price: string;
}

function Carousel({ items }: { items: Item[] }) {
  const visibleCount = 4;
  const [start, setStart] = useState(0);

  const prev = () => setStart((s) => Math.max(s - visibleCount, 0));
  const next = () =>
    setStart((s) => Math.min(s + visibleCount, items.length - visibleCount));

  return (
    <div className="flex items-center w-full max-w-6xl mx-auto">
      <button
        onClick={prev}
        disabled={start === 0}
        className="p-2 bg-white rounded-full shadow mx-2 disabled:opacity-50"
        aria-label="Previous"
      >
        <span className="text-3xl">&lt;</span>
      </button>
      <div className="flex-1 flex space-x-6 bg-gray-50 py-8 px-4 rounded-lg overflow-x-hidden">
        {items.slice(start, start + visibleCount).map((item) => (
          <div key={item.id} className="flex flex-col items-center min-w-0">
            <div className="bg-white rounded-lg shadow-md w-56 h-64 flex items-center justify-center mb-4 overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-lg font-medium text-gray-500">
              {item.title}
            </div>
            <div className="mt-2">
              <span className="line-through text-gray-500 mr-2">
                {item.oldPrice}
              </span>
              <span className="font-semibold text-gray-500">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={next}
        disabled={start + visibleCount >= items.length}
        className="p-2 bg-white rounded-full shadow mx-2 disabled:opacity-50"
        aria-label="Next"
      >
        <span className="text-3xl">&gt;</span>
      </button>
    </div>
  );
}

export default Carousel;
