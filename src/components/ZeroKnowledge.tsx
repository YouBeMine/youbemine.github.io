import { KeyRound, ShieldCheck, Lock } from "lucide-react";

const features = [
  {
    icon: KeyRound,
    title: "Client-Side Key Derivation",
    description:
      "All encryption keys are derived exclusively on-device using PBKDF2 with a high iteration count. Your password never leaves your device — not even as a hash.",
  },
  {
    icon: ShieldCheck,
    title: "AES-256-GCM Encryption",
    description:
      "Every message, media file, and metadata payload is encrypted using AES-256-GCM before it ever touches the network. Authenticated encryption guarantees both confidentiality and integrity.",
  },
  {
    icon: Lock,
    title: "Zero Server Visibility",
    description:
      "Servers and service administrators never have access to encryption keys, plaintext passwords, or unencrypted files. Even a full server compromise exposes only ciphertext.",
  },
];

export default function ZeroKnowledge() {
  return (
    <section id="features" className="py-28 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Security Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Zero-Knowledge{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
              Architecture
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Cryptographic proof that we cannot read your data — by design, not
            by promise. No encryption keys, passwords, or unencrypted files are
            ever visible to our servers or administrators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative bg-zinc-900/60 border border-zinc-800 hover:border-teal-500/40 rounded-2xl p-8 transition-all duration-300 hover:bg-zinc-900"
            >
              <div className="w-12 h-12 bg-teal-500/10 border border-teal-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
                <Icon className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Crypto spec callout */}
        <div className="mt-10 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-indigo-500/10 border border-indigo-500/20 rounded-lg flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <p className="text-zinc-300 text-sm font-semibold mb-1">
              Cryptographic Primitives
            </p>
            <p className="text-zinc-500 text-sm">
              <span className="text-indigo-400 font-mono">AES-256-GCM</span>{" "}
              for symmetric encryption ·{" "}
              <span className="text-indigo-400 font-mono">PBKDF2-SHA512</span>{" "}
              for key derivation (310,000+ iterations) ·{" "}
              <span className="text-indigo-400 font-mono">X25519</span> for
              asymmetric key exchange · All operations run in-browser / on-device
              via the Web Crypto API.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
