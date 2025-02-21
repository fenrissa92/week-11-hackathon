import Section from "../components/Section";
import "../index.css";

const Article = () => {
  return (
    <div className="container">
      <h1>🔐 Setting Up a Secure Dev Environment</h1>
      <p>Learn how to protect your workflow from security threats.</p>

      <Section title="1️⃣ Why Security Matters">
        <p>Security is essential for developers to prevent data leaks, malware, and unauthorized access.</p>
      </Section>

      <Section title="2️⃣ Sandboxing & Virtual Machines">
        <p>Use Virtual Machines (VMs) and Docker to isolate your development environment.</p>
      </Section>

      <Section title="3️⃣ Using VPNs for Secure Connections">
        <p>VPNs encrypt your internet traffic, protecting your data.</p>
      </Section>

      <Section title="4️⃣ Securing GitHub Repositories">
        <p>Follow these steps to protect your GitHub projects.</p>
      </Section>

      <Section title="5️⃣ Preventing Supply Chain Attacks">
        <p>Run `npm audit` to check for vulnerabilities.</p>
      </Section>
    </div>
  );
};

export default Article;