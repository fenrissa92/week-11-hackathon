import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link to="/">📜 Article</Link></li>
        <li><Link to="/author">👤 Author</Link></li>
        <li><Link to="/archive">📅 Archive</Link></li>
        <li><Link to="/links">🔗 Links</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;