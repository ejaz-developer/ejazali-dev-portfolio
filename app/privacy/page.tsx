import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="August 2026">
      <h2>What this site collects</h2>
      <p>
        This portfolio is a static site. It does not use cookies, analytics
        trackers, or advertising. Visiting it does not collect or store any
        personal information about you.
      </p>

      <h2>Contact</h2>
      <p>
        If you email me through the addresses listed on the site, I will see
        the details you send with that email — your address and message — and
        nothing else. I keep email conversations only as long as they are
        relevant to the work.
      </p>

      <h2>External links</h2>
      <p>
        The site links to external services such as GitHub, X, and deployed
        projects. Those services have their own privacy policies, and I have no
        control over what they collect.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, the &quot;last updated&quot; date above will be
        revised. For any questions, email{" "}
        <a href="mailto:hello.ejaz@outlook.com">hello.ejaz@outlook.com</a>.
      </p>
    </LegalPage>
  );
}
