import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-20 lg:hidden">
      <h2 className="section-title">// Contact</h2>

      <motion.div
        className="card-structure space-y-3"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
          <Mail size={14} className="text-primary" />
          <span className="font-body">{profile.email}</span>
        </a>
        <div className="flex items-center gap-3 text-sm text-foreground">
          <Phone size={14} className="text-primary" />
          <span className="font-body">{profile.phone}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-foreground">
          <MapPin size={14} className="text-primary" />
          <span className="font-body">{profile.location}</span>
        </div>
        <div className="flex items-center gap-4 pt-2 border-t border-border">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Github size={16} /> <span className="font-heading text-[10px] tracking-wider">GitHub</span>
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={16} /> <span className="font-heading text-[10px] tracking-wider">LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
