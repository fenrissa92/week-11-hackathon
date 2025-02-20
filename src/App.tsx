import Section from "./components/Section";
import "./App.css";

function App() {
  return (
    <div>
      <h1>🔒 Setting Up a Secure Dev Environment</h1>
      <p>Learn how to protect your workflow from security threats.</p>

      <Section title="1️⃣ Why Security Matters">
        <p>Security is not just for hackers and enterprises—every developer must consider it in their workflow.</p>
        <p>Ignoring security can lead to data breaches, malware infections, and leaked credentials.</p>
      </Section>

      <Section title="2️⃣ Sandboxing & Virtual Machines">
        <p>Using **virtual machines (VMs)** and **containerization (like Docker)** can help keep risky code isolated from your main system.</p>
        <p>Example: Running a VM using VirtualBox.</p>
        <pre>
          <code>
            # Create a new Ubuntu VM
            sudo apt install virtualbox
            virtualbox
          </code>
        </pre>
        <p>For containerized environments, Docker is a great option:</p>
        <pre>
          <code>
            # Pull and run a secure Alpine Linux container
            docker run -it --rm alpine
          </code>
        </pre>
      </Section>

      <Section title="3️⃣ Using VPNs for Secure Connections">
        <p>VPNs encrypt your internet traffic, preventing attackers from spying on your data.</p>
        <p>Recommended VPN providers: **NordVPN, ExpressVPN, Mullvad**.</p>
        <pre>
          <code>
            # Example: Setting up a VPN connection in Linux
            sudo openvpn --config myvpn.ovpn
          </code>
        </pre>
      </Section>

      <Section title="4️⃣ Securing GitHub Repositories">
        <ul>
          <li>Use <b>private repositories</b> when possible.</li>
          <li>Enable <b>two-factor authentication</b> (2FA).</li>
          <li>Never commit sensitive API keys or credentials.</li>
          <li>Use <b>GitHub secrets</b> instead of hardcoded values.</li>
        </ul>
      </Section>

      <Section title="5️⃣ Preventing Supply Chain Attacks">
        <p>Always verify package sources, use <b>package-lock.json</b> or <b>yarn.lock</b>, and enable dependency security alerts.</p>
      </Section>
    </div>
  );
}

export default App;