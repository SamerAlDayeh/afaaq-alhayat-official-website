import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { RefreshCw } from "lucide-react";
import { projectsData } from "../../Data/projectsData";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import "./Projects.css";

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("cat") || "all";

  const categories = [
    { id: "all", name: "جميع المشاريع" },
    { id: "schools", name: "تطوير التعليم" },
    { id: "empower", name: "التمكين والدعم الاجتماعي" },
  ];

  useEffect(() => {
    let pageTitle = "مؤسسة آفاق الحياة | مشاريعنا ومبادراتنا التنموية";
    let pageDesc =
      "تصفح سجل مشاريع ومبادرات جمعية آفاق الحياة الخيرية في سوريا، من تأهيل المدارس والتعليم إلى مشاريع التمكين والدعم الاجتماعي والتنموي.";

    if (activeCategory === "schools") {
      pageTitle = "تطوير المدارس وإعادة تأهيل التعليم في سوريا | مشاريعنا";
      pageDesc =
        "اكتشف مشاريع جمعية آفاق الحياة الخيرية المخصصة لترميم الفصول الدراسية وتجهيز المرافق التعليمية وإطلاق الورشات التدريبية في سوريا.";
    } else if (activeCategory === "empower") {
      pageTitle = "مشاريع التمكين المهني والدعم الاجتماعي في سوريا | مبادراتنا";
      pageDesc =
        "اطلع على مبادرات الدعم الاجتماعي، دورات بناء القدرات، وورشات التمكين التأهيلية التي تنفذها جمعية آفاق الحياة الخيرية للشباب والطلاب.";
    }

    document.title = pageTitle;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", pageDesc);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content = pageDesc;
      document.head.appendChild(metaDescription);
    }

    return () => {
      document.title = "جمعية آفاق الحياة الخيرية";
    };
  }, [activeCategory]);

  const collectionSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "مشاريع ومبادرات جمعية آفاق الحياة الخيرية",
      description:
        "دليل يعرض كافة أعمال التنمية المستدامة، تطوير المؤسسات التعليمية، والتمكين المهني والاجتماعي التي تقيمها الجمعية في أراضي الجمهورية العربية السورية.",
      url: window.location.href,
    };
  }, []);

  const handleCategoryChange = (catId) => {
    if (catId === "all") {
      searchParams.delete("cat");
    } else {
      searchParams.set("cat", catId);
    }
    setSearchParams(searchParams);
  };

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "schools")
      return (
        project.category.includes("المدارس") ||
        project.category.includes("التعليم") ||
        project.category.includes("الدورات")
      );

    if (activeCategory === "empower")
      return (
        project.category.includes("التمكين") ||
        project.category.includes("الاجتماعي")
      );
    return true;
  });

  return (
    <div className="projects-page animate-fade-in" id="projects-page-catalog">
      <script type="application/ld+json">
        {JSON.stringify(collectionSchema)}
      </script>

      <section
        className="about-hero"
        style={{
          background:
            "linear-gradient(135deg, rgba(137, 185, 89, 0.8), rgba(30,37,43,0.85)",
        }}
      >
        <div className="container">
          <div className="about-hero-box">
            <h1 className="page-title">مشاريعنا ومبادراتنا</h1>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-header" style={{ marginBottom: "2.5rem" }}>
            <h2>مشاريع تضيء دروب الأمل</h2>
            <p>
              ندير وننفذ مجموعة واسعة من المشاريع الحيوية والتنموية الرامية لدعم
              العملية التعليمية وتأهيل الكفاءات الشابة في دمشق ومختلف المحافظات
              السورية.
            </p>
          </div>

          <div
            className="filter-wrapper"
            style={{
              margin: "0 auto 3rem auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem",
            }}
            id="projects-filters"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`btn ${activeCategory === cat.id ? "btn-primary" : "btn-outline"}`}
                style={{
                  padding: "0.6rem 1.4rem",
                  fontSize: "0.95rem",
                  borderRadius: "30px",
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.5rem",
              borderBottom: "1px solid var(--border-color)",
              paddingBottom: "1rem",
              color: "var(--text-muted)",
              fontSize: "0.95rem",
            }}
          >
            <div>
              <span>عدد المشاريع المدرجة: </span>
              <strong style={{ color: "var(--dark-color)" }}>
                {filteredProjects.length}
              </strong>
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="projects-grid" id="filtered-projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "4rem 2rem",
                backgroundColor: "var(--secondary-light)",
                borderRadius: "12px",
              }}
            >
              <RefreshCw
                size={44}
                style={{
                  color: "var(--secondary)",
                  animation: "spin 3s linear infinite",
                  marginBottom: "1rem",
                }}
              />
              <h3 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
                عذراً، لم نجد نتائج مطابقة
              </h3>
              <p style={{ color: "var(--text-muted)" }}>
                يمكنك إعادة اختيار "جميع المشاريع" لمشاهدة المبادرات المتكاملة.
              </p>
              <button
                onClick={() => handleCategoryChange("all")}
                className="btn btn-primary"
                style={{ marginTop: "1.5rem" }}
              >
                عرض كل مشاريعنا
              </button>
            </div>
          )}

          <div className="notice-box" style={{ marginTop: "5rem" }}>
            <div className="notice-box-content">
              <span className="notice-icon">📢</span>
              <div className="notice-text">
                <h4>ملاحظة تنظيمية هامة</h4>
                <p>
                  مؤسسة آفاق الحياة مسجلة ومعترف بها وتقوم بتنسيق وإبرام كافة
                  مبادراتها التعليمية والتنموية بالتنسيق مع الجهات الأهلية
                  والرسمية المعنية داخل سوريا لضمان تحقيق أعلى معايير الاستدامة
                  والأثر الفعلي.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
