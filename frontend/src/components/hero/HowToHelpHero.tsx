import React from "react";

const HowToHelpHero = () => {
  return (
    <div>
      <section className="relative overflow-hidden text-white py-16 px-6 text-center bg-[url('/background-about.webp')] bg-center bg-no-repeat bg-cover">
        {/* Overlay */}
        <div className="absolute inset-0 bg-yellow-500/50 mix-blend-multiply" />

        {/* Optional extra dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">How to help</h1>
          <p className="max-w-2xl mx-auto text-lg">
            A vibrant place where we connect, share, and make a positive impact
            together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowToHelpHero;
