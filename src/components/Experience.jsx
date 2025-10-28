import React from 'react';

const roles = [
  {
    company: 'NCS Group',
    role: 'Software Engineer Intern',
    duration: '3 months',
    period: 'May 2025 - Present',
    location: 'Singapore',
    stack: ['Angular', 'TypeScript', 'Java', 'Springboot'],
    summary:
      'Developing internal tools such as batch job systems, and building full-stack modules for public sector clients with a focus on security, scalability, and high-load performance.',
  },
  {
    company: 'Hummingbird Bioscience',
    role: 'Full-stack Developer Intern',
    duration: '5 months',
    period: 'Aug 2024 - Dec 2024',
    location: 'Singapore',
    stack: ['Python', 'Mage AI', 'R', 'R Shiny'],
    summary:
      'Built internal data platforms and dashboards, designing ETL pipelines to support biomedical research involving confidential patient data and complex lab workflows.',
  },
  {
    company: 'Craftwills',
    role: 'Software Engineer',
    duration: '6 months',
    period: 'May 2024 - Oct 2024',
    location: 'Singapore',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    summary:
      'Developed responsive web components and integrated APIs for digital will creation, enhancing platform usability and streamlining customer onboarding.',
  },
  {
    company: 'Trinax',
    role: 'Project Management Intern',
    duration: '3 months',
    period: 'May 2024 - Jul 2024',
    location: 'Singapore',
    stack: ['Agile', 'QA Testing', 'Project Management'],
    summary:
      'Managed software development lifecycles across Agile sprints, coordinated deployments, and conducted QA to ensure timely and stable project delivery.',
  },
];

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-[#0C0C0C] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-2 text-2xl font-semibold sm:text-3xl md:text-4xl">Work Experience 🪜</h2>
        <p className="mb-8 text-sm text-white/60">My professional journey building impactful solutions</p>

        <div className="grid gap-6 md:grid-cols-2">
          {roles.map((r) => (
            <article key={r.company + r.role} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition hover:border-white/20">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{r.role}</h3>
                  <div className="mt-1 text-sm text-white/70">{r.company} • {r.location}</div>
                </div>
                <div className="text-right text-xs text-white/60">
                  <div>{r.duration}</div>
                  <div>{r.period}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/80">{r.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {r.stack.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
