import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BreathingExercise } from '../components/BreathingExercise'
import gatoImage from '/images/gato-respirando.png'

const CompletionMessage = ({ onReturn, duration, technique }) => {
  const techniqueName = {
    box: 'Box Breathing',
    '478': 'Respiración 4-7-8',
    calming: 'Respiración Calmante',
    energizing: 'Respiración Energizante'
  }[technique]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center text-white page-transition animate-fade-in-up">
      <div className="w-full max-w-md p-8 shadow-2xl bg-gradient-to-br from-green-400 via-teal-500 to-blue-500 rounded-3xl">
        <div className="mb-6 text-7xl animate-bounce">🎉</div>
        <h2 className="mb-3 text-3xl font-bold">¡Excelente Trabajo!</h2>
        <p className="mb-4 text-lg opacity-90">
          Completaste <strong>{Math.floor(duration / 60)} minutos</strong> de {techniqueName}
        </p>
        <div className="p-4 mb-6 bg-white rounded-xl bg-opacity-20">
          <p className="text-sm font-medium">
            Has oxigenado tu cerebro, reducido el estrés y mejorado tu claridad mental. 
            ¡Sigue así! 🧠✨
          </p>
        </div>
        <button
          onClick={onReturn}
          className="w-full px-8 py-4 text-lg font-bold text-purple-600 transition transform bg-white shadow-lg rounded-xl hover:bg-opacity-90 hover:scale-105 active:scale-95"
        >
          Volver al Dashboard
        </button>
      </div>
    </div>
  )
}

const TechniqueCard = ({ tech, isSelected, onClick, index }) => {
  return (
    <div
      onClick={onClick}
      className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95 hover-lift animate-scale-in ${
        isSelected 
          ? 'bg-gradient-to-br from-pink-500 to-purple-600 border-2 border-white shadow-xl' 
          : 'bg-gradient-to-br from-purple-600 to-purple-700 border-2 border-transparent hover:border-pink-400 opacity-80 hover:opacity-100'
      } text-white`}
      style={{ animationDelay: `${0.4 + index * 0.1}s`, opacity: 0 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="text-5xl">{tech.icon}</div>
        {isSelected && <div className="text-2xl">✓</div>}
      </div>
      <h3 className="mb-2 text-xl font-bold">{tech.name}</h3>
      <p className="mb-4 text-sm opacity-90">{tech.description}</p>
      <div className="space-y-1.5">
        {tech.benefits.map((benefit, i) => (
          <div key={i} className="flex items-center gap-2 text-xs">
            <span className="flex-shrink-0 text-green-300">✓</span>
            <span className={isSelected ? 'opacity-100' : 'opacity-80'}>{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const Respiracion = () => {
  const navigate = useNavigate()
  const [selectedTechnique, setSelectedTechnique] = useState('box')
  const [duration, setDuration] = useState(120)
  const [isCompleted, setIsCompleted] = useState(false)
  const [showTip, setShowTip] = useState(true)

  const techniques = [
    { 
      id: 'box', 
      name: '🟦 Box Breathing', 
      description: '4-4-4-4: Calma instantánea', 
      icon: '🫁', 
      benefits: ['Reduce ansiedad inmediata', 'Mejora enfoque mental', 'Perfecto para estrés agudo'] 
    },
    { 
      id: '478', 
      name: '😴 Respiración 4-7-8', 
      description: '4-7-8: Relajación profunda', 
      icon: '🌙', 
      benefits: ['Ideal para dormir mejor', 'Relajación muy profunda', 'Reduce tensión muscular'] 
    },
    { 
      id: 'calming', 
      name: '🧘 Calmante', 
      description: '3-6-3: Alivio inmediato', 
      icon: '✨', 
      benefits: ['Muy rápida y efectiva', 'Fácil de recordar', 'Sin complicaciones'] 
    },
    { 
      id: 'energizing', 
      name: '⚡ Energizante', 
      description: '4-4-4: Activa tu energía', 
      icon: '💪', 
      benefits: ['Te despierta naturalmente', 'Mejora concentración', 'Aumenta tu energía'] 
    }
  ]

  const currentTechnique = techniques.find(t => t.id === selectedTechnique)

  useEffect(() => {
    const timer = setTimeout(() => setShowTip(false), 8000)
    return () => clearTimeout(timer)
  }, [])

  const handleComplete = () => {
    setIsCompleted(true)
  }

  const handleReturnToDashboard = () => {
    navigate('/')
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (isCompleted) {
    return <CompletionMessage onReturn={handleReturnToDashboard} duration={duration} technique={selectedTechnique} />
  }

  return (
    <div className="pb-8 space-y-8 page-transition">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center animate-fade-in-up">
        <div className="flex-1">
          <h1 className="mb-2 text-4xl font-bold text-white">🫁 Respiración Consciente</h1>
          <p className="text-lg text-white opacity-80">Técnicas científicamente probadas para calmar tu mente</p>
        </div>
        <div className="text-6xl animate-bounce-animal">🐱</div>
      </div>

      {/* Tip Card */}
      {showTip && (
        <div className="relative p-6 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl animate-fade-in-up">
          <button 
            onClick={() => setShowTip(false)}
            className="absolute text-white transition top-3 right-3 opacity-70 hover:opacity-100"
          >
            ✕
          </button>
          <div className="flex gap-4">
            <div className="text-3xl">💡</div>
            <div className="text-white">
              <h3 className="mb-1 font-bold">Consejo:</h3>
              <p className="text-sm opacity-90">
                Encuentra un lugar tranquilo, siéntate cómodamente y concéntrate solo en tu respiración. 
                Cada sesión te acerca más a la calma mental.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Cat Image Card */}
      <div className="relative flex items-center justify-center p-8 overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 rounded-3xl hover-lift animate-fade-in-up min-h-64" style={{ animationDelay: '0.1s', opacity: 0 }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 animate-pulse"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-6">
          <img 
            src={gatoImage} 
            alt="Gato respirando" 
            className="object-contain w-48 h-48 drop-shadow-2xl animate-float" 
            style={{ animationDuration: '4s' }} 
          />
          <div className="text-center text-white">
            <h3 className="mb-2 text-2xl font-bold">Acompaña al gato</h3>
            <p className="text-lg opacity-90">Respira junto a él siguiendo el ritmo visual</p>
          </div>
        </div>
      </div>

      {/* Breathing Exercise */}
      <div className="p-8 bg-gradient-to-br from-purple-700 to-purple-900 rounded-3xl hover-lift animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
        <div className="mb-4 text-center">
          <h3 className="mb-1 text-2xl font-bold text-white">{currentTechnique?.name}</h3>
          <p className="text-white opacity-80">{currentTechnique?.description}</p>
        </div>
        <BreathingExercise 
          technique={selectedTechnique} 
          duration={duration} 
          onComplete={handleComplete} 
        />
      </div>

      {/* Technique Selection */}
      <div>
        <h2 className="mb-4 text-2xl font-bold text-white animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          Elige tu Técnica
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {techniques.map((tech, index) => (
            <TechniqueCard
              key={tech.id}
              tech={tech}
              isSelected={selectedTechnique === tech.id}
              onClick={() => setSelectedTechnique(tech.id)}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Duration Selector */}
      <div className="p-6 bg-purple-700 rounded-2xl hover-lift animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">Duración del Ejercicio</h3>
          <span className="px-4 py-2 text-2xl font-bold text-purple-900 bg-pink-400 rounded-lg shadow-lg">
            {formatTime(duration)}
          </span>
        </div>
        <input 
          type="range" 
          min="30" 
          max="300" 
          step="30" 
          value={duration} 
          onChange={(e) => setDuration(Number(e.target.value))} 
          className="w-full h-3 bg-purple-600 rounded-lg appearance-none cursor-pointer accent-pink-500"
        />
        <div className="flex justify-between mt-3 text-sm font-medium text-white opacity-70">
          <span>30s</span>
          <span>1m</span>
          <span>2m</span>
          <span>3m</span>
          <span>5m</span>
        </div>
      </div>
    </div>
  )
}

export default Respiracion