import { useState, useEffect, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { LightBulbIcon, SparklesIcon, BookOpenIcon, HeartIcon, FireIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import Piggy from '../components/Piggy'
import Typewriter from '../components/Typewriter'
import GettingStarted from '../components/GettingStarted'

// --- Componente para el Dashboard Rediseñado (Punto 5) ---
const FullDashboard = ({ quote, onNewQuote }) => {
  const navigate = useNavigate()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <motion.div 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Sección de Primeros Pasos */}
      <GettingStarted />

      {/* Header de Bienvenida */}
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl font-bold text-white">¡Bienvenido de vuelta!</h1>
        <p className="text-lg text-white opacity-70">Es un gran día para ser productivo y cuidarse.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Columna Izquierda */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          {/* Frase del día */}
          <motion.div variants={itemVariants} className="relative flex flex-col h-48 p-6 overflow-hidden text-white bg-purple-800 shadow-xl rounded-2xl">
            <span className="absolute text-[12rem] leading-none font-serif text-white opacity-5 -right-4 -top-8">“</span>
            <div className="relative z-10 flex items-center justify-between mb-2">
              <p className="text-sm font-semibold tracking-widest text-pink-400 uppercase">Frase del día</p>
              <button onClick={onNewQuote} className="p-1 text-purple-300 transition-colors rounded-full hover:bg-white/10">
                <ArrowPathIcon className="w-5 h-5"/>
              </button>
            </div>
            <div className="relative z-10 flex flex-col justify-center flex-grow">
              <motion.div whileHover={{ scale: 1.02 }} className="transition-transform">
                <Typewriter 
                  key={quote.text}
                  text={`“${quote.text}”`}
                  className="flex flex-wrap overflow-hidden text-2xl font-medium text-transparent bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text"
                />
              </motion.div>
              <motion.p 
                key={quote.author}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="mt-3 font-semibold text-right text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
              >
                — {quote.author}
              </motion.p>
            </div>
          </motion.div>

          {/* Resumen de Hábitos */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 p-6 text-white bg-orange-500 shadow-xl rounded-2xl">
            <FireIcon className="w-16 h-16 shrink-0" />
            <div>
              <h3 className="text-2xl font-bold">Mantén tu racha</h3>
              <p className="opacity-80">Recuerda completar tus hábitos de hoy para seguir avanzando.</p>
            </div>
            <Link to="/habitos" className="px-4 py-2 ml-auto font-semibold text-orange-500 transition-transform bg-white rounded-lg whitespace-nowrap hover:scale-105">
              Ver Hábitos
            </Link>
          </motion.div>
        </div>

        {/* Columna Derecha */}
        <div className="flex flex-col gap-6">
          {/* Acciones Rápidas */}
          <motion.div variants={itemVariants} className="p-6 bg-gray-800 shadow-xl rounded-2xl">
            <h3 className="flex items-center gap-2 mb-4 text-xl font-bold text-white">
              <SparklesIcon className="w-6 h-6 text-yellow-400" />
              Acciones Rápidas
            </h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => navigate('/respiracion')} className="flex items-center gap-3 px-4 py-3 text-left text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
                <HeartIcon className="w-6 h-6" />
                <span>Ejercicio de Respiración</span>
              </button>
              <button onClick={() => navigate('/diario')} className="flex items-center gap-3 px-4 py-3 text-left text-white transition bg-green-600 rounded-lg hover:bg-green-700">
                <BookOpenIcon className="w-6 h-6" />
                <span>Escribir en mi Diario</span>
              </button>
            </div>
          </motion.div>

          {/* Prompt del Diario */}
          <motion.div variants={itemVariants} className="flex flex-col items-center p-6 text-center text-white bg-purple-800 shadow-xl rounded-2xl">
            <Piggy size="text-5xl" animation="bounce" />
            <p className="mt-2 font-semibold">¿Ya registraste tu día?</p>
            <Link to="/diario" className="px-4 py-2 mt-3 text-sm font-semibold text-purple-800 transition-transform bg-purple-300 rounded-lg hover:scale-105">
              Ir al Diario
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// --- Componente del Asistente Interactivo ---
const InteractiveAssistant = ({ onComplete, quote, onNewQuote }) => {
  const navigate = useNavigate()
  const [step, setStep] = useState(() => Number(sessionStorage.getItem('assistantStep')) || 0)
  const [choices, setChoices] = useState(() => {
    const savedChoices = sessionStorage.getItem('assistantChoices')
    return savedChoices ? JSON.parse(savedChoices) : [
      { key: 'agenda', label: 'Planificar mi día', path: '/agenda', icon: '📅' },
      { key: 'habitos', label: 'Fortalecer mis hábitos', path: '/habitos', icon: '💪' },
      { key: 'respiracion', label: 'Momento de calma', path: '/respiracion', icon: '🧘' },
      { key: 'ejercicios', label: 'Ejercicios para el fisico', path: '/ejercicios', icon: '🏋️' }
    ]
  })

  useEffect(() => {
    sessionStorage.setItem('assistantStep', step)
    sessionStorage.setItem('assistantChoices', JSON.stringify(choices))
    if (choices.length === 0) {
      onComplete()
    }
  }, [step, choices, onComplete])

  const handleChoice = (choice) => {
    setChoices(choices.filter(c => c.key !== choice.key))
    setStep(prev => prev + 1)
    navigate(choice.path)
  }

  const messages = [
    "¡Buenos días, frank! ¿Listo para empezar? ¿Qué hacemos primero?",
    "¡Genial! Un paso más cerca de un día exitoso. ¿Cuál es el siguiente?",
    "¡Excelente elección! ¿Qué sigue en la lista?",
    "¡Estás imparable! Solo queda uno para empezar el día con todo.",
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full text-center page-transition animate-fade-in-up">
      <Piggy size="text-8xl" animation="bounce" onClick={onNewQuote} />
      <div className="w-full max-w-lg p-8 mt-6 bg-purple-800 shadow-2xl rounded-2xl">
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="mb-2 text-xl text-white">"{quote.text}"</p>
          <p className="text-sm text-white opacity-80">— {quote.author}</p>
        </div>
        <p className="mb-6 text-2xl font-semibold text-white">{messages[step] || messages[0]}</p>
        <div className="flex flex-col gap-4">
          {choices.map((choice, index) => (
            <button
              key={choice.key}
              onClick={() => handleChoice(choice)}
              className="flex items-center justify-center gap-4 px-6 py-4 text-lg font-bold text-purple-600 transition transform bg-white rounded-lg shadow-lg hover:bg-opacity-90 hover:scale-105 active:scale-95 animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <span className="text-2xl">{choice.icon}</span>
              {choice.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// --- Componente Principal del Dashboard ---
const quotes = [
    { text: "La única forma de hacer un gran trabajo es amar lo que haces.", author: "Steve Jobs" },
    { text: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", author: "Robert Collier" },
    { text: "No cuentes los días, haz que los días cuenten.", author: "Muhammad Ali" },
    { text: "La vida es 10% lo que me ocurre y 90% cómo reacciono a ello.", author: "Charles R. Swindoll" },
    { text: "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.", author: "Vidal Sassoon" },
    { text: "No esperes. El tiempo nunca será justo.", author: "Napoleon Hill" },
    { text: "El fracaso es simplemente la oportunidad de comenzar de nuevo, esta vez de forma más inteligente.", author: "Henry Ford" },
    { text: "La motivación nos impulsa a comenzar y el hábito nos permite continuar.", author: "Jim Ryun" },
    { text: "El secreto del cambio es enfocar toda tu energía no en luchar contra lo viejo, sino en construir lo nuevo.", author: "Sócrates" },
    { text: "El futuro pertenece a quienes creen en la belleza de sus sueños.", author: "Eleanor Roosevelt" },
    { text: "La disciplina es el puente entre tus metas y tus logros.", author: "Jim Rohn" },
]

const Dashboard = () => {
  const [assistantCompleted, setAssistantCompleted] = useState(true); // Forzar a true para mostrar siempre el dashboard
  const [quote, setQuote] = useState(quotes[0])

  const handleNewQuote = useCallback(() => {
    const currentQuoteIndex = quotes.findIndex(q => q.text === quote.text);
    const nextQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    setQuote(quotes[nextQuoteIndex]);
  }, [quote])

  useEffect(() => {
    // Selecciona una frase al azar solo una vez al cargar la página
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }, [])

  useEffect(() => {
    sessionStorage.setItem('assistantCompleted', assistantCompleted)
  }, [assistantCompleted])
  
  const handleReset = () => {
    sessionStorage.removeItem('assistantStep');
    sessionStorage.removeItem('assistantChoices');
    sessionStorage.setItem('assistantCompleted', 'false');
    window.location.reload();
  }

  const handleComplete = () => {
    setAssistantCompleted(true)
  }

  if (!assistantCompleted) {
    return <InteractiveAssistant onComplete={handleComplete} quote={quote} onNewQuote={handleNewQuote} />
  }

  return (
    <div>
        <FullDashboard quote={quote} onNewQuote={handleNewQuote} />
        <div className="mt-6 text-center">
            <button 
                onClick={handleReset}
                className="px-4 py-2 text-white transition bg-purple-600 rounded-lg hover:bg-purple-700"
            >
                Reiniciar Ritual Diario
            </button>
        </div>
    </div>
  );
}

export default Dashboard
