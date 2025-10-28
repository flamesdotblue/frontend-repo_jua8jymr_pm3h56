import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Showcase from './components/Showcase.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Showcase />
      </main>
      <footer className="border-t border-white/10 bg-black py-8 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Sathwik Chiluveru • Built with care
      </footer>
    </div>
  );
}

export default App;
