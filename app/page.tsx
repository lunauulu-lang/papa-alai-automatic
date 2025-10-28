export default function HomePage() {
  return (
    <main style={{
      padding: "40px",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh"
    }}>
      <h1 style={{ fontSize: "3em", marginBottom: "20px", color: "#1a1a1a" }}>🚀 Papa Alai Automatic</h1>
      <p style={{ fontSize: "1.2em", color: "#333" }}>Automation platform for AI, e-commerce, and marketing</p>
      <p style={{ color: "#666" }}>Connect tools, automate workflows, scale your business</p>
      <a
        href="https://alaibek.com"
        style={{
          marginTop: "30px",
          display: "inline-block",
          padding: "12px 24px",
          backgroundColor: "#0070f3",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "16px"
        }}
      >
        Get Started
      </a>
    </main>
  );
}
