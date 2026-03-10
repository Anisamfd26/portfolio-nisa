import { useCallback, useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import HeroAnimation from "@/components/HeroAnimation";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

const sections = ["about", "experience", "projects", "achievements", "skills"];

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  const handleNavigate = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(top.target.id);
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main content area */}
      <main className="lg:ml-[25%] lg:min-w-0">
        {/* Hero */}
        <div className="h-screen flex items-center justify-center border-b border-border">
          <HeroAnimation />
        </div>

        {/* Content sections */}
        <div className="max-w-3xl mx-auto px-6 py-16 pt-20 lg:pt-16 space-y-20">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <AchievementsSection />
          <SkillsSection />
          <ContactSection />

          {/* Footer */}
          <footer className="border-t border-border pt-6 pb-8 text-center">
            <p className="font-heading text-[10px] tracking-[0.2em] text-muted-foreground">
              © 2025 ANISA MUFIDA — BUILT WITH PRECISION
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
