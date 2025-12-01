import { Outlet } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { AuthProvider } from './context/AuthContext'
import { ErrorBoundaryFallback } from './components/ErrorBoundaryFallback'
import Tour from './components/Tour'
import { useState } from 'react'

function App() {
  const [runTour, setRunTour] = useState(false);
  const [tourSteps, setTourSteps] = useState([]);

  const handleErrorReset = () => {
    // Esto es útil si el estado del dashboard en sessionStorage causa problemas
    sessionStorage.removeItem('assistantStep');
    sessionStorage.removeItem('assistantChoices');
    sessionStorage.setItem('assistantCompleted', 'false');
    window.location.reload();
  };

  return (
    <AuthProvider>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback} onReset={handleErrorReset}>
        <Tour run={runTour} steps={tourSteps} />
        <Outlet context={{ setRunTour, setTourSteps }} />
      </ErrorBoundary>
    </AuthProvider>
  )
}

export default App
