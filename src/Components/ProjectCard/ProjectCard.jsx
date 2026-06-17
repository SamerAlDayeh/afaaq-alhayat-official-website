import { Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <article className="project-card">
      <div className="project-card-image">
        <img
          src={project.coverImage}
          alt={project.title}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="badge-wrapper">
          <span className="project-category">{project.category}</span>
          <span className="project-status">{project.status}</span>
        </div>
      </div>

      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>

        <div className="project-card-footer">
          <div className="project-meta-info">
            <MapPin size={16} aria-hidden="true" />
            <span>{project.location}</span>
          </div>

          <Link
            to={`/project/${project.id}`}
            className="btn-details"
            aria-label={`التفاصيل حول مشروع ${project.title}`}
          >
            <span>التفاصيل</span>
            <ArrowLeft size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
