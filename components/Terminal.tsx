"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowUpRight, TerminalSquare } from "lucide-react";

type Entry = { kind: "command" | "output" | "warning"; text: string };
const initial: Entry[] = [
  { kind: "output", text: "mridul@localhost:~ $ ./introduce.sh" },
  { kind: "output", text: "Initializing personality... [minimal]" },
  { kind: "output", text: "Loading skills... [complete]" },
  { kind: "output", text: "Everything is fine. That's suspicious." },
  { kind: "warning", text: "Type 'help' to interrogate this system." },
];
const commands: Record<string, string[]> = {
  help: ["Available: about, skills, experience, projects, contact, sudo, clear, help"],
  about: ["Forward Deployed Engineer. I translate complex requirements into systems that actually run.", "Former DevSecOps Engineer @ SBI · DevOps Engineer @ TCS"],
  skills: ["AWS · Azure · GCP · Terraform · Docker · Jenkins · GitHub Actions", "Vault · SonarQube · Kafka · Redis · Ollama · Langfuse"],
  experience: ["SBI (2024–2026): DevSecOps & secure platform delivery", "TCS (2021–2024): Cloud migrations, pipelines, infrastructure"],
  projects: ["01 / Secure delivery pipelines", "02 / Cloud-native modernization", "03 / Local LLM lab"],
  contact: ["Email: midlry.mr@gmail.com", "GitHub: github.com/d4rkr0n1n"],
  sudo: ["Access denied. Being confident is not the same as having permission."],
};
export function Terminal() {
  const [history, setHistory] = useState<Entry[]>(initial);
  const [value, setValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }); }, [history]);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const cmd = value.trim().toLowerCase(); if (!cmd) return;
    setValue(""); if (cmd === "clear") { setHistory([]); return; }
    const next: Entry[] = [{ kind: "command", text: `mridul@localhost:~ $ ${value}` }, ...(commands[cmd] || [`command not found: ${cmd}. Try 'help'.`]).map((text) => ({ kind: "output" as const, text }))];
    setHistory((old) => [...old, ...next]);
  }
  return (
    <div className="shell-card overflow-hidden rounded-xl shadow-glow" onClick={() => inputRef.current?.focus()}>
      <div className="flex h-12 items-center justify-between border-b border-line bg-[#151b18] px-4">
        <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#e67d70]"/><span className="h-2.5 w-2.5 rounded-full bg-[#dfba65]"/><span className="h-2.5 w-2.5 rounded-full bg-[#85c47a]"/></div>
        <span className="flex items-center gap-2 text-[10px] text-faded"><TerminalSquare size={12}/> ~/mridul/terminal</span>
        <span className="text-[9px] text-[#57665d]">zsh</span>
      </div>
      <div ref={scrollRef} className="terminal-scroll h-[330px] overflow-y-auto p-5 font-mono text-[11px] leading-7 sm:text-xs" aria-label="Interactive terminal output" role="log" aria-live="polite">
        {history.map((entry, index) => <p key={index} className={entry.kind === "command" ? "text-phosphor" : entry.kind === "warning" ? "text-[#d3af73]" : "text-[#a1b3a6]"}>{entry.text}</p>)}
        <form onSubmit={submit} className="mt-1 flex items-center gap-2">
          <label htmlFor="cmd" className="shrink-0 text-phosphor">$</label>
          <input ref={inputRef} id="cmd" type="text" autoComplete="off" spellCheck={false} value={value} onChange={(e) => setValue(e.target.value)} placeholder="enter command..." className="min-w-0 flex-1 bg-transparent text-cream outline-none placeholder:text-[#4a5d50]" aria-label="Terminal command" />
          <button type="submit" aria-label="Run command" className="p-1 text-phosphor hover:text-white"><ArrowUpRight size={14}/></button>
        </form>
      </div>
      <div className="flex items-center justify-between border-t border-line bg-[#0b100e] px-5 py-3 text-[9px] uppercase tracking-widest text-[#607567]"><span>interactive shell</span><span className="text-phosphor">● session active</span></div>
    </div>
  );
}
