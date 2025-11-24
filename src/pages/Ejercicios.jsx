import { useState } from 'react'

const Ejercicios = () => {
  const [selectedCategory, setSelectedCategory] = useState('cardio')
  const [selectedExercise, setSelectedExercise] = useState(null)
  const [completedExercises, setCompletedExercises] = useState([])

  const exercises = {
    cardio: [
      {
        id: 'cardio1',
        name: '🏃 HIIT 20 Minutos - Quema Grasa Rápido',
        duration: 20,
        difficulty: 'Intermedio',
        calories: 250,
        videoId: 'ml6DVrYP-H8',
        description: 'Entrenamiento de alta intensidad para quemar grasa y aumentar resistencia.',
        benefits: ['Quema grasa', 'Resistencia', 'Energía']
      },
      {
        id: 'cardio2',
        name: '🚴 Cardio Completo 30 Minutos',
        duration: 30,
        difficulty: 'Principiante',
        calories: 300,
        videoId: 'cjN0GCZn-z8',
        description: 'Rutina de cardio suave para principiantes con movimientos básicos.',
        benefits: ['Corazón', 'Resistencia', 'Energía']
      },
      {
        id: 'cardio3',
        name: '⚡ Cardio Explosivo 15 Minutos',
        duration: 15,
        difficulty: 'Avanzado',
        calories: 200,
        videoId: '1V9kcSLQBhM',
        description: 'Explosión de energía en 15 minutos. Ideal para días ocupados.',
        benefits: ['Quema rápida', 'Energía', 'Tiempo corto']
      }
    ],
    strength: [
      {
        id: 'strength1',
        name: '💪 Brazos y Espalda - 25 Minutos',
        duration: 25,
        difficulty: 'Intermedio',
        calories: 180,
        videoId: 'Sc5sxV0cRM8',
        description: 'Fortalece brazos, hombros y espalda. Necesita mancuernas opcionales.',
        benefits: ['Fuerza', 'Definición', 'Postura']
      },
      {
        id: 'strength2',
        name: '🦵 Piernas y Glúteos - 30 Minutos',
        duration: 30,
        difficulty: 'Intermedio',
        calories: 280,
        videoId: 'UgwO3bEVLXU',
        description: 'Potencia tu tren inferior. Sin equipo necesario.',
        benefits: ['Piernas tonificadas', 'Glúteos', 'Resistencia']
      },
      {
        id: 'strength3',
        name: '🏋️ Full Body - 40 Minutos',
        duration: 40,
        difficulty: 'Avanzado',
        calories: 350,
        videoId: 'h2nK-kHLs0Y',
        description: 'Entrena todo el cuerpo en una sesión. Máxima intensidad.',
        benefits: ['Cuerpo completo', 'Definición', 'Fuerza']
      }
    ],
    flexibility: [
      {
        id: 'flex1',
        name: '🧘 Yoga Relajante - 20 Minutos',
        duration: 20,
        difficulty: 'Principiante',
        calories: 80,
        videoId: '5dT-UM2vwqA',
        description: 'Yoga suave para relajarse y mejorar flexibilidad.',
        benefits: ['Flexibilidad', 'Relajación', 'Balance']
      },
      {
        id: 'flex2',
        name: '🤸 Estiramiento Completo - 15 Minutos',
        duration: 15,
        difficulty: 'Principiante',
        calories: 50,
        videoId: 'C0LE1HAbJnw',
        description: 'Rutina de estiramiento para después del entrenamiento.',
        benefits: ['Flexibilidad', 'Recuperación', 'Relajación']
      },
      {
        id: 'flex3',
        name: '🧘‍♀️ Yoga Dinámico - 30 Minutos',
        duration: 30,
        difficulty: 'Intermedio',
        calories: 150,
        videoId: 'UjIm7dqT8Ks',
        description: 'Yoga fluido que combina fuerza y flexibilidad.',
        benefits: ['Fuerza', 'Flexibilidad', 'Equilibrio']
      }
    ],
    core: [
      {
        id: 'core1',
        name: '⭕ Abdominales Rápidos - 10 Minutos',
        duration: 10,
        difficulty: 'Principiante',
        calories: 100,
        videoId: 'K3yVvI58s2A',
        description: 'Rutina ultra-rápida de abdominales sin equipo.',
        benefits: ['Abdominales', 'Core', 'Rapidez']
      },
      {
        id: 'core2',
        name: '💥 Core de Fuego - 20 Minutos',
        duration: 20,
        difficulty: 'Intermedio',
        calories: 150,
        videoId: '0Z1DV0nR4ZA',
        description: 'Entrenamiento intenso de núcleo central.',
        benefits: ['Core fuerte', 'Estabilidad', 'Postura']
      },
      {
        id: 'core3',
        name: '🔥 Planchas Extremas - 15 Minutos',
        duration: 15,
        difficulty: 'Avanzado',
        calories: 120,
        videoId: 'WRQ8hCaXfE8',
        description: 'Variaciones de planchas para un core de acero.',
        benefits: ['Estabilidad', 'Fuerza', 'Resistencia']
      }
    ]
  }

  const categories = [
    { id: 'cardio', name: '🏃 Cardio', emoji: '💨' },
    { id: 'strength', name: '💪 Fuerza', emoji: '🏋️' },
    { id: 'flexibility', name: '🧘 Flexibilidad', emoji: '🤸' },
    { id: 'core', name: '⭕ Core', emoji: '💥' }
  ]

  const markAsCompleted = (exerciseId) => {
    setCompletedExercises(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(id => id !== exerciseId)
        : [...prev, exerciseId]
    )
  }

  const isCompleted = (id) => completedExercises.includes(id)

  return (
    <div className="space-y-8 page-transition">
      {/* Header */}
      <div className="flex items-center justify-between animate-fade-in-up">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">💪 Ejercicios para el Físico</h1>
          <p className="text-white opacity-80">Rutinas de YouTube para mejorar tu cuerpo</p>
        </div>
        <div className="text-6xl animate-bounce-animal">🏋️</div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white hover-lift card-glow animate-scale-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <div className="text-4xl mb-2">🏋️</div>
          <div className="text-4xl font-bold mb-1">{exercises[selectedCategory].length}</div>
          <div className="text-lg">Ejercicios</div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white hover-lift card-glow animate-scale-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <div className="text-4xl mb-2">✓</div>
          <div className="text-4xl font-bold mb-1">{completedExercises.length}</div>
          <div className="text-lg">Completados</div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white hover-lift card-glow animate-scale-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <div className="text-4xl mb-2">⏱️</div>
          <div className="text-4xl font-bold mb-1">
            {exercises[selectedCategory].reduce((acc, ex) => acc + ex.duration, 0)}
          </div>
          <div className="text-lg">Minutos totales</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white hover-lift card-glow animate-scale-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <div className="text-4xl mb-2">🔥</div>
          <div className="text-4xl font-bold mb-1">
            {exercises[selectedCategory].reduce((acc, ex) => acc + ex.calories, 0)}
          </div>
          <div className="text-lg">Calorías quemadas</div>
        </div>
      </div>

      {/* Categorías */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
          Elige tu Categoría
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id)
                setSelectedExercise(null)
              }}
              className={`p-6 rounded-2xl transition transform hover:scale-105 active:scale-95 hover-lift animate-scale-in ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-br from-pink-500 to-purple-600 border-2 border-white'
                  : 'bg-gradient-to-br from-purple-600 to-purple-700 border-2 border-transparent hover:border-pink-500'
              } text-white font-bold text-lg`}
              style={{ animationDelay: `${0.5 + idx * 0.1}s`, opacity: 0 }}
            >
              <div className="text-4xl mb-2">{cat.emoji}</div>
              <div className="text-sm">{cat.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Ejercicios */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white animate-fade-in-up" style={{ animationDelay: '0.7s', opacity: 0 }}>
          Rutinas Disponibles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises[selectedCategory].map((exercise, idx) => (
            <div
              key={exercise.id}
              className={`relative rounded-2xl overflow-hidden hover-lift card-glow animate-scale-in cursor-pointer transition ${
                isCompleted(exercise.id)
                  ? 'bg-gradient-to-br from-green-600 to-green-700 border-2 border-green-400'
                  : 'bg-gradient-to-br from-purple-700 to-purple-800 border-2 border-transparent hover:border-pink-500'
              }`}
              style={{ animationDelay: `${0.8 + idx * 0.1}s`, opacity: 0 }}
              onClick={() => setSelectedExercise(exercise)}
            >
              <div className="p-6 text-white">
                {/* Checkbox completado */}
                {isCompleted(exercise.id) && (
                  <div className="absolute top-4 right-4 bg-green-400 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                )}

                {/* Contenido */}
                <h3 className="text-xl font-bold mb-3">{exercise.name}</h3>
                <p className="text-sm opacity-80 mb-4">{exercise.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-white bg-opacity-10 rounded-lg p-2 text-center">
                    <div className="text-xs opacity-70">Duración</div>
                    <div className="font-bold">{exercise.duration}m</div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-2 text-center">
                    <div className="text-xs opacity-70">Dificultad</div>
                    <div className="font-bold text-xs">{exercise.difficulty}</div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-2 text-center">
                    <div className="text-xs opacity-70">Calorías</div>
                    <div className="font-bold">{exercise.calories}</div>
                  </div>
                </div>

                {/* Beneficios */}
                <div className="space-y-1 mb-4">
                  {exercise.benefits.map((benefit, i) => (
                    <div key={i} className="text-xs opacity-80 flex items-center gap-2">
                      <span className="text-green-400">•</span> {benefit}
                    </div>
                  ))}
                </div>

                {/* Botones */}
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedExercise(exercise)
                    }}
                    className="flex-1 bg-white text-purple-700 font-bold py-2 rounded-lg hover:bg-opacity-90 transition transform hover:scale-105 active:scale-95"
                  >
                    👁️ Ver Video
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      markAsCompleted(exercise.id)
                    }}
                    className={`px-4 py-2 rounded-lg font-bold transition transform hover:scale-105 active:scale-95 ${
                      isCompleted(exercise.id)
                        ? 'bg-green-400 text-green-900'
                        : 'bg-white text-purple-700'
                    }`}
                  >
                    {isCompleted(exercise.id) ? '✓ Hecho' : '□'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Video */}
      {selectedExercise && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-purple-700 to-purple-800 rounded-3xl p-8 max-w-2xl w-full border border-white border-opacity-20 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedExercise.name}</h2>
              <button
                onClick={() => setSelectedExercise(null)}
                className="text-white text-3xl hover:opacity-60 transition"
              >
                ✕
              </button>
            </div>

            {/* Video */}
            <div className="mb-6 rounded-2xl overflow-hidden bg-black">
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${selectedExercise.videoId}`}
                title={selectedExercise.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Información */}
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 mb-6 space-y-4">
              <p className="text-white text-lg">{selectedExercise.description}</p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                  <div className="text-4xl mb-2">⏱️</div>
                  <div className="text-white font-bold text-xl">{selectedExercise.duration} min</div>
                  <div className="text-white opacity-70 text-sm">Duración</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <div className="text-white font-bold text-xl">{selectedExercise.difficulty}</div>
                  <div className="text-white opacity-70 text-sm">Dificultad</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                  <div className="text-4xl mb-2">🔥</div>
                  <div className="text-white font-bold text-xl">{selectedExercise.calories} cal</div>
                  <div className="text-white opacity-70 text-sm">Calorías</div>
                </div>
              </div>

              <div>
                <div className="text-white font-bold mb-3">✨ Beneficios:</div>
                <div className="space-y-2">
                  {selectedExercise.benefits.map((benefit, i) => (
                    <div key={i} className="text-white opacity-90 flex items-center gap-2 text-lg">
                      <span className="text-green-400">✓</span> {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex gap-4">
              <button
                onClick={() => {
                  markAsCompleted(selectedExercise.id)
                  setSelectedExercise(null)
                }}
                className={`flex-1 py-4 rounded-xl font-bold text-lg transition transform hover:scale-105 active:scale-95 ${
                  isCompleted(selectedExercise.id)
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg'
                }`}
              >
                {isCompleted(selectedExercise.id) ? '✓ Completado' : '✓ Marcar como Completado'}
              </button>
              <button
                onClick={() => setSelectedExercise(null)}
                className="flex-1 py-4 rounded-xl font-bold text-lg bg-white text-purple-700 hover:bg-opacity-90 transition transform hover:scale-105 active:scale-95"
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
