import { Server, Smartphone, HardDrive, Cloud } from "lucide-react";

const repos = [
  {
    icon: Server,
    name: "Zero-Knowledge Messaging Engine",
    description:
      "High-performance real-time messaging backend delivering sub-100ms message delivery latency. Architected for horizontal scale and end-to-end encrypted payload transport.",
    tags: ["Node.js", "NestJS", "Socket.io", "Redis Pub/Sub"],
    color: "indigo",
  },
  {
    icon: Smartphone,
    name: "Cross-Platform Client",
    description:
      "Native-quality iOS and Android experience from a single codebase. Handles on-device cryptography, optimistic UI updates, and offline-first data sync.",
    tags: ["Flutter", "Dart"],
    color: "teal",
  },
  {
    icon: HardDrive,
    name: "Encrypted Media Vault",
    description:
      "Cloud storage architecture where every byte is encrypted on-device before transmission. Employs asymmetric key exchange so only recipients can decrypt shared media.",
    tags: ["Asymmetric Encryption", "Cloud Storage", "On-Device Crypto"],
    color: "indigo",
  },
  {
    icon: Cloud,
    name: "DevOps & Infrastructure",
    description:
      "Fully automated, reproducible infrastructure-as-code pipeline. GitOps-driven deployments with zero-downtime rollouts and cryptographic supply-chain verification.",
    tags: ["Docker", "Kubernetes", "Terraform", "ArgoCD"],
    color: "teal",
  },
];

const colorMap: Record<string, { border: string; icon: string; tag: string }> =
  {
    indigo: {
      border: "hover:border-indigo-500/40",
      icon: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/20",
      tag: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
    },
    teal: {
      border: "hover:border-teal-500/40",
      icon: "bg-teal-500/10 border-teal-500/20 text-teal-400 group-hover:bg-teal-500/20",
      tag: "bg-teal-500/10 text-teal-300 border border-teal-500/20",
    },
  };

export default function TechShowcase() {
  return (
    <section className="py-28 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Open Source Repositories
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Built in the{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent">
              Open
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every component of the stack is designed, reviewed, and improved
            publicly. Security through transparency, not obscurity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {repos.map(({ icon: Icon, name, description, tags, color }) => {
            const c = colorMap[color];
            return (
              <div
                key={name}
                className={`group relative bg-zinc-900/60 border border-zinc-800 ${c.border} rounded-2xl p-8 transition-all duration-300 hover:bg-zinc-900 flex flex-col`}
              >
                <div
                  className={`w-12 h-12 border rounded-xl flex items-center justify-center mb-6 transition-colors ${c.icon}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{name}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm mb-6 flex-1">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-mono font-medium px-3 py-1 rounded-full ${c.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
