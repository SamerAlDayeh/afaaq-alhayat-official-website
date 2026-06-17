import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link
              to="/"
              aria-label="الرئيسية - مؤسسة آفاق الحياة الخيرية"
              className="footer-logo-link"
            >
              <img
                src="/Images/favico.png"
                alt="شعار جمعية آفاق الحياة الخيرية"
                width="60"
                height="60"
                className="footer-logo"
              />
              <span className="footer-logo-text">آفاق الحياة</span>
            </Link>

            <p className="footer-description">
              مؤسسة إنسانية تنموية خيرية سورية تعمل على تنفيذ المشاريع الإنسانية
              والتعليمية المستدامة وتطوير البنى التحتية للمجتمع بكفاءة وشفافية
              لتعزيز آمال الحياة الكريمة.
            </p>
          </div>

          <nav
            className="footer-navigation"
            aria-label="روابط تذييل الصفحة السريعة"
          >
            <h4 className="footer-title">روابط سريعة</h4>
            <ul className="footer-links">
              {[
                { to: "/", label: "الرئيسية" },
                { to: "/about", label: "من نحن (عن الجمعية)" },
                { to: "/projects", label: "مشاريعنا" },
                { to: "/contact", label: "اتصل بنا" },
              ].map((link) => (
                <li className="footer-links-item" key={link.to}>
                  <span className="footer-link-arrow" aria-hidden="true">
                    ‹
                  </span>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="footer-contact">
            <h4 className="footer-title">معلومات الاتصال</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="footer-contact-icon"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>الجمهورية العربية السورية، دمشق، المزة شرقية</span>
              </div>

              <div className="footer-contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="footer-contact-icon"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:+963965055764"
                  className="footer-link-action phone-number"
                  aria-label="اتصال هاتفي مباشر بالجمعية"
                >
                  +963 965 055 764
                </a>
              </div>

              <div className="footer-contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="footer-contact-icon"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:info@afaaqalhayat.com"
                  className="footer-link-action"
                  aria-label="إرسال بريد إلكتروني مباشر"
                >
                  info@afaaqalhayat.com
                </a>
              </div>
            </div>
          </address>

          <div className="footer-social-section">
            <h4 className="footer-title">تابع مسيرتنا</h4>
            <p className="footer-social-desc">تواصل معنا عبر منصاتنا الرسمية</p>
            <div className="social-icons-wrapper">
              <a
                href="https://wa.me/963965055764"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="تواصل معنا عبر واتساب"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M16.001 3C8.82 3 3 8.82 3 16c0 2.29.6 4.53 1.74 6.51L3 29l6.66-1.71A12.95 12.95 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.64c-1.97 0-3.89-.53-5.57-1.53l-.4-.24-3.95 1.02 1.05-3.85-.26-.4A10.58 10.58 0 1 1 16 26.64zm5.81-7.95c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.36.24-.68.08-.32-.16-1.34-.49-2.55-1.56-.94-.84-1.58-1.87-1.77-2.18-.18-.32-.02-.49.14-.65.14-.14.32-.36.48-.54.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.63-.53-.55-.71-.56h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.63 0 1.55 1.13 3.04 1.29 3.25.16.21 2.21 3.37 5.35 4.73.75.32 1.34.51 1.8.65.76.24 1.45.21 1.99.13.61-.09 1.88-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61577888227444"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="فيسبوك"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/afaaq.alhayat/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="إنستغرام"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            جميع الحقوق محفوظة © {currentYear} لـ{" "}
            <strong>جمعية آفاق الحياة</strong>.
          </div>
        </div>
      </div>
    </footer>
  );
}
