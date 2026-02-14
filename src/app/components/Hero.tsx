import { Github, Twitter, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div 
            className="relative z-10 text-left lg:pr-16 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 dark:bg-blue-900/30 rounded-none mb-4 sm:mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">Web Developer</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Andrew Gathuto
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Crafting robust and scalable web applications with Django, Next.js, and modern technologies.
              Passionate about clean code, innovative solutions, and turning ideas into reality.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button onClick={() => scrollToSection('projects')} size="lg" className="text-base w-full sm:w-auto">
                View Projects
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg" className="text-base w-full sm:w-auto">
                Get in Touch
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex gap-3 sm:gap-4 justify-center sm:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="https://github.com/G-Andrew-N"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
              >
                <Github className="w-5 h-5 dark:text-gray-300" />
              </a>
              <a
                href="https://x.com/andrew_gathuto"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
              >
                <Twitter className="w-5 h-5 dark:text-gray-300" />
              </a>
              <a
                href="mailto:dreandrew11091@gmail.com"
                className="p-2.5 sm:p-3 rounded-full border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
              >
                <Mail className="w-5 h-5 dark:text-gray-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Creative Divider - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 w-px h-3/4">
            {/* Animated dots */}
            <div className="absolute inset-0 flex flex-col justify-around items-center">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div 
            className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative glow */}
              <motion.div
                className="absolute -inset-4 sm:-inset-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main profile image */}
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20 dark:ring-purple-500/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <ImageWithFallback 
                  src="/profile.jpg"
                  alt="Andrew Gathuto - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating tech badges */}
              <motion.div
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-white dark:bg-gray-800 rounded-none shadow-lg px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Django
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white dark:bg-gray-800 rounded-none shadow-lg px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-white"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                Next.js
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -right-8 sm:-right-12 bg-white dark:bg-gray-800 rounded-none shadow-lg px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-white"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                Docker
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
    </section>
  );
}