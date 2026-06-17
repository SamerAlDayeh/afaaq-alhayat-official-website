import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import Projects from "./Pages/Projects/Projects";
import About from "./Pages/About/About";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main
        className="overflow-hidden"
        style={{ minHeight: "calc(100vh - 80px - 410px)" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
