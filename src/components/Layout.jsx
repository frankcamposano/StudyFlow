import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Piggy from './Piggy'

const Layout = ({ children }) => {
  const location = useLocation()
  const { logout } = useAuth()

  const isActive = (path) => location.pathname === path

  const handleLogout = () => {
    logout()
    window.location.href = '/login'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <header className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center relative">
            <span className="text-white font-bold text-xl">S</span>
            <div className="absolute -top-1 -right-1">
              <Piggy size="text-xs" animation="wiggle" delay={1000} />
            </div>
          </div>
          <span className="text-white text-xl font-semibold">StudyFlow</span>
        </div>
        
        <nav className="flex items-center gap-2">
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              isActive('/')
                ? 'bg-pink-500 text-white'
                : 'bg-white text-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>Tablero</span>
          </Link>
          
          <Link
            to="/agenda"
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              isActive('/agenda')
                ? 'bg-pink-500 text-white'
                : 'bg-white text-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Agenda</span>
          </Link>
          
          <Link
            to="/habitos"
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              isActive('/habitos')
                ? 'bg-pink-500 text-white'
                : 'bg-white text-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>Hábitos</span>
          </Link>
          
          <Link
            to="/logros"
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              isActive('/logros')
                ? 'bg-pink-500 text-white'
                : 'bg-white text-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span>Logros</span>
          </Link>

          <Link
            to="/respiracion"
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              isActive('/respiracion')
                ? 'bg-pink-500 text-white'
                : 'bg-white text-gray-800'
            }`}
          >
            <span className="text-xl">🫁</span>
            <span>Respiración</span>
          </Link>

          <Link
            to="/ejercicios"
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              isActive('/ejercicios')
                ? 'bg-pink-500 text-white'
                : 'bg-white text-gray-800'
            }`}
          >
            <span className="text-xl">💪</span>
            <span>Ejercicios</span>
          </Link>
          
          <button 
            onClick={handleLogout}
            className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white hover:bg-purple-700 transition relative group"
            title="Cerrar sesión"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Piggy size="text-xs" animation="bounce" delay={0} />
            </div>
          </button>
        </nav>
      </header>
      
      <main className="px-8 pb-8">
        <div className="page-transition">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout

