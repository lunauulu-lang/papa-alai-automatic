import type { ReactNode } from "react";
import Link from "next/link";

export default function RootLayout({ children }: { children: ReactNode }) {
  const siteName = "Papa Alai Automatic";
  const domain = "alaibek.com";

  return (
    <html lang="ru">
      <body style={{ margin: 0, padding: 0, fontFamily: "Arial, sans-serif", background: "#f8f8f8" }}>
        {/* Top bar / Header */}
        <header
          style={{
            background: "#111",
            color: "#fff",
            padding: "14px 18px",
            borderBottom: "1px solid #222",
          }}
        >
          <div
            style={{
              maxWidth: 980,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 18 }}>
                🚀 {siteName}
              </Link>
              <span style={{ color: "#bbb", fontSize: 12 }}>{domain}</span>
            </div>

            <nav style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "flex-end" }}>
              <Link href="/" style={navLinkStyle}>Главная</Link>
              <Link href="/terms" style={navLinkStyle}>Terms</Link>
              <Link href="/privacy" style={navLinkStyle}>Privacy</Link>
              <Link href="/refund" style={navLinkStyle}>Refund</Link>
              <Link href="/contact" style={navLinkStyle}>Contact</Link>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main style={{ maxWidth: 980, margin: "0 auto", padding: "26px 18px" }}>
          <div style={{ background: "#fff", border: "1px solid #e6e6e6", borderRadius: 12, padding: 22 }}>
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer style={{ padding: "18px", color: "#666", fontSize: 13 }}>
          <div style={{ maxWidth: 980, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <span>© {new Date().getFullYear()} {siteName}</span>
            <span>
              <Link href="/terms" style={footerLinkStyle}>Terms</Link>{" · "}
              <Link href="/privacy" style={footerLinkStyle}>Privacy</Link>{" · "}
              <Link href="/refund" style={footerLinkStyle}>Refund</Link>{" · "}
              <Link href="/contact" style={footerLinkStyle}>Contact</Link>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}

const navLinkStyle: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  fontSize: 13,
  padding: "8px 10px",
  borderRadius: 10,
  background: "rgba(255,255,255,0.08)",
};

const footerLinkStyle: React.CSSProperties = {
  color: "#666",
  textDecoration: "underline",
};
