import Link from "next/link";

export const metadata = {
  title: "Papa Alai Automatic - AI-Powered Automation Platform",
  description:
    "Connect tools, automate workflows, and scale your business with our AI-powered platform for e-commerce, marketing, and AI automation.",
  keywords: ["automation", "AI", "e-commerce", "marketing", "CRM", "workflow", "lead generation"],
  openGraph: {
    title: "Papa Alai Automatic",
    description: "Connect tools, automate workflows, and scale your business.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomePage() {
  const brand = "Papa Alai Automatic";
  const currentYear = new Date().getFullYear();

  const styles: Record<string, React.CSSProperties> = {
    page: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "clamp(32px, 5vw, 56px) 20px",
      background: "linear-gradient(180deg, #f7f7fb 0%, #ffffff 60%)",
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    },

    card: {
      width: "100%",
      maxWidth: 1040,
      background: "#ffffff",
      border: "1px solid #eee",
      borderRadius: "clamp(12px, 2vw, 20px)",
      padding: "clamp(24px, 4vw, 48px) clamp(20px, 3vw, 32px)",
      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    },

    accent: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "4px",
      background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
    },

    icon: {
      width: "clamp(56px, 8vw, 72px)",
      height: "clamp(56px, 8vw, 72px)",
      borderRadius: "clamp(12px, 2vw, 18px)",
      margin: "0 auto 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
      fontSize: "clamp(28px, 4vw, 36px)",
      color: "#fff",
      boxShadow: "0 6px 20px rgba(59, 130, 246, 0.3)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "default",
    },

    h1: {
      margin: "0 0 8px 0",
      fontSize: "clamp(36px, 5vw, 52px)",
      fontWeight: 900,
      letterSpacing: "-0.03em",
      lineHeight: 1.1,
      background: "linear-gradient(90deg, #111, #444)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    tagline: {
      margin: "0 auto 6px",
      fontSize: "clamp(18px, 2.5vw, 22px)",
      fontWeight: 700,
      color: "#3b82f6",
      letterSpacing: "-0.01em",
    },

    description: {
      margin: "0 auto",
      maxWidth: 780,
      fontSize: "clamp(16px, 2vw, 18px)",
      color: "#444",
      lineHeight: 1.7,
      padding: "0 10px",
    },

    badges: {
      margin: "24px auto 0",
      display: "flex",
      gap: 10,
      justifyContent: "center",
      flexWrap: "wrap",
      maxWidth: 860,
    },

    badge: {
      padding: "10px 16px",
      borderRadius: 999,
      background: "#f8fafc",
      border: "1px solid #e2e8f0",
      color: "#334155",
      fontWeight: 800,
      fontSize: "clamp(13px, 1.5vw, 14px)",
      transition: "all 0.2s ease",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
    },

    ctas: {
      margin: "32px 0 34px",
      display: "flex",
      gap: 12,
      justifyContent: "center",
      flexWrap: "wrap",
    },

    primaryBtn: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "14px 24px",
      borderRadius: 12,
      background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
      color: "#fff",
      textDecoration: "none",
      fontWeight: 900,
      fontSize: 16,
      border: "none",
      cursor: "pointer",
      transition: "all 0.25s ease",
      boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
      whiteSpace: "nowrap",
    },

    secondaryBtn: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "14px 24px",
      borderRadius: 12,
      background: "#fff",
      color: "#475569",
      textDecoration: "none",
      fontWeight: 800,
      fontSize: 16,
      border: "1px solid #e2e8f0",
      cursor: "pointer",
      transition: "all 0.25s ease",
      whiteSpace: "nowrap",
    },

    features: { margin: "34px 0 0" },

    featuresTitle: {
      fontSize: "clamp(20px, 3vw, 24px)",
      fontWeight: 900,
      color: "#111",
      margin: "0 0 18px 0",
      textAlign: "center",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: 16,
      textAlign: "left",
    },

    box: {
      border: "1px solid #e2e8f0",
      borderRadius: 16,
      padding: 20,
      background: "#fff",
      transition: "all 0.25s ease",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },

    boxIcon: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: "linear-gradient(135deg, #dbeafe 0%, #ede9fe 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 12,
      fontSize: 18,
      color: "#3b82f6",
    },

    boxTitle: { margin: "0 0 8px 0", fontSize: 16, fontWeight: 900, color: "#111" },

    boxText: { margin: 0, fontSize: 14, lineHeight: 1.6, color: "#475569", flex: 1 },

    footer: {
      marginTop: 40,
      paddingTop: 22,
      borderTop: "1px solid #e2e8f0",
      color: "#64748b",
      fontSize: 14,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
    },

    footerLinks: { display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" },

    footerLink: {
      color: "#475569",
      textDecoration: "none",
      fontWeight: 700,
      fontSize: 14,
      transition: "color 0.2s ease",
    },

    copyright: { marginTop: 6, fontSize: 13, color: "#94a3b8" },
  };

  const css = `
    .icon-hover:hover { transform: translateY(-4px) scale(1.03); box-shadow: 0 12px 28px rgba(59,130,246,0.40); }
    .badge-hover:hover { background:#3b82f6; color:#fff; border-color:#3b82f6; transform: translateY(-2px); }
    .primary-hover:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(59,130,246,0.42); }
    .secondary-hover:hover { background:#f8fafc; border-color:#3b82f6; color:#3b82f6; transform: translateY(-2px); }
    .box-hover:hover { transform: translateY(-4px); border-color:#3b82f6; box-shadow: 0 12px 32px rgba(0,0,0,0.08); }
    .footer-hover:hover { color:#3b82f6; }
    @media (max-width: 480px) { .cta-col { flex-direction: column; width:100%; } .cta-col a { width:100%; justify-content:center; } }
  `;

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <div style={styles.accent} />

        <div style={styles.icon} className="icon-hover" aria-label={`${brand} icon`} role="img">
          ⚡
        </div>

        <h1 style={styles.h1}>{brand}</h1>
        <p style={styles.tagline}>AI-Powered Automation Platform</p>

        <p style={styles.description}>
          Connect your tools, automate complex workflows, and scale your business — all in one powerful platform designed
          for <strong>e-commerce</strong>, <strong>marketing</strong>, and <strong>AI automation</strong>.
        </p>

        <div style={styles.badges}>
          <span style={styles.badge} className="badge-hover">✅ Lead Generation</span>
          <span style={styles.badge} className="badge-hover">🔄 CRM Automation</span>
          <span style={styles.badge} className="badge-hover">⚡ Webhooks & API</span>
          <span style={styles.badge} className="badge-hover">🧠 AI Workflows</span>
          <span style={styles.badge} className="badge-hover">📊 Real-time Analytics</span>
        </div>

        <div style={styles.ctas} className="cta-col">
          <Link href="/contact" style={styles.primaryBtn} className="primary-hover">
            🚀 Get Started
          </Link>
          <Link href="/terms" style={styles.secondaryBtn} className="secondary-hover">
            📄 Terms
          </Link>
          <Link href="/privacy" style={styles.secondaryBtn} className="secondary-hover">
            🔒 Privacy
          </Link>
          <Link href="/refund" style={styles.secondaryBtn} className="secondary-hover">
            💸 Refund
          </Link>
        </div>

        <section style={styles.features}>
          <h2 style={styles.featuresTitle}>Core Features</h2>

          <div style={styles.grid}>
            <div style={styles.box} className="box-hover">
              <div style={styles.boxIcon}>🤖</div>
              <h3 style={styles.boxTitle}>AI-Powered Automation</h3>
              <p style={styles.boxText}>
                Smart workflows that help you automate lead handling, customer support, and content tasks.
              </p>
            </div>

            <div style={styles.box} className="box-hover">
              <div style={styles.boxIcon}>🛒</div>
              <h3 style={styles.boxTitle}>E-commerce & Operations</h3>
              <p style={styles.boxText}>
                Connect your store and tools to automate orders, follow-ups, and back-office operations.
              </p>
            </div>

            <div style={styles.box} className="box-hover">
              <div style={styles.boxIcon}>📈</div>
              <h3 style={styles.boxTitle}>Marketing Automation</h3>
              <p style={styles.boxText}>
                Build multi-channel flows and track results — email, messengers, CRM, and more.
              </p>
            </div>
          </div>
        </section>

        <footer style={styles.footer}>
          <div style={{ textAlign: "center" }}>
            <strong>Domain:</strong> alaibek.com • <strong>Support:</strong>{" "}
            <a href="mailto:hello@alaibek.com" style={styles.footerLink} className="footer-hover">
              hello@alaibek.com
            </a>
          </div>

          <div style={styles.footerLinks}>
            <Link href="/terms" style={styles.footerLink} className="footer-hover">Terms of Service</Link>
            <Link href="/privacy" style={styles.footerLink} className="footer-hover">Privacy Policy</Link>
            <Link href="/refund" style={styles.footerLink} className="footer-hover">Refund Policy</Link>
            <Link href="/contact" style={styles.footerLink} className="footer-hover">Contact Us</Link>
          </div>

          <div style={styles.copyright}>© {currentYear} {brand}. All rights reserved.</div>
        </footer>

        <style>{css}</style>
      </div>
    </main>
  );
}
