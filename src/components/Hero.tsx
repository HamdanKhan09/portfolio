import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { contactInfo } from '../data';
import { Mail, Github, Linkedin, ArrowRight, FileText } from 'lucide-react';

function TypewriterEffect({ texts }: { texts: string[] }) {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (displayedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, 40);
      }
    } else {
      if (displayedText === currentText) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 80);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, texts]);

  return (
    <span>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[2px] h-[1em] bg-indigo-500 ml-1 align-middle"
      />
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center py-20">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl flex flex-col items-center"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for new opportunities
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-white mb-6 leading-tight">
          Hi, I'm{' '}
          <motion.span 
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
            className="block md:inline-block"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Hamdan Khan
            </span>
            <span className="text-white">.</span>
          </motion.span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-neutral-200 font-display font-medium mb-6 min-h-[2em] md:min-h-[2.5em] flex items-center justify-center">
          <TypewriterEffect texts={[contactInfo.role, "Turning Data into Business Insights"]} />
        </p>
        
        <p className="text-lg text-neutral-400 max-w-xl leading-relaxed mb-10">
          I build production-ready applications and analyze complex datasets to uncover actionable insights. Based in <span className="text-neutral-200">{contactInfo.location.split(',')[0]}</span>.
        </p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="group flex items-center gap-2 px-6 py-3 bg-white text-neutral-950 rounded-full hover:bg-neutral-200 transition-all font-medium">
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="/Hamdan_Khan.pdf"
            download="Hamdan_Khan_Resume.pdf"
            className="group flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900/50 hover:bg-neutral-800/80 text-neutral-300 hover:text-white border border-neutral-700 hover:border-red-500/50 rounded-full font-medium transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            <FileText className="w-4 h-4 text-red-500 group-hover:text-red-400 transition-colors" />
            Resume
          </a>
          <div className="flex items-center gap-3 ml-2">
            <SocialLink href={contactInfo.github} icon={<Github className="w-5 h-5" />} />
            <SocialLink href={contactInfo.linkedin} icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href={`mailto:${contactInfo.email}`} icon={<Mail className="w-5 h-5" />} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  const isMail = href.startsWith('mailto:');
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (isMail) {
      const email = href.replace('mailto:', '');
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <a 
        href={href} 
        target={isMail ? "_self" : "_blank"} 
        rel={isMail ? undefined : "noopener noreferrer"} 
        onClick={handleClick}
        className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-800 transition-all hover:scale-110 active:scale-95"
      >
        {icon}
      </a>
      {copied && (
        <span className="absolute -top-10 text-xs bg-indigo-500 text-white px-2 py-1 rounded shadow-lg whitespace-nowrap">
          Copied!
        </span>
      )}
    </div>
  );
}
