import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { Github, Code2, Database, Eye } from 'lucide-react';
import { QuickViewModal } from './QuickViewModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div id="projects" className="py-12 space-y-12 relative">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-4">
          Featured Work
        </h2>
        <p className="text-neutral-400 max-w-2xl text-lg">
          A selection of my recent projects across mobile development, full-stack architecture, and data analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              style={{
                '--project-accent': project.accent || '#6366f1',
                '--project-accent-alpha': project.accent ? `${project.accent}33` : 'rgba(99, 102, 241, 0.2)',
                '--project-accent-glow': project.accent ? `${project.accent}1A` : 'rgba(99, 102, 241, 0.1)'
              } as React.CSSProperties}
              className={`group relative flex flex-col justify-between p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-[var(--project-accent-alpha)] hover:bg-neutral-800/50 transition-all duration-300 overflow-hidden ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div 
                  className="absolute top-0 right-0 w-64 h-64 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"
                  style={{ backgroundColor: 'var(--project-accent-glow)' }}
                />
              </div>
  
              <div className="relative z-10 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="p-3 rounded-2xl bg-neutral-950 border border-neutral-800"
                    style={{ color: 'var(--project-accent)' }}
                  >
                    {project.tags.includes('Data Cleaning') || project.tags.includes('EDA') ? <Database className="w-6 h-6" /> : <Code2 className="w-6 h-6" />}
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[var(--project-accent-alpha)] hover:bg-neutral-900 transition-all text-sm font-medium"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="hidden sm:inline">Quick View</span>
                    </button>
                    {project.github !== "#" && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all hover:scale-110"
                        title="View Source on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 
                  className="text-2xl font-bold font-display text-white mb-4 transition-colors duration-300"
                  style={{ '--hover-color': 'var(--project-accent)' } as React.CSSProperties}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--project-accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >
                  {project.title}
                </h3>
                
                <div className="space-y-3">
                  {project.bullets.map((bullet, bulletIndex) => (
                    <p key={bulletIndex} className="text-neutral-400 leading-relaxed text-sm line-clamp-2">
                      {bullet}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-6 border-t border-neutral-800/50">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1.5 bg-neutral-950 border border-neutral-800 text-neutral-300 text-xs font-medium rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <QuickViewModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
