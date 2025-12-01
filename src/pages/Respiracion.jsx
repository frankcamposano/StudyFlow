import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BreathingExercise } from '../components/BreathingExercise'
import gatoImage from '/images/gato-respirando.png'

const CompletionMessage = ({ onReturn }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-white page-transition animate-fade-in-up">
      <div className="w-full max-w-md p-8 shadow-2xl bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl">
        <div className="mb-4 text-6xl">🎉</div>
        <h2 className="mb-2 text-3xl font-bold">¡Ejercicio Completado!</h2>
        <p className="mb-6 text-lg opacity-90">
          Has oxigenado tu cerebro y reducido el estrés. Ahora tienes la mente más clara para enfocarte en lo importante.
        </p>
        <button
          onClick={onReturn}
          className="px-8 py-3 text-lg font-bold text-purple-600 transition transform bg-white rounded-lg shadow-lg hover:bg-opacity-90 hover:scale-105 active:scale-95"
        >
          Volver al Dashboard
        </button>
      </div>
    </div>
  )
}

const Respiracion = () => {
  const navigate = useNavigate()
  const [selectedTechnique, setSelectedTechnique] = useState('box')
  const [duration, setDuration] = useState(120)
  const [isCompleted, setIsCompleted] = useState(false)

  const handleComplete = () => {
    setIsCompleted(true)
  }

  const handleReturnToDashboard = () => {
    navigate('/')
  }

  const techniques = [
    { id: 'box', name: '🟦 Box Breathing', description: '4-4-4-4: Calma instantánea', icon: '🫁', benefits: ['Reduce ansiedad', 'Mejora enfoque', 'Perfecto para estrés'] },
    { id: '478', name: '😴 Respiración 4-7-8', description: '4-7-8: Relajación profunda', icon: '🌙', benefits: ['Ideal para dormir', 'Muy relajante', 'Reduce tensión'] },
    { id: 'calming', name: '🧘 Calmante', description: '3-6-3: Estrés inmediato', icon: '✨', benefits: ['Rápida', 'Efectiva', 'Sin complicaciones'] },
    { id: 'energizing', name: '⚡ Energizante', description: '4-4-4: Aumenta energía', icon: '💪', benefits: ['Despierta', 'Concentración', 'Energía'] }
  ]

  if (isCompleted) {
    return <CompletionMessage onReturn={handleReturnToDashboard} />
  }

  return (
    <div className="space-y-8 page-transition">
      <div className="flex items-center justify-between animate-fade-in-up">
        <div>
          <h1 className="mb-2 text-4xl font-bold text-white">🫁 Respiración Consciente</h1>
          <p className="text-white opacity-80">Técnicas de respiración para calmar y enfocarte</p>
        </div>
        <div className="text-6xl animate-bounce-animal">🐱</div>
      </div>
      <div className="relative flex items-center justify-center p-8 overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl hover-lift animate-fade-in-up min-h-64" style={{ animationDelay: '0.1s', opacity: 0 }}>
        <div className="absolute inset-0 opacity-20"><div className="absolute inset-0 animate-pulse"></div></div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-6">
          <img src={gatoImage} alt="Gato respirando" className="object-contain w-48 h-48 drop-shadow-2xl animate-float" style={{ animationDuration: '4s' }} />
          <div className="text-center text-white">
            <h3 className="mb-1 text-2xl font-bold">Acompaña al gato</h3>
            <p className="text-lg opacity-90">Respira junto a él para relajarte</p>
          </div>
        </div>
      </div>
      <div className="p-8 bg-gradient-to-br from-purple-700 to-purple-800 rounded-3xl hover-lift animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
        <BreathingExercise technique={selectedTechnique} duration={duration} onComplete={handleComplete} />
      </div>
      <div>
        <h2 className="mb-4 text-2xl font-bold text-white animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>Elige tu Técnica</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {techniques.map((tech, index) => (
            <div
              key={tech.id}
              onClick={() => setSelectedTechnique(tech.id)}
              className={`p-6 rounded-2xl cursor-pointer transition transform hover:scale-105 active:scale-95 hover-lift animate-scale-in ${selectedTechnique === tech.id ? 'bg-gradient-to-br from-pink-500 to-purple-600 border-2 border-white' : 'bg-gradient-to-br from-purple-600 to-purple-700 border-2 border-transparent hover:border-pink-500'} text-white`}
              style={{ animationDelay: `${0.4 + index * 0.1}s`, opacity: 0 }}
            >
              <div className="mb-3 text-4xl">{tech.icon}</div>
              <h3 className="mb-1 text-xl font-bold">{tech.name}</h3>
              <p className="mb-3 text-sm opacity-90">{tech.description}</p>
              <div className="space-y-1">
                {tech.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs opacity-80"><span className="text-green-300">✓</span> {benefit}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 bg-purple-700 rounded-2xl hover-lift animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">Duración del Ejercicio</h3>
          <span className="text-3xl font-bold text-pink-400">{Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}</span>
        </div>
        <input type="range" min="30" max="300" step="30" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full h-2 bg-purple-600 rounded-lg appearance-none cursor-pointer accent-pink-500" />
        <div className="flex justify-between mt-2 text-sm text-white opacity-70">
          <span>30s</span><span>1 min</span><span>2 min</span><span>3 min</span><span>5 min</span>
        </div>
      </div>
    </div>
  )
}

export default Respiracion
