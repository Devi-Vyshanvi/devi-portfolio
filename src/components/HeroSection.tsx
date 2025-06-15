
import React from "react";

const HeroSection = () => (
  <section
    id="home"
    className="flex flex-col md:flex-row gap-10 items-center justify-center min-h-[80vh] py-10 bg-white"
  >
    <div className="flex-1 flex flex-col items-start justify-center px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold font-display text-black leading-tight tracking-tighter mb-6">
        Hey, I&apos;m <span className="text-yellow-400">Your Name</span>
        <br />
        <span className="block">A Passionate Learner</span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-6 max-w-2xl">
        I&apos;m a BTech CSE student with a love for <span className="font-semibold">web, code & design</span>.<br />
        <span className="text-yellow-500 font-bold">Let&apos;s build something amazing together.</span>
      </p>
      <div className="flex gap-4">
        <a
          href="#portfolio"
          className="rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-7 py-3 text-lg transition-all shadow"
        >
          See My Work
        </a>
        <a
          href="#contact"
          className="rounded-full border-2 border-yellow-400 hover:bg-yellow-50 text-yellow-500 font-bold px-7 py-3 text-lg transition-all"
        >
          Contact Me
        </a>
      </div>
    </div>
    <div className="flex-1 flex justify-center">
      <img
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=320&q=80"
        alt="Portrait"
        className="rounded-3xl shadow-2xl object-cover w-72 h-72"
        draggable="false"
      />
    </div>
  </section>
);

export default HeroSection;
