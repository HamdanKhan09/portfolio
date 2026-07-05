import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X } from 'lucide-react';

interface QuickViewModalProps {
  project: {
    title: string;
    github: string;
    tags: string[];
    bullets: string[];
  } | null;
  onClose: () => void;
}

export function QuickViewModal({ project, onClose }: QuickViewModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]"
            >
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-white pr-8">
                    {project.title}
                  </h3>
                  <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800/50 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium rounded-lg"
                      style={{ 
                        backgroundColor: (project as any).accent ? `${(project as any).accent}1A` : 'rgba(99, 102, 241, 0.1)',
                        borderColor: (project as any).accent ? `${(project as any).accent}33` : 'rgba(99, 102, 241, 0.2)',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        color: (project as any).accent || '#a5b4fc'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">Key Features</h4>
                  <ul className="space-y-4">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-neutral-300 leading-relaxed text-sm">
                        <span className="text-indigo-400 mt-1 shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="p-6 bg-neutral-950 border-t border-neutral-800 flex justify-end gap-4">
                <button 
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full text-neutral-400 hover:text-white font-medium transition-colors"
                >
                  Close
                </button>
                {(project as any).demo && (
                  <a 
                    href={(project as any).demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full hover:bg-neutral-800 transition-colors font-medium border border-neutral-800 text-white"
                    style={{ borderColor: (project as any).accent ? `${(project as any).accent}80` : undefined }}
                    onMouseEnter={(e) => {
                      if ((project as any).accent) {
                        e.currentTarget.style.backgroundColor = `${(project as any).accent}1A`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if ((project as any).accent) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 text-neutral-950 rounded-full transition-colors font-medium"
                  style={{ backgroundColor: (project as any).accent || 'white', color: (project as any).accent ? '#ffffff' : '#171717' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <Github className="w-4 h-4" />
                  View Repository
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
