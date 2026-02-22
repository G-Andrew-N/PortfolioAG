import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const projects = [
  {
    title: 'HireSense',
    description: 'An intelligent job search platform that uses AI to match resumes with job postings, predict interview success, and suggest targeted resume improvements. It aggregates listings from multiple sources and provides streamlined application tracking in one place.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tech: ['React', 'Django', 'groq AI', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/G-Andrew-N/HireSense',
    live: 'https://hiresense-fi.vercel.app/'
  },
  {
    title: 'Cosmic Timeline Gallery',
    description: 'A curated Next.js gallery that renders NASA\'s Astronomy Picture of the Day. Travel back in time to explore photographs from the past, each with full descriptions—featuring a space-themed UI, archive grid, and interactive timeline.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tech: ['Next.js', 'React', 'NASA APOD API', 'Tailwind CSS', 'Motion'],
    github: 'https://github.com/G-Andrew-N/cosmic-next',
    live: 'https://cosmic-next-delta.vercel.app'
  },
  {
    title: 'ScholarScoop',
    description: 'A comprehensive web platform designed to help students and scholars efficiently discover academic articles, research papers, and datasets across the internet. Features advanced search capabilities and user-friendly navigation to streamline academic research.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHJlc2VhcmNoJTIwc3R1ZHklMjBsaWJyYXJ5fGVufDF8fHx8MTc3MTA1Nzg1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    tech: ['Django', 'Python', 'PostgreSQL', 'Web Scraping', 'REST APIs'],
    github: 'https://github.com/G-Andrew-N/ScholarScoop',
    live: 'https://scholarscoop.onrender.com/'
  },
  {
    title: 'SourcePoint',
    description: 'A unified news aggregation platform that consolidates news from multiple sources into one convenient interface. Leverages news APIs to provide users with diverse perspectives and real-time updates from various publishers worldwide.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwbWVkaWElMjBuZXdzcGFwZXIlMjBhcnRpY2xlc3xlbnwxfHx8fDE3NzEwNTc4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tech: ['Django', 'Python', 'News API', 'Bootstrap', 'SQLite'],
    github: 'https://github.com/G-Andrew-N/sourcePoint',
    live: 'https://sourcepoint.onrender.com/'
  },
  {
    title: 'See-Weather',
    description: 'A real-time weather monitoring application that provides comprehensive weather forecasts for any location globally. Built entirely using free APIs to deliver accurate temperature, humidity, wind speed, and extended forecasts without any cost barriers.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwZm9yZWNhc3QlMjBjbG91ZHklMjBza3l8ZW58MXx8fHwxNzcxMDU3ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tech: ['Django', 'Python', 'Weather API', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/G-Andrew-N/see-weather',
    live: 'https://see-weather.onrender.com/'
  }
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      style={{ position: 'relative' }}
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 dark:from-blue-800 dark:via-blue-900 dark:to-blue-950 transition-colors overflow-hidden"
    >
      {/* Animated water surface waves at top */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden pointer-events-none z-20">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <motion.path 
            d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z" 
            fill="rgba(255, 255, 255, 0.1)"
            initial={{ d: "M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z" }}
            animate={{ d: "M0,50 Q300,90 600,50 T1200,50 L1200,120 L0,120 Z" }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <motion.path 
            d="M0,70 Q300,30 600,70 T1200,70 L1200,120 L0,120 Z" 
            fill="rgba(255, 255, 255, 0.05)"
            initial={{ d: "M0,70 Q300,30 600,70 T1200,70 L1200,120 L0,120 Z" }}
            animate={{ d: "M0,70 Q300,110 600,70 T1200,70 L1200,120 L0,120 Z" }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </div>

      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(22)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20 backdrop-blur-sm"
            style={{
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              left: `${Math.random() * 100}%`,
              bottom: '-5%',
            }}
            animate={{
              y: [-20, -800],
              x: [0, Math.random() * 50 - 25],
              opacity: [0.3, 0.6, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Water caustics/light ripple effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 50%)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at 70% 60%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Underwater light rays */}
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 h-full w-32 opacity-10"
            style={{
              left: `${i * 25}%`,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)',
              transform: 'skewX(-10deg)',
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-30">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 text-white drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-2xl text-cyan-100 font-semibold mb-2 drop-shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Let's dive into the projects! 🏊‍♂️
          </motion.p>
          <motion.p 
            className="text-lg text-white/90 drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A selection of projects I've worked on during my internships and freelance work
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="flex"
            >
              {/* Underwater glass effect wrapper */}
              <div className="relative flex-1">
                {/* Water shimmer overlay */}
                <motion.div
                  className="absolute inset-0 rounded-none pointer-events-none z-10"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <Card className="overflow-hidden border-2 border-white/20 shadow-2xl transition-all h-full flex flex-col bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-none">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex-shrink-0 relative">
                    {/* Water texture over image */}
                    <div className="absolute inset-0 bg-blue-400/10 z-10 pointer-events-none" />
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 dark:text-white text-gray-900 min-h-[2rem]">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-200 mb-4 flex-1 min-h-[4.5rem]">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4 min-h-[2rem]">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-100">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      {project.github && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild
                          className="transition-all hover:scale-105 border-blue-300 dark:border-blue-700 flex-1"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.live && (
                        <Button 
                          size="sm" 
                          asChild
                          className="transition-all hover:scale-105 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 flex-1"
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}