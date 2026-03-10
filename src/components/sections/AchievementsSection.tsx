import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import { Award, Trophy } from "lucide-react";

const iconMap = {
  competition: Trophy,
  certification: Award,
  award: Award,
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="scroll-mt-20">
      <h2 className="section-title">// Achievements</h2>

      <div className="space-y-3">
        {achievements.map((ach, i) => {
          const Icon = iconMap[ach.type];
          return (
            <motion.div
              key={i}
              className="card-structure flex items-start gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="w-8 h-8 flex items-center justify-center border border-secondary/30 bg-secondary/10 flex-shrink-0">
                <Icon size={14} className="text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xs font-semibold text-foreground">{ach.title}</h3>
                <p className="font-body text-xs text-muted-foreground">{ach.organization}</p>
              </div>
              <span className="tag-amber flex-shrink-0">{ach.period}</span>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        className="mt-4 font-body text-xs text-muted-foreground italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Sertifikat dapat dilihat melalui link pada masing-masing item (segera tersedia).
      </motion.p>
    </section>
  );
};

export default AchievementsSection;
