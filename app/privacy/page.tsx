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
      lastUpdated="June 2026"
    >
      <p>
        Yoke: Faith Together (&ldquo;Yoke,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
        protecting your privacy. This Privacy Policy describes what information we
        collect when you use our mobile application and website (collectively, the
        &ldquo;Service&rdquo;), how we use it, and the choices you have. By using the Service,
        you agree to the collection and use of information as described in this policy.
        If you do not agree, please stop using the Service.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>Information you provide directly</h3>
      <ul>
        <li>
          <strong>Account information:</strong> your name and email address, collected
          when you create an account. We use this to identify you, authenticate you,
          and communicate with you about your account.
        </li>
        <li>
          <strong>Profile photo:</strong> an optional photo you may upload to personalize
          your profile. Profile photos are stored securely with our database provider.
        </li>
        <li>
          <strong>User-generated content:</strong> devotional reflections, comments,
          and reactions you post within the app. This content is visible to other members
          of your groups and, where you choose to make it public, to other Yoke users.
        </li>
      </ul>

      <h3>Information collected automatically</h3>
      <ul>
        <li>
          <strong>Push notification token:</strong> a device token used to deliver your
          daily devotional reminders. We do not use this token for advertising.
        </li>
        <li>
          <strong>Usage analytics:</strong> anonymized data about how you use the app —
          screen views, feature interactions, and session length — collected through
          PostHog. This data does not identify you personally and is used solely to
          understand how the app is being used so we can improve it.
        </li>
        <li>
          <strong>Subscription and purchase data:</strong> information about your
          subscription status and in-app purchases, managed through RevenueCat. We
          receive information about whether you are a subscriber and which plan you
          hold; we do not receive or store your payment card details. All payments are
          processed by Apple.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Create and manage your account</li>
        <li>Provide the features of the Service, including daily devotionals, groups, and the friends feed</li>
        <li>Send you transactional emails (account confirmation, password reset) via Resend</li>
        <li>Deliver push notifications for daily devotional reminders, if you have enabled them</li>
        <li>Manage your subscription and access to premium features</li>
        <li>Understand how the Service is used and improve it over time</li>
        <li>Detect and prevent abuse, fraud, and violations of our Terms of Service</li>
        <li>Comply with applicable legal obligations</li>
      </ul>

      <h2>3. How We Share Your Information</h2>
      <p>
        We do not sell your personal information to anyone. We do not share your data
        with advertising networks. We share your information only in the following
        limited circumstances:
      </p>
      <ul>
        <li>
          <strong>With other users:</strong> content you post (reflections, comments,
          reactions) and your profile information are visible to members of your groups.
          Your profile photo and display name are visible to other users who interact
          with you in the app.
        </li>
        <li>
          <strong>With service providers:</strong> we share data with the third-party
          services listed below that help us operate the Service. Each provider processes
          data only as necessary to perform their function and is bound by confidentiality
          obligations.
        </li>
        <li>
          <strong>For legal reasons:</strong> we may disclose your information if required
          by law, court order, or governmental authority, or when we believe disclosure
          is necessary to protect the rights, property, or safety of Yoke, our users,
          or the public.
        </li>
        <li>
          <strong>Business transfers:</strong> if Yoke is involved in a merger,
          acquisition, or sale of assets, your information may be transferred as part
          of that transaction. We will provide notice before your information becomes
          subject to a materially different privacy policy.
        </li>
      </ul>

      <h2>4. Third-Party Services</h2>
      <p>
        The Service relies on the following third-party providers. We encourage you
        to review their privacy policies for details on how they handle data.
      </p>
      <ul>
        <li>
          <strong>Supabase</strong> (supabase.com) — database and authentication.
          Your account data, profile, and content are stored in Supabase-hosted
          infrastructure.
        </li>
        <li>
          <strong>RevenueCat</strong> (revenuecat.com) — subscription management.
          RevenueCat processes and stores your subscription status and purchase
          history.
        </li>
        <li>
          <strong>PostHog</strong> (posthog.com) — product analytics. PostHog
          collects anonymized usage data to help us understand how the app is used.
          No personally identifying information is included in these events.
        </li>
        <li>
          <strong>Resend</strong> (resend.com) — transactional email delivery.
          Resend processes your email address to deliver account-related emails on
          our behalf.
        </li>
        <li>
          <strong>Apple</strong> — app distribution and payment processing. Apple
          handles all in-app purchases and manages distribution of the app through
          the App Store. Apple&rsquo;s privacy policy applies to those interactions.
        </li>
      </ul>

      <h2>5. Data Storage and Security</h2>
      <p>
        Your data is stored on servers provided by Supabase. We implement
        industry-standard security measures, including encryption in transit (TLS)
        and at rest, to protect your information from unauthorized access, alteration,
        or disclosure. Access to personal data is restricted to the Yoke team on a
        need-to-know basis.
      </p>
      <p>
        No method of electronic transmission or storage is completely secure. While
        we take reasonable steps to protect your information, we cannot guarantee
        absolute security.
      </p>

      <h2>6. Account Deletion</h2>
      <p>
        To delete your account and all associated data, open the Yoke app, go to
        Profile &rsaquo; Settings &rsaquo; Delete Account. Your account and all associated
        personal data will be permanently deleted immediately.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We retain your personal information for as long as your account is active or
        as needed to provide the Service. You may delete your account at any time from
        within the app (Settings &rsaquo; Account &rsaquo; Delete Account). When you delete your
        account, we permanently delete your profile, reflections, comments, and all
        associated personal data. Anonymized analytics data that cannot be linked back
        to you may be retained for analytical purposes.
      </p>

      <h2>8. Your Rights</h2>
      <p>
        You have the right to access, correct, and delete your personal information.
        The primary way to exercise these rights is through the app&rsquo;s account settings.
        You may also contact us at{" "}
        <a href="mailto:contact@yokefaith.com">contact@yokefaith.com</a> to:
      </p>
      <ul>
        <li>Request a copy of the personal information we hold about you</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of your data</li>
        <li>Ask questions about how your data is used</li>
      </ul>
      <p>
        We will respond to all requests within a reasonable timeframe and in accordance
        with applicable law.
      </p>

      <h2>9. Children&rsquo;s Privacy</h2>
      <p>
        Although Yoke carries a 4+ age rating on the App Store, the Service is not
        directed at children under the age of 13, and we do not knowingly collect
        personal information from children under 13. If we become aware that we have
        inadvertently collected personal information from a child under 13, we will
        delete that information promptly. If you believe we may have collected
        information from a child under 13, please contact us at{" "}
        <a href="mailto:contact@yokefaith.com">contact@yokefaith.com</a>.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we make material
        changes, we will notify you by email or through a notice within the app at
        least 14 days before the changes take effect. The &ldquo;Last updated&rdquo; date at the
        top of this page reflects when the policy was last revised. Your continued
        use of the Service after changes take effect constitutes your acceptance of
        the updated policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or how we
        handle your data, please contact us at{" "}
        <a href="mailto:contact@yokefaith.com">contact@yokefaith.com</a>.
      </p>
    </LegalLayout>
  );
}
