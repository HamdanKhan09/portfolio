import React, { useState } from 'react';
import { motion } from 'motion/react';
import { contactInfo } from '../data';
import { Mail, MapPin } from 'lucide-react';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleMailClick = () => {
    // Let the native mailto link work without preventDefault
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div id="contact" className="py-12">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 p-8 md:p-16 text-center shadow-2xl"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-indigo-500/10 via-neutral-900/0 to-neutral-900/0 pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
            Let's work together
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to connect, my inbox is always open.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a 
              href={`mailto:${contactInfo.email}`} 
              target="_self"
              onClick={handleMailClick}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-[#ffffff] rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] relative"
            >
              <Mail className="w-5 h-5" />
              {copied ? "Email Copied!" : "Say Hello"}
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-10 text-neutral-500 border-t border-neutral-800/50 mt-12">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{contactInfo.location}</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-neutral-700" />
            <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
              {contactInfo.phone}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
