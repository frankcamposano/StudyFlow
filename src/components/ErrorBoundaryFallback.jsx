import Piggy from './Piggy';

export const ErrorBoundaryFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="min-h-screen bg-red-900 text-white flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <Piggy size="text-6xl" animation="bounce" />
        <h1 className="text-3xl font-bold mt-4 text-red-300">Oops! Algo salió mal.</h1>
        <p className="mt-2 text-red-200">
          Parece que hemos encontrado un error inesperado. Aquí tienes los detalles:
        </p>
      </div>

      <div className="w-full max-w-2xl p-4 mt-6 font-mono text-sm text-left bg-black rounded-lg bg-opacity-30">
        <h2 className="font-bold text-red-400">Mensaje de Error:</h2>
        <pre className="mt-2 whitespace-pre-wrap">{error.message}</pre>
        <h2 className="mt-4 font-bold text-red-400">Stack Trace:</h2>
        <pre className="mt-2 text-red-300 whitespace-pre-wrap">{error.stack}</pre>
      </div>

      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 mt-8 font-semibold text-white transition transform bg-pink-500 rounded-lg shadow-lg hover:bg-pink-600 hover:scale-105 active:scale-95"
      >
        Intentar de Nuevo
      </button>
    </div>
  );
};
