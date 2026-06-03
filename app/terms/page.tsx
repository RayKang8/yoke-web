import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the Yoke: Faith Together app and website.",
  openGraph: {
    title: "Terms of Service | Yoke",
    description: "The terms governing your use of the Yoke: Faith Together app and website.",
    url: "https://yokefaith.com/terms",
  },
  alternates: { canonical: "https://yokefaith.com/terms" },
};

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The rules of the road for using Yoke."
      lastUpdated="June 2026"
    >
      <p>
        Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before using the
        Yoke: Faith Together mobile application or website (collectively, the
        &ldquo;Service&rdquo;). These Terms constitute a legally binding agreement between you
        and the Yoke team (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By downloading, installing, or
        using the Service, you agree to be bound by these Terms. If you do not agree,
        do not use the Service.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 13 years of age to use the Service. By using Yoke, you
        represent and warrant that you meet this age requirement and that you are not
        prohibited from using the Service under applicable law. If you are between
        13 and 18 years of age, you represent that a parent or legal guardian has
        reviewed and agreed to these Terms on your behalf.
      </p>

      <h2>2. Account Creation and Responsibilities</h2>
      <p>
        To use most features of the Service, you must create an account. When you do,
        you agree to:
      </p>
      <ul>
        <li>Provide accurate, current, and complete information (name and email address)</li>
        <li>Keep your login credentials confidential and not share them with anyone</li>
        <li>Be responsible for all activity that occurs under your account</li>
        <li>Notify us promptly at{" "}
          <a href="mailto:contact@yokefaith.com">contact@yokefaith.com</a>{" "}
          if you suspect unauthorized access to your account</li>
        <li>Not create more than one account or create an account on behalf of another person without their consent</li>
      </ul>
      <p>
        We reserve the right to refuse registration or cancel accounts at our
        discretion.
      </p>

      <h2>3. Acceptable Use</h2>
      <p>
        Yoke is a faith-centered community built around daily devotion and mutual
        accountability. You agree to engage with the Service in a manner consistent
        with that purpose. You agree not to post, share, or transmit any content or
        engage in any conduct that:
      </p>
      <ul>
        <li>Contains hate speech, racism, discrimination, or dehumanizing language directed at any person or group</li>
        <li>Harasses, bullies, threatens, or intimidates other users</li>
        <li>Is sexually explicit, pornographic, or otherwise inappropriate for a Christian community context</li>
        <li>Promotes violence, self-harm, or harm to others</li>
        <li>Spreads false, misleading, or deceptive information</li>
        <li>Impersonates any person, organization, or religious figure</li>
        <li>Solicits money, donations, or financial information from other users</li>
        <li>Constitutes spam, unsolicited promotion, or commercial solicitation</li>
        <li>Infringes the intellectual property rights of any third party</li>
        <li>Attempts to gain unauthorized access to any part of the Service or another user&rsquo;s account</li>
        <li>Scrapes, crawls, or systematically extracts data from the Service</li>
        <li>Violates any applicable local, provincial, national, or international law</li>
      </ul>
      <p>
        We reserve the right to remove content and to suspend or permanently
        terminate accounts that violate these standards, without prior notice and at
        our sole discretion.
      </p>

      <h2>4. User-Generated Content</h2>
      <p>
        You retain ownership of the content you submit to the Service, including
        devotional reflections, comments, and reactions (&ldquo;User Content&rdquo;). By
        submitting User Content, you grant the Yoke team a worldwide, non-exclusive,
        royalty-free, sublicensable license to use, reproduce, display, and distribute
        that content solely for the purpose of operating and providing the Service to
        you and other users.
      </p>
      <p>
        This license does not give us the right to sell your User Content or use it
        for advertising purposes. You may delete your User Content at any time; upon
        account deletion, all of your User Content is permanently removed from the
        Service.
      </p>
      <p>
        You represent and warrant that you own or have the necessary rights to your
        User Content and that it does not violate these Terms, any applicable law,
        or the rights of any third party.
      </p>

      <h2>5. Subscriptions and Billing</h2>
      <p>
        Yoke offers free and premium subscription tiers. Premium features require a
        paid subscription, which is purchased and managed through Apple&rsquo;s App Store.
        By subscribing, you also agree to Apple&rsquo;s Terms of Service.
      </p>
      <ul>
        <li>
          <strong>Pricing:</strong> subscription prices are displayed in the App Store
          at the time of purchase and may vary by region.
        </li>
        <li>
          <strong>Auto-renewal:</strong> subscriptions automatically renew at the end
          of each billing period unless you cancel at least 24 hours before the renewal
          date.
        </li>
        <li>
          <strong>Cancellation:</strong> you can cancel your subscription at any time
          through your iPhone&rsquo;s App Store settings (Settings &rsaquo; [Your Name] &rsaquo;
          Subscriptions). Cancelling stops future charges but does not entitle you to
          a refund for any current billing period.
        </li>
        <li>
          <strong>Refunds:</strong> all refund requests for App Store purchases are
          handled by Apple in accordance with Apple&rsquo;s refund policy. We do not
          process refunds directly.
        </li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        The Service and all of its content, features, design, and functionality —
        including but not limited to text, graphics, logos, icons, and software —
        are owned by the Yoke team or its licensors and are protected by applicable
        copyright, trademark, and other intellectual property laws. You may not
        reproduce, distribute, modify, or create derivative works from any part of
        the Service without our prior written permission.
      </p>

      <h2>7. Disclaimer of Warranties</h2>
      <p>
        THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF
        ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
        WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
        NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED,
        ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. YOUR
        USE OF THE SERVICE IS AT YOUR OWN RISK.
      </p>
      <p>
        The daily devotional content provided through the Service is intended for
        personal spiritual encouragement. It does not constitute professional
        theological, pastoral, legal, financial, or medical advice.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE YOKE TEAM SHALL NOT
        BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
        DAMAGES, INCLUDING LOSS OF DATA, LOSS OF PROFITS, OR LOSS OF GOODWILL,
        ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE
        SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </p>
      <p>
        OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING UNDER THESE TERMS SHALL
        NOT EXCEED THE GREATER OF (A) THE TOTAL AMOUNT YOU PAID TO US IN THE
        TWELVE MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED CANADIAN DOLLARS
        (CAD $100).
      </p>

      <h2>9. Account Termination</h2>
      <p>
        You may delete your account at any time from within the app (Settings &rsaquo;
        Account &rsaquo; Delete Account). Deleting your account permanently removes your
        profile, reflections, and all associated data from the Service.
      </p>
      <p>
        We may suspend or permanently terminate your access to the Service at any
        time, with or without notice, if we reasonably believe you have violated
        these Terms or if continued access poses a risk to other users or the
        integrity of the Service. Upon termination, your right to use the Service
        ceases immediately.
      </p>

      <h2>10. Governing Law and Dispute Resolution</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of the
        Province of Ontario and the federal laws of Canada applicable therein, without
        regard to conflict-of-law principles. You agree that any dispute arising out
        of or relating to these Terms or the Service shall be subject to the exclusive
        jurisdiction of the courts located in Ontario, Canada.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time to reflect changes in the Service
        or applicable law. When we make material changes, we will notify you by email
        or through an in-app notice at least 14 days before the changes take effect.
        The &ldquo;Last updated&rdquo; date at the top of this page reflects when the Terms were
        last revised. Your continued use of the Service after the effective date of
        any changes constitutes your acceptance of the revised Terms.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at{" "}
        <a href="mailto:contact@yokefaith.com">contact@yokefaith.com</a>.
      </p>
    </LegalLayout>
  );
}
