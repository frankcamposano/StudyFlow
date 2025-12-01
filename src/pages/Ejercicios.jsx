import { useState } from 'react'

const Ejercicios = () => {
  const [selectedCategory, setSelectedCategory] = useState('cardio')
  const [selectedExercise, setSelectedExercise] = useState(null)
  const [completedExercises, setCompletedExercises] = useState([])
  const [showConfetti, setShowConfetti] = useState(false)

  const exercises = {
    cardio: [
      {
        id: 'cardio1',
        name: 'HIIT 20 Minutos',
        subtitle: 'Quema Grasa Rápido',
        duration: 20,
        difficulty: 'Intermedio',
        calories: 250,
        videoId: 'ml6DVrYP-H8',
        description: 'Entrenamiento de alta intensidad para quemar grasa y aumentar resistencia cardiovascular.',
        benefits: ['Quema grasa acelerada', 'Aumenta resistencia', 'Boost de energía'],
        equipment: 'Sin equipo',
        icon: '🏃',
        color: 'from-red-500 to-orange-600'
      },
      {
        id: 'cardio2',
        name: 'Cardio Completo',
        subtitle: '30 Minutos para Principiantes',
        duration: 30,
        difficulty: 'Principiante',
        calories: 300,
        videoId: 'cjN0GCZn-z8',
        description: 'Rutina de cardio suave perfecta para principiantes con movimientos básicos y efectivos.',
        benefits: ['Salud cardiovascular', 'Mejora resistencia', 'Aumenta energía'],
        equipment: 'Sin equipo',
        icon: '🚴',
        color: 'from-blue-500 to-cyan-600'
      },
      {
        id: 'cardio3',
        name: 'Cardio Explosivo',
        subtitle: '15 Minutos de Alta Intensidad',
        duration: 15,
        difficulty: 'Avanzado',
        calories: 200,
        videoId: '1V9kcSLQBhM',
        description: 'Explosión de energía en 15 minutos. Perfecto para días ocupados con máxima eficiencia.',
        benefits: ['Quema rápida', 'Explosión de energía', 'Tiempo eficiente'],
        equipment: 'Sin equipo',
        icon: '⚡',
        color: 'from-yellow-500 to-orange-600'
      }
    ],
    strength: [
      {
        id: 'strength1',
        name: 'Brazos y Espalda',
        subtitle: '25 Minutos de Fuerza',
        duration: 25,
        difficulty: 'Intermedio',
        calories: 180,
        videoId: 'Sc5sxV0cRM8',
        description: 'Fortalece brazos, hombros y espalda. Desarrolla fuerza y definición muscular.',
        benefits: ['Fuerza superior', 'Definición muscular', 'Mejora postura'],
        equipment: 'Mancuernas (opcionales)',
        icon: '💪',
        color: 'from-purple-500 to-pink-600'
      },
      {
        id: 'strength2',
        name: 'Piernas y Glúteos',
        subtitle: '30 Minutos de Potencia',
        duration: 30,
        difficulty: 'Intermedio',
        calories: 280,
        videoId: 'UgwO3bEVLXU',
        description: 'Potencia tu tren inferior. Tonifica piernas y glúteos sin necesidad de equipo.',
        benefits: ['Piernas tonificadas', 'Glúteos firmes', 'Resistencia muscular'],
        equipment: 'Sin equipo',
        icon: '🦵',
        color: 'from-green-500 to-emerald-600'
      },
      {
        id: 'strength3',
        name: 'Full Body Power',
        subtitle: '40 Minutos Intenso',
        duration: 40,
        difficulty: 'Avanzado',
        calories: 350,
        videoId: 'h2nK-kHLs0Y',
        description: 'Entrena todo el cuerpo en una sesión explosiva. Máxima intensidad y resultados.',
        benefits: ['Cuerpo completo', 'Definición total', 'Fuerza explosiva'],
        equipment: 'Mancuernas',
        icon: '🏋️',
        color: 'from-red-600 to-purple-700'
      }
    ],
    flexibility: [
      {
        id: 'flex1',
        name: 'Yoga Relajante',
        subtitle: '20 Minutos de Paz',
        duration: 20,
        difficulty: 'Principiante',
        calories: 80,
        videoId: '5dT-UM2vwqA',
        description: 'Yoga suave para relajarse, reducir estrés y mejorar flexibilidad general.',
        benefits: ['Flexibilidad mejorada', 'Relajación profunda', 'Balance mental'],
        equipment: 'Esterilla (opcional)',
        icon: '🧘',
        color: 'from-teal-500 to-cyan-600'
      },
      {
        id: 'flex2',
        name: 'Estiramiento Total',
        subtitle: '15 Minutos de Recuperación',
        duration: 15,
        difficulty: 'Principiante',
        calories: 50,
        videoId: 'C0LE1HAbJnw',
        description: 'Rutina completa de estiramiento ideal para después del entrenamiento y recuperación.',
        benefits: ['Mayor flexibilidad', 'Recuperación muscular', 'Previene lesiones'],
        equipment: 'Sin equipo',
        icon: '🤸',
        color: 'from-blue-400 to-indigo-600'
      },
      {
        id: 'flex3',
        name: 'Yoga Dinámico',
        subtitle: '30 Minutos Flow',
        duration: 30,
        difficulty: 'Intermedio',
        calories: 150,
        videoId: 'UjIm7dqT8Ks',
        description: 'Yoga fluido que combina fuerza, flexibilidad y equilibrio en movimiento.',
        benefits: ['Fuerza funcional', 'Flexibilidad activa', 'Equilibrio perfecto'],
        equipment: 'Esterilla',
        icon: '🧘‍♀️',
        color: 'from-purple-400 to-pink-600'
      }
    ],
    core: [
      {
        id: 'core1',
        name: 'Abdominales Express',
        subtitle: '10 Minutos Rápidos',
        duration: 10,
        difficulty: 'Principiante',
        calories: 100,
        videoId: 'K3yVvI58s2A',
        description: 'Rutina ultra-rápida de abdominales. Perfecta para cualquier momento del día.',
        benefits: ['Abdominales definidos', 'Core fuerte', 'Súper rápido'],
        equipment: 'Sin equipo',
        icon: '⭕',
        color: 'from-orange-500 to-red-600'
      },
      {
        id: 'core2',
        name: 'Core de Fuego',
        subtitle: '20 Minutos Intenso',
        duration: 20,
        difficulty: 'Intermedio',
        calories: 150,
        videoId: '0Z1DV0nR4ZA',
        description: 'Entrenamiento intenso de núcleo central para un core de acero.',
        benefits: ['Core poderoso', 'Estabilidad total', 'Postura perfecta'],
        equipment: 'Sin equipo',
        icon: '💥',
        color: 'from-yellow-600 to-orange-700'
      },
      {
        id: 'core3',
        name: 'Planchas Extremas',
        subtitle: '15 Minutos Challenge',
        duration: 15,
        difficulty: 'Avanzado',
        calories: 120,
        videoId: 'WRQ8hCaXfE8',
        description: 'Variaciones extremas de planchas para desarrollar un core inquebrantable.',
        benefits: ['Estabilidad máxima', 'Fuerza mental', 'Resistencia extrema'],
        equipment: 'Sin equipo',
        icon: '🔥',
        color: 'from-red-600 to-pink-700'
      }
    ]
  }

  const categories = [
    { id: 'cardio', name: 'Cardio', emoji: '🏃', color: 'from-red-500 to-orange-500', description: 'Quema calorías' },
    { id: 'strength', name: 'Fuerza', emoji: '💪', color: 'from-purple-500 to-pink-500', description: 'Desarrolla músculo' },
    { id: 'flexibility', name: 'Flexibilidad', emoji: '🧘', color: 'from-teal-500 to-cyan-500', description: 'Relaja y estira' },
    { id: 'core', name: 'Core', emoji: '⭕', color: 'from-orange-500 to-red-500', description: 'Fortalece centro' }
  ]

  const markAsCompleted = (exerciseId) => {
    const wasCompleted = completedExercises.includes(exerciseId)
    
    setCompletedExercises(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(id => id !== exerciseId)
        : [...prev, exerciseId]
    )

    if (!wasCompleted) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }
  }

  const isCompleted = (id) => completedExercises.includes(id)

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Principiante': return 'bg-green-500'
      case 'Intermedio': return 'bg-yellow-500'
      case 'Avanzado': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const ExerciseCard = ({ exercise, index }) => {
    const completed = isCompleted(exercise.id)
    
    return (
      <div
        className={`relative rounded-3xl overflow-hidden hover-lift card-glow animate-scale-in cursor-pointer transition-all duration-300 group ${
          completed
            ? 'ring-4 ring-green-400 shadow-2xl shadow-green-500/50'
            : 'hover:ring-2 hover:ring-white/50'
        }`}
        style={{ animationDelay: `${0.8 + index * 0.1}s`, opacity: 0 }}
        onClick={() => setSelectedExercise(exercise)}
      >
        <div className={`bg-gradient-to-br ${exercise.color} p-6 text-white`}>
          {/* Badge de completado */}
          {completed && (
            <div className="absolute flex items-center gap-2 px-3 py-1 text-sm font-bold text-green-600 bg-white rounded-full shadow-lg top-4 right-4 animate-bounce-slow">
              <span className="text-lg">✓</span> Completado
            </div>
          )}

          {/* Icono grande */}
          <div className="mb-4 transition-transform duration-300 transform text-7xl group-hover:scale-110">
            {exercise.icon}
          </div>

          {/* Nombre y subtítulo */}
          <h3 className="mb-1 text-2xl font-black">{exercise.name}</h3>
          <p className="mb-4 text-sm font-medium opacity-90">{exercise.subtitle}</p>

          {/* Stats destacadas */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="p-3 text-center bg-white bg-opacity-20 backdrop-blur-sm rounded-xl">
              <div className="mb-1 text-2xl">⏱️</div>
              <div className="text-xl font-bold">{exercise.duration}</div>
              <div className="text-xs opacity-80">minutos</div>
            </div>
            <div className="p-3 text-center bg-white bg-opacity-20 backdrop-blur-sm rounded-xl">
              <div className="mb-1 text-2xl">🔥</div>
              <div className="text-xl font-bold">{exercise.calories}</div>
              <div className="text-xs opacity-80">calorías</div>
            </div>
            <div className="p-3 text-center bg-white bg-opacity-20 backdrop-blur-sm rounded-xl">
              <div className={`text-xs font-bold px-2 py-1 rounded-full ${getDifficultyColor(exercise.difficulty)}`}>
                {exercise.difficulty}
              </div>
              <div className="mt-1 text-xs opacity-80">nivel</div>
            </div>
          </div>

          {/* Descripción */}
          <p className="mb-4 text-sm opacity-90 line-clamp-2">{exercise.description}</p>

          {/* Beneficios */}
          <div className="mb-4 space-y-2">
            {exercise.benefits.slice(0, 2).map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span className="font-bold text-yellow-300">✓</span>
                <span className="opacity-90">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Botones */}
          <div className="flex gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedExercise(exercise)
              }}
              className="flex-1 py-3 font-bold text-gray-900 transition-all transform bg-white rounded-xl hover:scale-105 active:scale-95 hover:shadow-xl"
            >
              ▶ Ver Video
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                markAsCompleted(exercise.id)
              }}
              className={`px-5 py-3 rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 ${
                completed
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-white bg-opacity-30 backdrop-blur-sm text-white hover:bg-opacity-40'
              }`}
            >
              {completed ? '✓' : '□'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pb-8 space-y-8 page-transition">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="text-9xl animate-bounce">🎉</div>
        </div>
      )}

      {/* Header Premium */}
      <div className="relative p-8 overflow-hidden shadow-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-3xl animate-fade-in-up">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 -mt-32 -mr-32 bg-white rounded-full opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 -mb-24 -ml-24 bg-white rounded-full opacity-10"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <h1 className="mb-2 text-5xl font-black text-white drop-shadow-lg">
              💪 Centro de Ejercicios
            </h1>
            <p className="text-xl font-medium text-white opacity-90">
              Rutinas de YouTube para transformar tu cuerpo
            </p>
          </div>
          <div className="text-8xl animate-bounce-animal">🏋️</div>
        </div>
      </div>

      {/* Stats Premium */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="p-6 text-white shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl hover-lift card-glow animate-scale-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <div className="mb-3 text-5xl">📚</div>
          <div className="mb-1 text-4xl font-black">{exercises[selectedCategory].length}</div>
          <div className="text-sm font-medium opacity-90">Ejercicios</div>
        </div>

        <div className="p-6 text-white shadow-lg bg-gradient-to-br from-green-500 to-green-600 rounded-2xl hover-lift card-glow animate-scale-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <div className="mb-3 text-5xl">✓</div>
          <div className="mb-1 text-4xl font-black">{completedExercises.length}</div>
          <div className="text-sm font-medium opacity-90">Completados</div>
        </div>

        <div className="p-6 text-white shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl hover-lift card-glow animate-scale-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <div className="mb-3 text-5xl">⏱️</div>
          <div className="mb-1 text-4xl font-black">
            {exercises[selectedCategory].reduce((acc, ex) => acc + ex.duration, 0)}
          </div>
          <div className="text-sm font-medium opacity-90">Min totales</div>
        </div>

        <div className="p-6 text-white shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl hover-lift card-glow animate-scale-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <div className="mb-3 text-5xl">🔥</div>
          <div className="mb-1 text-4xl font-black">
            {exercises[selectedCategory].reduce((acc, ex) => acc + ex.calories, 0)}
          </div>
          <div className="text-sm font-medium opacity-90">Calorías</div>
        </div>
      </div>

      {/* Categorías Premium */}
      <div className="space-y-4">
        <h2 className="text-3xl font-black text-white animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
          🎯 Elige tu Categoría
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id)
                setSelectedExercise(null)
              }}
              className={`relative overflow-hidden p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover-lift animate-scale-in ${
                selectedCategory === cat.id
                  ? `bg-gradient-to-br ${cat.color} ring-4 ring-white shadow-2xl`
                  : 'bg-gradient-to-br from-gray-700 to-gray-800 hover:ring-2 hover:ring-white/50'
              } text-white font-bold`}
              style={{ animationDelay: `${0.5 + idx * 0.1}s`, opacity: 0 }}
            >
              <div className="mb-3 text-5xl transition-transform duration-300 transform group-hover:scale-110">
                {cat.emoji}
              </div>
              <div className="mb-1 text-xl font-black">{cat.name}</div>
              <div className="text-xs opacity-80">{cat.description}</div>
              
              {selectedCategory === cat.id && (
                <div className="absolute p-1 text-green-600 bg-white rounded-full top-2 right-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Ejercicios Grid */}
      <div className="space-y-4">
        <h2 className="text-3xl font-black text-white animate-fade-in-up" style={{ animationDelay: '0.7s', opacity: 0 }}>
          ⚡ Rutinas Disponibles
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exercises[selectedCategory].map((exercise, idx) => (
            <ExerciseCard key={exercise.id} exercise={exercise} index={idx} />
          ))}
        </div>
      </div>

      {/* Modal de Video Premium */}
      {selectedExercise && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedExercise(null)}
        >
          <div 
            className={`bg-gradient-to-br ${selectedExercise.color} rounded-3xl p-8 max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="mb-3 text-6xl">{selectedExercise.icon}</div>
                <h2 className="mb-2 text-4xl font-black text-white">{selectedExercise.name}</h2>
                <p className="text-xl font-medium text-white opacity-90">{selectedExercise.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedExercise(null)}
                className="p-3 text-white transition-all transform bg-white rounded-full bg-opacity-20 hover:bg-opacity-30 hover:scale-110 active:scale-90 backdrop-blur-sm"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Video con border premium */}
            <div className="mb-6 overflow-hidden shadow-2xl rounded-2xl ring-4 ring-white/30">
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${selectedExercise.videoId}?autoplay=0`}
                title={selectedExercise.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>

            {/* Información detallada */}
            <div className="p-6 mb-6 space-y-6 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl">
              <p className="text-lg leading-relaxed text-white">{selectedExercise.description}</p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="p-4 text-center bg-white bg-opacity-20 backdrop-blur-sm rounded-xl">
                  <div className="mb-2 text-4xl">⏱️</div>
                  <div className="text-2xl font-black text-white">{selectedExercise.duration}</div>
                  <div className="text-sm text-white opacity-80">Minutos</div>
                </div>
                <div className="p-4 text-center bg-white bg-opacity-20 backdrop-blur-sm rounded-xl">
                  <div className="mb-2 text-4xl">🔥</div>
                  <div className="text-2xl font-black text-white">{selectedExercise.calories}</div>
                  <div className="text-sm text-white opacity-80">Calorías</div>
                </div>
                <div className="p-4 text-center bg-white bg-opacity-20 backdrop-blur-sm rounded-xl">
                  <div className="mb-2 text-4xl">📊</div>
                  <div className="text-lg font-black text-white">{selectedExercise.difficulty}</div>
                  <div className="text-sm text-white opacity-80">Nivel</div>
                </div>
                <div className="p-4 text-center bg-white bg-opacity-20 backdrop-blur-sm rounded-xl">
                  <div className="mb-2 text-4xl">🎯</div>
                  <div className="text-sm font-black text-white">{selectedExercise.equipment}</div>
                  <div className="text-xs text-white opacity-80">Equipo</div>
                </div>
              </div>

              {/* Beneficios */}
              <div>
                <h3 className="mb-4 text-2xl font-black text-white">✨ Beneficios</h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {selectedExercise.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl">
                      <span className="text-2xl">✓</span>
                      <span className="font-medium text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => {
                  markAsCompleted(selectedExercise.id)
                }}
                className={`flex-1 py-5 rounded-2xl font-black text-xl transition-all transform hover:scale-105 active:scale-95 shadow-xl ${
                  isCompleted(selectedExercise.id)
                    ? 'bg-green-500 text-white hover:bg-green-600 ring-4 ring-green-300'
                    : 'bg-white text-gray-900 hover:shadow-2xl'
                }`}
              >
                {isCompleted(selectedExercise.id) ? '✓ ¡Completado!' : '✓ Marcar como Completado'}
              </button>
              <button
                onClick={() => setSelectedExercise(null)}
                className="px-8 py-5 text-xl font-black text-white transition-all transform bg-white sm:w-auto bg-opacity-20 backdrop-blur-sm rounded-2xl hover:bg-opacity-30 hover:scale-105 active:scale-95"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicios