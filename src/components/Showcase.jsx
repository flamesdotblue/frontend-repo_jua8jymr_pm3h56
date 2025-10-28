import React from 'react';

const projects = [
  {
    name: 'TrainerSwift',
    status: 'Completed',
    desc:
      'Trainer Swift is a smart booking platform designed for the fitness world. It connects trainers who offer services with trainees looking to book personalized sessions. Trainers can create accounts, list their services, and manage schedules, while trainees can browse, book, and track sessions with ease. The platform streamlines fitness bookings, making it simple for both sides to connect, manage time, and stay committed to their goals',
    stack: ['Python Flask', 'Next.js', 'PostgreSQL', 'Kong', 'AWS', 'Docker'],
    health: { state: 'offline', note: 'maintenance', uptime: 'N/A', response: 'N/A' },
  },
  {
    name: 'LingoLah',
    status: 'Completed',
    desc:
      'Voice-activated digital assistant for elderly users. A voice-driven Chrome extension overlay that lets seniors interact with websites in native dialects (Hokkien, Cantonese) without provider-side changes. Uses speech recognition (OpenAI Whisper, Google STT) and SEA Lion AI + LangChain to understand intent for tasks like booking appointments and retrieving records. Python microservices backend with MongoDB, Docker, and AWS. Replies via Web Speech API with simplified text for accessibility.',
    stack: ['Chrome Extension', 'Whisper', 'Google STT', 'SEA-LION', 'LangChain', 'Python', 'MongoDB', 'Docker', 'AWS', 'Web Speech API'],
    health: { state: 'offline', note: 'maintenance', uptime: 'N/A', response: 'N/A' },
  },
  {
    name: 'FlyMePlease',
    status: 'Completed',
    desc:
      "FlyMePlease is a smart travel assistant bot that finds the cheapest flights based on your preferred date, time, and budget. Users can subscribe to specific routes and receive real-time alerts with deals and price trends. The system also provides insightful analytics such as '8% cheaper than average' to help you make informed booking decisions.",
    stack: ['Python', 'Telegram API', 'PostgreSQL', 'EC2', 'ETL'],
    health: { state: 'offline', note: 'error', uptime: 'N/A', response: 'N/A' },
  },
];

const ideas = [
  { name: 'Open Source Repo Radar', impact: 'Medium', stack: ['Next.js', 'GitHub API', 'Redis', '+1'], time: '3 weeks' },
  { name: 'Culture Watch', impact: 'Medium', stack: ['Python', 'FastAPI', 'React', '+1'], time: '5 weeks' },
  { name: 'Digital Scrum Master', impact: 'Medium', stack: ['Node.js', 'OpenAI API', 'Slack API', '+1'], time: '4 weeks' },
  { name: 'Autonomous Data Pipeline Management System', impact: 'High', stack: ['Python', 'Airflow', 'Kubernetes', '+1'], time: '6 weeks' },
];

const inProgress = [
  { name: 'Telegram Bot for Cheap Flights', impact: 'High', stack: ['Python', 'Telegram API', 'AWS Lambda', '+1'], progress: 80, eta: '1 week remaining' },
  { name: 'Startup Intelligence Dashboard', impact: 'High', stack: ['Next.js', 'FastAPI', 'PostgreSQL', '+1'], progress: 30, eta: '3 weeks remaining' },
];

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function ProjectCard({ p }) {
  const color = p.health.note === 'error' ? 'red' : 'amber';
  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition hover:border-white/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <div className="mt-1 text-sm text-white/60">{p.status}</div>
        </div>
        <span className={`rounded-full border px-2 py-0.5 text-xs ${
          p.health.state === 'offline' ? 'border-white/20 text-white/70' : 'border-emerald-400/40 text-emerald-300'
        }`}>{p.health.state}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/80">{p.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <Pill key={s}>{s}</Pill>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 items-center gap-3 text-xs text-white/70">
        <div className="col-span-2 inline-flex items-center gap-2">
          <span className={`inline-flex h-2 w-2 rounded-full ${color === 'red' ? 'bg-red-400' : 'bg-amber-400'}`} />
          <span className="capitalize">{p.health.note}</span>
        </div>
        <div className="ml-auto">Uptime: {p.health.uptime}</div>
        <div className="ml-auto">Response: {p.health.response}</div>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <button className="cursor-not-allowed rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/70">Live Demo</button>
        <button className="rounded-full border border-white/20 bg-white px-4 py-2 text-xs font-medium text-black hover:bg-white/90">Source Code</button>
      </div>
    </article>
  );
}

export default function Showcase() {
  return (
    <section id="projects" className="relative w-full bg-[#0A0A0A] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">My Projects 🧰</h2>
          <p className="mt-2 text-sm text-white/60">Explore my work with real-time monitoring and deployment status</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold">What's Cooking 🍳</h3>
          <p className="mt-1 text-sm text-white/60">A peek into my creative kitchen - ideas simmering, projects in the oven, and dishes ready to serve</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm font-medium text-white/90">Ideas</div>
                <div className="text-xs text-white/50">{ideas.length} projects</div>
              </div>
              <div className="space-y-4">
                {ideas.map((i) => (
                  <div key={i.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="font-medium">{i.name}</div>
                      <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-xs text-amber-200">{i.impact}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/80">
                      {i.stack.map((s) => (
                        <Pill key={s}>{s}</Pill>
                      ))}
                    </div>
                    <div className="mt-2 text-xs text-white/60">{i.time}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm font-medium text-white/90">In Progress</div>
                <div className="text-xs text-white/50">{inProgress.length} projects</div>
              </div>
              <div className="space-y-4">
                {inProgress.map((p) => (
                  <div key={p.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="font-medium">{p.name}</div>
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-xs text-emerald-200">{p.impact}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/80">
                      {p.stack.map((s) => (
                        <Pill key={s}>{s}</Pill>
                      ))}
                    </div>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-emerald-400" style={{ width: `${p.progress}%` }} />
                    </div>
                    <div className="mt-2 text-xs text-white/60">Progress {p.progress}% • {p.eta}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6 text-center">
            <h4 className="text-lg font-semibold">Hey, let's connect!</h4>
            <p className="mt-2 text-sm text-white/70">I'm always excited to discuss new opportunities, collaborate on interesting projects, or just chat about tech over coffee.</p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <a href="mailto:sathwik@example.com" className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90">Email Me</a>
              <a href="#hero" className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-white/90">Back to Top</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
