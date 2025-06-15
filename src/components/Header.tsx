
import React from 'react';
import { Button } from './ui/button';

const Header = () => (
  <header className="grid grid-cols-3 items-center py-4">
    <div />
    <nav className="hidden md:flex justify-self-center items-center gap-8 text-sm font-medium text-muted-foreground">
      <a href="#about" className="story-link hover:text-primary transition-colors">About</a>
      <a href="#services" className="story-link hover:text-primary transition-colors">What I do</a>
      <a href="#projects" className="story-link hover:text-primary transition-colors">My Work</a>
    </nav>
    <div className="justify-self-end">
      <Button asChild className="hidden md:inline-flex bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-700">
        <a href="#contact">
          Contact
        </a>
      </Button>
    </div>
  </header>
);

export default Header;
