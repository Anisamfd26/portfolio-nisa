import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="section-title">// Projects</h2>

      <div className="grid gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="card-structure"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-heading text-sm font-semibold text-foreground">{project.title}</h3>
              <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 font-heading text-[10px] tracking-wider">
                    <Github size={12} />
                    <span className="hidden sm:inline">GitHub Repo</span>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 font-heading text-[10px] tracking-wider">
                    <ExternalLink size={12} />
                    <span className="hidden sm:inline">Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            <p className="font-body text-xs text-muted-foreground mb-3">{project.description}</p>

            <ul className="space-y-1.5 mb-3">
              {project.points.map((point, j) => (
                <li key={j} className="font-body text-xs text-foreground/80 flex gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="tag-teal">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
