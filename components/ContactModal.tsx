"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Linkedin, Mail, Send, TerminalSquare, X } from "lucide-react";

const channels = [
  { label: "EMAIL", value: "midlry.mr@gmail.com", href: "mailto:midlry.mr@gmail.com", icon: Mail, external: false },
  { label: "LINKEDIN", value: "in/d4rkr0n1n", href: "https://linkedin.com/in/d4rkr0n1n", icon: Linkedin, external: true },
  { label: "TELEGRAM", value: "@d4rkr0n1n", href: "https://t.me/d4rkr0n1n", icon: Send, external: true },
];

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>("a[href], button");
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = overflow; previous?.focus(); };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-void/80 px-4 backdrop-blur-sm" onClick={onClose}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="contact-title" onClick={(e) => e.stopPropagation()} className="shell-card w-full max-w-md animate-rise overflow-hidden rounded-xl shadow-glow">
        <div className="flex h-12 items-center justify-between border-b border-line bg-[#151b18] px-4">
          <span className="flex items-center gap-2 text-[10px] text-faded"><TerminalSquare size={12}/> ~/mridul/contact</span>
          <button ref={closeRef} onClick={onClose} aria-label="Close contact dialog" className="p-1 text-faded hover:text-phosphor"><X size={16}/></button>
        </div>
        <div className="p-6 sm:p-7">
          <div className="section-label">OPEN CONNECTION</div>
          <h2 id="contact-title" className="mt-4 font-sans text-3xl font-bold tracking-[-.06em]">PICK A <span className="text-phosphor">PROTOCOL.</span></h2>
          <p className="mt-3 text-xs leading-6 text-[#8fa393]">All channels monitored. Response times vary with uptime.</p>
          <div className="mt-6 flex flex-col gap-3">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <a key={label} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group flex items-center gap-4 rounded-md border border-line bg-[#101712] px-4 py-3.5 transition-colors hover:border-phosphor/55">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#3b5240] bg-[#18241a] text-phosphor"><Icon size={18}/></span>
                <span className="min-w-0 flex-1"><span className="block text-[10px] tracking-[.15em] text-phosphor">{label}</span><span className="block truncate text-xs text-[#b5c1b8]">{value}</span></span>
                <ArrowUpRight size={15} className="text-faded transition-colors group-hover:text-phosphor"/>
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-line bg-[#0b100e] px-6 py-3 text-[9px] uppercase tracking-widest text-[#607567]"><span>esc to close</span><span className="text-phosphor">● listening</span></div>
      </div>
    </div>
  );
}
