import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0A0A0A] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">About Me 🪞</h2>
          <p className="mt-2 text-sm text-white/60">Profile</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 leading-relaxed text-white/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
            <p className="text-white/85">
              I'm a developer and builder, with a background in full stack development — but I enjoy going beyond just writing code. Over the years, I’ve taken on roles in project management, worked with data, and generally leaned into whatever challenges helped move a project forward. I like wearing different hats, learning on the go, and finding practical ways to bring ideas to life.
            </p>
            <p className="mt-4 text-white/85">
              What drives me most is the process of building — from concept to execution — and learning through doing. Whether it's crafting a user experience, diving into backend logic, or aligning teams around a product goal, I enjoy being involved across the stack and beyond.
            </p>
            <p className="mt-4 text-white/85">
              Outside of that, I love exploring new technologies, especially in the fast-moving world of AI. I’m always experimenting, tinkering, and seeing what’s possible — not because I have to, but because I genuinely enjoy the ride.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <div className="mb-4 text-sm text-white/60">Quick Highlights</div>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" /> Full-stack development across web and data platforms</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-sky-400" /> Comfortable switching hats: engineering, product, and ops</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-violet-400" /> Curious builder exploring AI and applied ML systems</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-amber-400" /> Pragmatic, outcome-focused, and iteration-driven</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
