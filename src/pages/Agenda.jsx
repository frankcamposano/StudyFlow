import { useState } from 'react'
import Piggy from '../components/Piggy'

const Agenda = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState({
    title: '',
    category: 'Estudio',
    startTime: '',
    endTime: ''
  })

  const handleAddTask = (e) => {
    e.preventDefault()
    if (newTask.title.trim()) {
      setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }])
      setNewTask({ title: '', category: 'Estudio', startTime: '', endTime: '' })
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

  return (
    <div className="space-y-6 page-transition">
      {/* Header de la página */}
      <div className="flex items-center justify-between animate-fade-in-up relative">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-2">
            Agenda Diaria
            <Piggy size="text-2xl" animation="bounce" delay={300} />
          </h1>
          <p className="text-white opacity-80">
            Organiza tu día y encuentra tiempo productivo oculto
          </p>
        </div>
        {totalTasks > 0 && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full px-6 py-3 text-white font-bold shadow-lg animate-pulse">
            <span className="text-2xl">{completedTasks}</span>
            <span className="text-lg opacity-90">/{totalTasks}</span>
          </div>
        )}
      </div>

      {/* Formulario para agregar tarea */}
      <div className="bg-gradient-to-br from-purple-700 to-purple-800 rounded-2xl p-6 hover-lift animate-fade-in-up relative" style={{ animationDelay: '0.1s', opacity: 0 }}>
        <div className="absolute top-4 right-4">
          <Piggy size="text-xl" animation="pulse" delay={400} />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Agregar Nueva Tarea</h2>
        <form onSubmit={handleAddTask} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Título de la tarea..."
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              className="px-4 py-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-60 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <select
              value={newTask.category}
              onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
              className="px-4 py-3 rounded-lg bg-white bg-opacity-10 text-white border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="Estudio" className="bg-purple-800">Estudio</option>
              <option value="Trabajo" className="bg-purple-800">Trabajo</option>
              <option value="Personal" className="bg-purple-800">Personal</option>
              <option value="Ejercicio" className="bg-purple-800">Ejercicio</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="time"
                value={newTask.startTime}
                onChange={(e) => setNewTask({ ...newTask, startTime: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 text-white border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <svg className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-white opacity-60 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="relative">
              <input
                type="time"
                value={newTask.endTime}
                onChange={(e) => setNewTask({ ...newTask, endTime: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 text-white border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <svg className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-white opacity-60 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-pink-600 transition transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Agregar Tarea
          </button>
        </form>
      </div>

      {/* Lista de tareas */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>Tareas de Hoy</h2>
        {tasks.length === 0 ? (
          <div className="bg-gradient-to-br from-purple-700 to-purple-800 rounded-2xl p-12 text-center animate-fade-in-up relative" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <div className="flex justify-center mb-6 relative">
              <svg className="w-32 h-32 text-white opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Piggy size="text-4xl" animation="float" delay={500} />
              </div>
            </div>
            <p className="text-white text-lg">
              No hay tareas aún. ¡Agrega tu primera tarea para empezar!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.map((task, index) => (
              <div
                key={task.id}
                className={`bg-gradient-to-br from-purple-700 to-purple-800 rounded-xl p-4 flex items-center justify-between hover-lift animate-slide-in-right transition-all duration-300 ${
                  task.completed ? 'opacity-60 scale-95' : ''
                }`}
                style={{ animationDelay: `${0.3 + index * 0.1}s`, opacity: 0 }}
              >
                <div className="flex items-center gap-4 flex-1">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 ${
                      task.completed
                        ? 'bg-green-500 border-green-500 shadow-lg shadow-green-500/50'
                        : 'border-white border-opacity-40 hover:border-pink-500'
                    }`}
                  >
                    {task.completed && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <div className="flex-1">
                    <h3 className={`text-white font-semibold text-lg transition-all ${
                      task.completed ? 'line-through opacity-60' : ''
                    }`}>
                      {task.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-white opacity-80 text-sm">
                      <span className={`px-3 py-1 rounded-full transition-all ${
                        task.completed 
                          ? 'bg-green-500 bg-opacity-30' 
                          : 'bg-white bg-opacity-20'
                      }`}>
                        {task.category}
                      </span>
                      {task.startTime && <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {task.startTime}
                      </span>}
                      {task.endTime && <span>- {task.endTime}</span>}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-white opacity-60 hover:opacity-100 transition transform hover:scale-125 active:scale-95 hover:text-red-400 ml-4"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Agenda

