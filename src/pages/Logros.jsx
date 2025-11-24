const Logros = () => {
  const badges = [
    {
      id: 1,
      name: 'Primer Paso',
      description: 'Completa tu primera tarea',
      requirement: 'Completar 1 tarea',
      icon: 'trophy',
      unlocked: false
    },
    {
      id: 2,
      name: 'Maestro de Tareas',
      description: 'Completa 10 tareas',
      requirement: 'Completar 10 tareas',
      icon: 'trophy',
      unlocked: false
    },
    {
      id: 3,
      name: 'Constructor de Hábitos',
      description: 'Rastrea 5 hábitos',
      requirement: 'Rastrear 5 hábitos',
      icon: 'trophy',
      unlocked: false
    },
    {
      id: 4,
      name: 'Campeón de Rachas',
      description: 'Mantén una racha de 7 días',
      requirement: 'Racha de 7 días',
      icon: 'trophy',
      unlocked: false
    },
    {
      id: 5,
      name: 'Madrugador',
      description: 'Completa una tarea antes de las 8 AM',
      requirement: 'Tarea temprana',
      icon: 'trophy',
      unlocked: false
    },
    {
      id: 6,
      name: 'Guerrero del Bienestar',
      description: 'Completa todos los hábitos de salud en un día',
      requirement: 'Todos los hábitos',
      icon: 'trophy',
      unlocked: false
    },
    {
      id: 7,
      name: 'Rey de la Productividad',
      description: 'Completa 20 tareas',
      requirement: 'Completar 20 tareas',
      icon: 'trophy',
      unlocked: false
    },
    {
      id: 8,
      name: 'Maestro de la Consistencia',
      description: 'Rastrea hábitos por 30 días',
      requirement: '30 días de rastreo',
      icon: 'trophy',
      unlocked: false
    },
    {
      id: 9,
      name: 'Legendario',
      description: 'Desbloquea todas las demás insignias',
      requirement: 'Todas las insignias',
      icon: 'trophy',
      unlocked: false
    }
  ]

  const unlockedCount = badges.filter(b => b.unlocked).length
  const totalBadges = badges.length
  const progressPercentage = (unlockedCount / totalBadges) * 100

  const TrophyIcon = ({ className = "w-16 h-16", unlocked = false }) => (
    <svg className={className} fill={unlocked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      <path d="M12 2v2M12 20v2M4 12H2M22 12h-2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
  )

  return (
    <div className="space-y-6 page-transition">
      {/* Header */}
      <div className="flex items-center justify-between animate-fade-in-up">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Logros</h1>
        </div>
        <div className="text-white text-lg">
          <span className="font-semibold">{unlockedCount}/{totalBadges}</span> Insignias Desbloqueadas
        </div>
      </div>

      {/* Barra de Progreso */}
      <div className="bg-gradient-to-br from-purple-700 to-purple-800 rounded-2xl p-6 hover-lift animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-white">Tu Progreso</h2>
          <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>
        <div className="w-full bg-white bg-opacity-20 rounded-full h-4 mb-2">
          <div
            className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full h-4 transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-white opacity-80">{Math.round(progressPercentage)}% Completado</p>
      </div>

      {/* Banner Motivacional */}
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl p-8 text-center relative overflow-hidden hover-lift animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <span className="text-6xl">👑</span>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-2">
            ¡Lo Estás Haciendo Increíble! ✨
          </h2>
          <p className="text-white text-lg opacity-90">
            ¡Sigue adelante! Cada tarea completada y hábito rastreado te acerca más a tus metas.
          </p>
        </div>
      </div>

      {/* Grid de Insignias */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>Colección de Insignias</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {badges.map((badge, index) => (
            <div
              key={badge.id}
              className={`bg-gradient-to-br from-purple-700 to-purple-800 rounded-xl p-6 hover-lift card-glow ${
                badge.unlocked ? 'opacity-100' : 'opacity-60'
              } animate-scale-in`}
              style={{ 
                animationDelay: `${0.4 + index * 0.1}s`,
                opacity: 0
              }}
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <TrophyIcon className={`w-16 h-16 ${badge.unlocked ? 'text-yellow-400' : 'text-gray-500'}`} unlocked={badge.unlocked} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{badge.name}</h3>
                <p className="text-white opacity-80 mb-2">{badge.description}</p>
                <p className="text-white opacity-60 text-sm mb-4">{badge.requirement}</p>
                <div className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  badge.unlocked
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-600 text-white'
                }`}>
                  {badge.unlocked ? 'Desbloqueado' : 'Bloqueado'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Logros

