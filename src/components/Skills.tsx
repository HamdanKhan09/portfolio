import React from 'react';
import { motion } from 'motion/react';
import { skills } from '../data';
import { 
  Terminal, Database, LineChart, 
  Table, Calculator, BarChart2, PieChart,
  Smartphone, Globe, 
  FileSpreadsheet, BarChart, GitBranch,
  Code2, Clock, MousePointerClick, Network,
  Brain, Layers, Search, Settings2
} from 'lucide-react';

// Map individual skills to icons
const skillIcons: Record<string, React.ReactNode> = {
  // SQL
  "PostgreSQL": <Database className="w-4 h-4" />,
  "MySQL": <Database className="w-4 h-4" />,
  "Schema Design": <Network className="w-4 h-4" />,
  "Views": <Layers className="w-4 h-4" />,
  "Indexes": <Search className="w-4 h-4" />,
  "Window Functions": <Code2 className="w-4 h-4" />,
  "CTEs": <Code2 className="w-4 h-4" />,
  
  // BI Tools
  "Power BI": <BarChart className="w-4 h-4" />,
  "DAX": <Calculator className="w-4 h-4" />,
  "DirectQuery": <Database className="w-4 h-4" />,
  "Time Intelligence": <Clock className="w-4 h-4" />,
  "Drill-through": <MousePointerClick className="w-4 h-4" />,
  "Data Modelling": <Network className="w-4 h-4" />,
  
  // Python
  "Python": <Terminal className="w-4 h-4" />,
  "Pandas": <Table className="w-4 h-4" />,
  "NumPy": <Calculator className="w-4 h-4" />,
  "Matplotlib": <LineChart className="w-4 h-4" />,
  "Seaborn": <BarChart2 className="w-4 h-4" />,
  "Plotly": <PieChart className="w-4 h-4" />,
  "Scikit-learn": <Brain className="w-4 h-4" />,
  
  // Other
  "Excel (Pivot Tables, VLOOKUP, Inventory Tracking)": <FileSpreadsheet className="w-4 h-4" />,
  "Git": <GitBranch className="w-4 h-4" />,
  "pgAdmin": <Settings2 className="w-4 h-4" />,
  "React Native": <Smartphone className="w-4 h-4" />,
  "Supabase": <Database className="w-4 h-4" />,
  "REST APIs": <Globe className="w-4 h-4" />
};

export function Skills() {
  return (
    <div id="skills" className="py-12 space-y-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-4">
          Skills & Expertise
        </h2>
        <p className="text-neutral-400 max-w-2xl text-lg">
          My technical toolkit spanning software development, data analysis, and visualization.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {skills.map((skillGroup, index) => {
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
            >
              <div className="md:w-64 shrink-0">
                <h3 className="text-xl font-bold font-display text-white border-l-2 border-indigo-500 pl-4 py-1">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-900/50 border border-neutral-800 text-neutral-300 text-sm font-medium rounded-xl hover:border-indigo-500/30 hover:bg-neutral-800 transition-all"
                  >
                    <span className="text-indigo-400">
                      {skillIcons[item] || <Code2 className="w-4 h-4" />}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
