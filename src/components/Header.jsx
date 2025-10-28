import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
        <a href="#hero" className="text-sm font-semibold tracking-wide">SATHWIK</a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
        </nav>
        <a href="#projects" className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black hover:bg-white/90">View Work</a>
      </div>
    </header>
  );
}
