import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Layout from './components/Layout'
import { NotificationCenter } from './components/NotificationCenter'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Agenda from './pages/Agenda'
import Habitos from './pages/Habitos'
import Logros from './pages/Logros'
import Respiracion from './pages/Respiracion'
import Ejercicios from './pages/Ejercicios'

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">🐷</div>
          <p className="text-white text-xl">Cargando...</p>
        </div>
      </div>
    )
  }

  return user ? children : <Navigate to="/login" replace />
}

const AppRoutes = () => {
  const { user, login } = useAuth()

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login onLogin={login} />} />
      <Route path="/" element={<ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>} />
      <Route path="/agenda" element={<ProtectedRoute><Layout><Agenda /></Layout></ProtectedRoute>} />
      <Route path="/habitos" element={<ProtectedRoute><Layout><Habitos /></Layout></ProtectedRoute>} />
      <Route path="/logros" element={<ProtectedRoute><Layout><Logros /></Layout></ProtectedRoute>} />
      <Route path="/respiracion" element={<ProtectedRoute><Layout><Respiracion /></Layout></ProtectedRoute>} />
      <Route path="/ejercicios" element={<ProtectedRoute><Layout><Ejercicios /></Layout></ProtectedRoute>} />
    </Routes>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
        <NotificationCenter />
      </Router>
    </AuthProvider>
  )
}

export default App

