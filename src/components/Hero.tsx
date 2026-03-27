import { ArrowDown, GitFork } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f172a] to-[#0a0a0a] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08)_0%,_transparent_70%)] z-0" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
          Open Source · Zero Knowledge · End-to-End Encrypted
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
          Privacy by Design,{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent">
            Connection by Intent.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          The impenetrable digital sanctuary for modern couples. Open-source,
          zero-knowledge, and built for absolute trust.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#features"
            className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
          >
            Read the Specs
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="https://github.com/YouBeMine"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-semibold px-8 py-4 rounded-xl border border-zinc-700 hover:border-zinc-500 transition-all duration-200"
          >
            <GitFork className="w-5 h-5" />
            View on GitHub
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-5 h-5 text-zinc-600" />
      </div>
    </section>
  );
}
