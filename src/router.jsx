import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Agenda from './pages/Agenda';
import Habitos from './pages/Habitos';
import Logros from './pages/Logros';
import Respiracion from './pages/Respiracion';
import Ejercicios from './pages/Ejercicios';
import Diario from './pages/Diario';
import Layout from './components/Layout';
import { AuthProvider, useAuth } from './context/AuthContext';

// Note: The ProtectedRoute logic from App.jsx is simplified and integrated directly here.
// A full implementation would require a loader to check auth status.
// For this refactoring, we'll assume the context-based check is sufficient.

const ProtectedElement = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">🐷</div>
          <p className="text-white text-xl">Cargando...</p>
        </div>
      </div>
    );
  }

  return user ? <Layout>{children}</Layout> : <Navigate to="/login" replace />;
};

const PublicElement = ({ children }) => {
  const { user } = useAuth();
  return user ? <Navigate to="/" replace /> : children;
};

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'login',
          element: <PublicElement><Login /></PublicElement>,
        },
        {
          path: '',
          element: (
            <ProtectedElement>
              <Dashboard />
            </ProtectedElement>
          ),
        },
        {
          path: 'agenda',
          element: (
            <ProtectedElement>
              <Agenda />
            </ProtectedElement>
          ),
        },
        {
          path: 'habitos',
          element: (
            <ProtectedElement>
              <Habitos />
            </ProtectedElement>
          ),
        },
        {
          path: 'logros',
          element: (
            <ProtectedElement>
              <Logros />
            </ProtectedElement>
          ),
        },
        {
          path: 'respiracion',
          element: (
            <ProtectedElement>
              <Respiracion />
            </ProtectedElement>
          ),
        },
        {
          path: 'ejercicios',
          element: (
            <ProtectedElement>
              <Ejercicios />
            </ProtectedElement>
          ),
        },
        {
          path: 'diario',
          element: (
            <ProtectedElement>
              <Diario />
            </ProtectedElement>
          ),
        },
      ],
    },
  ],
  {
    future: {
      // Opt-in to surfaces transitions in React Router
      v7_startTransition: true,
      // Opt-in to relative splat path behavior
      v7_relativeSplatPath: true,
    },
  }
);

export default router;
