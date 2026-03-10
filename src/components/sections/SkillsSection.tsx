import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const categories = [
  { label: "Project Management", items: skills.projectManagement },
  { label: "Technical & Tools", items: skills.technical },
  { label: "Soft Skills", items: skills.soft },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="section-title">// Skills</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            className="card-structure"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <h3 className="font-heading text-[10px] tracking-[0.2em] text-structure mb-3 uppercase">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <span key={item} className="tag-teal">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
