import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ onLogin }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [focusedField, setFocusedField] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    if (!formData.username || !formData.password) {
      setError('Por favor completa todos los campos')
      return
    }

    setIsLoading(true)
    
    // Simular autenticación (en producción sería una llamada a API)
    setTimeout(() => {
      setIsLoading(false)
      if (formData.username && formData.password) {
        onLogin(formData.username)
        navigate('/')
      } else {
        setError('Credenciales inválidas')
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Fondo animado con gradientes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Partículas de fondo animadas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Animales flotantes decorativos */}
      <div className="absolute top-10 left-5 md:left-20 text-5xl md:text-6xl animate-bounce" style={{ animationDuration: '3s' }}>
        🐷
      </div>
      <div className="absolute bottom-10 right-5 md:right-20 text-4xl md:text-5xl animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
        🐷
      </div>
      <div className="absolute top-1/3 right-5 md:right-10 text-3xl md:text-4xl animate-float" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        ✨
      </div>

      {/* Contenedor principal con dos secciones */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 relative z-10">
        {/* Sección izquierda - Información */}
        <div className="hidden md:flex flex-col justify-center space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-5xl font-bold text-white mb-4">
              Bienvenido a
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                StudyFlow
              </span>
            </h2>
            <p className="text-xl text-white opacity-90 leading-relaxed">
              Tu compañero perfecto para mantener el enfoque, construir hábitos y alcanzar tus metas.
            </p>
          </div>

          {/* Características */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-white bg-opacity-5 backdrop-blur p-4 rounded-2xl hover:bg-opacity-10 transition-all">
              <div className="text-3xl">📅</div>
              <div>
                <h3 className="text-white font-bold mb-1">Agenda Inteligente</h3>
                <p className="text-white opacity-70 text-sm">Organiza tu día de manera efectiva</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white bg-opacity-5 backdrop-blur p-4 rounded-2xl hover:bg-opacity-10 transition-all">
              <div className="text-3xl">🫁</div>
              <div>
                <h3 className="text-white font-bold mb-1">Respiración Consciente</h3>
                <p className="text-white opacity-70 text-sm">Reduce estrés con técnicas guiadas</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white bg-opacity-5 backdrop-blur p-4 rounded-2xl hover:bg-opacity-10 transition-all">
              <div className="text-3xl">🏆</div>
              <div>
                <h3 className="text-white font-bold mb-1">Logros y Badges</h3>
                <p className="text-white opacity-70 text-sm">Celebra cada pequeña victoria</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white bg-opacity-5 backdrop-blur p-4 rounded-2xl hover:bg-opacity-10 transition-all">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="text-white font-bold mb-1">Micro-Hábitos</h3>
                <p className="text-white opacity-70 text-sm">Cambios pequeños, resultados grandes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección derecha - Login */}
        <div className="w-full animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white border-opacity-20 relative overflow-hidden">
            {/* Brillo de fondo */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

            <div className="relative z-10">
              {/* Logo y título */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mb-4 shadow-2xl transform hover:scale-110 transition-transform duration-300 animate-bounce" style={{ animationDuration: '3s' }}>
                  <span className="text-5xl">🐷</span>
                </div>
                <h1 className="text-4xl font-bold text-white mb-2">StudyFlow</h1>
                <p className="text-white opacity-80">Inicia sesión para comenzar</p>
              </div>

              {/* Formulario */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500 bg-opacity-30 backdrop-blur border border-red-400 rounded-xl p-4 text-red-100 text-sm animate-wiggle flex items-center gap-3">
                    <span className="text-2xl">⚠️</span>
                    {error}
                  </div>
                )}

                {/* Campo Usuario */}
                <div>
                  <label className="block text-white mb-2 font-semibold text-sm">Usuario</label>
                  <div className="relative group">
                    <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${focusedField === 'username' ? 'text-pink-400' : 'text-white opacity-60'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      onFocus={() => setFocusedField('username')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tu usuario aquí"
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-50 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:bg-opacity-20 transition-all duration-300 group-hover:bg-opacity-15"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Campo Contraseña */}
                <div>
                  <label className="block text-white mb-2 font-semibold text-sm">Contraseña</label>
                  <div className="relative group">
                    <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${focusedField === 'password' ? 'text-pink-400' : 'text-white opacity-60'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tu contraseña aquí"
                      className="w-full pl-12 pr-12 py-3 rounded-xl bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-50 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:bg-opacity-20 transition-all duration-300 group-hover:bg-opacity-15"
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-white opacity-60 hover:opacity-100 transition-all transform hover:scale-110"
                    >
                      {showPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Botón de Login */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Iniciando sesión...</span>
                    </>
                  ) : (
                    <>
                      <span>Iniciar Sesión</span>
                      <span className="text-2xl group-hover:animate-bounce-animal">🐷</span>
                    </>
                  )}
                </button>
              </form>

              {/* Mensaje motivacional */}
              <div className="mt-6 pt-6 border-t border-white border-opacity-20">
                <p className="text-white opacity-60 text-center text-sm">
                  💡 Tip: Usa cualquier usuario y contraseña para probar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos de animación adicionales */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}

export default Login

