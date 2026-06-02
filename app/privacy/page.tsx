// NOTE: This is a template. Have a qualified attorney review before publishing.
import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Yoke collects, uses, and protects your personal information.",
  openGraph: {
    title: "Privacy Policy | Yoke",
    description: "How Yoke collects, uses, and protects your personal information.",
    url: "https://yokefaith.com/privacy",
  },
  alternates: { canonical: "https://yokefaith.com/privacy" },
};

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information."
      lastUpdated="June 2, 2026"
    >
      <p>
        Yoke: Faith Together (&ldquo;Yoke,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting
        your privacy. This Privacy Policy explains how we collect, use, disclose,
        and safeguard your information when you use our mobile application and
        website (collectively, the &ldquo;Service&rdquo;). Please read this policy carefully.
        If you disagree with its terms, please discontinue use of the Service.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>Information you provide directly</h3>
      <ul>
        <li>Account information: name, email address, date of birth, password</li>
        <li>Profile information: photos, bio, faith tradition, denomination, and other details you choose to share</li>
        <li>Communications: messages you send to other users or to us</li>
        <li>Payment information: processed securely by our payment provider; we do not store card details</li>
      </ul>

      <h3>Information collected automatically</h3>
      <ul>
        <li>Usage data: features used, pages visited, interactions within the app</li>
        <li>Device data: device type, operating system, unique device identifiers, IP address</li>
        <li>Location data: general location (city/region) if you grant permission</li>
        <li>Log data: crash reports, performance data, and error logs</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, operate, and improve the Service</li>
        <li>Match you with other users based on your preferences and profile</li>
        <li>Send you transactional communications (account confirmations, security alerts)</li>
        <li>Send you promotional communications, where you have opted in</li>
        <li>Detect, investigate, and prevent fraudulent or prohibited activity</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>
        We do not sell your personal information. We may share your information in
        the following limited circumstances:
      </p>
      <ul>
        <li><strong>With other users:</strong> Profile information you make public is visible to other Yoke members.</li>
        <li><strong>Service providers:</strong> We engage trusted third parties (hosting, analytics, payment processing) who process data only on our behalf and under strict confidentiality obligations.</li>
        <li><strong>Legal requirements:</strong> We may disclose information if required by law, court order, or to protect the rights, property, or safety of Yoke, our users, or the public.</li>
        <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred. We will notify you before your information is subject to a different privacy policy.</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        We retain your personal information for as long as your account is active or
        as needed to provide the Service. You may delete your account at any time
        through the app settings. After deletion, we will remove or anonymize your
        data within 30 days, except where we are required to retain it for legal
        purposes.
      </p>

      <h2>5. Security</h2>
      <p>
        We implement industry-standard technical and organizational measures to
        protect your information against unauthorized access, alteration, disclosure,
        or destruction. However, no method of transmission over the Internet or
        electronic storage is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>6. Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Object to or restrict certain processing</li>
        <li>Request a portable copy of your data</li>
        <li>Withdraw consent at any time, where processing is based on consent</li>
      </ul>
      <p>
        To exercise these rights, contact us at{" "}
        <a href="mailto:contact@yokefaith.com">contact@yokefaith.com</a>.
      </p>

      <h2>7. Children&rsquo;s Privacy</h2>
      <p>
        The Service is intended for users 18 years of age and older. We do not
        knowingly collect personal information from anyone under 18. If we learn
        that we have collected information from a minor, we will delete it promptly.
      </p>

      <h2>8. Third-Party Links</h2>
      <p>
        The Service may contain links to third-party websites or services. We are
        not responsible for the privacy practices of those third parties and
        encourage you to review their privacy policies.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of
        material changes by email or by posting a notice within the Service. Your
        continued use of the Service after changes take effect constitutes your
        acceptance of the updated policy.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have questions or concerns about this Privacy Policy, please contact
        us at{" "}
        <a href="mailto:contact@yokefaith.com">contact@yokefaith.com</a>.
      </p>
    </LegalLayout>
  );
}
