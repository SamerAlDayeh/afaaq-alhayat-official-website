import { useEffect, useMemo } from "react";
import {
  Compass,
  Target,
  CircleCheckBig,
  Milestone,
  Flag,
  Globe,
} from "lucide-react";
import "./About.css";

export default function About() {
  useEffect(() => {
    document.title = "مؤسسة آفاق الحياة | من نحن";

    let metaDescription = document.querySelector('meta[name="description"]');
    const aboutDesc =
      "تعرف على نشأة وأبعاد جمعية آفاق الحياة الخيرية في سوريا، رسالتنا الإنسانية، قيمنا المؤسسية، ومحطات العطاء والإنجاز في ترميم المدارس وحفر الآبار والتمكين المهني.";

    if (metaDescription) {
      metaDescription.setAttribute("content", aboutDesc);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content = aboutDesc;
      document.head.appendChild(metaDescription);
    }

    return () => {
      document.title = "مؤسسة آفاق الحياة الخيرية";
    };
  }, []);

  const aboutPageSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      mainEntity: {
        "@type": "NGO",
        name: "مؤسسة آفاق الحياة الخيرية",
        description:
          "منظمة خيرية تنموية تعمل في سوريا على تحقيق التنمية المستدامة وإعادة إعمار المرافق الحيوية.",
        knowAbout: [
          "ترميم المدارس",
          "ترميم البنية التحتية",
          "التمكين المهني",
          "الدعم الاجتماعي",
        ],
      },
    };
  }, []);

  return (
    <div className="about-page">
      <script type="application/ld+json">
        {JSON.stringify(aboutPageSchema)}
      </script>

      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container" style={{ position: "relative", zIndex: 5 }}>
          <h1 className="about-hero-title animate-fade-in-up">
            عن مؤسسة آفاق الحياة
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#D1DCE5",
              maxWidth: "600px",
              margin: "16px auto 0 auto",
            }}
            className="animate-fade-in"
          >
            ترسية بذور الاستقرار، وإحياء غراس الأمل في قلوب المجتمع السوري
          </p>
        </div>
      </section>

      <section
        className="section"
        id="organization-intro"
        aria-label="تمهيد وتأسيس الجمعية"
      >
        <div className="container">
          <div
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              textAlign: "center",
              lineHeight: "1.9",
            }}
            className="animate-fade-in-up"
          >
            <span
              style={{
                color: "var(--primary)",
                fontWeight: "800",
                fontSize: "1rem",
                textTransform: "uppercase",
                display: "block",
              }}
            >
              تمهيد وتأسيس
            </span>
            <h2 className="section-title" style={{ marginTop: "8px" }}>
              نشأة وأبعاد مسعانا الخيري
            </h2>

            <p
              style={{
                fontSize: "1.2rem",
                color: "var(--text-dark)",
                marginBottom: "24px",
                fontWeight: "500",
              }}
            >
              تأسست <strong>مؤسسة آفاق الحياة الخيرية</strong> كاستجابة وطنية
              إنسانية نابعة من صميم التحديات التنموية والاجتماعية التي تشهدها
              الجمهورية العربية السورية.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-muted)",
                marginBottom: "24px",
              }}
            >
              نحن نعمل بشكل رسمي ومرخص في مختلف أراضي الجمهورية العربية السورية،
              ونضع ضمن أولوياتنا توفير حلول تنموية متكاملة تلامس مجالات إعادة
              تأهيل المنشآت والمدارس التربوية.
            </p>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)" }}>
              يمتلك فريقنا الإداري والميداني عهداً أخلاقياً راسخاً يقوم على
              الشفافية والمساءلة والكفاءة المهنية الهندسية والاجتماعية في توجيه
              وإدارة المساعدات وتشييد البنى التحتية، إيماناً منا بأن اليد
              المعمرة هي الأبقى أثراً والأحق دعماً.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section"
        id="vision-mission"
        style={{ backgroundColor: "#F4F7F5" }}
        aria-label="الرؤية والرسالة الاستراتيجية"
      >
        <div className="container">
          <h2 className="sr-only" style={{ display: "none" }}>
            التوجه الاستراتيجي للجمعية
          </h2>
          <div className="strategic-grid">
            <article className="strategic-card">
              <div className="strategic-icon-box green">
                <Compass size={28} aria-hidden="true" />
              </div>
              <h3 className="strategic-title">رؤيتنا التنموية</h3>
              <p className="strategic-desc">
                أن نكون المؤسسة الإنسانية الرائدة والمرجع النموذجي في سوريا
                للتنمية المستدامة وإعادة إعمار البنية التحتية والمرافق التعليمية
                الحيوية، ممهدين السبل لبناء مجتمع يعتمد على موارده الذاتية،
                ويتمتع فيه كل مواطن بالتعليم المناسب وسبل العيش الكريم والمحفز.
              </p>
            </article>

            <article className="strategic-card blue-accent">
              <div className="strategic-icon-box blue">
                <Target size={28} aria-hidden="true" />
              </div>
              <h3 className="strategic-title">رسالتنا الإنسانية</h3>
              <p className="strategic-desc">
                النهوض بجودة التدخلات الإنسانية والخيرية داخل أراضي الجمهورية
                العربية السورية، عبر تصميم وتنفيذ باقة مشاريع مدروسة بعناية:
                ترميم المدارس وتزويدها بمصادر الطاقة البديلة، بالتعاون مع
                الكفاءات المحلية وتحت مظلة الشفافية والنزاهة المطلقة.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="timeline-achievements">
        <div className="container">
          <h2 className="section-title">محطات في مسيرة الأثر والعطاء</h2>
          <p className="section-subtitle">
            نحمل فخراً رصيناً لإنجاز مشاريع سريعة متتالية صانت حياة الآلاف على
            مدار السنوات الأخيرة. نستعرض هنا أهم مبادراتنا الزمنية:
          </p>

          <ol className="timeline-wrapper">
            <li className="timeline-node">
              <div className="timeline-bullet" aria-hidden="true">
                01
              </div>
              <div className="card-base timeline-card">
                <time className="timeline-card-year" dateTime="2024-01">
                  أوائل عام 2024
                </time>
                <h3 className="timeline-card-title">
                  تأسيس وترخيص الجمعية وتشكيل اللجان الميدانية
                </h3>
                <p className="timeline-card-text">
                  تم الانتهاء من التراخيص الرسمية وتأسيس الهيكل التنظيمي والمكتب
                  التنفيذي في دمشق، مع بناء قاعدة متطوعين مدربين تزيد عن 50
                  شاباً وشابة لمختلف المحافظات السورية.
                </p>
              </div>
            </li>

            <li className="timeline-node timeline-node-accent">
              <div className="timeline-bullet" aria-hidden="true">
                02
              </div>
              <div
                className="card-base timeline-card"
                style={{ borderRight: "5px solid var(--secondary)" }}
              >
                <time
                  className="timeline-card-year"
                  style={{ color: "var(--secondary)" }}
                >
                  منتصف عام 2025
                </time>
                <h3 className="timeline-card-title">
                  إعادة تأهيل وتطوير مدرسة عبد القادر المغربي
                </h3>
                <p className="timeline-card-text">
                  مشروع تنموي شامل يهدف إلى إعادة إعمار وتأهيل مدرسة عبد القادر
                  المغربي هندسياً ولوجستياً؛ من خلال ترميم أكثر من 12 صفاً
                  دراسياً وتجهيزها بالكامل، وصيانة المرافق الصحية، وتأهيل
                  الساحات الخارجية وتجميلها، بالإضافة إلى تقديم الدعم العيني
                  المتكامل للطلاب والكادر التدريسي. يثمر هذا الإنجاز الفعلي عن
                  تمكين أكثر من 1,000 طالب وطالبة من العودة إلى مقاعد الدراسة
                  ببيئة آمنة وصحية.
                </p>
              </div>
            </li>

            <li className="timeline-node">
              <div className="timeline-bullet" aria-hidden="true">
                03
              </div>
              <div className="card-base timeline-card">
                <time className="timeline-card-year">أوائل عام 2026</time>
                <h3 className="timeline-card-title">
                  تحسين جودة التعليم وإعادة تأهيل أكثر من 5 مدارس
                </h3>
                <p className="timeline-card-text">
                  قمنا بتحسين جودة البيئة التعليمية من خلال التدخل المباشر
                  لترميم وصيانة المنشآت التعليمية؛ عن طريق صيانة وتجهيز الغرف
                  الصفية بالمقاعد والمستلزمات الأساسية، وتأهيل المرافق الخدمية
                  الساحات الخارجية وتجميلها، بما يضمن توفير بيئة دراسية صحية
                  وآمنة، تدعم استمرارية التعليم وتخلق فضاءً محفزاً للطلاب
                  والكوادر التدريسية.
                </p>
              </div>
            </li>

            <li className="timeline-node timeline-node-accent">
              <div className="timeline-bullet" aria-hidden="true">
                04
              </div>
              <div
                className="card-base timeline-card"
                style={{ borderRight: "5px solid var(--secondary)" }}
              >
                <time
                  className="timeline-card-year"
                  style={{ color: "var(--secondary)" }}
                >
                  عام 2026 - الحالي
                </time>
                <h3 className="timeline-card-title">
                  رسم الخارطة التنفيذية للمشاريع القادمة وضمان جهوزيتها
                  اللوجستية والفنية
                </h3>
                <p className="timeline-card-text">
                  مرحلة التخطيط والدراسات الاستراتيجية لإطلاق حزمة جديدة من
                  المشاريع التنموية والإنسانية. تتضمن هذه المرحلة تقييم
                  الاحتياجات الميدانية بدقة، وإجراء الدراسات الهندسية واللوجستية
                  اللازمة، صياغة مقترحات المشاريع وفقاً لأعلى معايير الاستدامة،
                  وتحديد الشراكات والمسارات التنفيذية الكفيلة بتحقيق أقصى أثر
                  إيجابي ممكن في تمكين المجتمعات المحلية.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section
        className="section"
        id="core-values"
        style={{
          backgroundColor: "#FAFBFA",
          borderTop: "1px solid var(--border-light)",
        }}
      >
        <div className="container">
          <h2 className="section-title">
            القيم الأخلاقية والمؤسسية الحاكمة لنا
          </h2>
          <p className="section-subtitle">
            نعمل وفق ميثاق قيمي صارم يحدد سلوكيات كوادرنا ويوجه جودة مخرجات
            مشاريعنا على الأرض:
          </p>

          <ul className="values-grid" style={{ listStyle: "none", padding: 0 }}>
            <li className="card-base value-item-card">
              <span className="value-accent-num" aria-hidden="true">
                01
              </span>
              <h3
                style={{
                  fontWeight: "800",
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                }}
              >
                الأمانة والشفافية
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--text-muted)",
                  lineHeight: "1.6",
                }}
              >
                نؤمن بأن كل تبرع عيني هو أمانة عظمى، لذا نوظف برمجيات كشف دورية
                ورقابة ميدانية صارمة مع توثيق حي بالصور والبيانات المتاحة
                للجميع.
              </p>
            </li>

            <li
              className="card-base value-item-card"
              style={{ borderTop: "4px solid var(--secondary)" }}
            >
              <span
                className="value-accent-num"
                style={{ color: "var(--secondary)" }}
                aria-hidden="true"
              >
                02
              </span>
              <h3
                style={{
                  fontWeight: "800",
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                }}
              >
                المسؤولية والاستدامة
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--text-muted)",
                  lineHeight: "1.6",
                }}
              >
                نمتنع عن صياغة المساعدات المؤقتة التي سرعان ما تزول، بل نؤصل
                للبنيان المستمر والمشاريع ذات الأثر الدائم.
              </p>
            </li>

            <li className="card-base value-item-card">
              <span className="value-accent-num" aria-hidden="true">
                03
              </span>
              <h3
                style={{
                  fontWeight: "800",
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                }}
              >
                الكرامة الإنسانية
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--text-muted)",
                  lineHeight: "1.6",
                }}
              >
                نحترم آدمية وكرامة كافة المستفيدين ونقدم الخدمات والمعونات بكل
                مودة ودون أدنى تمييز أو ملامح تخدش عزة نفوس عوائلنا الكرام.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section
        className="section"
        id="strategy-future"
        style={{ backgroundColor: "#F0F4F2" }}
      >
        <div className="container">
          <h2 className="sr-only" style={{ display: "none" }}>
            خطط الجمعية المستقبلية وركائز العمل
          </h2>
          <div className="columns-layout">
            {/* Strategy Column */}
            <div className="column-item">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <Milestone
                  size={24}
                  style={{ color: "var(--primary)" }}
                  aria-hidden="true"
                />
                <h3
                  style={{
                    fontFamily: "var(--font-secondary)",
                    fontSize: "1.5rem",
                    fontWeight: "800",
                    color: "var(--text-dark)",
                    margin: 0,
                  }}
                >
                  استراتيجيتنا التنفيذية
                </h3>
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-muted)",
                  lineHeight: "1.7",
                }}
              >
                نرتكز في تنفيذ مخططاتنا الهندسية والتنموية على ركائز تنظيمية
                لضمان التفوق وتلافي الصعوبات الجغرافية:
              </p>
              <ul className="bullet-list">
                <li className="bullet-list-item">
                  <CircleCheckBig
                    size={18}
                    className="bullet-list-icon"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>المسح الجغرافي الدقيق:</strong> معاينة وتقييم
                    الاحتياجات الفعلية للمنشآت التعليمية ميدانياً قبل صياغة خطط
                    الدعم الهندسي واللوجستي.
                  </span>
                </li>
                <li className="bullet-list-item">
                  <CircleCheckBig
                    size={18}
                    className="bullet-list-icon"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>الشراكة الفعالة:</strong> التنسيق المتكامل مع
                    المؤسسات المجتمعية والجمعيات والجهات المحلية في سوريا.
                  </span>
                </li>
                <li className="bullet-list-item">
                  <CircleCheckBig
                    size={18}
                    className="bullet-list-icon"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>الحلول المستدامة:</strong> اعتماد معايير هندسية
                    وبيئية مستدامة في عمليات الترميم، تضمن كفاءة تشغيل المرافق
                    والمباني التعليمية على المدى الطويل وتقليل تكاليف صيانتها
                    الدورية.
                  </span>
                </li>
                <li className="bullet-list-item">
                  <CircleCheckBig
                    size={18}
                    className="bullet-list-icon"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>تمكين الكوادر وإدارة المرافق:</strong> تأهيل وتدريب
                    المشرفين المحليين والكوادر الإدارية على صيانة التجهيزات
                    اللوجستية والتقنية الحديثة داخل المدارس لضمان استمرارية
                    كفاءتها.
                  </span>
                </li>
              </ul>
            </div>

            <div
              className="column-item column-item-accent"
              style={{ borderTop: "4px solid var(--secondary)" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <Flag
                  size={24}
                  style={{ color: "var(--secondary)" }}
                  aria-hidden="true"
                />
                <h3
                  style={{
                    fontFamily: "var(--font-secondary)",
                    fontSize: "1.5rem",
                    fontWeight: "800",
                    color: "var(--text-dark)",
                    margin: 0,
                  }}
                >
                  خططنا وتطلعاتنا المستقبلية
                </h3>
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-muted)",
                  lineHeight: "1.7",
                }}
              >
                نسعى خلال المرحلة القادمة من أجل توزيع وتوسيع دائرة نفعنا لتشمل
                المحاور التأسيسية الإننشائية المتتالية:
              </p>
              <ul className="bullet-list">
                <li className="bullet-list-item">
                  <CircleCheckBig
                    size={18}
                    className="bullet-list-icon"
                    style={{ color: "var(--secondary)" }}
                    aria-hidden="true"
                  />
                  <span>
                    <strong>مظلة التعليم الأخضر:</strong> تأهيل وترميم أكثر من
                    15 مدرسة تفتقر للخدمات الأساسية في المحافظات السورية
                    وتحويلها إلى بيئات نموذجية محفزة.
                  </span>
                </li>
                <li className="bullet-list-item">
                  <CircleCheckBig
                    size={18}
                    className="bullet-list-icon"
                    style={{ color: "var(--secondary)" }}
                    aria-hidden="true"
                  />
                  <span>
                    <strong>التجهيز اللوجستي المتكامل:</strong> تأمين وتحديث
                    المقاعد الدراسية والوسائل التعليمية والمختبرات التقنية لجميع
                    الغرف الصفية في المنشآت المستهدفة.
                  </span>
                </li>
                <li className="bullet-list-item">
                  <CircleCheckBig
                    size={18}
                    className="bullet-list-icon"
                    style={{ color: "var(--secondary)" }}
                    aria-hidden="true"
                  />
                  <span>
                    <strong>المساحات الحيوية والأنشطة:</strong> تأهيل الملاعب
                    الرياضية وتجميل الساحات الخارجية للمدارس لخلق فضاءات تفاعلية
                    تدعم الاستقرار النفسي والبدني للطلاب.
                  </span>
                </li>
                <li className="bullet-list-item">
                  <CircleCheckBig
                    size={18}
                    className="bullet-list-icon"
                    style={{ color: "var(--secondary)" }}
                    aria-hidden="true"
                  />
                  <span>
                    <strong>تمكين الشباب والورشات التدريبية:</strong> إطلاق
                    سلسلة من الدورات التعليمية والورشات التدريبية التخصصية لبناء
                    مهارات الشباب.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="why-we-exist">
        <div
          className="container"
          style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
        >
          <div style={{ color: "var(--primary)", marginBottom: "20px" }}>
            <Globe size={48} style={{ margin: "0 auto" }} aria-hidden="true" />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-secondary)",
              fontSize: "1.8rem",
              fontWeight: "800",
              color: "var(--text-dark)",
              marginBottom: "16px",
            }}
          >
            لماذا نحن موجودون؟
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              lineHeight: "1.8",
            }}
          >
            إيماناً منا بأن العلم هو أساس الإعمار، وبأن الاستثمار في عقول جيلنا
            الناشئ وشبابنا هو الضمان الحقيقي للمستقبل؛ نعمل بلا كلل لتأهيل الصرح
            التعليمية وإطلاق الورشات التدريبية التي تبني المهارات. نحن هنا لنكون
            صلة الوصل التي تحوّل الآمال إلى واقع، ونرسم مستقبلاً واعداً للأجيال
            عبر بوابات المعرفة والتمكين.
          </p>
        </div>
      </section>
    </div>
  );
}
