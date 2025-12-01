import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LightBulbIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useOutletContext } from 'react-router-dom'

const suggestions = [
  {
    title: 'Planifica tu Día',
    description: 'Organiza tus tareas y eventos para tener una jornada productiva.',
    path: '/agenda',
    icon: '📅'
  },
  {
    title: 'Crea un Hábito',
    description: 'Empieza con un pequeño hábito para construir una rutina positiva.',
    path: '/habitos',
    icon: '💪'
  },
  {
    title: 'Tómate un Respiro',
    description: 'Prueba un ejercicio de respiración para reducir el estrés y centrarte.',
    path: '/respiracion',
    icon: '🧘'
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
  className="relative p-6 mb-6 overflow-hidden text-white bg-gray-800 shadow-xl rounded-2xl getting-started"
>
          <div className="flex items-start justify-between">
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <LightBulbIcon className="w-8 h-8 text-yellow-400" />
                <span>¡Empieza por aquí!</span>
              </h2>
              <p className="mt-1 text-white opacity-70">Aquí tienes algunas ideas para empezar a usar StudyFlow.</p>
            </div>
            <div>
              <button
                onClick={handleStartTour}
                className="px-4 py-2 mr-2 text-white transition-colors bg-blue-500 rounded-full hover:bg-blue-600"
                aria-label="Iniciar tour"
              >
                Iniciar Tour
              </button>
              <button
                onClick={handleDismiss}
                className="p-1 text-gray-400 transition-colors rounded-full hover:bg-white/10 hover:text-white"
                aria-label="Cerrar sugerencias"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
            {suggestions.map((suggestion, index) => (
              <motion.div key={index} variants={itemVariants} className="suggestion-card">
                <Link to={suggestion.path} className="block h-full p-4 transition-transform transform bg-purple-700 rounded-lg hover:bg-purple-600 hover:scale-105">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{suggestion.icon}</span>
                    <h3 className="font-bold">{suggestion.title}</h3>
                  </div>
                  <p className="text-sm text-purple-200">{suggestion.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default GettingStarted
