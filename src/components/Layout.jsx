import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Piggy from './Piggy'
import { 
  SparklesIcon, 
  CalendarIcon, 
  FireIcon, 
  TrophyIcon, 
  HeartIcon, 
  BookOpenIcon,
  ArrowRightOnRectangleIcon,
  BoltIcon as LightningBoltIcon,
  MusicalNoteIcon
} from '@heroicons/react/24/outline'

const Layout = ({ children }) => {
  const location = useLocation()
  const { logout } = useAuth()

  const isActive = (path) => location.pathname === path

  const handleLogout = () => {
    logout()
    window.location.href = '/login'
  }

  const navLinks = [
    { path: '/', label: 'Mi Ritual', icon: SparklesIcon, color: 'text-purple-400' },
    { path: '/agenda', label: 'Agenda', icon: CalendarIcon, color: 'text-blue-400' },
    { path: '/habitos', label: 'Hábitos', icon: FireIcon, color: 'text-orange-400' },
    { path: '/diario', label: 'Diario', icon: BookOpenIcon, color: 'text-green-400' },
    { path: '/logros', label: 'Logros', icon: TrophyIcon, color: 'text-yellow-400' },
    { path: '/respiracion', label: 'Respiración', icon: HeartIcon, color: 'text-sky-400' },
    { path: '/ejercicios', label: 'Ejercicios', icon: LightningBoltIcon, color: 'text-red-400' },
    { path: '/musica', label: 'Música', icon: MusicalNoteIcon, color: 'text-teal-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-black to-indigo-900 bg-[length:200%_200%] animate-gradient-pan">
      <header className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-8 h-8 bg-pink-500 rounded-lg">
            <span className="text-xl font-bold text-white">S</span>
            <div className="absolute -top-1 -right-1">
              <Piggy size="text-xs" animation="wiggle" delay={1000} />
            </div>
          </div>
          <span className="text-xl font-semibold text-white">StudyFlow</span>
        </div>
        
        <nav className="flex items-center gap-1 p-1 bg-black bg-opacity-20 rounded-xl sidebar">
          {navLinks.map(link => {
            const Icon = link.icon;
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  active
                    ? 'bg-pink-500 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-white hover:bg-opacity-10 hover:text-white'
                }`}
                title={link.label}
              >
                <Icon className={`w-6 h-6 transition-colors duration-200 ${active ? 'text-white' : link.color}`} />
                <span className="hidden font-semibold md:inline">{link.label}</span>
              </Link>
            )
          })}
          
          <button 
            onClick={handleLogout}
            className="relative flex items-center justify-center w-10 h-10 ml-2 text-white transition bg-purple-600 rounded-lg group hover:bg-purple-700"
            title="Cerrar sesión"
          >
            <ArrowRightOnRectangleIcon className="w-6 h-6" />
            <div className="absolute transition-opacity opacity-0 -top-1 -right-1 group-hover:opacity-100">
              <Piggy size="text-xs" animation="bounce" delay={0} />
            </div>
          </button>
        </nav>
      </header>
      
      <main className="px-8 pb-8 main-content">
        <div className="page-transition">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
