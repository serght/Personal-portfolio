import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import { useTheme } from '../../context/ThemeContext';
import OctsenseImg from '../../assets/images/projects/Octsense.png';
import OctsensePreview from '../../assets/images/projects/Octsensepreview.png';
import BankImg from '../../assets/images/projects/Bank.jpg';
import BankPreview from '../../assets/images/projects/Bankpreview.png';
import ReactImg from '../../assets/images/projects/React.webp';
import ReactPreview from '../../assets/images/projects/Reactpreview.png';

const projects = [
  {
    id: 'project1',
    title: 'Octsense',
    shortDesc: 'SISTEMA WEB DE DETECCIÓN AUTOMÁTICA EN IMÁGENES OCT',
    previewImage: OctsensePreview,
    image: OctsenseImg,
    fullDesc: 'OCTsense is a web-based system designed to automatically analyze optical coherence tomography (OCT) images using deep learning techniques. Its goal is to improve access to ophthalmologic diagnoses in regions with a shortage of specialists and technology. The tool classifies images into four common clinical conditions, providing fast and understandable results.',
    technologies: ['React+vite', 'html/css/tailwind', 'Django', 'tensorflow', 'postgreSQL','Docker'],
    githubUrl: 'https://github.com/Gaoux/OCTsense'
  },
  {
    id: 'project2',
    title: 'bank service',
    shortDesc: 'banking service for a retail application',
    previewImage: BankPreview,
    image: BankImg,
    fullDesc: 'The service processes the flow of a payment transaction at a point of sale (POS) within a banking or retail environment. It begins when a customer makes a purchase and presents their card at the POS, which sends the request to the retailers payment system. This system contacts the bank, which validates whether there are available funds in the customers account. If the verification is successful, the bank authorizes the transaction, the payment is confirmed at the POS, and a receipt is printed. Finally, the bank debits the amount from the customers account and transfers the funds to the retailer, thus completing the transaction.',
    technologies: ['React+vite ', 'html/css/tailwind', 'java','postgresql','Docker'],
    githubUrl: 'https://github.com/serght/BancoFront'
  },
  {
    id: 'project3',
    title: 'MySite',
    shortDesc: 'know how the website you are on was made',
    previewImage: ReactPreview,
    image: ReactImg,
    fullDesc: 'This personal website offers a light/dark theme with preference persistence and fluid navigation with animated menus and smooth scrolling. It includes a project page with interactive cards (hover, entrance effects), expandable sections with automatic scrolling, and technology badges, all with responsive design (mobile/desktop) and fluid animations. The homepage features interactive artwork and calls to action.',
    technologies: ['React+vite', 'html/css/tailwind', 'Framer Motion'],
    githubUrl: 'https://github.com/serght/Personal-portfolio'
  }
];

export default function ProjectsPage() {
  const { isDayMode } = useTheme();
  const projectRefs = projects.map(() => useRef(null));

  const scrollToProject = (ref) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDayMode ? 'bg-white' : 'bg-gray-900'}`}>
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl font-bold mb-12 text-center ${isDayMode ? 'text-gray-800' : 'text-white'}`}
        >
          My Projects
        </motion.h1>

        {/* Project preview section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all ${isDayMode ? 'bg-gray-50' : 'bg-gray-800'}`}
              onClick={() => scrollToProject(projectRefs[index])}
            >
              <img 
                src={project.previewImage} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${isDayMode ? 'text-gray-800' : 'text-white'}`}>
                  {project.title}
                </h3>
                <p className={`${isDayMode ? 'text-gray-600' : 'text-gray-300'}`}>
                  {project.shortDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed project section */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <section 
              key={project.id} 
              ref={projectRefs[index]}
              className="scroll-mt-24"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`rounded-2xl p-8 ${isDayMode ? 'bg-gray-100' : 'bg-gray-800'}`}
              >
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    className="lg:w-1/2"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="rounded-xl shadow-xl w-full h-auto max-h-96 object-cover"
                    />
                  </motion.div>
                  <div className="lg:w-1/2">
                    <h2 className={`text-3xl font-bold mb-4 ${isDayMode ? 'text-gray-800' : 'text-white'}`}>
                      {project.title}
                    </h2>
                    <p className={`text-lg mb-6 ${isDayMode ? 'text-gray-600' : 'text-gray-300'}`}>
                      {project.fullDesc}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className={`text-lg font-semibold mb-2 ${isDayMode ? 'text-gray-700' : 'text-gray-200'}`}>
                        Tecnologías utilizadas:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span 
                            key={tech}
                            className={`px-3 py-1 rounded-full text-sm ${
                              isDayMode 
                                ? 'bg-purple-100 text-purple-800' 
                                : 'bg-purple-900 text-purple-100'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block px-6 py-3 rounded-lg font-semibold transition-all ${
                        isDayMode 
                          ? 'bg-purple-600 text-white hover:bg-purple-700' 
                          : 'bg-purple-400 text-gray-900 hover:bg-purple-300'
                      }`}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}