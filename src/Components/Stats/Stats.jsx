import { useState, useEffect, useRef } from "react";
import { FolderGit2, Users, School, HeartHandshake } from "lucide-react";
import "./Stats.css";

const statData = [
  {
    id: "projects",
    label: "مشاريع كاملة ومنجزة",
    target: 15,
    suffix: "+",
    icon: <FolderGit2 size={30} />,
  },
  {
    id: "beneficiaries",
    label: "مستفيد ومستفيدة",
    target: 9500,
    suffix: "+",
    icon: <Users size={30} />,
  },
  {
    id: "schools",
    label: "مدارس تمت إعادة تأهيلها",
    target: 9,
    suffix: "",
    icon: <School size={30} />,
  },
  {
    id: "volunteers",
    label: "متطوع ومتطوعة فعالين",
    target: 50,
    suffix: "+",
    icon: <HeartHandshake size={30} />,
  },
];

export default function Stats() {
  const [counts, setCounts] = useState(() =>
    statData.reduce((acc, curr) => ({ ...acc, [curr.id]: 0 }), {}),
  );

  const sectionRef = useRef(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    let timer = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationStarted.current) {
          animationStarted.current = true;

          const duration = 1500;
          const steps = 30;
          const intervalTime = duration / steps;
          let currentStep = 0;

          timer = setInterval(() => {
            currentStep++;

            setCounts((prevCounts) => {
              const updatedCounts = { ...prevCounts };
              statData.forEach((stat) => {
                updatedCounts[stat.id] = Math.round(
                  (stat.target / steps) * currentStep,
                );
              });
              return updatedCounts;
            });

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts(
                statData.reduce(
                  (acc, curr) => ({ ...acc, [curr.id]: curr.target }),
                  {},
                ),
              );
            }
          }, intervalTime);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (timer) clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="stats-section" ref={sectionRef} id="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statData.map((stat) => (
            <div className="stat-item" key={stat.id}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-counter">
                {counts[stat.id].toLocaleString()}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
