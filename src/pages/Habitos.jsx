import { useState } from 'react'
import Piggy from '../components/Piggy'
import { AnimalImage, KoalaLarge } from '../components/AnimalImages'

const Habitos = () => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: 'Drink Water',
      icon: 'dog',
      goal: 8,
      unit: 'glasses',
      current: 0,
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 2,
      name: 'Exercise',
      icon: 'panda',
      goal: 30,
      unit: 'minutes',
      current: 0,
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 3,
      name: 'Meditation',
      icon: 'monkey',
      goal: 10,
      unit: 'minutes',
      current: 0,
      color: 'from-pink-400 to-purple-600'
    },
    {
      id: 4,
      name: 'Sleep',
      icon: 'koala',
      goal: 8,
      unit: 'hours',
      current: 0,
      color: 'from-blue-500 to-purple-600'
    }
  ])

  const [showAddForm, setShowAddForm] = useState(false)
  const [newHabit, setNewHabit] = useState({
    name: '',
    icon: '⭐',
    goal: 1,
    unit: 'veces',
    color: 'from-pink-400 to-purple-600'
  })

  const colors = [
    'from-blue-400 to-blue-600',
    'from-orange-400 to-orange-600',
    'from-pink-400 to-purple-600',
    'from-blue-500 to-purple-600',
    'from-green-400 to-green-600',
    'from-yellow-400 to-yellow-600',
    'from-red-400 to-red-600',
    'from-indigo-400 to-indigo-600'
  ]

  const icons = ['💧', '💪', '🧠', '🌙', '📚', '🏃', '🍎', '📖', '🎯', '✨', '⭐', '🔥', '🚀', '💡', '🎨', '🎵', '🏋️', '🧘', '📝', '🎸']

  const addHabit = (e) => {
    e.preventDefault()
    if (newHabit.name.trim()) {
      const habit = {
        id: Date.now(),
        ...newHabit,
        current: 0
      }
      setHabits([...habits, habit])
      setNewHabit({ name: '', icon: '⭐', goal: 1, unit: 'veces', color: 'from-pink-400 to-purple-600' })
      setShowAddForm(false)
    }
  }

  const updateHabit = (id, delta) => {
    setHabits(habits.map(habit => {
      if (habit.id === id) {
        const newCurrent = Math.max(0, habit.current + delta)
        return { ...habit, current: newCurrent }
      }
      return habit
    }))
  }

  const deleteHabit = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este hábito?')) {
      setHabits(habits.filter(habit => habit.id !== id))
    }
  }

  return (
    <div className="space-y-6 page-transition">
      {/* Header */}
      <div className="flex items-center justify-between animate-fade-in-up relative">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-2">
            Rastreador de Micro-Hábitos
            <Piggy size="text-2xl" animation="bounce" delay={200} />
          </h1>
          <p className="text-white opacity-80">
            Construye hábitos saludables, un paso a la vez
          </p>
        </div>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-pink-600 transition hover-lift transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
        >
          <svg className={`w-5 h-5 transition-transform duration-300 ${showAddForm ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          {showAddForm ? 'Cancelar' : 'Agregar Hábito'}
        </button>
      </div>

      {/* Formulario para agregar hábito */}
      {showAddForm && (
        <div className="bg-gradient-to-br from-purple-700 to-purple-800 rounded-2xl p-6 animate-fade-in-up border-2 border-pink-500 border-opacity-50 shadow-2xl relative">
          <div className="absolute top-4 right-4">
            <Piggy size="text-xl" animation="wiggle" delay={300} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Piggy size="text-2xl" animation="pulse" delay={0} />
            Nuevo Hábito
          </h2>
          <form onSubmit={addHabit} className="space-y-4">
            <div>
              <label className="block text-white mb-2 font-semibold">Nombre del hábito</label>
              <input
                type="text"
                value={newHabit.name}
                onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
                placeholder="Ej: Leer, Meditar, Ejercicio..."
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 text-white border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                required
                autoFocus
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white mb-2 font-semibold">Icono</label>
                <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-2 bg-white bg-opacity-5 rounded-lg">
                  {icons.map(icon => (
                    <button
                      key={icon}
                      type="button"
                      onClick={() => setNewHabit({ ...newHabit, icon })}
                      className={`text-2xl p-2 rounded-lg transition transform ${
                        newHabit.icon === icon 
                          ? 'bg-pink-500 scale-110 ring-2 ring-white' 
                          : 'bg-white bg-opacity-10 hover:bg-opacity-20 hover:scale-105 active:scale-95'
                      }`}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-white mb-2 font-semibold">Color</label>
                <div className="flex flex-wrap gap-2">
                  {colors.map(color => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setNewHabit({ ...newHabit, color })}
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} transition transform ${
                        newHabit.color === color ? 'scale-110 ring-2 ring-white ring-offset-2 ring-offset-purple-800' : 'hover:scale-105 active:scale-95'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white mb-2 font-semibold">Meta</label>
                <input
                  type="number"
                  value={newHabit.goal}
                  onChange={(e) => setNewHabit({ ...newHabit, goal: parseInt(e.target.value) || 1 })}
                  min="1"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 text-white border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white mb-2 font-semibold">Unidad</label>
                <select
                  value={newHabit.unit}
                  onChange={(e) => setNewHabit({ ...newHabit, unit: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 text-white border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                >
                  <option value="veces" className="bg-purple-800">veces</option>
                  <option value="minutos" className="bg-purple-800">minutos</option>
                  <option value="horas" className="bg-purple-800">horas</option>
                  <option value="glasses" className="bg-purple-800">vasos</option>
                  <option value="páginas" className="bg-purple-800">páginas</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                Agregar ✨
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="flex-1 bg-white bg-opacity-10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-20 transition transform hover:scale-105 active:scale-95"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Grid de Hábitos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {habits.map((habit, index) => {
          const percentage = Math.min(100, (habit.current / habit.goal) * 100)
          const delay = index * 100 // 0ms, 100ms, 200ms, 300ms
          
          return (
            <div
              key={habit.id}
              className={`bg-gradient-to-br ${habit.color} rounded-2xl p-6 text-white relative hover-lift card-glow animate-fade-in-up`}
              style={{ 
                animationDelay: `${delay}ms`,
                opacity: 0
              }}
            >
              <button
                onClick={() => deleteHabit(habit.id)}
                className="absolute top-4 right-4 text-white opacity-70 hover:opacity-100 transition transform hover:scale-125 active:scale-95 hover:rotate-90"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>

              <div className="mb-4 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-default">
                {['dog', 'panda', 'monkey', 'koala'].includes(habit.icon) && (
                  <AnimalImage type={habit.icon} size="w-40 h-40" />
                )}
                {typeof habit.icon === 'string' && !['dog', 'panda', 'monkey', 'koala'].includes(habit.icon) && (
                  <span className="text-4xl">{habit.icon}</span>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-2">{habit.name}</h3>
              <p className="text-white opacity-90 mb-4">Meta: {habit.goal} {habit.unit}</p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold">
                    {habit.current} / {habit.goal} {habit.unit}
                  </span>
                  <span className={`text-lg font-bold ${percentage === 100 ? 'text-yellow-300 animate-pulse' : ''}`}>
                    {Math.round(percentage)}%
                  </span>
                </div>
                <div className="w-full bg-white bg-opacity-30 rounded-full h-3 overflow-hidden">
                  <div
                    className={`bg-white rounded-full h-3 transition-all duration-500 ease-out ${
                      percentage === 100 ? 'bg-gradient-to-r from-yellow-300 to-yellow-500' : ''
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                {percentage === 100 && (
                  <div className="text-center mt-2 text-yellow-300 font-bold animate-bounce">
                    ¡Meta alcanzada! 🎉
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => updateHabit(habit.id, -1)}
                  className="flex-1 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg py-3 flex items-center justify-center transition transform hover:scale-110 active:scale-95 hover:bg-red-500 hover:bg-opacity-50"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <button
                  onClick={() => updateHabit(habit.id, 1)}
                  className="flex-1 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg py-3 flex items-center justify-center transition transform hover:scale-110 active:scale-95 hover:bg-green-500 hover:bg-opacity-50"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Mensaje Motivacional */}
      <div className="bg-gradient-to-br from-purple-700 to-purple-800 rounded-2xl p-8 text-center hover-lift animate-fade-in-up relative" style={{ animationDelay: '400ms', opacity: 0 }}>
        <div className="absolute top-4 right-4">
          <Piggy size="text-2xl" animation="float" delay={600} />
        </div>
        <div className="flex justify-center mb-4 relative">
          <div className="flex items-center justify-center">
            <KoalaLarge size="w-56 h-56" />
          </div>
          <div className="absolute -top-2 -right-2">
            <Piggy size="text-3xl" animation="bounce" delay={800} />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          ¡Sigue con el Gran Trabajo! ✨
        </h3>
        <p className="text-white opacity-90 text-lg">
          Cada pequeña acción cuenta. ¡Estás construyendo una mejor versión de ti mismo, un hábito a la vez!
        </p>
      </div>
    </div>
  )
}

export default Habitos

