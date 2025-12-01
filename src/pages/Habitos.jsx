import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlusIcon, XMarkIcon, TrashIcon, MinusIcon } from '@heroicons/react/24/outline'
import ReactConfetti from 'react-confetti'
import Piggy from '../components/Piggy'
import { AnimalImage } from '../components/AnimalImages'

const Habitos = () => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: 'Tomar Aguita',
      icon: 'dog',
      goal: 8,
      unit: 'glasses',
      current: 0,
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 2,
      name: 'Ejercicio',
      icon: 'panda',
      goal: 30,
      unit: 'minutes',
      current: 0,
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 3,
      name: 'Meditación',
      icon: 'monkey',
      goal: 10,
      unit: 'minutes',
      current: 0,
      color: 'from-pink-400 to-purple-600'
    },
    {
      id: 4,
      name: 'Sueño',
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
  const [confettiHabitId, setConfettiHabitId] = useState(null)

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
        const oldCurrent = habit.current;
        const newCurrent = Math.max(0, habit.current + delta);
        
        // Disparar confeti si se alcanza la meta en esta actualización
        if (oldCurrent < habit.goal && newCurrent >= habit.goal) {
          setConfettiHabitId(id);
        }

        return { ...habit, current: newCurrent };
      }
      return habit;
    }));
  };

  const deleteHabit = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este hábito?')) {
      setHabits(habits.filter(habit => habit.id !== id))
    }
  }

  return (
    <div className="space-y-6 page-transition">
      {/* Header */}
      <motion.div layout className="relative flex items-center justify-between" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div>
    <h1 className="flex items-center gap-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
                <span className="text-4xl sm:text-5xl md:text-6xl animate-pulse">🎯</span>
                Rastreador de Micro-Hábitos
      <Piggy size="text-2xl" animation="bounce" delay={200} />
    </h1>
    <p className="mt-2 text-lg sm:text-xl text-white font-medium max-w-2xl drop-shadow-md opacity-95">
                ✨ Construye hábitos saludables, un paso a la vez
              </p>
  </div>
        <motion.button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-shadow transform bg-pink-500 rounded-lg shadow-lg hover:bg-pink-600 hover-lift hover:scale-105 active:scale-95 hover:shadow-xl"
          whileTap={{ scale: 0.95 }}
          layout
        >
          <motion.div animate={{ rotate: showAddForm ? 45 : 0 }}>
            <PlusIcon className="w-5 h-5" />
          </motion.div>
          {showAddForm ? 'Cancelar' : 'Agregar Hábito'}
        </motion.button>
      </motion.div>

      {/* Formulario para agregar hábito */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative p-6 overflow-hidden border-2 border-pink-500 border-opacity-50 shadow-2xl bg-gradient-to-br from-purple-700 to-purple-800 rounded-2xl"
          >
            <div className="absolute top-4 right-4">
              <Piggy size="text-xl" animation="wiggle" delay={300} />
            </div>
            <h2 className="flex items-center gap-2 mb-4 text-2xl font-bold text-white">
              <Piggy size="text-2xl" animation="pulse" delay={0} />
              Nuevo Hábito
            </h2>
            <form onSubmit={addHabit} className="space-y-4">
              <div>
                <label className="block mb-2 font-semibold text-white">Nombre del hábito</label>
                <input
                  type="text"
                  value={newHabit.name}
                  onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
                  placeholder="Ej: Leer, Meditar, Ejercicio..."
                  className="w-full px-4 py-3 text-white transition-all bg-white border border-white rounded-lg bg-opacity-10 border-opacity-20 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  required
                  autoFocus
                />
              </div>
              
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-2 font-semibold text-white">Icono</label>
                  <div className="flex flex-wrap gap-2 p-2 overflow-y-auto bg-white rounded-lg max-h-32 bg-opacity-5">
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
                  <label className="block mb-2 font-semibold text-white">Color</label>
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

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-2 font-semibold text-white">Meta</label>
                  <input
                    type="number"
                    value={newHabit.goal}
                    onChange={(e) => setNewHabit({ ...newHabit, goal: parseInt(e.target.value) || 1 })}
                    min="1"
                    className="w-full px-4 py-3 text-white transition-all bg-white border border-white rounded-lg bg-opacity-10 border-opacity-20 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-semibold text-white">Unidad</label>
                  <select
                    value={newHabit.unit}
                    onChange={(e) => setNewHabit({ ...newHabit, unit: e.target.value })}
                    className="w-full px-4 py-3 text-white transition-all bg-white border border-white rounded-lg bg-opacity-10 border-opacity-20 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
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
                  className="flex-1 px-6 py-3 font-semibold text-white transition transform bg-pink-500 rounded-lg shadow-lg hover:bg-pink-600 hover:scale-105 active:scale-95 hover:shadow-xl"
                >
                  <span className="flex items-center justify-center gap-2">
                    <PlusIcon className="w-5 h-5" /> Agregar
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 px-6 py-3 font-semibold text-white transition transform bg-white rounded-lg bg-opacity-10 hover:bg-opacity-20 hover:scale-105 active:scale-95"
                >
                  <span className="flex items-center justify-center gap-2">
                    <XMarkIcon className="w-5 h-5" /> Cancelar
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid de Hábitos */}
      <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <AnimatePresence>
          {habits.map((habit, index) => {
            const percentage = Math.min(100, (habit.current / habit.goal) * 100)
            
            return (
              <motion.div
                layout
                key={habit.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-gradient-to-br ${habit.color} rounded-2xl p-6 text-white relative hover-lift card-glow overflow-hidden`}
              >
                {confettiHabitId === habit.id && (
                  <ReactConfetti
                    recycle={false}
                    numberOfPieces={200}
                    onConfettiComplete={() => setConfettiHabitId(null)}
                    className="w-full h-full"
                  />
                )}
                <motion.button
                  onClick={() => deleteHabit(habit.id)}
                  className="absolute text-white transition-opacity transform bg-red-500 rounded-full top-3 right-3 opacity-60 hover:opacity-100"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TrashIcon className="w-5 h-5 m-1" />
                </motion.button>

                <div className="flex items-center justify-center mb-4 transition-transform duration-300 transform cursor-default hover:scale-110">
                  {['dog', 'panda', 'monkey', 'koala'].includes(habit.icon) && (
                    <AnimalImage type={habit.icon} size="w-40 h-40" />
                  )}
                  {typeof habit.icon === 'string' && !['dog', 'panda', 'monkey', 'koala'].includes(habit.icon) && (
                    <span className="text-4xl">{habit.icon}</span>
                  )}
                </div>
                <h3 className="mb-2 text-2xl font-bold">{habit.name}</h3>
                <p className="mb-4 text-white opacity-90">Meta: {habit.goal} {habit.unit}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold">
                      {habit.current} / {habit.goal} {habit.unit}
                    </span>
                    <span className={`text-lg font-bold ${percentage === 100 ? 'text-yellow-300 animate-pulse' : ''}`}>
                      {Math.round(percentage)}%
                    </span>
                  </div>
                  <div className="w-full h-3 overflow-hidden bg-white rounded-full bg-opacity-30">
                    <motion.div
                      className={`bg-white rounded-full h-3 ${
                        percentage === 100 ? 'bg-gradient-to-r from-yellow-300 to-yellow-500' : ''
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                  {percentage === 100 && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className="inline-block px-3 py-1 mt-3 text-sm font-bold text-yellow-800 bg-yellow-300 rounded-full shadow-lg"
                      style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
                    >
                      ¡Meta alcanzada! 🎉
                    </motion.div>
                  )}
                </div>

                <div className="flex gap-3">
                  <motion.button
                    onClick={() => updateHabit(habit.id, -1)}
                    className="flex items-center justify-center flex-1 py-3 transition-colors duration-200 bg-white rounded-lg bg-opacity-20 hover:bg-red-500 hover:bg-opacity-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MinusIcon className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    onClick={() => updateHabit(habit.id, 1)}
                    className="flex items-center justify-center flex-1 py-3 transition-colors duration-200 bg-white rounded-lg bg-opacity-20 hover:bg-green-500 hover:bg-opacity-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PlusIcon className="w-6 h-6" />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* Mensaje Motivacional */}
      <div className="relative p-8 text-center bg-gradient-to-br from-purple-700 to-purple-800 rounded-2xl hover-lift animate-fade-in-up" style={{ animationDelay: '400ms', opacity: 0 }}>
        <div className="absolute top-4 right-4">
          <Piggy size="text-2xl" animation="float" delay={600} />
        </div>
        <div className="relative flex justify-center mb-4">
          <div className="flex items-center justify-center">
            <img src="/images/joven.png" alt="Celebrando" className="w-56 h-56" />
          </div>
          <div className="absolute -top-2 -right-2">
            <Piggy size="text-3xl" animation="bounce" delay={800} />
          </div>
        </div>
        <h3 className="mb-2 text-2xl font-bold text-white">
          ¡Sigue con el Gran Trabajo! ✨
        </h3>
        <p className="text-lg text-white opacity-90">
          Cada pequeña acción cuenta. ¡Estás construyendo una mejor versión de ti mismo, un hábito a la vez!
        </p>
      </div>
    </div>
  )
}

export default Habitos
