import { useState, useEffect } from 'react'

export const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([])
  const [isEnabled, setIsEnabled] = useState(true)
  const [showSettings, setShowSettings] = useState(false)
  const [notificationTime, setNotificationTime] = useState('09:00')

  // Lista de notificaciones disponibles
  const availableNotifications = [
    { 
      id: 'morning', 
      time: '08:00', 
      message: '¡Buenos días! 🌅 Hora de tu primera rutina de respiración', 
      icon: '🫁',
      type: 'breathing'
    },
    { 
      id: 'break1', 
      time: '12:00', 
      message: '⏰ Lleva 4 horas trabajando, ¡tómate un descanso de 5 min!', 
      icon: '☕',
      type: 'break'
    },
    { 
      id: 'energy', 
      time: '15:00', 
      message: '⚡ Tu energía está baja. ¿Probamos la respiración energizante?', 
      icon: '💪',
      type: 'breathing'
    },
    { 
      id: 'exercise', 
      time: '18:00', 
      message: '🏃 Es hora de moverte. ¿Ejercicio o una caminata rápida?', 
      icon: '🏃',
      type: 'exercise'
    },
    { 
      id: 'sleep', 
      time: '21:00', 
      message: '😴 Prepárate para dormir. Respiración 4-7-8 en 5 min', 
      icon: '🌙',
      type: 'sleep'
    },
    { 
      id: 'water', 
      time: '11:00', 
      message: '💧 No olvides hidratarte. ¡Bebe agua!', 
      icon: '💧',
      type: 'health'
    },
    { 
      id: 'habits', 
      time: '19:00', 
      message: '📋 ¿Ya completaste tus hábitos del día?', 
      icon: '📋',
      type: 'habits'
    }
  ]

  // Simulación de notificaciones
  useEffect(() => {
    if (!isEnabled) return

    const checkNotifications = () => {
      const now = new Date()
      const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`

      availableNotifications.forEach(notif => {
        if (currentTime === notif.time) {
          addNotification(notif.message, notif.icon)
        }
      })
    }

    // Verificar cada minuto
    const timer = setInterval(checkNotifications, 60000)
    
    // También verificar inmediatamente
    checkNotifications()

    return () => clearInterval(timer)
  }, [isEnabled])

  const addNotification = (message, icon = '📢') => {
    const id = Date.now()
    setNotifications(prev => [...prev, { id, message, icon }])

    // Remover notificación después de 6 segundos
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }, 6000)
  }

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  return (
    <>
      {/* Panel de notificaciones */}
      <div className="fixed bottom-8 right-8 z-50 space-y-3 max-w-md">
        {/* Notificaciones activas */}
        {notifications.map(notif => (
          <div
            key={notif.id}
            className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg p-4 shadow-2xl text-white animate-slide-in-up flex items-center gap-3 border border-white border-opacity-20 backdrop-blur"
          >
            <span className="text-2xl animate-bounce" style={{ animationDuration: '0.5s' }}>{notif.icon}</span>
            <span className="flex-1 text-sm font-semibold">{notif.message}</span>
            <button
              onClick={() => removeNotification(notif.id)}
              className="text-white opacity-60 hover:opacity-100 transition"
            >
              ✕
            </button>
          </div>
        ))}

        {/* Botón de configuración flotante */}
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="w-full bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-30 rounded-lg p-3 text-white hover:bg-opacity-20 transition flex items-center gap-2 justify-center font-semibold"
        >
          <span className="text-lg">🔔</span>
          Notificaciones: {isEnabled ? '✓ Activas' : '✗ Inactivas'}
        </button>

        {/* Panel de configuración */}
        {showSettings && (
          <div className="bg-gradient-to-br from-purple-700 to-purple-800 backdrop-blur border border-white border-opacity-20 rounded-lg p-4 space-y-4 animate-slide-in-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold">⚙️ Configuración de Notificaciones</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-white text-xl hover:opacity-60 transition"
              >
                ✕
              </button>
            </div>

            {/* Toggle */}
            <div className="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3">
              <span className="text-white font-semibold">Habilitar notificaciones</span>
              <button
                onClick={() => setIsEnabled(!isEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  isEnabled ? 'bg-green-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    isEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Notificaciones disponibles */}
            <div className="space-y-2">
              <p className="text-white text-sm font-semibold">Notificaciones programadas:</p>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {availableNotifications.map(notif => (
                  <div key={notif.id} className="bg-white bg-opacity-10 rounded-lg p-3 flex items-center gap-3 text-white text-sm">
                    <span className="text-lg">{notif.icon}</span>
                    <div className="flex-1">
                      <div className="font-semibold">{notif.time}</div>
                      <div className="opacity-70 text-xs truncate">{notif.message}</div>
                    </div>
                    <span className="text-xs bg-white bg-opacity-20 rounded px-2 py-1">{notif.type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Botón de prueba */}
            <button
              onClick={() => {
                addNotification('¡Esto es una notificación de prueba! 🎉', '✨')
                setShowSettings(false)
              }}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-2 rounded-lg hover:shadow-lg transition"
            >
              🧪 Probar notificación
            </button>
          </div>
        )}
      </div>
    </>
  )
}

