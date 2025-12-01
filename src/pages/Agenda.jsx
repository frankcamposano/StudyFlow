import { useState } from 'react'

// Componente Piggy mejorado
const Piggy = ({ size = "text-2xl", animation = "bounce", delay = 0 }) => {
  const animations = {
    bounce: 'animate-bounce',
    pulse: 'animate-pulse',
    float: 'animate-bounce',
  }

  return (
    <span 
      className={`${size} ${animations[animation]}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      🐷
    </span>
  )
}

const Agenda = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState({
    title: '',
    category: 'Estudio',
    startTime: '',
    endTime: '',
    priority: 'media'
  })
  const [filter, setFilter] = useState('todas')
  const [sortBy, setSortBy] = useState('time')

  const categoryColors = {
    'Estudio': 'from-blue-500 to-blue-600',
    'Trabajo': 'from-orange-500 to-orange-600',
    'Personal': 'from-purple-500 to-purple-600',
    'Ejercicio': 'from-green-500 to-green-600'
  }

  const priorityColors = {
    'alta': 'border-red-500 border-l-4',
    'media': 'border-yellow-500 border-l-4',
    'baja': 'border-green-500 border-l-4'
  }

  const handleAddTask = () => {
    if (newTask.title.trim()) {
      setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }])
      setNewTask({ title: '', category: 'Estudio', startTime: '', endTime: '', priority: 'media' })
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleAddTask()
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const completedTasks = tasks.filter(t => t.completed).length
  const totalTasks = tasks.length
  const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0

  // Filtrar y ordenar tareas
  const getFilteredTasks = () => {
    let filtered = tasks

    if (filter === 'completadas') {
      filtered = tasks.filter(t => t.completed)
    } else if (filter === 'pendientes') {
      filtered = tasks.filter(t => !t.completed)
    }

    if (sortBy === 'time') {
      return filtered.sort((a, b) => {
        if (!a.startTime) return 1
        if (!b.startTime) return -1
        return a.startTime.localeCompare(b.startTime)
      })
    } else if (sortBy === 'priority') {
      const priorityOrder = { alta: 0, media: 1, baja: 2 }
      return filtered.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
    }

    return filtered
  }

  const filteredTasks = getFilteredTasks()

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header mejorado */}
        <div className="p-6 bg-white border border-white shadow-2xl bg-opacity-10 backdrop-blur-lg rounded-3xl md:p-8 border-opacity-20">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="flex items-center gap-3 mb-2 text-4xl font-bold text-white md:text-5xl">
                ✨ Agenda Diaria
                <Piggy size="text-3xl" animation="bounce" delay={300} />
              </h1>
              <p className="text-lg text-white text-opacity-90">
                Organiza tu día y maximiza tu productividad
              </p>
            </div>
            {totalTasks > 0 && (
              <div className="px-6 py-4 transition-transform transform shadow-lg bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl hover:scale-105">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold">{completedTasks}/{totalTasks}</div>
                  <div className="mt-1 text-sm opacity-90">Completadas</div>
                </div>
              </div>
            )}
          </div>

          {/* Barra de progreso */}
          {totalTasks > 0 && (
            <div className="mt-6">
              <div className="flex justify-between mb-2 text-sm text-white">
                <span>Progreso del día</span>
                <span className="font-semibold">{Math.round(progressPercentage)}%</span>
              </div>
              <div className="h-3 overflow-hidden bg-white rounded-full bg-opacity-20">
                <div 
                  className="h-full transition-all duration-500 ease-out rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Formulario mejorado */}
        <div className="p-6 bg-white border border-white shadow-2xl bg-opacity-10 backdrop-blur-lg rounded-3xl md:p-8 border-opacity-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white md:text-3xl">
              ➕ Nueva Tarea
            </h2>
            <Piggy size="text-2xl" animation="pulse" delay={400} />
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="¿Qué necesitas hacer?"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                onKeyPress={handleKeyPress}
                className="px-5 py-4 text-white placeholder-white transition-all bg-white border-2 border-white rounded-xl bg-opacity-20 placeholder-opacity-60 border-opacity-30 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              />
              <select
                value={newTask.category}
                onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
                className="px-5 py-4 text-white transition-all bg-white border-2 border-white rounded-xl bg-opacity-20 border-opacity-30 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option value="Estudio" className="bg-purple-800">📚 Estudio</option>
                <option value="Trabajo" className="bg-purple-800">💼 Trabajo</option>
                <option value="Personal" className="bg-purple-800">🎯 Personal</option>
                <option value="Ejercicio" className="bg-purple-800">💪 Ejercicio</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="relative">
                <label className="block mb-2 text-sm text-white opacity-90">Hora inicio</label>
                <input
                  type="time"
                  value={newTask.startTime}
                  onChange={(e) => setNewTask({ ...newTask, startTime: e.target.value })}
                  className="w-full px-5 py-3 text-white transition-all bg-white border-2 border-white rounded-xl bg-opacity-20 border-opacity-30 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div className="relative">
                <label className="block mb-2 text-sm text-white opacity-90">Hora fin</label>
                <input
                  type="time"
                  value={newTask.endTime}
                  onChange={(e) => setNewTask({ ...newTask, endTime: e.target.value })}
                  className="w-full px-5 py-3 text-white transition-all bg-white border-2 border-white rounded-xl bg-opacity-20 border-opacity-30 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-white opacity-90">Prioridad</label>
                <select
                  value={newTask.priority}
                  onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                  className="w-full px-5 py-3 text-white transition-all bg-white border-2 border-white rounded-xl bg-opacity-20 border-opacity-30 focus:outline-none focus:ring-2 focus:ring-pink-400"
                >
                  <option value="alta" className="bg-purple-800">🔴 Alta</option>
                  <option value="media" className="bg-purple-800">🟡 Media</option>
                  <option value="baja" className="bg-purple-800">🟢 Baja</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleAddTask}
              className="flex items-center justify-center w-full gap-3 px-6 py-4 text-lg font-bold text-white transition-all transform shadow-xl bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl hover:from-pink-600 hover:to-purple-600 hover:scale-105 active:scale-95 hover:shadow-2xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Agregar Tarea
            </button>
          </div>
        </div>

        {/* Filtros y ordenamiento */}
        {tasks.length > 0 && (
          <div className="p-4 bg-white border border-white shadow-xl bg-opacity-10 backdrop-blur-lg rounded-2xl border-opacity-20">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter('todas')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    filter === 'todas' 
                      ? 'bg-white text-purple-900' 
                      : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                  }`}
                >
                  Todas ({tasks.length})
                </button>
                <button
                  onClick={() => setFilter('pendientes')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    filter === 'pendientes' 
                      ? 'bg-white text-purple-900' 
                      : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                  }`}
                >
                  Pendientes ({tasks.filter(t => !t.completed).length})
                </button>
                <button
                  onClick={() => setFilter('completadas')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    filter === 'completadas' 
                      ? 'bg-white text-purple-900' 
                      : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                  }`}
                >
                  Completadas ({completedTasks})
                </button>
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 text-white bg-white border border-white rounded-lg bg-opacity-20 border-opacity-30 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option value="time" className="bg-purple-800">Ordenar por hora</option>
                <option value="priority" className="bg-purple-800">Ordenar por prioridad</option>
              </select>
            </div>
          </div>
        )}

        {/* Lista de tareas mejorada */}
        <div>
          {filteredTasks.length === 0 ? (
            <div className="p-12 text-center bg-white border border-white shadow-2xl bg-opacity-10 backdrop-blur-lg rounded-3xl border-opacity-20">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <svg className="w-32 h-32 text-white opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <Piggy size="text-5xl" animation="float" delay={500} />
                  </div>
                </div>
              </div>
              <p className="mb-2 text-xl font-semibold text-white">
                {tasks.length === 0 ? '¡Todo listo para empezar!' : 'No hay tareas en esta categoría'}
              </p>
              <p className="text-white opacity-80">
                {tasks.length === 0 ? 'Agrega tu primera tarea y comienza a ser productivo' : 'Prueba con otro filtro'}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredTasks.map((task, index) => (
                <div
                  key={task.id}
                  className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-5 shadow-xl border border-white border-opacity-20 hover:shadow-2xl transition-all duration-300 transform hover:scale-102 ${
                    task.completed ? 'opacity-70' : ''
                  } ${priorityColors[task.priority]}`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all transform hover:scale-110 active:scale-95 mt-1 ${
                        task.completed
                          ? 'bg-gradient-to-br from-green-400 to-green-500 border-green-400 shadow-lg'
                          : 'border-white border-opacity-40 hover:border-pink-400 hover:bg-white hover:bg-opacity-10'
                      }`}
                    >
                      {task.completed && (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-white font-bold text-lg mb-2 transition-all ${
                        task.completed ? 'line-through opacity-60' : ''
                      }`}>
                        {task.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className={`px-3 py-1 rounded-full font-semibold text-white bg-gradient-to-r ${categoryColors[task.category]} shadow-md`}>
                          {task.category}
                        </span>
                        {task.startTime && (
                          <span className="flex items-center gap-1 text-white opacity-90">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {task.startTime}
                            {task.endTime && ` - ${task.endTime}`}
                          </span>
                        )}
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          task.priority === 'alta' ? 'bg-red-500 text-white' :
                          task.priority === 'media' ? 'bg-yellow-500 text-white' :
                          'bg-green-500 text-white'
                        }`}>
                          {task.priority.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="flex-shrink-0 text-white transition-all transform opacity-60 hover:opacity-100 hover:scale-125 active:scale-95 hover:text-red-400"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Estadísticas rápidas */}
        {tasks.length > 0 && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="p-4 text-center bg-white border border-white shadow-xl bg-opacity-10 backdrop-blur-lg rounded-2xl border-opacity-20">
              <div className="text-3xl font-bold text-white">{tasks.length}</div>
              <div className="mt-1 text-sm text-white opacity-80">Total</div>
            </div>
            <div className="p-4 text-center bg-white border border-white shadow-xl bg-opacity-10 backdrop-blur-lg rounded-2xl border-opacity-20">
              <div className="text-3xl font-bold text-green-400">{completedTasks}</div>
              <div className="mt-1 text-sm text-white opacity-80">Completadas</div>
            </div>
            <div className="p-4 text-center bg-white border border-white shadow-xl bg-opacity-10 backdrop-blur-lg rounded-2xl border-opacity-20">
              <div className="text-3xl font-bold text-yellow-400">{tasks.filter(t => !t.completed).length}</div>
              <div className="mt-1 text-sm text-white opacity-80">Pendientes</div>
            </div>
            <div className="p-4 text-center bg-white border border-white shadow-xl bg-opacity-10 backdrop-blur-lg rounded-2xl border-opacity-20">
              <div className="text-3xl font-bold text-red-400">{tasks.filter(t => t.priority === 'alta' && !t.completed).length}</div>
              <div className="mt-1 text-sm text-white opacity-80">Alta Prioridad</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Agenda