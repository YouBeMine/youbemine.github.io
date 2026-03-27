import Image from "next/image";
import { GitFork, Shield, Mail, FileText } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const year = CURRENT_YEAR;

  return (
    <footer className="bg-[#050505] border-t border-zinc-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
              <div className="relative w-7 h-7 rounded-lg overflow-hidden ring-1 ring-indigo-500/30 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="YouBeMine logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-white font-black text-xl tracking-tight">
                YouBeMine
              </span>
            </div>
            <p className="text-zinc-600 text-sm max-w-xs">
              Privacy by design. Connection by intent.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:contact@youbemine.dev"
              className="flex items-center gap-2 text-zinc-500 hover:text-zinc-200 text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 text-zinc-500 hover:text-zinc-200 text-sm transition-colors"
            >
              <Shield className="w-4 h-4" />
              Privacy Philosophy
            </a>
            <a
              href="https://github.com/YouBeMine"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-500 hover:text-zinc-200 text-sm transition-colors"
            >
              <FileText className="w-4 h-4" />
              Open Source License
            </a>
            <a
              href="https://github.com/YouBeMine"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-500 hover:text-zinc-200 text-sm transition-colors"
            >
              <GitFork className="w-4 h-4" />
              GitHub
            </a>
          </nav>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-700 text-xs">
            &copy; {year} YouBeMine. All rights reserved.
          </p>
          <p className="text-zinc-700 text-xs font-mono">
            Built with zero-knowledge, in the open.
          </p>
        </div>
      </div>
    </footer>
  );
}
