export default function TermsPage() {
  const brand = "Papa Alai Automatic";
  const website = "https://alaibek.com";
  const supportEmail = "hello@alaibek.com"; // потом поменяем, когда оплатишь почту
  const country = "Kyrgyz Republic";
  const lastUpdated = "December 2025";

  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px", lineHeight: 1.6 }}>
      <h1 style={{ marginBottom: 6 }}>Terms of Service</h1>
      <div style={{ opacity: 0.75, marginBottom: 18 }}>
        <div><strong>Brand:</strong> {brand}</div>
        <div><strong>Website:</strong> {website}</div>
        <div><strong>Support:</strong> {supportEmail}</div>
        <div><strong>Country:</strong> {country}</div>
        <div><strong>Last updated:</strong> {lastUpdated}</div>
      </div>

      <p>
        These Terms of Service (“Terms”) govern your access to and use of the {brand} website and services
        (the “Service”). By accessing or using the Service, you agree to these Terms.
      </p>

      <h2>1. Who we are</h2>
      <p>
        The Service is operated as an individual entrepreneur/sole proprietor based in {country}.
        The Service provides digital products, automation tools, and software-as-a-service (SaaS) features.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years old (or the age of majority in your jurisdiction) to use the Service.
      </p>

      <h2>3. Accounts</h2>
      <ul>
        <li>You are responsible for maintaining the confidentiality of your account and credentials.</li>
        <li>You agree to provide accurate information and keep it updated.</li>
        <li>We may suspend or terminate accounts that violate these Terms.</li>
      </ul>

      <h2>4. Digital products and SaaS</h2>
      <p>
        The Service may include downloadable digital content, templates, workflows, automation packs, and SaaS access.
        Some features may require payment and may be updated over time.
      </p>

      <h2>5. Payments</h2>
      <p>
        Payments may be processed by third-party payment providers (e.g., Paddle). We do not store full payment card
        details. Prices, taxes, and billing terms may vary by location and product.
      </p>

      <h2>6. Subscriptions</h2>
      <ul>
        <li>If you purchase a subscription, it may renew automatically until canceled (if applicable).</li>
        <li>You can cancel according to the instructions shown at checkout or in your account.</li>
      </ul>

      <h2>7. Refunds</h2>
      <p>
        Refund rules are described in our <a href="/refund" style={{ textDecoration: "underline" }}>Refund Policy</a>.
        Where there is a conflict between these Terms and the Refund Policy, the Refund Policy controls for refunds.
      </p>

      <h2>8. Acceptable use</h2>
      <ul>
        <li>Do not misuse the Service, attempt unauthorized access, or interfere with security.</li>
        <li>Do not upload illegal, harmful, or infringing content.</li>
        <li>Do not resell or redistribute the Service unless explicitly permitted in writing.</li>
      </ul>

      <h2>9. Intellectual property</h2>
      <p>
        All content, software, designs, and materials provided by {brand} are owned by or licensed to us and are
        protected by intellectual property laws. You receive a limited, non-exclusive, non-transferable license to use
        purchased digital products for your personal or business use, unless stated otherwise.
      </p>

      <h2>10. Disclaimer</h2>
      <p>
        The Service is provided “as is” and “as available.” We do not guarantee that the Service will be uninterrupted,
        error-free, or meet your specific needs. Automation results and business outcomes can vary.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {brand} will not be liable for indirect, incidental, special,
        consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill arising from your use of
        the Service.
      </p>

      <h2>12. Termination</h2>
      <p>
        We may suspend or terminate access to the Service if you violate these Terms or if required by law. You may stop
        using the Service at any time.
      </p>

      <h2>13. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. The “Last updated” date will change. Continued use of the Service
        means you accept the updated Terms.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about these Terms: <a href={`mailto:${supportEmail}`} style={{ textDecoration: "underline" }}>{supportEmail}</a>
      </p>

      <hr style={{ margin: "28px 0", opacity: 0.25 }} />

      <p style={{ opacity: 0.7, fontSize: 14 }}>
        Note: This is a standard Terms page to satisfy payment provider compliance. If you want, позже сделаем 2 языка
        (EN/RU) и добавим точные реквизиты ИП (ФИО, адрес для корреспонденции).
      </p>
    </main>
  );
}
