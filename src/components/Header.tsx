
import React from 'react';
import { Button } from './ui/button';

const Header = () => (
  <header className="flex justify-between items-center py-4">
    <div className="text-xl font-bold font-display tracking-wider">
      Ankana
    </div>
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
      <a href="#about" className="hover:text-primary transition-colors">About</a>
      <a href="#services" className="hover:text-primary transition-colors">What I do</a>
      <a href="#projects" className="hover:text-primary transition-colors">My Work</a>
    </nav>
    <Button asChild className="hidden md:inline-flex bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-700">
      <a href="#contact">
        Contact
      </a>
    </Button>
  </header>
);

export default Header;
