import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Founder & Lead Developer',
    company: 'BlitzBuild Inc.',
    type: 'Startup',
    period: 'Jan 2026 - Present',
    description: 'Founded and leading a tech startup focused on delivering cutting-edge web solutions. Building scalable, high-performance applications for businesses and enterprises using modern tech stacks.',
    achievements: [
      'Successfully launched and scaled startup from concept to operational business',
      'Built enterprise-grade solutions serving multiple clients across different industries',
      'Established efficient development workflows and best practices for the team',
      'Implemented robust CI/CD pipelines and cloud infrastructure for scalable deployments'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Freelance Web Developer',
    company: 'Independent Contractor',
    type: 'Freelance',
    period: 'Sep 2025 - Jan 2026',
    description: 'Provided comprehensive web development services to diverse clients across various industries. Delivered custom solutions tailored to unique business requirements, from e-commerce platforms to business management systems.',
    achievements: [
      'Completed 10+ projects for clients ranging from startups to established businesses',
      'Achieved 100% client satisfaction with on-time delivery and quality code',
      'Built full-stack applications using Django, Next.js, and modern JavaScript frameworks',
      'Managed entire project lifecycle including requirements gathering, development, testing, and deployment'
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Web Developer Intern',
    company: 'NCG Ol\'kalou',
    type: 'Internship',
    period: 'Jun 2025 - Aug 2025',
    description: 'Contributed to the development of a comprehensive stadium ticketing solution for the county government. Collaborated with cross-functional teams to deliver a robust platform that streamlined ticket sales and event management.',
    achievements: [
      'Developed key features for the county stadium ticketing system using Django and React',
      'Implemented secure payment integration and real-time ticket availability tracking',
      'Collaborated with government stakeholders to understand and implement specific requirements',
      'Improved system efficiency through optimized database queries and caching strategies',
      'Gained hands-on experience with agile methodologies and version control with Git'
    ],
    color: 'from-green-500 to-green-600'
  }
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 dark:text-white">Experience Journey</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 px-4">
            My professional growth in web development
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 -translate-x-1/2" />
          
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Desktop Layout */}
                <div className={`hidden md:flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className="w-1/2">
                    <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-700 rounded-none ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white`}>
                              <Briefcase className="w-5 h-5" />
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-sm">
                              {exp.type}
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold mb-1 dark:text-white">{exp.title}</h3>
                          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">{exp.company}</p>
                          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                        
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Center Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white shadow-lg border-4 border-white dark:border-gray-800`}>
                      <span className="text-xl font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="w-1/2" />
                </div>
                
                {/* Mobile Layout */}
                <div className="md:hidden flex gap-4">
                  {/* Timeline node */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white shadow-lg border-4 border-white dark:border-gray-800 z-10 relative`}>
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 pb-8">
                    <Card className="border-0 shadow-lg dark:bg-gray-700 rounded-none">
                      <CardContent className="p-5">
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white`}>
                              <Briefcase className="w-4 h-4" />
                            </div>
                            <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs">
                              {exp.type}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-1 dark:text-white">{exp.title}</h3>
                          <p className="text-base text-gray-700 dark:text-gray-300 mb-2">{exp.company}</p>
                          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs">
                            <Calendar className="w-3 h-3" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{exp.description}</p>
                        
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}