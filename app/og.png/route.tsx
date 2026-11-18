import { ImageResponse } from "next/og";

// Served as /og.png so the static export (GitHub Pages) emits a file with a .png extension.
export const dynamic = "force-static";
const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 80px", background: "#080b0b", backgroundImage: "linear-gradient(rgba(181,246,106,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(181,246,106,.05) 1px, transparent 1px)", backgroundSize: "52px 52px", color: "#eaf0e7", fontFamily: "monospace" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 22, color: "#89998e" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: 10, border: "2px solid rgba(181,246,106,.5)", background: "rgba(181,246,106,.1)", color: "#b5f66a", fontSize: 28, fontWeight: 700 }}>M_</div>
            <div style={{ display: "flex", color: "#eaf0e7", fontSize: 26, letterSpacing: "-.02em" }}>MRIDUL<span style={{ color: "#b5f66a" }}>.</span>ROY</div>
          </div>
          <div style={{ display: "flex" }}>d4rkr0n1n.github.io</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 20, letterSpacing: ".2em", color: "#b5f66a", marginBottom: 28 }}>— THE HUMAN BEHIND THE TERMINAL</div>
          <div style={{ display: "flex", fontSize: 112, fontWeight: 700, lineHeight: 1, letterSpacing: "-.06em" }}>I MAKE&nbsp;<span style={{ color: "#b5f66a" }}>SYSTEMS</span></div>
          <div style={{ display: "flex", fontSize: 112, fontWeight: 700, lineHeight: 1, letterSpacing: "-.06em" }}>BEHAVE<span style={{ color: "#b5f66a", marginLeft: -6 }}>.</span></div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #23302b", paddingTop: 26, fontSize: 20, color: "#799181" }}>
          <div style={{ display: "flex" }}>FORWARD DEPLOYED ENGINEER / DEVSECOPS / INFRASTRUCTURE</div>
          <div style={{ display: "flex", color: "#b5f66a" }}>● ONLINE</div>
        </div>
      </div>
    ),
    size,
  );
}
