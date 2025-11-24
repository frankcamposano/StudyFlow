import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Piggy from '../components/Piggy'

const Dashboard = () => {
  const navigate = useNavigate()
  const [quote, setQuote] = useState({
    text: "La única forma de hacer un gran trabajo es amar lo que haces.",
    author: "Steve Jobs"
  })
  const [liked, setLiked] = useState(false)

  const quotes = [
    { text: "La única forma de hacer un gran trabajo es amar lo que haces.", author: "Steve Jobs" },
    { text: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", author: "Robert Collier" },
    { text: "No cuentes los días, haz que los días cuenten.", author: "Muhammad Ali" },
  ]

  const getNewQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote)
    setLiked(false)
  }

  return (
    <div className="space-y-6 page-transition">
      {/* Banner de Bienvenida */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 flex items-center justify-between hover-lift animate-fade-in-up">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-2">
            Buenos Días, frank!
            <Piggy size="text-2xl" animation="bounce" delay={200} />
            <span className="text-2xl">✨</span>
          </h1>
          <p className="text-white text-lg mb-6">
            ¿Listo para conquistar tu día? ¡Hagamos que cuente!
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => navigate('/agenda')}
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-opacity-90 transition transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Planificar Día
            </button>
            <button 
              onClick={() => navigate('/habitos')}
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-opacity-90 transition transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Rastrear Hábitos
            </button>
          </div>
        </div>
        <div className="ml-8 hidden md:block">
          <div className="w-64 h-64 bg-white rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop" 
              alt="Estudiante trabajando" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Sección de Cita */}
      <div className="bg-purple-800 rounded-2xl p-6 hover-lift animate-fade-in-up relative" style={{ animationDelay: '0.1s', opacity: 0 }}>
        <div className="absolute top-4 right-4">
          <Piggy size="text-xl" animation="pulse" delay={500} />
        </div>
        <p className="text-white text-xl mb-2">"{quote.text}"</p>
        <p className="text-white text-sm opacity-80">— {quote.author}</p>
        <div className="flex items-center gap-4 mt-4">
          <button 
            onClick={getNewQuote}
            className="text-white flex items-center gap-2 hover:text-pink-300 transition transform hover:scale-110 active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Nueva Frase
          </button>
          <button 
            onClick={() => setLiked(!liked)}
            className={`text-white transition transform hover:scale-125 active:scale-95 ${liked ? 'text-pink-400 scale-125' : ''}`}
          >
            <svg className="w-5 h-5" fill={liked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Tarjetas de Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-green-500 rounded-2xl p-6 text-white hover-lift card-glow animate-scale-in relative" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <div className="absolute top-2 right-2">
            <Piggy size="text-lg" animation="float" delay={300} />
          </div>
          <div className="flex items-center justify-between mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="text-5xl font-bold mb-2">0</div>
          <div className="text-lg">Tareas Completadas</div>
        </div>

        <div className="bg-orange-500 rounded-2xl p-6 text-white hover-lift card-glow animate-scale-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <div className="flex items-center justify-between mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="text-5xl font-bold mb-2">0</div>
          <div className="text-lg">Días en Racha</div>
        </div>

        <div className="bg-yellow-500 rounded-2xl p-6 text-white hover-lift card-glow animate-scale-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <div className="flex items-center justify-between mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <div className="text-5xl font-bold mb-2">0</div>
          <div className="text-lg">Puntos Totales</div>
        </div>

        <div className="bg-blue-500 rounded-2xl p-6 text-white hover-lift card-glow animate-scale-in" style={{ animationDelay: '0.5s', opacity: 0 }}>
          <div className="flex items-center justify-between mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div className="text-5xl font-bold mb-2">0</div>
          <div className="text-lg">Hábitos Rastreados</div>
        </div>
      </div>

      {/* Tarjetas de Características */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          onClick={() => navigate('/agenda')}
          className="bg-purple-600 rounded-2xl p-6 text-white relative overflow-hidden hover-lift card-glow animate-fade-in-up cursor-pointer group transition-all duration-300" 
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <svg className="w-8 h-8 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-2xl transform group-hover:scale-125 transition-transform duration-300">✨</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Tiempo Muerto</h3>
            <p className="text-white opacity-90">
              Optimiza tu horario y descubre momentos ocultos de productividad
            </p>
          </div>
        </div>

        <div 
          onClick={() => navigate('/habitos')}
          className="bg-red-500 rounded-2xl p-6 text-white relative overflow-hidden hover-lift card-glow animate-fade-in-up cursor-pointer group transition-all duration-300" 
          style={{ animationDelay: '0.7s', opacity: 0 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1"></div>
              <svg className="w-8 h-8 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Micro-Hábitos</h3>
            <p className="text-white opacity-90">
              Pequeñas acciones diarias que conducen a grandes cambios de vida
            </p>
          </div>
        </div>

        <div 
          onClick={() => navigate('/logros')}
          className="bg-blue-500 rounded-2xl p-6 text-white relative overflow-hidden hover-lift card-glow animate-fade-in-up cursor-pointer group transition-all duration-300" 
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <svg className="w-8 h-8 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <svg className="w-8 h-8 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Ver Logros</h3>
            <p className="text-white opacity-90">
              Celebra tus victorias y desbloquea nuevas insignias
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

