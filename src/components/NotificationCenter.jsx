import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

export default function NotificationCenter() {
  const { user } = useAuth()
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
    },
    {
      id: 'active_break',
      time: '10:00',
      message: '🤸‍♀️ Estira las piernas y la espalda. ¡Una pausa activa te llenará de energía!',
      icon: '🤸‍♀️',
      type: 'break'
    },
    {
      id: 'lunch',
      time: '13:00',
      message: '🥗 Es hora de almorzar. Elige alimentos que te den energía para la tarde.',
      icon: '🥗',
      type: 'health'
    },
    {
      id: 'posture',
      time: '16:00',
      message: '🧘‍♂️ Revisa tu postura. Una espalda recta mejora la concentración.',
      icon: '🧘‍♂️',
      type: 'health'
    },
    {
      id: 'journal',
      time: '20:00',
      message: '📔 ¿Qué tal tu día? Anota tus pensamientos y logros en el diario.',
      icon: '📔',
      type: 'journal'
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

  useEffect(() => {
    if (user) {
      // Para demostración, ciclar a través de las notificaciones
      let index = 0
      const cycleNotifications = () => {
        const notification = availableNotifications[index]
        addNotification(notification.message, notification.icon)
        index = (index + 1) % availableNotifications.length
      }

      // Mostrar la primera inmediatamente
      cycleNotifications()

      // Cambiar cada 5 segundos
      const intervalId = setInterval(cycleNotifications, 5000)

      return () => clearInterval(intervalId) // Limpiar al desmontar
    }
  }, [user])

  const addNotification = (message, icon = '📢') => {
    const id = Date.now()
    setNotifications([{ id, message, icon }])
  }

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  return (
    <div>
      {/* Panel de notificaciones */}
      <div className="fixed z-50 flex flex-col items-end max-w-md space-y-3 bottom-8 right-8">
        {/* Notificaciones activas */}
        {notifications.map(notif => (
          <div
            key={notif.id}
            className="flex items-center gap-3 p-4 text-white border border-white shadow-2xl rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 animate-slide-in-up border-opacity-20 backdrop-blur-xl"
            style={{
              boxShadow: '0 10px 40px rgba(168, 85, 247, 0.4), 0 0 20px rgba(236, 72, 153, 0.3)',
              animation: 'slideInUp 0.5s ease-out'
            }}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full bg-opacity-20 backdrop-blur-sm">
              <span className="text-2xl animate-bounce" style={{ animationDuration: '0.5s' }}>{notif.icon}</span>
            </div>
            <span className="flex-1 text-sm font-semibold leading-relaxed">{notif.message}</span>
            <button
              onClick={() => removeNotification(notif.id)}
              className="flex items-center justify-center w-8 h-8 transition rounded-full bg-white/20 hover:bg-white/30 hover:rotate-90"
            >
              ✕
            </button>
          </div>
        ))}

      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
