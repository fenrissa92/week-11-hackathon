import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Article from "./pages/Article.tsx";
import Archive from "./pages/Archive.tsx";
import Author from "./pages/Author.tsx";
import Links from "./pages/Links.tsx";
import "./index.css";

const App = () => {
  return (
    <div className="appContainer">
      <Navbar />
      <Routes>
        <Route path="/" element={<Article />} />
        <Route path="/author" element={<Author />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/links" element={<Links />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;