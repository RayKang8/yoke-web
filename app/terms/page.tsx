// NOTE: This is a template. Have a qualified attorney review before publishing.
import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Yoke: Faith Together",
  description: "The terms governing your use of the Yoke: Faith Together app and website.",
};

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The rules of the road for using Yoke."
      lastUpdated="June 2, 2026"
    >
      <p>
        Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before using the
        Yoke: Faith Together mobile application or website (collectively, the
        &ldquo;Service&rdquo;) operated by Yoke (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or
        using the Service, you agree to be bound by these Terms. If you do not
        agree, do not use the Service.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years of age to use the Service. By using Yoke,
        you represent and warrant that you are 18 or older, that you are not
        prohibited from using the Service under applicable law, and that you are
        not currently married or in a committed relationship represented as
        exclusive on another platform.
      </p>

      <h2>2. Your Account</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account
        credentials and for all activity that occurs under your account. You agree
        to provide accurate, current, and complete information when creating your
        profile. You may not create more than one account or create an account on
        behalf of another person.
      </p>

      <h2>3. Community Standards</h2>
      <p>Yoke is a faith-centered community. You agree not to:</p>
      <ul>
        <li>Post false, misleading, or deceptive content</li>
        <li>Harass, abuse, threaten, or intimidate other users</li>
        <li>Post sexually explicit, violent, or otherwise objectionable content</li>
        <li>Solicit money or financial information from other users</li>
        <li>Impersonate any person or entity</li>
        <li>Use the Service for commercial solicitation or spam</li>
        <li>Scrape, crawl, or otherwise extract data from the Service</li>
        <li>Attempt to gain unauthorized access to any part of the Service</li>
        <li>Use the Service for any unlawful purpose</li>
      </ul>
      <p>
        We reserve the right to remove content and suspend or terminate accounts
        that violate these standards, at our sole discretion.
      </p>

      <h2>4. Content You Submit</h2>
      <p>
        You retain ownership of content you submit to the Service (&ldquo;User
        Content&rdquo;). By submitting User Content, you grant Yoke a worldwide,
        non-exclusive, royalty-free, sublicensable license to use, reproduce,
        modify, distribute, and display that content in connection with operating
        and promoting the Service. You represent that you have all rights necessary
        to grant this license and that your User Content does not infringe any
        third-party rights.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        The Service and its original content, features, and functionality are and
        will remain the exclusive property of Yoke. Our trademarks, logos, and
        service marks may not be used in connection with any product or service
        without our prior written consent.
      </p>

      <h2>6. Subscriptions and Payments</h2>
      <p>
        Some features of the Service may require a paid subscription. All fees are
        stated in U.S. dollars and are non-refundable except as required by law.
        Subscriptions automatically renew unless cancelled before the renewal date.
        You can manage or cancel your subscription through your device&rsquo;s app store
        settings.
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF
        ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR
        FREE OF HARMFUL COMPONENTS.
      </p>
      <p>
        Yoke does not conduct background checks on users. You are responsible for
        exercising appropriate caution in your interactions with other users, both
        online and in person.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, YOKE SHALL NOT BE
        LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
        DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR
        IN CONNECTION WITH YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY TO YOU FOR
        ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID
        US IN THE 12 MONTHS PRECEDING THE CLAIM.
      </p>

      <h2>9. Termination</h2>
      <p>
        We may suspend or terminate your access to the Service at any time, with
        or without cause or notice. You may delete your account at any time through
        the app settings. Upon termination, your right to use the Service will
        immediately cease.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of [Your State], without
        regard to its conflict-of-law provisions. Any disputes arising under these
        Terms shall be resolved exclusively in the state or federal courts located
        in [Your County, Your State].
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. We will provide at
        least 30 days&rsquo; notice of material changes via email or in-app notification.
        Your continued use of the Service after changes take effect constitutes
        your acceptance of the revised Terms.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        If you have questions about these Terms, please contact us at{" "}
        <a href="mailto:contact@yokefaith.com">contact@yokefaith.com</a>.
      </p>
    </LegalLayout>
  );
}
