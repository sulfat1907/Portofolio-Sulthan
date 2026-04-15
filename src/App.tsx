import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Calendar, 
  Languages, 
  ExternalLink,
  GraduationCap,
  Briefcase,
  Wrench,
  Heart
} from 'lucide-react';
import { translations, Language } from './translations';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const t = translations[lang];
  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <div className={`min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 ${isRTL ? 'font-arabic' : ''}`}>
      {/* Language Switcher */}
      <nav className="fixed top-6 right-6 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all">
              <Languages className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-zinc-100">
            <DropdownMenuItem onClick={() => setLang('en')} className="hover:bg-zinc-800 cursor-pointer">English</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang('id')} className="hover:bg-zinc-800 cursor-pointer">Indonesia</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang('ar')} className="hover:bg-zinc-800 cursor-pointer">العربية</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >
          {/* Section 1: Hero & Bio */}
          <section id="hero" className="relative">
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
              <motion.div variants={itemVariants} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
                  <img 
                    src="https://picsum.photos/seed/youngman/400/400" 
                    alt="Profile" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              <div className="flex-1 text-center md:text-start">
                <motion.div variants={itemVariants} className="space-y-2">
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                    {t.name}
                  </h1>
                  <p className="text-xl md:text-2xl text-indigo-400 font-medium tracking-tight">
                    {t.subname}
                  </p>
                </motion.div>

                <motion.p variants={itemVariants} className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-xl">
                  {t.description}
                </motion.p>

                <motion.div variants={itemVariants} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3 text-zinc-300">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                      <Calendar className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">{t.bio.dob}</p>
                      <p className="font-medium">{t.data.dobValue}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                      <MapPin className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">{t.bio.location}</p>
                      <p className="font-medium">{t.data.locationValue}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-8 flex justify-center md:justify-start gap-4">
                  <a href="mailto:hellohi.sulthan@gmail.com" className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 hover:text-indigo-400 transition-all">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 hover:text-indigo-400 transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 hover:text-indigo-400 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Section 2: Details */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Education */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-2xl font-bold text-white">{t.sections.education}</h2>
                </div>
                <div className="space-y-4">
                  {t.data.educationItems.map((item, i) => (
                    <Card key={i} className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-800 flex-shrink-0">
                          <img 
                            src={item.logo} 
                            alt="Logo" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <p className="text-zinc-300">{item.name}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-2xl font-bold text-white">{t.sections.interests}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.data.interestItems.map((item, i) => (
                    <Badge key={i} variant="secondary" className="bg-zinc-800 text-zinc-300 hover:bg-indigo-500 hover:text-white transition-colors py-1.5 px-3 rounded-lg">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              {/* Skills */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-2xl font-bold text-white">{t.sections.skills}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.data.skillItems.map((item, i) => (
                    <Badge key={i} className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 py-1.5 px-3 rounded-lg">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-2xl font-bold text-white">{t.sections.experience}</h2>
                </div>
                <div className="space-y-6">
                  {t.data.experienceItems.map((item, i) => (
                    <div key={i} className="relative pl-6 border-l border-zinc-800 space-y-1">
                      <div className="absolute w-2 h-2 bg-indigo-500 rounded-full -left-[4.5px] top-2"></div>
                      <p className="text-sm text-indigo-400 font-mono uppercase tracking-wider">{item.period}</p>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-zinc-400 font-medium">{item.company}</p>
                      <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Footer */}
          <motion.footer 
            variants={itemVariants}
            className="pt-20 border-t border-zinc-900 flex flex-col items-center gap-8"
          >
            <Button 
              asChild
              className="bg-white text-black hover:bg-zinc-200 h-14 px-10 rounded-full text-lg font-bold group transition-all"
            >
              <a href="mailto:hellohi.sulthan@gmail.com">
                {t.footer.contactMe}
                <ExternalLink className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
              </a>
            </Button>

            <p className="text-zinc-600 text-sm font-mono mt-12">
              © {new Date().getFullYear()} {t.name}. Built with Passion.
            </p>
          </motion.footer>
        </motion.div>
      </main>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}
