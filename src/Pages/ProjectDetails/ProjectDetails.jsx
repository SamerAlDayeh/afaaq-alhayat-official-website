import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Users,
  Calendar,
  AlertCircle,
  Gem,
  CheckCircle,
} from "lucide-react";
import { projectsData } from "../../Data/projectsData";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | مؤسسة آفاق الحياة الخيرية`;

      let metaDescription = document.querySelector('meta[name="description"]');
      const shortDesc =
        project.shortDescription || project.description?.substring(0, 150);

      if (metaDescription) {
        metaDescription.setAttribute("content", shortDesc);
      } else {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        metaDescription.content = shortDesc;
        document.head.appendChild(metaDescription);
      }
    } else {
      document.title = `المشروع غير موجود | مؤسسة آفاق الحياة`;
    }

    return () => {
      document.title = "مؤسسة آفاق الحياة الخيرية";
      const metaDescription = document.querySelector(
        'meta[name="description"]',
      );
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "مؤسسة آفاق الحياة الخيرية - مشاريع تنموية وتعليمية مستدامة لدعم وتمكين الشباب والطلاب في سوريا.",
        );
      }
    };
  }, [project]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const seoStructuredData = useMemo(() => {
    if (!project) return null;

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `https://afaaqalhayat.com/project/${project.id}/#article`,
          headline: project.title,
          description:
            project.shortDescription || project.description?.substring(0, 160),
          image: project.coverImage,
          datePublished: project.date,
          contentLocation: {
            "@type": "Place",
            name: project.location,
            address: {
              "@type": "PostalAddress",
              addressCountry: "SY",
            },
          },
          publisher: {
            "@type": "NGO",
            name: "مؤسسة آفاق الحياة",
            url: "https://afaaqalhayat.com",
            logo: "https://afaaqalhayat.com/Images/favico.png",
          },
        },
      ],
    };
  }, [project]);

  if (!project) {
    return (
      <div className="container" style={{ padding: "80px 24px" }}>
        <div className="pd-not-found" style={{ textAlign: "center" }}>
          <AlertCircle
            size={64}
            style={{ color: "var(--secondary)", marginBottom: "16px" }}
            aria-hidden="true"
          />
          <h1
            style={{
              fontFamily: "var(--font-secondary)",
              fontSize: "2rem",
              fontWeight: "800",
            }}
          >
            عذراً، لم نتمكن من العثور على المشروع المطلوب
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            إن المشاريع التي تبحث عنها غير متوفرة أو قد تكون تغيرت معرفاتها
            التعريفية.
          </p>
          <Link
            to="/projects"
            className="btn btn-primary"
            style={{ marginTop: "20px", display: "inline-block" }}
          >
            الرجوع إلى قائمة مشاريعنا
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="project-details-page" aria-labelledby="project-main-title">
      {seoStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(seoStructuredData)}
        </script>
      )}

      <section
        className="pd-hero-banner"
        style={{ backgroundImage: `url(${project.coverImage})` }}
        aria-label="غطاء البانر التوثيقي"
      >
        <div className="pd-hero-overlay">
          <div className="pd-title-container">
            <span className="pd-category-tag">{project.category}</span>
            <h1 id="project-main-title" className="pd-title">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="container">
        <section
          className="pd-summary-bar"
          aria-label="ملخص بيانات المشروع الرقمية"
        >
          <div className="pd-summary-card">
            <div className="pd-summary-icon">
              <MapPin size={24} aria-hidden="true" />
            </div>
            <div>
              <div className="pd-summary-label">موقع تنفيذ المشروع</div>
              <div className="pd-summary-value">{project.location}</div>
            </div>
          </div>

          <div className="pd-summary-card pd-summary-card-blue">
            <div className="pd-summary-icon">
              <Users size={24} aria-hidden="true" />
            </div>
            <div>
              <div className="pd-summary-label">حجم التعداد المستهدف</div>
              <div className="pd-summary-value">{project.beneficiaryCount}</div>
            </div>
          </div>

          <div className="pd-summary-card">
            <div className="pd-summary-icon">
              <Calendar size={24} aria-hidden="true" />
            </div>
            <div>
              <div className="pd-summary-label">التاريخ والجدول الزمني</div>
              <div className="pd-summary-value">{project.date}</div>
            </div>
          </div>
        </section>

        <div className="pd-layout-grid">
          <div className="pd-main-content">
            <article
              className="card-base"
              style={{
                padding: "40px",
                border: "1px solid var(--border-light)",
              }}
            >
              <h2 className="pd-section-title">حول وأبعاد هذا المشروع</h2>
              <p
                style={{
                  fontSize: "1.15rem",
                  lineHeight: "1.9",
                  color: "var(--text-dark)",
                  margin: 0,
                }}
              >
                {project.longDescription}
              </p>
            </article>

            <section aria-labelledby="gallery-heading">
              <h2
                id="gallery-heading"
                className="pd-section-title"
                style={{ marginBottom: "24px" }}
              >
                معرض الصور والتوثيق الميداني
              </h2>
              <div className="pd-gallery-grid">
                {project.images?.map((imgUrl, idx) => (
                  <div key={`gallery-img-${idx}`} className="pd-gallery-item">
                    <img
                      src={imgUrl}
                      alt={`لقطة توثيقية حية لتقدم أعمال مشروع: ${project.title} - صورة رقم ${idx + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside
            className="pd-sidebar"
            aria-label="أهداف وأثر المشروع الجانبية"
          >
            <div
              className="card-base pd-objectives-card"
              style={{ padding: "24px", marginBottom: "24px" }}
            >
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "800",
                  borderBottom: "2px solid var(--border-light)",
                  paddingBottom: "12px",
                  marginBottom: "20px",
                  marginTop: 0,
                }}
              >
                أهداف ومحاور المشروع
              </h2>
              <ul
                className="pd-bullet-list"
                style={{ listStyle: "none", padding: 0, margin: 0 }}
              >
                {project.objectives?.map((obj, idx) => (
                  <li
                    key={`objective-${idx}`}
                    className="pd-bullet-item"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      marginBottom: "12px",
                    }}
                  >
                    <CheckCircle
                      size={18}
                      className="pd-bullet-icon"
                      style={{
                        flexShrink: 0,
                        marginTop: "4px",
                        color: "var(--primary)",
                      }}
                      aria-hidden="true"
                    />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="card-base pd-objectives-card"
              style={{
                padding: "24px",
                marginBottom: "24px",
                borderRight: "5px solid var(--secondary)",
              }}
            >
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "800",
                  borderBottom: "2px solid var(--border-light)",
                  paddingBottom: "12px",
                  marginBottom: "20px",
                  marginTop: 0,
                }}
              >
                ثمار وأثر الإنجاز الفعلي
              </h2>
              <ul
                className="pd-bullet-list"
                style={{ listStyle: "none", padding: 0, margin: 0 }}
              >
                {project.impact?.map((imp, idx) => (
                  <li
                    key={`impact-${idx}`}
                    className="pd-bullet-item"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      marginBottom: "12px",
                    }}
                  >
                    <Gem
                      size={18}
                      className="pd-bullet-icon"
                      style={{
                        flexShrink: 0,
                        marginTop: "4px",
                        color: "var(--secondary)",
                      }}
                      aria-hidden="true"
                    />
                    <span style={{ fontSize: "0.94rem" }}>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
