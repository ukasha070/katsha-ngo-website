"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DonationForm from "../forms/DonationForm";

const slides = [
  {
    id: 1,
    image: "/background-about.webp",
    title: "Empowering Uganda",
    description:
      "We are bridging the digital divide through computer literacy and community support.",
  },
  {
    id: 2,
    image: "/background-about.webp",
    title: "Education for All",
    description:
      "Providing affordable access to knowledge, resources, and opportunities.",
  },
  {
    id: 3,
    image: "/background-about.webp",
    title: "Digital Future",
    description:
      "Building platforms that support growth, innovation, and inclusivity.",
  },
];

export default function DonationHero() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full lg:h-[90vh] flex flex-col lg:flex-row overflow-hidden">
      {/* Left - Slider */}
      <div className="relative w-full lg:w-3/6 xl:w-2/3 h-full max-[500px]:min-h-[15rem] max-lg:min-h-[25rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover"
            />
            {/* Overlay content */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-8 lg:px-16 text-white">
              <h1 className="text-4xl lg:text-5xl xl:text-7xl font-black text-yellow-600 line-clamp-2">
                {slides[current].title}
              </h1>
              <p className="mt-4 lg:mt-6 text-lg max-w-lg lg:text-xl text-white/60 font-semibold line-clamp-3">
                {slides[current].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-6 left-6 flex gap-3">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-yellow-600 text-white shadow-lg hover:bg-yellow-700"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-yellow-600 text-white shadow-lg hover:bg-yellow-700"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Right - Donation Form */}
      <div className="w-full lg:w-3/6 xl:w-1/3 bg-white flex items-center justify-center p-10 shadow-xl z-10">
        <div className="w-full mx-auto sm:max-w-md md:max-w-lg lg:max-w-full lg:px-10">
          <DonationForm progess={true} />
        </div>
      </div>
    </section>
  );
}
