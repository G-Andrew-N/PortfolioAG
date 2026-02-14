import { Code2, Database, Layout, Box, GitBranch, Server } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const skills = [
  {
    name: 'Django',
    icon: Server,
    description: 'Backend development with Python',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Next.js',
    icon: Code2,
    description: 'React framework for production',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'Tailwind CSS',
    icon: Layout,
    description: 'Utility-first CSS framework',
    color: 'from-sky-500 to-blue-600'
  },
  {
    name: 'Docker',
    icon: Box,
    description: 'Containerization & deployment',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'Git',
    icon: GitBranch,
    description: 'Version control systems',
    color: 'from-orange-500 to-red-600'
  },
  {
    name: 'PostgreSQL',
    icon: Database,
    description: 'Database management',
    color: 'from-indigo-500 to-purple-600'
  }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 dark:text-white">Skills & Technologies</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 px-4">
            Tools and technologies I work with to build amazing applications
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <div className="relative w-40 h-48 sm:w-56 sm:h-64 lg:w-64 lg:h-72 group">
                  {/* Hexagon shape */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 text-center">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h3 className="text-base sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 lg:mb-3 text-white">{skill.name}</h3>
                    <p className="text-white/90 text-[10px] sm:text-xs lg:text-sm leading-tight">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}