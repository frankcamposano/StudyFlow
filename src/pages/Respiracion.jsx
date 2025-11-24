import { useState } from 'react'
import { BreathingExercise } from '../components/BreathingExercise'

const Respiracion = () => {
  const [selectedTechnique, setSelectedTechnique] = useState('box')
  const [duration, setDuration] = useState(120)
  const [completedSessions, setCompletedSessions] = useState(0)

  const techniques = [
    {
      id: 'box',
      name: '🟦 Box Breathing',
      description: '4-4-4-4: Calma instantánea',
      icon: '🫁',
      benefits: ['Reduce ansiedad', 'Mejora enfoque', 'Perfecto para estrés']
    },
    {
      id: '478',
      name: '😴 Respiración 4-7-8',
      description: '4-7-8: Relajación profunda',
      icon: '🌙',
      benefits: ['Ideal para dormir', 'Muy relajante', 'Reduce tensión']
    },
    {
      id: 'calming',
      name: '🧘 Calmante',
      description: '3-6-3: Estrés inmediato',
      icon: '✨',
      benefits: ['Rápida', 'Efectiva', 'Sin complicaciones']
    },
    {
      id: 'energizing',
      name: '⚡ Energizante',
      description: '4-4-4: Aumenta energía',
      icon: '💪',
      benefits: ['Despierta', 'Concentración', 'Energía']
    }
  ]

  return (
    <div className="space-y-8 page-transition">
      {/* Header */}
      <div className="flex items-center justify-between animate-fade-in-up">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">🫁 Respiración Consciente</h1>
          <p className="text-white opacity-80">Técnicas de respiración para calmar y enfocarte</p>
        </div>
        <div className="text-6xl animate-bounce-animal">🐱</div>
      </div>

      {/* Imagen del gato respirando */}
      <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-8 hover-lift animate-fade-in-up flex items-center justify-center min-h-64 relative overflow-hidden" style={{ animationDelay: '0.1s', opacity: 0 }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 animate-pulse"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-6">
          <picture>
            <source srcSet="/images/gato-respirando.png" type="image/png" />
            <img
              src="/images/gato-respirando.svg"
              alt="Gato respirando"
              className="w-48 h-48 object-contain drop-shadow-2xl animate-float"
              style={{ animationDuration: '4s' }}
            />
          </picture>
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-1">Acompaña al gato</h3>
            <p className="text-lg opacity-90">Respira junto a él para relajarte</p>
          </div>
        </div>
      </div>

      {/* Ejercicio Principal */}
      <div className="bg-gradient-to-br from-purple-700 to-purple-800 rounded-3xl p-8 hover-lift animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
        <BreathingExercise technique={selectedTechnique} duration={duration} />
      </div>

      {/* Selector de Técnicas */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          Elige tu Técnica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {techniques.map((tech, index) => (
            <div
              key={tech.id}
              onClick={() => setSelectedTechnique(tech.id)}
              className={`p-6 rounded-2xl cursor-pointer transition transform hover:scale-105 active:scale-95 hover-lift animate-scale-in ${
                selectedTechnique === tech.id
                  ? 'bg-gradient-to-br from-pink-500 to-purple-600 border-2 border-white'
                  : 'bg-gradient-to-br from-purple-600 to-purple-700 border-2 border-transparent hover:border-pink-500'
              } text-white`}
              style={{ animationDelay: `${0.4 + index * 0.1}s`, opacity: 0 }}
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <h3 className="text-xl font-bold mb-1">{tech.name}</h3>
              <p className="text-sm opacity-90 mb-3">{tech.description}</p>
              <div className="space-y-1">
                {tech.benefits.map((benefit, i) => (
                  <div key={i} className="text-xs opacity-80 flex items-center gap-2">
                    <span className="text-green-300">✓</span> {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selector de Duración */}
      <div className="bg-purple-700 rounded-2xl p-6 hover-lift animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">Duración del Ejercicio</h3>
          <span className="text-3xl font-bold text-pink-400">{Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}</span>
        </div>
        <input
          type="range"
          min="30"
          max="300"
          step="30"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="w-full h-2 bg-purple-600 rounded-lg appearance-none cursor-pointer accent-pink-500"
        />
        <div className="flex justify-between text-sm text-white opacity-70 mt-2">
          <span>30s</span>
          <span>1 min</span>
          <span>2 min</span>
          <span>3 min</span>
          <span>5 min</span>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white hover-lift card-glow animate-scale-in" style={{ animationDelay: '0.6s', opacity: 0 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-4xl">🫁</span>
          </div>
          <div className="text-4xl font-bold mb-1">0</div>
          <div className="text-lg">Sesiones Hoy</div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white hover-lift card-glow animate-scale-in" style={{ animationDelay: '0.7s', opacity: 0 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-4xl">⏱️</span>
          </div>
          <div className="text-4xl font-bold mb-1">0 min</div>
          <div className="text-lg">Tiempo Total</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white hover-lift card-glow animate-scale-in" style={{ animationDelay: '0.8s', opacity: 0 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-4xl">🔥</span>
          </div>
          <div className="text-4xl font-bold mb-1">0</div>
          <div className="text-lg">Racha Días</div>
        </div>
      </div>

      {/* Tips de Respiración */}
      <div className="bg-purple-700 rounded-2xl p-6 hover-lift animate-fade-in-up" style={{ animationDelay: '0.9s', opacity: 0 }}>
        <h3 className="text-2xl font-bold text-white mb-4">💡 Tips para Mejor Respiración</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-10 rounded-lg p-4 text-white">
            <div className="font-bold mb-2">🎯 Postura</div>
            <p className="text-sm opacity-80">Siéntate erguido, hombros relajados. Respira por la nariz si es posible.</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4 text-white">
            <div className="font-bold mb-2">📍 Lugar</div>
            <p className="text-sm opacity-80">Busca un lugar tranquilo sin distracciones. Un ambiente calmado ayuda.</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4 text-white">
            <div className="font-bold mb-2">⏰ Momento</div>
            <p className="text-sm opacity-80">Mañana para energizar, tarde para calmar, noche para dormir mejor.</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4 text-white">
            <div className="font-bold mb-2">📅 Consistencia</div>
            <p className="text-sm opacity-80">Practica diariamente para mejores resultados. Incluso 2 min ayuda.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Respiracion
