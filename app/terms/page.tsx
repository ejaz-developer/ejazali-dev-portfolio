import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="August 2026">
      <h2>Content</h2>
      <p>
        All content on this site — text, code examples, and design — is my own
        unless credited otherwise. You are welcome to reference or reuse code
        snippets from the projects shared here, but please do not copy the site
        itself wholesale.
      </p>

      <h2>Projects and services</h2>
      <p>
        Live projects linked from this site are provided &quot;as is&quot;
        without warranty of any kind. When we agree on paid work, the specific
        terms — scope, timeline, and payment — are set out in a written
        agreement for that project.
      </p>

      <h2>Liability</h2>
      <p>
        To the maximum extent permitted by law, I am not liable for any
        indirect or consequential damages arising from use of this site or the
        projects linked from it.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of Pakistan. Questions about them
        can be sent to{" "}
        <a href="mailto:hello.ejaz@outlook.com">hello.ejaz@outlook.com</a>.
      </p>
    </LegalPage>
  );
}
