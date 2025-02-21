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
        <p>Even small vulnerabilities in your setup can be exploited by attackers, making it crucial to adopt best security practices from day one.</p>
      </Section>

      <Section title="2. Sandboxing & Virtual Machines">
        <p>Running untrusted code directly on your main system can lead to security risks. Sandboxing isolates such code, preventing unintended system access.</p>
        <p>Virtual Machines (VMs) allow developers to create isolated environments to test applications safely.</p>
        <p>Example: Running a VM using VirtualBox.</p>
        <pre>
          <code>{`# Update the package repository
sudo apt update

# Install VirtualBox
sudo apt install virtualbox

# Start VirtualBox
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
        <p>Using a VPN is especially important when working on public networks, like cafes or co-working spaces.</p>
        <p>Recommended VPN providers: <b>NordVPN, ExpressVPN, Mullvad</b>.</p>
        <pre>
          <code>{`# Example: Setting up a VPN connection in Linux
sudo openvpn --config myvpn.ovpn`}</code>
        </pre>
      </Section>

      <Section title="4. Securing GitHub Repositories">
        <p>Follow these steps to protect your GitHub projects:</p>
        <ul>
          <li>Enable <b>Two-Factor Authentication (2FA)</b> to secure your account.</li>
          <li>Never commit sensitive data like API keys or passwords.</li>
          <li>Use <b>GitHub Secrets</b> for environment variables.</li>
          <li>Set up <b>branch protection rules</b> to prevent unauthorized changes.</li>
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
        <p>Software dependencies can introduce vulnerabilities if they contain malicious code or security flaws.</p>
        <p>Regularly check for vulnerabilities in your dependencies:</p>
        <pre>
          <code>{`npm audit`}</code>
        </pre>
        <p>Use package signing and verify the integrity of third-party libraries before integrating them into your project.</p>
      </Section>

      <Section title="6. Secure Development Practices">
        <p>Here are some essential practices to follow when coding securely:</p>
        <ul>
          <li>Sanitize user inputs to prevent SQL injection and XSS attacks.</li>
          <li>Follow the principle of least privilege—grant the minimal permissions necessary.</li>
          <li>Regularly update dependencies and frameworks.</li>
          <li>Use static analysis tools to detect vulnerabilities in code.</li>
        </ul>
      </Section>

      <Section title="7. Encrypting Sensitive Data">
        <p>Encryption protects sensitive data from unauthorized access.</p>
        <p>Example: Encrypting a file using OpenSSL:</p>
        <pre>
          <code>{`openssl enc -aes-256-cbc -salt -in secret.txt -out secret.enc -k PASSWORD`}</code>
        </pre>
        <p>Never store passwords in plain text—always hash them using bcrypt or Argon2.</p>
      </Section>
    </div>
  );
};

export default Article;