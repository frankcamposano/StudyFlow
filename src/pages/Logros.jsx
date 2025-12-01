import { useState } from 'react'

const Logros = () => {
  const [selectedBadge, setSelectedBadge] = useState(null)

  const badges = [
    {
      id: 1,
      name: 'Primer Paso',
      description: 'Completa tu primera tarea',
      requirement: 'Completar 1 tarea',
      icon: '🎯',
      color: 'from-blue-500 to-cyan-500',
      unlocked: true,
      progress: 1,
      total: 1
    },
    {
      id: 2,
      name: 'Maestro de Tareas',
      description: 'Completa 10 tareas',
      requirement: 'Completar 10 tareas',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500',
      unlocked: true,
      progress: 10,
      total: 10
    },
    {
      id: 3,
      name: 'Constructor de Hábitos',
      description: 'Rastrea 5 hábitos diferentes',
      requirement: 'Rastrear 5 hábitos',
      icon: '🏗️',
      color: 'from-green-500 to-emerald-500',
      unlocked: false,
      progress: 3,
      total: 5
    },
    {
      id: 4,
      name: 'Campeón de Rachas',
      description: 'Mantén una racha de 7 días',
      requirement: 'Racha de 7 días consecutivos',
      icon: '🔥',
      color: 'from-red-500 to-pink-500',
      unlocked: false,
      progress: 4,
      total: 7
    },
    {
      id: 5,
      name: 'Madrugador',
      description: 'Completa una tarea antes de las 8 AM',
      requirement: 'Tarea antes de las 8 AM',
      icon: '🌅',
      color: 'from-orange-400 to-yellow-400',
      unlocked: false,
      progress: 0,
      total: 1
    },
    {
      id: 6,
      name: 'Guerrero del Bienestar',
      description: 'Completa todos los hábitos de salud en un día',
      requirement: 'Todos los hábitos de salud',
      icon: '💪',
      color: 'from-purple-500 to-pink-500',
      unlocked: false,
      progress: 2,
      total: 3
    },
    {
      id: 7,
      name: 'Rey de la Productividad',
      description: 'Completa 20 tareas en total',
      requirement: 'Completar 20 tareas',
      icon: '👑',
      color: 'from-yellow-400 to-amber-500',
      unlocked: false,
      progress: 10,
      total: 20
    },
    {
      id: 8,
      name: 'Maestro de la Consistencia',
      description: 'Rastrea hábitos durante 30 días',
      requirement: '30 días de rastreo',
      icon: '🎖️',
      color: 'from-indigo-500 to-purple-500',
      unlocked: false,
      progress: 12,
      total: 30
    },
    {
      id: 9,
      name: 'Legendario',
      description: 'Desbloquea todas las demás insignias',
      requirement: 'Todas las insignias',
      icon: '🏆',
      color: 'from-yellow-300 via-yellow-500 to-orange-600',
      unlocked: false,
      progress: 2,
      total: 8
    }
  ]

  const unlockedCount = badges.filter(b => b.unlocked).length
  const totalBadges = badges.length
  const progressPercentage = (unlockedCount / totalBadges) * 100

  const getMotivationalMessage = () => {
    if (progressPercentage === 0) return "¡Empieza tu viaje hacia la grandeza!"
    if (progressPercentage < 25) return "¡Gran comienzo! Sigue así 💫"
    if (progressPercentage < 50) return "¡Vas por buen camino! 🚀"
    if (progressPercentage < 75) return "¡Increíble progreso! ⭐"
    if (progressPercentage < 100) return "¡Casi lo logras! 🌟"
    return "¡Eres una leyenda! 👑"
  }

  const BadgeCard = ({ badge, index }) => {
    const progressPercent = (badge.progress / badge.total) * 100
    const isSelected = selectedBadge?.id === badge.id

    return (
      <div
        onClick={() => setSelectedBadge(badge)}
        className={`relative bg-gradient-to-br ${
          badge.unlocked ? badge.color : 'from-gray-700 to-gray-800'
        } rounded-2xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover-lift animate-scale-in ${
          badge.unlocked ? 'shadow-2xl' : 'opacity-60 grayscale-[50%]'
        } ${isSelected ? 'ring-4 ring-white scale-105' : ''}`}
        style={{ 
          animationDelay: `${0.4 + index * 0.05}s`,
          opacity: 0
        }}
      >
        {badge.unlocked && (
          <div className="absolute top-3 right-3">
            <div className="p-1 bg-white rounded-full shadow-lg animate-bounce-slow">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
        
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className={`text-7xl transform transition-all duration-300 ${
              badge.unlocked ? 'animate-float' : 'grayscale'
            }`}>
              {badge.icon}
            </div>
          </div>
          
          <h3 className="mb-2 text-xl font-bold text-white">{badge.name}</h3>
          <p className="mb-3 text-sm text-white opacity-90">{badge.description}</p>
          
          {!badge.unlocked && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2 text-xs text-white opacity-80">
                <span>Progreso</span>
                <span className="font-semibold">{badge.progress}/{badge.total}</span>
              </div>
              <div className="w-full h-2 overflow-hidden bg-white rounded-full bg-opacity-20">
                <div
                  className="h-2 transition-all duration-500 ease-out rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}
          
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold transition-all ${
            badge.unlocked
              ? 'bg-white text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 ring-2 ring-white'
              : 'bg-gray-600 bg-opacity-50 text-white'
          }`}>
            {badge.unlocked ? '✨ Desbloqueado' : '🔒 Bloqueado'}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pb-8 space-y-8 page-transition">
      {/* Header con Animación */}
      <div className="relative p-8 overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl animate-fade-in-up">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <h1 className="mb-2 text-5xl font-black text-white drop-shadow-lg">
              🏆 Tus Logros
            </h1>
            <p className="text-lg text-white opacity-90">
              Celebra cada victoria en tu camino
            </p>
          </div>
          <div className="px-6 py-4 text-center bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl">
            <div className="text-4xl font-black text-white drop-shadow-lg">
              {unlockedCount}/{totalBadges}
            </div>
            <div className="text-sm font-medium text-white opacity-90">
              Insignias
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Progreso Mejorada */}
      <div className="p-8 shadow-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl hover-lift animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="mb-1 text-3xl font-bold text-white">Tu Progreso</h2>
            <p className="text-sm text-white opacity-80">{getMotivationalMessage()}</p>
          </div>
          <div className="text-6xl animate-bounce-slow">
            {progressPercentage >= 75 ? '🌟' : progressPercentage >= 50 ? '⭐' : progressPercentage >= 25 ? '✨' : '💫'}
          </div>
        </div>
        
        <div className="relative">
          <div className="w-full h-6 mb-3 overflow-hidden bg-white rounded-full bg-opacity-20 backdrop-blur-sm">
            <div
              className="relative h-6 overflow-hidden transition-all duration-1000 ease-out rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500"
              style={{ width: `${progressPercentage}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-white">{Math.round(progressPercentage)}% Completado</p>
            <p className="text-sm text-white opacity-80">{totalBadges - unlockedCount} por desbloquear</p>
          </div>
        </div>
      </div>

      {/* Banner Motivacional Mejorado */}
      <div className="relative p-10 overflow-hidden text-center shadow-2xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-3xl hover-lift animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute w-20 h-20 bg-white rounded-full top-10 left-10 animate-float"></div>
          <div className="absolute w-32 h-32 bg-white rounded-full bottom-10 right-10 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-16 h-16 bg-white rounded-full top-1/2 left-1/2 animate-float" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="relative z-10">
          <div className="mb-4 text-8xl animate-bounce-slow">👑</div>
          <h2 className="mb-3 text-4xl font-black text-white drop-shadow-lg">
            ¡Lo Estás Haciendo Increíble!
          </h2>
          <p className="max-w-2xl mx-auto text-xl font-medium text-white opacity-95">
            Cada logro desbloqueado es una prueba de tu dedicación. 
            ¡Sigue así y alcanzarás todas tus metas! ✨
          </p>
        </div>
      </div>

      {/* Grid de Insignias */}
      <div>
        <div className="flex items-center justify-between mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <h2 className="text-3xl font-bold text-white">Colección de Insignias</h2>
          <button
            onClick={() => setSelectedBadge(null)}
            className="text-sm text-white transition-opacity opacity-70 hover:opacity-100"
          >
            {selectedBadge ? '✕ Cerrar detalle' : ''}
          </button>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {badges.map((badge, index) => (
            <BadgeCard key={badge.id} badge={badge} index={index} />
          ))}
        </div>
      </div>

      {/* Modal de Detalle de Insignia */}
      {selectedBadge && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedBadge(null)}
        >
          <div 
            className={`bg-gradient-to-br ${selectedBadge.unlocked ? selectedBadge.color : 'from-gray-700 to-gray-800'} rounded-3xl p-8 max-w-md w-full shadow-2xl transform animate-scale-in`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="mb-6 text-9xl animate-float">{selectedBadge.icon}</div>
              <h3 className="mb-3 text-3xl font-black text-white">{selectedBadge.name}</h3>
              <p className="mb-4 text-lg text-white opacity-90">{selectedBadge.description}</p>
              <div className="p-4 mb-6 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm">
                <p className="mb-2 font-semibold text-white">Requisito:</p>
                <p className="text-white opacity-90">{selectedBadge.requirement}</p>
              </div>
              {!selectedBadge.unlocked && (
                <div className="mb-6">
                  <p className="mb-2 font-semibold text-white">
                    Progreso: {selectedBadge.progress}/{selectedBadge.total}
                  </p>
                  <div className="w-full h-3 bg-white rounded-full bg-opacity-20">
                    <div
                      className="h-3 transition-all duration-500 bg-white rounded-full"
                      style={{ width: `${(selectedBadge.progress / selectedBadge.total) * 100}%` }}
                    />
                  </div>
                </div>
              )}
              <button
                onClick={() => setSelectedBadge(null)}
                className="px-6 py-3 font-bold text-gray-800 transition-all transform bg-white rounded-xl hover:bg-opacity-90 hover:scale-105 active:scale-95"
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

export default Logros