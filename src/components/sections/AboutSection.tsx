import { motion } from "framer-motion";
import { profile, education } from "@/data/portfolio";
import profileImg from "@/assets/profile.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-20">
      <h2 className="section-title">// About</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <motion.div
          className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 border border-border overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <img src={profileImg} alt={profile.name} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="font-body text-sm leading-relaxed text-foreground">{profile.about}</p>

          <div>
            <h3 className="font-heading text-[10px] tracking-[0.2em] text-structure mb-3 uppercase">
              Pendidikan
            </h3>
            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.institution} className="flex items-center justify-between border-l-2 border-primary/30 pl-3">
                  <div>
                    <p className="font-body text-sm text-foreground font-medium">{edu.institution}</p>
                    <p className="font-body text-xs text-muted-foreground">{edu.degree}</p>
                  </div>
                  <span className="tag-amber">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
