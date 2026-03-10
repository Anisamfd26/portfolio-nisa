export const profile = {
  name: "Anisa Mufida",
  title: "Computer Science Student",
  subtitle: "Product Owner · Project Manager · Frontend Developer",
  email: "anisamufida26@gmail.com",
  phone: "087760370108",
  location: "Jakarta, Indonesia",
  about:
    "Mahasiswa Ilmu Komputer semester 4 di Universitas Cakrawala. Individu yang teliti, terorganisir, dan komunikatif dengan pengalaman di Product Ownership, Project Management, dan Frontend Development. Berpengalaman mengelola tim, menyusun PRD, dan membangun solusi web menggunakan React, FastAPI, dan Supabase.",
  socials: {
    github: "https://github.com/anisamufida",
    linkedin: "https://linkedin.com/in/anisamufida",
    email: "mailto:anisamufida26@gmail.com",
  },
};

export const education = [
  {
    institution: "Universitas Cakrawala",
    degree: "Ilmu Komputer",
    period: "2024 - 2028",
  },
  {
    institution: "SMK N 27 Jakarta",
    degree: "Tata Busana",
    period: "2021 - 2024",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    role: "Product Owner",
    company: "PT Daltek Indonesia",
    period: "Desember 2025",
    points: [
      "Membantu build platform Learning Management System (LMS) mulai dari merancang konsep fitur dari sisi konteks bisnis",
      "Menyusun Product Requirement Document (PRD) yang mendetail serta merancang flowchart dan Information Architecture",
      "Menyusun weekly report dashboard komprehensif bagi manajemen",
      "Melakukan follow-up rutin terhadap progress pengembangan setiap phase",
    ],
    tags: ["Product Owner", "PRD", "LMS"],
  },
  {
    role: "Ketua Kelompok",
    company: "Program Kreativitas Mahasiswa 2025",
    period: "April 2025",
    points: [
      "Memimpin tim perancangan sistem pembuangan sampah bawah tanah berbasis IoT (Smart Monitoring)",
      "Mengalokasikan dan memantau tugas tim teknikal (20 Jam/minggu)",
      "Menyusun dan mengelola administrasi program end-to-end termasuk perencanaan anggaran",
    ],
    tags: ["IoT", "Leadership", "PKM"],
  },
  {
    role: "Head of Business & Partnership Division",
    company: "Student Government Association - Universitas Cakrawala",
    period: "Januari 2025",
    points: [
      "Merumuskan strategi bisnis untuk brand Ngemilciouz (F&B) dan Kumo Rise (IT)",
      "Mengoordinasikan seluruh alur kerja dan timeline proyek untuk dua brand divisi bisnis",
    ],
    tags: ["Strategy", "Business", "Leadership"],
  },
  {
    role: "Technical Liaison",
    company: "Project Aplikasi Qurban Asyik - Kumo Rise",
    period: "2025",
    points: [
      "Menjadi Liaison utama antara client dengan Divisi Teknis SGA",
      "Bertanggung jawab atas pengelolaan dokumen proyek vital termasuk PKS, PRD, dan Invoice",
    ],
    tags: ["Liaison", "PRD", "Documentation"],
  },
  {
    role: "Head of Creative Visual Design Division",
    company: "Organisasi Perwakilan Angkatan - Universitas Cakrawala",
    period: "Oktober 2025",
    points: [
      "Memimpin divisi DKV untuk memastikan seluruh kebutuhan publikasi desain terpenuhi tepat waktu",
      "Menjadi jembatan komunikasi antara Student Innovation Center dan mahasiswa baru",
    ],
    tags: ["Design", "Leadership", "Visual"],
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  points: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Website Showroom Mobil",
    description:
      "Final Project mata kuliah Web Application Development. Platform showroom mobil dengan dashboard multi-role untuk admin, admin utama, dan sales.",
    tech: ["React", "FastAPI", "Supabase", "Postman"],
    points: [
      "Membuat tampilan homepage showroom mobil dan dashboard multi-role",
      "Pengujian endpoint API menggunakan Postman untuk validasi CRUD",
      "Integrasi frontend dengan backend FastAPI",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Sabi Kerja Company Website",
    description:
      "Redesign website Sabi Kerja dengan fokus pada peningkatan user experience menggunakan prinsip Human-Centered Design.",
    tech: ["HTML", "CSS", "JavaScript", "HCD"],
    points: [
      "Analisis tampilan website awal dan merancang ulang (redesign)",
      "Menerapkan prinsip Human-Centered Design pada seluruh antarmuka",
      "Fokus peningkatan user experience",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Website Company Profile SGA",
    description:
      "Website Company Profile untuk Divisi Bisnis and Partnership SGA. Mengelola proyek menggunakan JIRA.",
    tech: ["Web Dev", "JIRA", "Project Management"],
    points: [
      "Memimpin proyek pengembangan Website Company Profile",
      "Menyusun timeline detail dan flow pengembangan multi-phase",
      "Menggunakan JIRA untuk tracking, prioritasi task, dan bug management",
    ],
    github: "#",
    demo: "#",
  },
];

export interface Achievement {
  title: string;
  organization: string;
  period: string;
  type: "competition" | "certification" | "award";
}

export const achievements: Achievement[] = [
  {
    title: "Semi Final - Business Case Competition (BCC)",
    organization: "Universitas Indonesia",
    period: "November 2024",
    type: "competition",
  },
  {
    title: "Peserta - Program Kreativitas Mahasiswa",
    organization: "Ditjen Dikti",
    period: "2025",
    type: "competition",
  },
];

export const skills = {
  projectManagement: ["Notion", "Trello", "Miro", "ClickUp", "JIRA"],
  technical: ["React", "FastAPI", "Supabase", "HTML", "CSS", "Postman", "Draw.io"],
  tools: ["Microsoft Office", "Google Suite", "JIRA", "Postman"],
  soft: ["Kerjasama Tim", "Komunikasi", "Problem Solving", "Manajemen Waktu", "Kepemimpinan"],
};
