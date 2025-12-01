import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpenIcon, PlusIcon, TrashIcon, FaceSmileIcon, FaceFrownIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Piggy from '../components/Piggy'

// Mock de estados de ánimo para seleccionar
const moods = [
  { mood: 'Feliz', icon: FaceSmileIcon, color: 'text-green-400' },
  { mood: 'Normal', icon: () => <span className="text-2xl">😐</span>, color: 'text-yellow-400' },
  { mood: 'Triste', icon: FaceFrownIcon, color: 'text-blue-400' },
  { mood: 'Productivo', icon: SparklesIcon, color: 'text-purple-400' }
]

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
    <div className="space-y-8 page-transition">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="flex items-center gap-3 text-4xl font-bold text-white">
          <BookOpenIcon className="w-10 h-10" />
          Mi Diario Personal
        </h1>
        <p className="text-white opacity-80">
          Un espacio para tus pensamientos, ideas y reflexiones.
        </p>
      </motion.div>

      {/* Formulario para nueva entrada */}
      <motion.div layout>
        <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-gray-800 border border-purple-500 rounded-2xl bg-opacity-60 shadow-xl">
          <textarea
            ref={textareaRef}
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            placeholder="¿Qué tienes en mente hoy?"
            className="w-full px-4 py-3 text-white transition-all bg-white border-transparent rounded-lg bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="4"
          />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-2">
              <label className="font-semibold text-white">¿Cómo te sientes?</label>
              <div className="flex gap-2">
                {moods.map(m => (
                  <motion.button
                    type="button"
                    key={m.mood}
                    onClick={() => setSelectedMood(m)}
                    className={`p-2 rounded-full transition-all duration-200 ${selectedMood.mood === m.mood ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-100'}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <m.icon className={`w-7 h-7 ${m.color}`} />
                  </motion.button>
                ))}
              </div>
            </div>
            <motion.button
              type="submit"
              className="flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold text-white transition-transform bg-purple-600 rounded-lg shadow-lg sm:w-auto hover:bg-purple-700 hover:scale-105 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PlusIcon className="w-5 h-5" />
              Agregar Entrada
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* Lista de Entradas */}
      <div className="space-y-6">
        <AnimatePresence>
          {entries.length > 0 ? (
            entries.map((entry, index) => (
              <motion.div
                key={entry.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative p-6 text-white bg-gray-800 rounded-xl bg-opacity-40"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-400">{entry.date}</p>
                    <p className="mt-2 text-lg text-gray-200">{entry.text}</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 ml-4">
                    <entry.mood.icon className={`w-8 h-8 ${entry.mood.color}`} />
                    <span className="text-xs text-gray-400">{entry.mood.mood}</span>
                  </div>
                </div>
                 <motion.button
                    onClick={() => handleDelete(entry.id)}
                    className="absolute p-1 transition-opacity duration-200 bg-red-500 rounded-full -top-2 -right-2 opacity-60 hover:opacity-100"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                 >
                    <TrashIcon className="w-5 h-5 text-white" />
                </motion.button>
              </motion.div>
            ))
          ) : (
            // --- Implementación del "Estado Vacío" (Punto 4) ---
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="py-16 text-center text-white bg-gray-800 rounded-2xl bg-opacity-40"
            >
              <Piggy size="text-6xl" animation="bounce" />
              <h3 className="mt-4 text-2xl font-bold">Tu diario está vacío</h3>
              <p className="max-w-md mx-auto mt-2 text-gray-400">
                Usa el formulario de arriba para añadir tu primera entrada. ¡No hay mejor momento que ahora!
              </p>
              <motion.button
                onClick={() => textareaRef.current?.focus()}
                className="flex items-center gap-2 px-6 py-3 mx-auto mt-6 font-semibold text-white transition-transform bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 active:scale-95"
                whileHover={{ scale: 1.05 }}
              >
                <PlusIcon className="w-5 h-5" />
                Crear mi primera entrada
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Diario
