export type Language = 'en' | 'id' | 'ar';

export interface Translation {
  name: string;
  subname: string;
  description: string;
  bio: {
    dob: string;
    location: string;
    social: string;
  };
  sections: {
    education: string;
    interests: string;
    skills: string;
    experience: string;
  };
  footer: {
    contactMe: string;
    cv: string;
  };
  data: {
    dobValue: string;
    locationValue: string;
    educationItems: { name: string; logo: string }[];
    interestItems: string[];
    skillItems: string[];
    experienceItems: { title: string; company: string; period: string; desc: string }[];
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    name: "Sulthan",
    subname: "Creative Developer & Designer",
    description: "Passionate about building digital experiences that combine aesthetics with functionality. Always learning, always creating.",
    bio: {
      dob: "Date of Birth",
      location: "Location",
      social: "Social Links",
    },
    sections: {
      education: "Education",
      interests: "Interests",
      skills: "Skills",
      experience: "Experience",
    },
    footer: {
      contactMe: "Contact Me",
      cv: "Curriculum Vitae",
    },
    data: {
      dobValue: "January 15, 2002",
      locationValue: "Jakarta, Indonesia",
      educationItems: [
        { name: "B.Sc. in Computer Science - University of Indonesia", logo: "https://picsum.photos/seed/ui/100/100" },
        { name: "High School Diploma - SMA Negeri 8 Jakarta", logo: "https://picsum.photos/seed/sma8/100/100" }
      ],
      interestItems: ["Photography", "Gaming", "Open Source", "Streetwear"],
      skillItems: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "UI/UX Design"],
      experienceItems: [
        {
          title: "Frontend Developer",
          company: "Tech Innovators",
          period: "2023 - Present",
          desc: "Building modern web applications using React and Next.js."
        },
        {
          title: "UI Designer Intern",
          company: "Creative Studio",
          period: "2022 - 2023",
          desc: "Assisting in creating visual identities and user interfaces."
        }
      ]
    }
  },
  id: {
    name: "Sulthan",
    subname: "Pengembang Kreatif & Desainer",
    description: "Bersemangat dalam membangun pengalaman digital yang menggabungkan estetika dengan fungsionalitas. Selalu belajar, selalu berkarya.",
    bio: {
      dob: "Tanggal Lahir",
      location: "Tempat Tinggal",
      social: "Tautan Sosial",
    },
    sections: {
      education: "Riwayat Pendidikan",
      interests: "Minat",
      skills: "Keahlian",
      experience: "Pengalaman",
    },
    footer: {
      contactMe: "Hubungi Saya",
      cv: "Daftar Riwayat Hidup",
    },
    data: {
      dobValue: "15 Januari 2002",
      locationValue: "Jakarta, Indonesia",
      educationItems: [
        { name: "S1 Ilmu Komputer - Universitas Indonesia", logo: "https://picsum.photos/seed/ui/100/100" },
        { name: "SMA Negeri 8 Jakarta", logo: "https://picsum.photos/seed/sma8/100/100" }
      ],
      interestItems: ["Fotografi", "Gaming", "Open Source", "Streetwear"],
      skillItems: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Desain UI/UX"],
      experienceItems: [
        {
          title: "Pengembang Frontend",
          company: "Tech Innovators",
          period: "2023 - Sekarang",
          desc: "Membangun aplikasi web modern menggunakan React dan Next.js."
        },
        {
          title: "Magang Desainer UI",
          company: "Creative Studio",
          period: "2022 - 2023",
          desc: "Membantu dalam menciptakan identitas visual dan antarmuka pengguna."
        }
      ]
    }
  },
  ar: {
    name: "سلطان",
    subname: "مطور ومصمم مبدع",
    description: "شغوف ببناء تجارب رقمية تجمع بين الجمال والوظيفة. دائماً أتعلم، دائماً أبتكر.",
    bio: {
      dob: "تاريخ الميلاد",
      location: "مكان الإقامة",
      social: "روابط التواصل",
    },
    sections: {
      education: "التعليم",
      interests: "الاهتمامات",
      skills: "المهارات",
      experience: "الخبرة",
    },
    footer: {
      contactMe: "اتصل بي",
      cv: "السيرة الذاتية",
    },
    data: {
      dobValue: "١٥ يناير ٢٠٠٢",
      locationValue: "جاكرتا، إندونيسيا",
      educationItems: [
        { name: "بكالوريوس في علوم الحاسوب - جامعة إندونيسيا", logo: "https://picsum.photos/seed/ui/100/100" },
        { name: "دبلوم المدرسة الثانوية - SMA Negeri 8 Jakarta", logo: "https://picsum.photos/seed/sma8/100/100" }
      ],
      interestItems: ["التصوير الفوتوغرافي", "الألعاب", "المصدر المفتوح", "ملابس الشارع"],
      skillItems: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "تصميم UI/UX"],
      experienceItems: [
        {
          title: "مطور واجهة أمامية",
          company: "Tech Innovators",
          period: "٢٠٢٣ - الحاضر",
          desc: "بناء تطبيقات ويب حديثة باستخدام React و Next.js."
        },
        {
          title: "متدرب مصمم واجهة مستخدم",
          company: "Creative Studio",
          period: "٢٠٢٢ - ٢٠٢٣",
          desc: "المساعدة في إنشاء الهويات البصرية وواجهات المستخدم."
        }
      ]
    }
  }
};
