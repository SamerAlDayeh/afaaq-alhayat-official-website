import { useState, useEffect, useMemo } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Building,
  ChevronDown,
  CheckCircle,
  HelpCircle,
} from "lucide-react";
import "./ContactUs.css";

const faqsData = [
  {
    question: "أين تتركز مشاريع ونشاطات مؤسسة آفاق الحياة في سوريا؟",
    answer:
      "يتركز نطاق عملنا التنموي والتعليمي بشكل أساسي داخل أراضي الجمهورية العربية السورية. نقوم بترميم وتأهيل المدارس والمرافق التعليمية جنباً إلى جنب مع تقديم دورات التمكين المهني وبناء قدرات الشباب في مركزنا بدمشق.",
  },
  {
    question: "كيف تضمن المؤسسة الشفافية في إدارة المساهمات والمشاريع؟",
    answer:
      "تعتمد المؤسسة معايير حوكمة إدارية ومحاسبية صارمة. يتم توثيق كافة مراحل إنجاز المشاريع التعليمية والتدريبية بالتقارير الميدانية والمصورة، مع تقديم تقارير دورية تفصيلية للمانحين لضمان دقة التنفيذ وأعلى درجات الشفافية.",
  },
  {
    question: "بصفتي معلماً أو مدرباً، كيف يمكنني التطوع والانضمام لفرقكم؟",
    answer:
      "نرحب بكافة الخبرات والكفاءات الأكاديمية والمهنية السورية! يمكنك ببساطة تعبئة نموذج الاتصال في هذه الصفحة مع تحديد رغبتك في التطوع، وسيقوم فريق التنسيق بالتواصل معك لبحث سبل التعاون الممكنة في دعم الطلاب والشباب.",
  },
];

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "مؤسسة آفاق الحياة | تواصل معنا";

    let metaDescription = document.querySelector('meta[name="description"]');
    const contactDesc =
      "تواصل مع مؤسسة آفاق الحياة الخيرية في سوريا. يمكنك إرسال استفساراتك حول برامجنا التعليمية، دورات التمكين المهني، أو التنسيق للتطوع مباشرة عبر واتساب.";

    if (metaDescription) {
      metaDescription.setAttribute("content", contactDesc);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content = contactDesc;
      document.head.appendChild(metaDescription);
    }

    return () => {
      document.title = "مؤسسة آفاق الحياة";
    };
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (formData.fullName && formData.phone) {
      setFormSubmitted(true);
      const whatsappNumber = "963965055764";

      const messageText =
        `*طلب تواصل جديد من الموقع الإلكتروني* \n\n` +
        `* الاسم بالكامل:* ${formData.fullName}\n` +
        `* رقم الهاتف الخلوي:* ${formData.phone}\n` +
        `* البريد الإلكتروني:* ${formData.email || "غير محدد"}\n` +
        `* تفاصيل الرسالة:* \n${formData.message}`;

      const encodedMessage = encodeURIComponent(messageText);
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
        "_blank",
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setFormSubmitted(false);
      }, 6000);
    }
  };

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const seoStructuredData = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "NGO",
          "@id": "https://afaaqalhayat.com/#organization",
          name: "مؤسسة آفاق الحياة الخيرية",
          url: "https://afaaqalhayat.com",
          logo: "https://afaaqalhayat.com/Images/favico.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "دمشق - المزة شرقية",
            addressLocality: "دمشق",
            addressCountry: "SY",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+963965055764",
            contactType: "Public Relations",
            email: "info@afaaqalhayat.com",
            availableLanguage: ["Arabic"],
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: faqsData.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      ],
    };
  }, []);

  return (
    <main className="contact-page" aria-labelledby="contact-main-title">
      <script type="application/ld+json">
        {JSON.stringify(seoStructuredData)}
      </script>

      <section className="about-hero" aria-label="رأس الصفحة">
        <div className="about-hero-overlay"></div>
        <div className="container hero-container">
          <h1
            id="contact-main-title"
            className="about-hero-title animate-fade-in-up"
          >
            تواصل معنا
          </h1>
          <p className="about-hero-subtitle animate-fade-in">
            يسعدنا سماع رسائلكم واستفساراتكم.
          </p>
        </div>
      </section>

      <div className="container">
        <div
          className="territory-notice-box animate-fade-in-up"
          role="note"
          aria-label="نطاق العمل الجغرافي للجمعية"
        >
          <div className="notice-icon-wrapper">
            <Building size={24} aria-hidden="true" />
          </div>
          <blockquote className="territory-notice-text">
            "مؤسسة آفاق الحياة تعمل على تنفيذ مشاريعها التعليمية والتنموية
            والتمكينية داخل أراضي الجمهورية العربية السورية."
          </blockquote>
        </div>

        <div className="contact-layout">
          <div className="contact-info-column">
            <h2 className="contact-column-title">
              قنوات الاتصال الرسمية وعناوين المقر للمؤسسة في دمشق
            </h2>

            <address className="contact-cards-wrapper">
              <div className="card-base contact-info-card card-primary-border">
                <div className="contact-info-header">
                  <MapPin
                    size={20}
                    className="icon-primary"
                    aria-hidden="true"
                  />
                  <h3 className="contact-info-title">المقر الرئيسي</h3>
                </div>
                <p className="contact-info-value">
                  الجمهورية العربية السورية، دمشق، المزة شرقية
                </p>
              </div>

              <div className="card-base contact-info-card card-secondary-border">
                <div className="contact-info-header">
                  <Phone
                    size={20}
                    className="icon-secondary"
                    aria-hidden="true"
                  />
                  <h3 className="contact-info-title">رقم الهاتف</h3>
                </div>
                <p className="contact-info-value ltr-text">
                  <a
                    href="tel:+963965055764"
                    aria-label="اتصال هاتفي مباشر بالرقم الأول للمؤسسة"
                  >
                    +963 965 055 764
                  </a>
                </p>
              </div>

              <div className="card-base contact-info-card card-primary-border">
                <div className="contact-info-header">
                  <Mail size={20} className="icon-primary" aria-hidden="true" />
                  <h3 className="contact-info-title">
                    البريد الإلكتروني المباشر
                  </h3>
                </div>
                <div className="contact-info-value ltr-text">
                  <a
                    href="mailto:info@afaaqalhayat.com"
                    aria-label="إرسال بريد إلكتروني لقسم المعلومات العام"
                  >
                    info@afaaqalhayat.com
                  </a>
                </div>
              </div>

              <div className="card-base contact-info-card card-third-border">
                <div className="contact-info-header">
                  <Globe size={20} className="icon-third" aria-hidden="true" />
                  <h3 className="contact-info-title">الموقع الإلكتروني</h3>
                </div>
                <p className="contact-info-value ltr-text">
                  <a
                    href="https://afaaqalhayat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.afaaqalhayat.com
                  </a>
                </p>
              </div>
            </address>
          </div>

          <section
            className="card-base contact-form-card"
            aria-labelledby="form-heading"
          >
            <h2 id="form-heading" className="form-main-heading">
              أرسل لنا استفساراً أو مساهمة
            </h2>
            <p className="form-main-subheading">
              يسرنا استقبال رسائلكم واستفساركم بكل سرور.
            </p>

            {formSubmitted && (
              <div
                className="alert-success animate-fade-in"
                role="alert"
                aria-live="polite"
              >
                <CheckCircle
                  size={20}
                  style={{ flexShrink: 0 }}
                  aria-hidden="true"
                />
                <span>
                  تم تجهيز رسالتكم وتوجيهكم إلى واتساب المؤسسة بنجاح! شكراً لطيب
                  تواصلكم.
                </span>
              </div>
            )}

            <form onSubmit={handleFormSubmit}>
              <div className="form-grid">
                <div>
                  <label htmlFor="fullName" className="form-label">
                    الاسم بالكامل *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    aria-required="true"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="مثال: سامر بركات"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="form-label">
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    aria-required="true"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="مثال: +963 944 112 233"
                  />
                </div>

                <div className="form-group-full">
                  <label htmlFor="email" className="form-label">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="مثال: samer@example.com"
                  />
                </div>

                <div className="form-group-full">
                  <label htmlFor="message" className="form-label">
                    تفاصيل رسالتك أو استفسارك *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    aria-required="true"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    placeholder="اكتب هنا بالتفصيل ملامح رغبتك أو استفسارك التعليمي أو التنموي..."
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn">
                أرسل البيانات عبر واتساب وسنبادر بالاتصال بك
              </button>
            </form>
          </section>
        </div>

        <section
          className="section faq-section-divider"
          id="faqs"
          aria-labelledby="faq-main-title"
        >
          <div className="faq-sec-wrapper">
            <h2 id="faq-main-title" className="section-title">
              الأسئلة المتكررة الشائعة
            </h2>
            <p className="section-subtitle">
              إليك إجابات تفصيلية ودقيقة تسهل عليك فهم طبيعة عملنا واستفسارات
              شركائنا في سورية.
            </p>

            <div className="faq-list">
              {faqsData.map((faq, idx) => (
                <div
                  key={`faq-item-${idx}`}
                  className={`faq-item ${openFaqIdx === idx ? "open" : ""}`}
                >
                  <button
                    id={`faq-btn-${idx}`}
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaqIdx === idx}
                    aria-controls={`faq-panel-${idx}`}
                    type="button"
                  >
                    <span className="faq-btn-text">
                      <HelpCircle
                        size={20}
                        className="icon-primary"
                        aria-hidden="true"
                      />
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className="faq-chevron"
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={`faq-panel-${idx}`}
                    className="faq-answer"
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                  >
                    <p className="faq-answer-inner-text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
