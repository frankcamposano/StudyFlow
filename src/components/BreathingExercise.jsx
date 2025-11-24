import { useState, useEffect } from 'react'

export const BreathingExercise = ({ technique = 'box', duration = 120 }) => {
  const [isActive, setIsActive] = useState(false)
  const [timeLeft, setTimeLeft] = useState(duration)
  const [cycle, setCycle] = useState(0)
  const [phase, setPhase] = useState('inhale') // inhale, hold, exhale

  const techniques = {
    box: {
      name: 'Box Breathing',
      description: 'Técnica 4-4-4-4: Perfecta para calmar ansiedad',
      phases: [
        { name: 'inhale', duration: 4, label: 'Inhala', color: 'from-blue-400 to-cyan-400' },
        { name: 'hold1', duration: 4, label: 'Mantén', color: 'from-cyan-400 to-teal-400' },
        { name: 'exhale', duration: 4, label: 'Exhala', color: 'from-teal-400 to-green-400' },
        { name: 'hold2', duration: 4, label: 'Mantén', color: 'from-green-400 to-blue-400' }
      ],
      cycleTime: 16
    },
    478: {
      name: 'Respiración 4-7-8',
      description: 'Perfecto para dormir y relajarse profundamente',
      phases: [
        { name: 'inhale', duration: 4, label: 'Inhala', color: 'from-purple-400 to-pink-400' },
        { name: 'hold', duration: 7, label: 'Aguanta', color: 'from-pink-400 to-rose-400' },
        { name: 'exhale', duration: 8, label: 'Exhala', color: 'from-rose-400 to-purple-400' }
      ],
      cycleTime: 19
    },
    calming: {
      name: 'Respiración Calmante',
      description: 'Técnica 3-6-3: Reduce estrés inmediato',
      phases: [
        { name: 'inhale', duration: 3, label: 'Inhala', color: 'from-green-400 to-emerald-400' },
        { name: 'hold', duration: 6, label: 'Mantén', color: 'from-emerald-400 to-teal-400' },
        { name: 'exhale', duration: 3, label: 'Exhala', color: 'from-teal-400 to-green-400' }
      ],
      cycleTime: 12
    },
    energizing: {
      name: 'Respiración Energizante',
      description: 'Técnica 4-4-4: Aumenta energía y concentración',
      phases: [
        { name: 'inhale', duration: 4, label: 'Inhala Fuerte', color: 'from-orange-400 to-yellow-400' },
        { name: 'hold', duration: 4, label: 'Aguanta', color: 'from-yellow-400 to-amber-400' },
        { name: 'exhale', duration: 4, label: 'Exhala', color: 'from-amber-400 to-orange-400' }
      ],
      cycleTime: 12
    }
  }

  const currentTechnique = techniques[technique]
  const allPhases = currentTechnique.phases
  const currentPhaseIndex = cycle % allPhases.length
  const currentPhaseData = allPhases[currentPhaseIndex]

  useEffect(() => {
    let interval
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(t => t - 1)
      }, 1000)
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false)
    }
    return () => clearInterval(interval)
  }, [isActive, timeLeft])

  useEffect(() => {
    if (!isActive) return

    const phaseTimer = setInterval(() => {
      setCycle(c => c + 1)
    }, (currentPhaseData.duration + 0.5) * 1000)

    return () => clearInterval(phaseTimer)
  }, [isActive, currentPhaseData])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const breathingProgress = isActive ? (currentPhaseData.duration / (currentPhaseData.duration + 0.5)) : 0

  return (
    <div className="w-full space-y-6">
      {/* Encabezado */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">{currentTechnique.name}</h2>
        <p className="text-white opacity-80">{currentTechnique.description}</p>
      </div>

      {/* Contenedor Principal */}
      <div className="bg-gradient-to-br from-purple-700 to-purple-800 rounded-3xl p-12 text-center relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 space-y-8">
          {/* Círculo Respiratorio Animado */}
          <div className="flex justify-center items-center h-64">
            <div className="relative w-56 h-56">
              {/* Círculo exterior */}
              <div className={`absolute inset-0 rounded-full border-4 border-white opacity-20`}></div>

              {/* Círculo animado */}
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${currentPhaseData.color} shadow-2xl transform transition-transform duration-500`}
                style={{
                  transform: isActive
                    ? `scale(${0.3 + breathingProgress * 0.7})`
                    : 'scale(0.3)',
                  opacity: isActive ? 0.8 : 0.4
                }}
              ></div>

              {/* Texto central */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">
                    {isActive ? currentPhaseData.duration : '—'}
                  </div>
                  <div className="text-xl text-white font-semibold">
                    {isActive ? currentPhaseData.label : 'Listo'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Información de tiempo */}
          <div className="space-y-3">
            <div className="text-white text-lg">
              <span className="text-3xl font-bold">{formatTime(timeLeft)}</span>
              <span className="text-white opacity-70 ml-2">/ {formatTime(duration)}</span>
            </div>
            {isActive && (
              <div className="text-white opacity-80 text-sm">
                Ciclo {Math.floor(cycle / allPhases.length) + 1}
              </div>
            )}
          </div>

          {/* Barra de progreso de fase */}
          {isActive && (
            <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${currentPhaseData.color} transition-all duration-300`}
                style={{
                  width: `${breathingProgress * 100}%`
                }}
              ></div>
            </div>
          )}

          {/* Botones de Control */}
          <div className="flex gap-4 justify-center pt-4">
            <button
              onClick={() => setIsActive(!isActive)}
              className={`px-8 py-3 rounded-lg font-bold text-lg transition transform hover:scale-105 active:scale-95 ${
                isActive
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isActive ? '⏸ Pausar' : '▶ Comenzar'}
            </button>

            <button
              onClick={() => {
                setIsActive(false)
                setTimeLeft(duration)
                setCycle(0)
              }}
              className="px-8 py-3 rounded-lg font-bold text-lg bg-white text-purple-700 hover:bg-opacity-90 transition transform hover:scale-105 active:scale-95"
            >
              ↻ Reiniciar
            </button>
          </div>
        </div>
      </div>

      {/* Guía de Fases */}
      <div className="bg-purple-600 bg-opacity-30 rounded-xl p-4">
        <div className="text-white text-sm font-semibold mb-3">Fases del Ejercicio:</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {allPhases.map((p, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg text-center text-sm font-semibold transition ${
                isActive && currentPhaseIndex === idx
                  ? `bg-gradient-to-r ${p.color} text-white scale-105`
                  : 'bg-white bg-opacity-10 text-white opacity-70'
              }`}
            >
              <div>{p.label}</div>
              <div className="text-xs opacity-80">{p.duration}s</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
