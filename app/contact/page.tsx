export default function ContactPage() {
  const supportEmail = "hello@alaybek.com";

  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px", lineHeight: 1.6 }}>
      <h1>Contact</h1>
      <p><strong>Last updated:</strong> December 2025</p>

      <p>
        If you have questions about our products, billing, refunds, or these policies, contact us:
      </p>

      <ul>
        <li>
          Email:{" "}
          <a href={`mailto:${supportEmail}`} style={{ textDecoration: "underline" }}>
            {supportEmail}
          </a>
        </li>
      </ul>

      <h2>Support hours</h2>
      <p>We typically respond within 24–48 hours (business days).</p>
    </main>
  );
}
