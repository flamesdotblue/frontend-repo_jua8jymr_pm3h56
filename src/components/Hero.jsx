import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient vignette for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-start justify-center gap-6 px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Cloud-Native Builder
        </div>
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl">Hi, I'm <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Sathwik Chiluveru</span></h1>
        <p className="max-w-2xl text-base text-white/80 sm:text-lg">
          I build secure, scalable experiences across the stack — from interactive interfaces to resilient cloud systems.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black shadow hover:bg-white/90 transition">
            View My Work
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur hover:border-white/40 transition">
            Learn More About Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur hover:border-white/30">
        Scroll Down
      </a>
    </section>
  );
}
