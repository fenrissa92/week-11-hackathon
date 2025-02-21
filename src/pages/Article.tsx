import Section from "../components/Section";
import "../index.css";

const Article = () => {
  return (
    <div className="container">
      <h1>🔐 Setting Up a Secure Dev Environment</h1>
      <p>Learn how to protect your workflow from security threats.</p>

      <Section title="1. Why Security Matters">
        <p>Security is not just for hackers and enterprises—every developer must consider it in their workflow.</p>
        <p>Ignoring security can lead to data breaches, malware infections, and leaked credentials.</p>
      </Section>

      <Section title="2. Sandboxing & Virtual Machines">
        <p>Using virtual machines (VMs) and containerization (like Docker) can help keep risky code isolated from your main system.</p>
        <p>Example: Running a VM using VirtualBox.</p>
        <pre>
          <code>{`# Create a new Ubuntu VM
sudo apt install virtualbox
virtualbox`}</code>
        </pre>
        <p>For containerized environments, Docker is a great option:</p>
        <pre>
          <code>{`# Pull and run a secure Alpine Linux container
docker run -it --rm alpine`}</code>
        </pre>
      </Section>

      <Section title="3. Using VPNs for Secure Connections">
        <p>VPNs encrypt your internet traffic, preventing attackers from spying on your data.</p>
        <p>Recommended VPN providers: **NordVPN, ExpressVPN, Mullvad**.</p>
        <pre>
          <code>{`# Example: Setting up a VPN connection in Linux
sudo openvpn --config myvpn.ovpn`}</code>
        </pre>
      </Section>

      <Section title="4. Securing GitHub Repositories">
        <p>Follow these steps to protect your GitHub projects:</p>
        <ul>
          <li>Enable **Two-Factor Authentication (2FA)**.</li>
          <li>Never commit sensitive data (API keys, passwords).</li>
          <li>Use **GitHub Secrets** for sensitive environment variables.</li>
          <li>Set up **branch protection rules**.</li>
        </ul>

        <p><b>Example: Adding sensitive files to `.gitignore`:</b></p>
        <pre>
          <code>{`
# .gitignore
.env
node_modules/
secret-config.json
          `}</code>
        </pre>

        <p><b>Example: Using GitHub Secrets in GitHub Actions:</b></p>
        <pre>
          <code>{`
name: Deploy Securely
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Use secret API key
        env:
          API_KEY: \${{ secrets.API_KEY }}
        run: echo "Using secret API key..."
          `}</code>
        </pre>
      </Section>

      <Section title="5. Preventing Supply Chain Attacks">
        <p>Run `npm audit` to check for vulnerabilities.</p>
        <pre>
          <code>{`npm audit`}</code>
        </pre>
      </Section>
    </div>
  );
};

export default Article;