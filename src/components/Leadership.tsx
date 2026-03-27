import { GitFork, Link, Code2 } from "lucide-react";

export default function Leadership() {
  return (
    <section className="py-28 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Who Builds{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
              YouBeMine
            </span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="group bg-zinc-900/60 border border-zinc-800 hover:border-indigo-500/40 rounded-2xl p-10 transition-all duration-300 hover:bg-zinc-900 text-center">
            {/* Avatar placeholder */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-teal-500 flex items-center justify-center shadow-xl shadow-indigo-500/20">
              <Code2 className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-white font-black text-2xl mb-1">
              Manikanta Gopi
            </h3>
            <p className="text-indigo-400 font-semibold text-sm tracking-wide uppercase mb-6">
              Founder &amp; Lead Engineer
            </p>

            <p className="text-zinc-400 leading-relaxed mb-8 max-w-lg mx-auto">
              Software Engineer II with extensive experience building scalable
              systems for high-volume traffic, performance optimization, and
              secure multi-cloud infrastructure. Passionate about privacy-first
              design and open-source transparency.
            </p>

            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/manikanta-gopi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-500 text-zinc-200 font-medium px-5 py-3 rounded-xl text-sm transition-all duration-200"
              >
                <GitFork className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/manikanta-gopi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-500 text-zinc-200 font-medium px-5 py-3 rounded-xl text-sm transition-all duration-200"
              >
                <Link className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
