"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Database, 
  Cloud,
  ChevronDown
} from "lucide-react";

// --- Advanced Animation Variants ---

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardHover = {
  rest: { scale: 1, y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: { 
    scale: 1.02, 
    y: -5, 
    boxShadow: "0px 10px 30px rgba(79, 70, 229, 0.15)",
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 50]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.span 
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 cursor-pointer"
          >
            US.
          </motion.span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, i) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                whileHover={{ y: -2, color: "#818cf8" }}
                className="hover:text-indigo-400 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-16 space-y-32">
        {/* 1. Hero Section */}
        <motion.section 
          style={{ opacity: heroOpacity, y: heroY }}
          id="hero" 
          className="min-h-[90vh] flex items-center pt-20 relative"
        >
          <div className="grid lg:grid-cols-2 gap-12 w-full items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="w-full relative z-10"
            >
              <motion.h2 
                variants={fadeUp} 
                className="text-indigo-400 font-mono text-xl mb-4 pl-1"
              >
                Who am I?
              </motion.h2>
              <motion.h1 
                variants={fadeUp} 
                className="text-5xl sm:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-8 py-1"
              >
                Uditha Sandeepa.
              </motion.h1>
              <motion.p 
                variants={fadeUp} 
                className="max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed border-l-2 border-indigo-500/50 pl-5"
              >
                <span className="text-slate-200 uppercase tracking-wide text-sm font-bold">Undergraduate IT Student | Future Cloud & DevOps</span>
                <br/><br/>
                I architect robust, high-performance web applications and continuously leverage cutting-edge cloud infrastructure to engineer scalable solutions.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-wrap gap-5 items-center mt-4">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects" 
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]"
                >
                  View Projects
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  href="/Uditha_Sandeepa_CV.pdf" 
                  download="Uditha_Sandeepa_CV.pdf"
                  className="px-8 py-4 border border-slate-700 hover:border-indigo-400 bg-white/5 text-slate-200 rounded-lg font-medium transition-all"
                >
                  Download CV
                </motion.a>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#contact" 
                  className="px-4 py-4 text-slate-300 hover:text-white flex items-center gap-2 group transition-colors font-mono"
                >
                  Contact Me 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Content Area: Terminal Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="hidden lg:flex justify-center items-center relative z-0"
            >
               {/* Terminal Window */}
               <div className="w-full max-w-md bg-[#0a0f1c]/90 rounded-xl border border-slate-700/50 shadow-[0_0_50px_rgba(79,70,229,0.15)] overflow-hidden backdrop-blur-sm">
                 <div className="flex items-center px-4 py-3 bg-[#0f172a] border-b border-slate-700/50">
                   <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                   </div>
                   <span className="ml-4 text-xs font-mono text-slate-500">uditha@devops: ~</span>
                 </div>
                 <div className="p-6 font-mono text-sm text-slate-300 space-y-4">
                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex gap-2">
                     <span className="text-indigo-400">❯</span>
                     <span className="text-cyan-300">npm</span> run provision --cloud
                   </motion.div>
                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className="text-slate-500">
                     [1/3] Provisioning AWS EC2 infrastructure...
                   </motion.div>
                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.4 }} className="text-slate-500">
                     [2/3] Configuring containerized Docker grid...
                   </motion.div>
                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.6 }} className="text-slate-500">
                     [3/3] Authenticating secure routing instances...
                   </motion.div>
                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.8 }} className="flex gap-2 text-green-400 mt-2 font-bold">
                     <span className="text-green-500">✔</span> System scalable & highly available!
                   </motion.div>
                 </div>
               </div>

               {/* Floating Badges */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }} 
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute -top-8 -right-4 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl backdrop-blur-md shadow-lg"
               >
                 <Cloud className="text-indigo-400" size={32} />
               </motion.div>
               <motion.div 
                 animate={{ y: [0, 20, 0] }} 
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute -bottom-8 -left-4 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl backdrop-blur-md shadow-lg"
               >
                 <Database className="text-cyan-400" size={32} />
               </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
          >
            <ChevronDown size={28} />
          </motion.div>
        </motion.section>

        {/* 2. About Me */}
        <motion.section 
          id="about" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="scroll-mt-32"
        >
          <motion.div variants={slideInRight} className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-bold"><span className="text-indigo-400 font-mono text-xl mr-2">01.</span>About Me</h3>
            <div className="h-[1px] bg-slate-800 flex-grow max-w-sm"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <motion.div variants={fadeUp} className="md:col-span-3 space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                I am an undergraduate student at the <span className="text-indigo-300 font-medium">University of Kelaniya</span> pursuing a BSc in Information Technology. I am deeply passionate about Cloud Engineering, DevOps, and architecting systems that scale efficiently under pressure.
              </p>
              <p>
                Currently, I am actively learning cloud technologies and working on real-world projects utilizing modern tools like Node.js, React, and MongoDB. I’m also engaged in the <span className="text-indigo-300 font-medium">IEEE Society</span> and the <span className="text-indigo-300 font-medium">AWS Cloud Club</span>, which help me stay at the cutting edge of industry best practices.
              </p>
              <p>
                My ultimate goal is to become a highly skilled Cloud/DevOps Engineer and contribute to building efficient, modern, and highly secure digital infrastructures.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeUp}
              whileHover={{ rotate: 2, scale: 1.02 }}
              className="md:col-span-2 relative group"
            >
              <div className="absolute inset-0 bg-indigo-500 rounded-xl translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative bg-[#0b1120] aspect-square rounded-xl overflow-hidden border border-slate-700 z-10">
                <img 
                  src="/profile.jpg" 
                  alt="Uditha Sandeepa" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 3. Skills */}
        <motion.section 
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="scroll-mt-32"
        >
          <motion.div variants={slideInRight} className="flex items-center gap-4 mb-12">
            <h3 className="text-3xl font-bold"><span className="text-indigo-400 font-mono text-xl mr-2">02.</span>Technical Arsenal</h3>
            <div className="h-[1px] bg-slate-800 flex-grow max-w-sm"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={fadeUp} initial="rest" whileHover="hover" animate="rest" className="h-full">
              <motion.div variants={cardHover} className="h-full bg-slate-900/50 border border-white/5 p-8 rounded-xl hover:border-indigo-500/30 transition-colors">
                <motion.div 
                  whileHover={{ rotate: 10 }}
                  className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-lg flex items-center justify-center mb-6"
                >
                  <Code2 size={24} />
                </motion.div>
                <h4 className="text-xl font-bold mb-4">Web & Languages</h4>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-center gap-3"><span className="text-indigo-400">▹</span> JavaScript, C#, Python</li>
                  <li className="flex items-center gap-3"><span className="text-indigo-400">▹</span> HTML & CSS</li>
                  <li className="flex items-center gap-3"><span className="text-indigo-400">▹</span> React (Next.js)</li>
                  <li className="flex items-center gap-3"><span className="text-indigo-400">▹</span> Node.js (Express)</li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} initial="rest" whileHover="hover" animate="rest" className="h-full">
              <motion.div variants={cardHover} className="h-full bg-slate-900/50 border border-white/5 p-8 rounded-xl hover:border-cyan-500/30 transition-colors">
                <motion.div 
                  whileHover={{ rotate: -10 }}
                  className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center mb-6"
                >
                  <Cloud size={24} />
                </motion.div>
                <h4 className="text-xl font-bold mb-4">Cloud & DevOps</h4>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-center gap-3"><span className="text-cyan-400">▹</span> AWS Fundamentals</li>
                  <li className="flex items-center gap-3"><span className="text-cyan-400">▹</span> Docker</li>
                  <li className="flex items-center gap-3"><span className="text-cyan-400">▹</span> Linux Basics</li>
                  <li className="flex items-center gap-3"><span className="text-cyan-400">▹</span> GitHub Actions & CI/CD</li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} initial="rest" whileHover="hover" animate="rest" className="h-full">
              <motion.div variants={cardHover} className="h-full bg-slate-900/50 border border-white/5 p-8 rounded-xl hover:border-purple-500/30 transition-colors">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-lg flex items-center justify-center mb-6"
                >
                  <Database size={24} />
                </motion.div>
                <h4 className="text-xl font-bold mb-4">Database & Tools</h4>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-center gap-3"><span className="text-purple-400">▹</span> MongoDB</li>
                  <li className="flex items-center gap-3"><span className="text-purple-400">▹</span> MySQL</li>
                  <li className="flex items-center gap-3"><span className="text-purple-400">▹</span> Git & GitHub</li>
                  <li className="flex items-center gap-3"><span className="text-purple-400">▹</span> Visual Studio Code</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* 4. Projects */}
        <motion.section 
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="scroll-mt-32"
        >
          <motion.div variants={slideInRight} className="flex items-center gap-4 mb-16">
            <h3 className="text-3xl font-bold"><span className="text-indigo-400 font-mono text-xl mr-2">03.</span>Featured Work</h3>
            <div className="h-[1px] bg-slate-800 flex-grow max-w-sm"></div>
          </motion.div>

          <div className="space-y-32">
            {/* Project 1 */}
            <motion.div variants={fadeUp} className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 relative group z-10">
                <div className="absolute inset-0 bg-indigo-500/30 group-hover:bg-transparent transition-all duration-500 z-10 rounded-xl"></div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="w-full h-80 bg-[#0f172a] rounded-xl border border-slate-700/50 overflow-hidden text-slate-500 transition-all duration-500 shadow-2xl"
                >
                   <img src="/cricket-academy.png" alt="Cricket Academy System" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" />
                </motion.div>
              </div>
              <div className="md:col-span-5 md:text-right z-20 md:-ml-12 flex flex-col justify-center">
                <p className="text-indigo-400 font-mono text-sm mb-2">Featured Project</p>
                <h4 className="text-3xl font-bold mb-6 text-slate-200">Cricket Academy System</h4>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="relative bg-[#1e293b] border border-white/5 p-6 rounded-xl text-slate-400 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] mb-6 z-30 transition-transform"
                >
                  <p>A comprehensive web-based system to manage indoor cricket stadium bookings, equipment rentals, and player profiles. Actively implements user authentication and a tailored admin dashboard functionality.</p>
                </motion.div>
                <ul className="flex flex-wrap md:justify-end gap-4 font-mono text-sm text-slate-400 mb-6">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Express</li>
                </ul>
                <div className="flex md:justify-end gap-5 text-slate-300">
                  <motion.a whileHover={{ y: -3, color: "#818cf8" }} href="https://github.com/Uditha-san/cricket-academy-management-system" target="_blank" rel="noopener noreferrer" className="transition-colors"><Github size={22} /></motion.a>
                  <motion.a whileHover={{ y: -3, color: "#818cf8" }} href="https://github.com/Uditha-san/cricket-academy-management-system" target="_blank" rel="noopener noreferrer" className="transition-colors"><ExternalLink size={22} /></motion.a>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div variants={fadeUp} className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 z-20 md:-mr-12 flex flex-col justify-center">
                <p className="text-cyan-400 font-mono text-sm mb-2">Featured Project</p>
                <h4 className="text-3xl font-bold mb-6 text-slate-200">Secure Auth System</h4>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="relative bg-[#1e293b] border border-white/5 p-6 rounded-xl text-slate-400 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] mb-6 z-30 transition-transform"
                >
                  <p>Engineered a highly secure, scalable authentication system utilizing JSON Web Tokens (JWT), complete with active email verification and encrypted password reset functionalities.</p>
                </motion.div>
                <ul className="flex flex-wrap gap-4 font-mono text-sm text-slate-400 mb-6">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>JWT</li>
                </ul>
                <div className="flex gap-5 text-slate-300">
                  <motion.a whileHover={{ y: -3, color: "#22d3ee" }} href="https://github.com/Lavindu17/Web-Application-Project" target="_blank" rel="noopener noreferrer" className="transition-colors"><Github size={22} /></motion.a>
                  <motion.a whileHover={{ y: -3, color: "#22d3ee" }} href="https://github.com/Lavindu17/Web-Application-Project" target="_blank" rel="noopener noreferrer" className="transition-colors"><ExternalLink size={22} /></motion.a>
                </div>
              </div>
              <div className="md:col-span-7 relative group z-10 order-first md:order-last">
                <div className="absolute inset-0 bg-cyan-500/30 group-hover:bg-transparent transition-all duration-500 z-10 rounded-xl"></div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="w-full h-80 bg-[#0f172a] rounded-xl border border-slate-700/50 overflow-hidden text-slate-500 transition-all duration-500 shadow-2xl"
                >
                   <img src="/secure-auth.png" alt="Secure Auth System" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 5. Experience & Certifications */}
        <motion.section 
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="scroll-mt-32"
        >
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-2xl font-bold"><span className="text-indigo-400 font-mono text-xl mr-2">04.</span>Activities</h3>
              </div>
              <div className="space-y-10 pl-6 border-l border-slate-800">
                <motion.div whileHover={{ x: 5 }} className="relative transition-transform">
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 bg-indigo-500 rounded-full ring-4 ring-[#020617]"></span>
                  <h4 className="text-xl font-bold text-slate-200">Volunteer <span className="text-indigo-400">@ IEEE Society</span></h4>
                  <p className="text-slate-500 font-mono text-sm mt-1 mb-3">University of Kelaniya</p>
                  <p className="text-slate-400">Contributed to organizing technical events, workshops, and fostering a collaborative community of future tech engineers.</p>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="relative transition-transform">
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 bg-cyan-500 rounded-full ring-4 ring-[#020617]"></span>
                  <h4 className="text-xl font-bold text-slate-200">Member <span className="text-cyan-400">@ AWS Cloud Club</span></h4>
                  <p className="text-slate-500 font-mono text-sm mt-1 mb-3">University of Kelaniya</p>
                  <p className="text-slate-400">Actively learning core cloud mechanics, deploying with AWS services, and participating in continuous collaborative study sessions.</p>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="relative transition-transform">
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 bg-orange-500 rounded-full ring-4 ring-[#020617]"></span>
                  <h4 className="text-xl font-bold text-slate-200">Rugby Player <span className="text-orange-400">@ University Team</span></h4>
                  <p className="text-slate-400 mt-3">Developed highly rigorous teamwork, unbreakable discipline, and leadership skills through competitive university rugby tournaments.</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-2xl font-bold"><span className="text-indigo-400 font-mono text-xl mr-2">05.</span>Learning & Certs</h3>
              </div>
              <div className="space-y-6">
                <motion.div 
                  initial="rest" whileHover="hover" animate="rest"
                  variants={cardHover}
                  className="bg-slate-900/40 border border-white/5 p-6 rounded-xl flex gap-5 hover:border-indigo-500/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center shrink-0">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-bold text-lg">100 Days of DevOps</h4>
                    <p className="text-slate-400 font-mono text-sm mt-1">KodeKloud • Ongoing</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial="rest" whileHover="hover" animate="rest"
                  variants={cardHover}
                  className="bg-slate-900/40 border border-white/5 p-6 rounded-xl flex gap-5 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#FF9900]/10 text-[#FF9900] rounded-lg flex items-center justify-center shrink-0">
                    <Cloud size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-bold text-lg">AWS Cloud Foundations</h4>
                    <p className="text-slate-400 font-mono text-sm mt-1">Self-hosted • Ongoing</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 6. Contact */}
        <motion.section 
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-32 max-w-2xl mx-auto text-center scroll-mt-32"
        >
          <motion.p variants={fadeUp} className="text-indigo-400 font-mono mb-4 text-sm">06. What&apos;s Next?</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-8 text-slate-200">Get In Touch</motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg mb-12 leading-relaxed">
            I'm currently looking for internships and new opportunities to apply my programming logic in Cloud/DevOps securely. Whether you have a question or just want to network and say hi, my inbox is always open!
          </motion.p>
          <motion.a 
            variants={fadeUp}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(79, 70, 229, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="mailto:udithasandeepa8@gmail.com" 
            className="inline-block px-10 py-5 bg-transparent border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 rounded-lg font-mono transition-all text-lg"
          >
            Say Hello
          </motion.a>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 font-mono text-sm border-t border-white/5 bg-[#020617]">
        <div className="flex justify-center gap-8 mb-4">
          <motion.a whileHover={{ y: -3, color: "#818cf8" }} href="https://github.com/Uditha-san" target="_blank" rel="noopener noreferrer" className="transition-colors"><Github size={20} /></motion.a>
          <motion.a whileHover={{ y: -3, color: "#818cf8" }} href="https://www.linkedin.com/in/uditha-sandeepa-543b72336/" target="_blank" rel="noopener noreferrer" className="transition-colors"><Linkedin size={20} /></motion.a>
          <motion.a whileHover={{ y: -3, color: "#818cf8" }} href="mailto:udithasandeepa8@gmail.com" className="transition-colors"><Mail size={20} /></motion.a>
        </div>
        <p>Built with Next.js, Tailwind, and React</p>
      </footer>
    </div>
  );
}
