import { cn } from "@/lib/utils";
import { profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";
import { Mail, MapPin, Phone, Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "skills", label: "Skills" },
];

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Sidebar = ({ activeSection, onNavigate }: SidebarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur border-b border-border px-4 py-3 flex items-center justify-between">
        <span className="font-heading text-sm font-bold tracking-wider text-foreground">
          {profile.name.toUpperCase()}
        </span>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-1 text-foreground">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 bg-background/98 backdrop-blur pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col items-start px-6 py-8 gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={cn("nav-link text-base", activeSection === item.id && "nav-link-active")}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[25%] min-w-[250px] max-w-[320px] border-r border-border bg-card flex-col justify-between p-8 z-30">
        <div>
          <h2 className="font-heading text-lg font-bold tracking-wider text-foreground mb-1">
            {profile.name.toUpperCase()}
          </h2>
          <p className="font-heading text-[10px] tracking-[0.2em] text-primary mb-8">
            {profile.title.toUpperCase()}
          </p>

          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={cn(
                  "nav-link text-left flex items-center gap-2",
                  activeSection === item.id && "nav-link-active"
                )}
              >
                <span className={cn(
                  "w-4 h-[1px] transition-all duration-200",
                  activeSection === item.id ? "bg-primary w-6" : "bg-structure"
                )} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Contact - always visible */}
        <div className="space-y-4">
          <ThemeToggle />
          <div className="border-t border-border pt-4 space-y-2">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
              <Mail size={12} className="text-primary" />
              <span className="font-body">{profile.email}</span>
            </a>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Phone size={12} className="text-primary" />
              <span className="font-body">{profile.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin size={12} className="text-primary" />
              <span className="font-body">{profile.location}</span>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={16} />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
