import { motion } from 'motion/react';
import { aboutText, education } from '../data';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export function About() {
  return (
    <div id="about" className="py-12 space-y-12">
      <div className="mb-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-4">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
          {aboutText.map((paragraph, index) => (
            <motion.p 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <div className="space-y-6">
          {education.map((item, index) => {
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="flex gap-4 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-indigo-500/50 hover:bg-neutral-800/50 transition-all duration-300"
              >
                <div className="shrink-0 mt-1">
                  {index === 0 ? <GraduationCap className="w-6 h-6 text-indigo-400" /> : index === 1 ? <Award className="w-6 h-6 text-emerald-400" /> : <BookOpen className="w-6 h-6 text-purple-400" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 font-display">{item.degree}</h3>
                  <p className="text-neutral-400">{item.institution}</p>
                  {item.year && <p className="text-sm font-medium text-indigo-400 mt-2">{item.year}</p>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
