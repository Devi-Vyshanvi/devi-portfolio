
import React from 'react';
import { Button } from './ui/button';

const Header = () => (
  <header className="grid grid-cols-3 items-center py-4">
    <div className="font-bold text-lg">Ankana</div>
    <nav className="hidden md:flex justify-self-center items-center gap-8 text-sm font-medium text-muted-foreground">
      <a href="#about" className="story-link hover:text-primary transition-colors">About</a>
      <a href="#services" className="story-link hover:text-primary transition-colors">What I do</a>
      <a href="#projects" className="story-link hover:text-primary transition-colors">My Work</a>
    </nav>
    <div className="justify-self-end">
      {/* Contact button removed to align with reference design */}
    </div>
  </header>
);

export default Header;
