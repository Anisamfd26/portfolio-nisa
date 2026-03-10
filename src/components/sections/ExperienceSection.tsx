import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-20">
      <h2 className="section-title">// Experience</h2>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="card-structure"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground">{exp.role}</h3>
                <p className="font-body text-xs text-muted-foreground">{exp.company}</p>
              </div>
              <span className="tag-amber flex-shrink-0">{exp.period}</span>
            </div>

            <ul className="space-y-1.5 mb-3">
              {exp.points.map((point, j) => (
                <li key={j} className="font-body text-xs text-foreground/80 flex gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map((tag) => (
                <span key={tag} className="tag-teal">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
