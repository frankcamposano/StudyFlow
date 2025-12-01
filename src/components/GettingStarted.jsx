import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LightBulbIcon, XMarkIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { Link, useOutletContext } from 'react-router-dom'

const suggestions = [
  {
    title: 'Planifica tu Día',
    description: 'Organiza tus tareas y eventos para tener una jornada productiva.',
    path: '/agenda',
    icon: '📅',
    gradient: 'from-blue-500 to-cyan-500',
    hoverGradient: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Crea un Hábito',
    description: 'Empieza con un pequeño hábito para construir una rutina positiva.',
    path: '/habitos',
    icon: '💪',
    gradient: 'from-purple-500 to-pink-500',
    hoverGradient: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Tómate un Respiro',
    description: 'Prueba un ejercicio de respiración para reducir el estrés y centrarte.',
    path: '/respiracion',
    icon: '🧘',
    gradient: 'from-emerald-500 to-teal-500',
    hoverGradient: 'from-emerald-600 to-teal-600'
  }
]

const GettingStarted = () => {
  const { setRunTour, setTourSteps } = useOutletContext();
  const [isVisible, setIsVisible] = useState(true)

  const handleStartTour = () => {
    const steps = [
      {
        target: '.getting-started',
        content: 'Esta es la sección de inicio rápido, donde puedes acceder a las principales funciones de la aplicación.',
      },
      {
        target: '.sidebar',
        content: 'Esta es la barra lateral de navegación, donde puedes moverte entre las diferentes secciones de la aplicación.',
      },
      {
        target: '.main-content',
        content: 'Este es el contenido principal, donde podrás interactuar con las herramientas de StudyFlow.',
      }
    ];

    setTourSteps(steps);
    setRunTour(true);
  };

  const handleDismiss = () => {
    sessionStorage.setItem('gettingStartedDismissed_v2', 'true')
    setIsVisible(false)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, height: 0, transition: { duration: 0.3 } }}
          variants={containerVariants}
          className="relative p-8 mb-6 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl getting-started border border-gray-700/50"
        >
          {/* Efecto de brillo animado en el fondo */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 animate-pulse opacity-50"></div>
          
          {/* Círculos decorativos de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-0"></div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg">
                    <LightBulbIcon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                    ¡Empieza por aquí!
                  </h2>
                  <SparklesIcon className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
                <p className="ml-14 text-gray-300">
                  Aquí tienes algunas ideas para comenzar tu viaje con StudyFlow
                </p>
              </div>
              
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStartTour}
                  className="px-5 py-2.5 text-white font-medium bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-blue-500/50 transition-all"
                  aria-label="Iniciar tour"
                >
                  Iniciar Tour
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleDismiss}
                  className="p-2 text-gray-400 transition-all rounded-xl hover:bg-white/10 hover:text-white"
                  aria-label="Cerrar sugerencias"
                >
                  <XMarkIcon className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 mt-6 md:grid-cols-3">
              {suggestions.map((suggestion, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="suggestion-card"
                >
                  <Link 
                    to={suggestion.path} 
                    className={`block h-full p-6 rounded-2xl bg-gradient-to-br ${suggestion.gradient} shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}
                  >
                    {/* Efecto de brillo al hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl drop-shadow-lg">{suggestion.icon}</span>
                        <h3 className="text-xl font-bold text-white">{suggestion.title}</h3>
                      </div>
                      <p className="text-sm text-white/90 leading-relaxed">
                        {suggestion.description}
                      </p>
                      
                      {/* Flecha decorativa */}
                      <div className="flex items-center gap-2 mt-4 text-white/80 group-hover:text-white transition-colors">
                        <span className="text-sm font-medium">Explorar</span>
                        <svg 
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default GettingStarted