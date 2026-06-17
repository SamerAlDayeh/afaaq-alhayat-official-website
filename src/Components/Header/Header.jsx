import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const navLinks = [
  { path: "/", label: "الرئيسية" },
  { path: "/about", label: "من نحن" },
  { path: "/projects", label: "مشاريعنا" },
  { path: "/contact", label: "اتصل بنا" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          aria-label="مؤسسة آفاق الحياة التنموية والخيرية - الصفحة الرئيسية"
        >
          <img
            src="/Images/favico.png"
            alt="شعار جمعية آفاق الحياة التنموية والخيرية"
            width="50"
            height="50"
            className="header-logo"
          />
        </Link>

        <nav className="nav-menu" aria-label="قائمة التنقل الرئيسية">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-cta">
          <Link to="/contact" className="btn btn-secondary btn-header-cta">
            ساهم معنا
          </Link>
        </div>

        <button
          id="hamburger-btn"
          className={`mobile-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة الأساسية"}
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div
          className={`mobile-nav-backdrop ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(false)}
        ></div>

        <nav
          className={`mobile-nav-menu ${menuOpen ? "open" : ""}`}
          aria-label="قائمة تنقل الهواتف"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="mobile-cta">
            <Link
              to="/contact"
              className="btn btn-secondary mobile-btn-cta"
              onClick={() => setMenuOpen(false)}
            >
              ساهم معنا (اتصل بنا)
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
