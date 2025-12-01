import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Plus, Trash2, Smile, Frown, Sparkles } from 'lucide-react'

// Mock de estados de ánimo para seleccionar
const moods = [
  { mood: 'Feliz', icon: Smile, color: 'text-green-400' },
  { mood: 'Normal', icon: () => <span className="text-2xl">😐</span>, color: 'text-yellow-400' },
  { mood: 'Triste', icon: Frown, color: 'text-blue-400' },
  { mood: 'Productivo', icon: Sparkles, color: 'text-purple-400' }
]

// Componente Piggy simple
const Piggy = ({ size = "text-6xl", animation = "bounce" }) => {
  return (
    <motion.div
      className={`inline-block ${size}`}
      animate={animation === "bounce" ? { y: [0, -10, 0] } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    >
      🐷
    </motion.div>
  )
}

const Diario = () => {
  // Estado para almacenar las entradas del diario. No persistirá al recargar.
  const [entries, setEntries] = useState([])
  const [newEntry, setNewEntry] = useState('')
  const [selectedMood, setSelectedMood] = useState(moods[0])
  
  // Referencia para auto-focus
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newEntry.trim() === '') return

    const entry = {
      id: Date.now(),
      text: newEntry,
      mood: selectedMood,
      date: new Date().toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    }
    setEntries([entry, ...entries])
    setNewEntry('')
    setSelectedMood(moods[0])
  }

  const handleDelete = (id) => {
    setEntries(entries.filter(entry => entry.id !== id))
  }

  // --- Renderizado del Componente ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header con gradiente */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
          <div className="relative p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-purple-500/30">
            <h1 className="flex items-center gap-3 text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              <BookOpen className="w-12 h-12 text-purple-400" />
              Mi Diario Personal
            </h1>
            <p className="mt-2 text-lg text-gray-300">
              Un espacio para tus pensamientos, ideas y reflexiones ✨
            </p>
          </div>
        </motion.div>

        {/* Formulario para nueva entrada con glassmorphism */}
        <motion.div 
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative p-8 space-y-6 bg-gray-800/60 backdrop-blur-xl border border-purple-500/30 rounded-3xl shadow-2xl">
              <textarea
                ref={textareaRef}
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.ctrlKey) {
                    handleSubmit(e)
                  }
                }}
                placeholder="¿Qué tienes en mente hoy? Escribe aquí tus pensamientos..."
                className="w-full px-5 py-4 text-white text-lg transition-all bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder:text-gray-400 hover:bg-white/10 resize-none"
                rows="5"
              />
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-purple-300 uppercase tracking-wide">¿Cómo te sientes?</label>
                  <div className="flex gap-3">
                    {moods.map(m => (
                      <motion.button
                        type="button"
                        key={m.mood}
                        onClick={() => setSelectedMood(m)}
                        className={`p-3 rounded-2xl transition-all duration-200 ${
                          selectedMood.mood === m.mood 
                            ? 'bg-white/20 ring-2 ring-purple-400 shadow-lg shadow-purple-500/50' 
                            : 'bg-white/5 opacity-60 hover:opacity-100 hover:bg-white/10'
                        }`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <m.icon className={`w-8 h-8 ${m.color}`} />
                      </motion.button>
                    ))}
                  </div>
                </div>
                <motion.button
                  onClick={handleSubmit}
                  className="flex items-center justify-center w-full gap-2 px-8 py-4 font-bold text-white text-lg bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl shadow-purple-500/50 sm:w-auto hover:shadow-purple-500/70 transition-all duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Plus className="w-6 h-6" />
                  Agregar Entrada
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lista de Entradas con diseño mejorado */}
        <div className="space-y-6 pb-8">
          <AnimatePresence>
            {entries.length > 0 ? (
              entries.map((entry, index) => (
                <motion.div
                  key={entry.id}
                  layout
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.8, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-8 bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-purple-500/20 rounded-3xl shadow-xl group-hover:border-purple-500/40 transition-all duration-300">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-500/20 rounded-full border border-purple-500/30">
                            {entry.date}
                          </span>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-100">
                          {entry.text}
                        </p>
                      </div>
                      <div className="flex flex-col items-center gap-2 px-4 py-3 bg-white/5 rounded-2xl border border-white/10">
                        <entry.mood.icon className={`w-10 h-10 ${entry.mood.color}`} />
                        <span className="text-xs font-semibold text-gray-300">{entry.mood.mood}</span>
                      </div>
                    </div>
                    <motion.button
                      onClick={() => handleDelete(entry.id)}
                      className="absolute p-2 bg-red-500/80 backdrop-blur-sm rounded-full -top-3 -right-3 opacity-0 group-hover:opacity-100 hover:bg-red-500 transition-all duration-200 shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trash2 className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>
                </motion.div>
              ))
            ) : (
              // --- Estado Vacío mejorado ---
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl blur-2xl"></div>
                <div className="relative py-20 text-center bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-purple-500/20 rounded-3xl">
                  <Piggy size="text-7xl" animation="bounce" />
                  <h3 className="mt-6 text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Tu diario está vacío
                  </h3>
                  <p className="max-w-md mx-auto mt-3 text-gray-400 text-lg">
                    Usa el formulario de arriba para añadir tu primera entrada. ¡No hay mejor momento que ahora! ✨
                  </p>
                  <motion.button
                    onClick={() => textareaRef.current?.focus()}
                    className="flex items-center gap-2 px-8 py-4 mx-auto mt-8 font-bold text-white text-lg bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus className="w-6 h-6" />
                    Crear mi primera entrada
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Diario