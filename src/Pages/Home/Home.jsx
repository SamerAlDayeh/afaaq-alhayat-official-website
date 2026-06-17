import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Target,
  Award,
  ShieldCheck,
  HeartHandshake,
  Compass,
  Users,
} from "lucide-react";
import { projectsData } from "../../Data/projectsData";
import Stats from "../../Components/Stats/Stats";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import "./Home.css";

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);

  useEffect(() => {
    document.title = "مؤسسة آفاق الحياة | الرئيسية";

    let metaDescription = document.querySelector('meta[name="description"]');
    const homeDesc =
      "جمعية آفاق الحياة الخيرية تسعى لإعادة تأهيل المنظومة التعليمية، ترميم وتجهيز المدارس، وتقديم برامج التمكين المهني والدعم الاجتماعي لبناء قدرات الشباب في سوريا.";

    if (metaDescription) {
      metaDescription.setAttribute("content", homeDesc);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content = homeDesc;
      document.head.appendChild(metaDescription);
    }

    return () => {
      document.title = "مؤسسة آفاق الحياة الخيرية";
    };
  }, []);

  const organizationSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "NGO",
      name: "مؤسسة آفاق الحياة الخيرية",
      url: "https://afaaqalhayat.com",
      logo: "https://afaaqalhayat.com/Images/favico.png",
      description:
        "جمعية خيرية تنموية تعمل على إعادة تأهيل التعليم، تطوير الكفاءات، والتمكين الاجتماعي والاقتصادي للشباب والطلاب في سوريا.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "SY",
      },
      knowsAbout: [
        "التعليم وتطوير المدارس",
        "الدورات التدريبية وبناء القدرات",
        "الدعم الاجتماعي",
        "التمكين المهني والشبابي",
      ],
    };
  }, []);

  return (
    <div className="home-page animate-fade-in" id="home-page-container">
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <section className="hero" id="home-hero">
        <div className="container">
          <div className="hero-box">
            <h1>
              نبني <span>آفاقاً متجددة</span> للحياة وندعم طموحات المستقبل في
              سوريا
            </h1>
            <p>
              نحن في مؤسسة آفاق الحياة نكرس جهودنا لإعادة تأهيل المنظومة
              التعليمية في سوريا، وتجهيز المرافق الدراسية، وتوفير برامج التمكين
              المهني ودورات بناء القدرات لخلق جيل متمكن ومستدام.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                <span>استكشف مشاريعنا</span>
                <Compass size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" id="home-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-image">
              <img
                src="Images/HomeSlider/2.png"
                alt="تقديم الدعم الإنساني والتنموي في سوريا - مؤسسة آفاق الحياة"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="intro-content">
              <span className="intro-badge">مؤسسة آفاق الحياة</span>
              <h3>رسالتنا هي تمكين ونهضة المجتمع</h3>
              <p>
                المساهمة في بناء جيل واعد من خلال توفير بيئة تعليمية ذات جودة
                عالية وتطوير برامج تنموية ومجتمعية مستدامة تلبي احتياجات الشباب
                والطلاب، بهدف تمكينهم اقتصادياً وعلمياً وتحقيق الاكتفاء الذاتي
                لهم.
              </p>
              <Link to="/about" className="btn btn-secondary">
                <span>اقرأ المزيد عنا</span>
                <ArrowLeft size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <section className="section section-white" id="home-featured-projects">
        <div className="container">
          <div className="section-header">
            <h2>مشاريعنا المميزة</h2>
            <p>
              نعمل بجهد وشغف لإحداث أثر حاسم ملموس. إليكم بعضاً من أبرز المشاريع
              التي يجري تنفيذها أو تم تشغيلها حديثاً.
            </p>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center featured-projects-footer">
            <Link to="/projects" className="btn btn-secondary">
              <span>عرض جميع مشاريعنا</span>
              <ArrowLeft size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-grey" id="home-impact">
        <div className="container">
          <div className="section-header">
            <h2>أثرنا وإنجازاتنا</h2>
            <p>
              من خلال توحيد الجهود والدعم المستمر لشركائنا، نقوم بتقديم أفضل
              النتائج لضمان رفاهية وتنمية الفرد والعملية التعليمية.
            </p>
          </div>

          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon">
                <Target size={32} />
              </div>
              <h3>التعليم والتأهيل</h3>
              <p>
                ترميم المدارس وتجهيز الغرف الصفية لتقليص التسرب وضمان عودة
                الطلاب إلى فصول دراسية آمنة ومجهزة بالكامل.
              </p>
            </div>

            <div className="impact-card">
              <div className="impact-icon">
                <Award size={32} />
              </div>
              <h3>الاستدامة التعليمية والمهنية</h3>
              <p>
                تطوير المراكز التدريبية وتزويدها بالحلول التشغيلية المناسبة،
                لدعم استمرارية الدورات المهنية وورشات بناء القدرات المجانية
                للشباب.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" id="home-why-us">
        <div className="container">
          <div className="why-section-grid">
            <div className="why-content">
              <div className="section-header section-header-right">
                <h2>لماذا مؤسسة آفاق الحياة؟</h2>
                <p>
                  ركائز ثابتة توجه مشاريعنا وتضمن إيصال المساعدات والدعم
                  لمحتاجيها بأعلى درجات المهنية والكفاءة.
                </p>
              </div>

              <div className="why-features">
                <div className="feature-item">
                  <div className="feature-icon-wrapper">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="feature-text">
                    <h4>الشفافية المطلقة</h4>
                    <p>
                      نعمل بنظام حوكمة مالي وإداري دقيق يخضع لأعلى معايير
                      الرقابة والتكامل الميداني.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon-wrapper">
                    <HeartHandshake size={24} />
                  </div>
                  <div className="feature-text">
                    <h4>الاستدامة والأثر بعيد المدى</h4>
                    <p>
                      لا نقدم فقط مسكنات مؤقتة، بل نركز على بناء حلول تدريبية
                      وتعليمية مستدامة.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon-wrapper">
                    <Users size={24} />
                  </div>
                  <div className="feature-text">
                    <h4>الأثر المجتمعي العميق</h4>
                    <p>
                      ننطلق بمشاريعنا مباشرة من قلب الاحتياجات الفعلية للطلاب
                      والشباب بالتنسيق الكامل مع المجتمع المحلي.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon-wrapper">
                    <Award size={24} />
                  </div>
                  <div className="feature-text">
                    <h4>الإدارة التنفيذية والمهنية</h4>
                    <p>
                      يشرف على مبادراتنا نخبة من المتخصصين لضمان مستوى جودة
                      تنفيذ عالي يخدم الرؤية التعليمية للجمعية.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-image intro-image">
              <img
                src="Images/whyus.png"
                alt="معايير الكفاءة والشفافية - مؤسسة آفاق الحياة"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
