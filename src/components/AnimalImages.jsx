// Componente para mostrar las imágenes de animales reales
// Las imágenes se cargan desde la carpeta public/images con fondo transparente

export const AnimalImage = ({ type, size = 'w-32 h-32', className = '' }) => {
  // URLs de las imágenes - apunta a las imágenes en public/images
  const imageUrls = {
    dog: '/images/dog-drinking.png', 
    panda: '/images/panda-lifting.png', 
    monkey: '/images/monkey-meditating.png', 
    koala: '/images/koala-sleeping.png' 
  }

  const altTexts = {
    dog: 'Perro tomando agua',
    panda: 'Panda entrenando con pesas',
    monkey: 'Mono meditando',
    koala: 'Koala durmiendo'
  }

  // Animación basada en el tipo de animal
  const animationClass = {
    dog: 'animate-bounce-animal',
    panda: 'animate-float-animal',
    monkey: 'animate-swing',
    koala: 'animate-float-animal'
  }[type] || 'animate-float-animal'

  return (
    <div className={`${size} flex items-center justify-center relative`}>
      <img 
        src={imageUrls[type]} 
        alt={altTexts[type] || 'Animal'}
        className={`w-full h-full object-contain drop-shadow-lg ${animationClass} transition-all duration-300 ${className}`}
        style={{ 
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))',
          backgroundColor: 'transparent',
          imageRendering: 'crisp-edges'
        }}
        onError={(e) => {
          e.target.style.display = 'none'
        }}
      />
    </div>
  )
}

export const KoalaLarge = ({ size = 'w-48 h-48', className = '' }) => {
  // Imagen de persona alegre celebrando su meta - con fondo blanco para mejor contraste
  const celebrationUrl = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop'
  
  return (
    <div className={`${size} flex items-center justify-center relative`}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-200 via-pink-100 to-purple-200 opacity-30"></div>
      <img 
        src={celebrationUrl}
        alt="Persona alegre alcanzando su meta"
        className={`w-full h-full object-cover drop-shadow-2xl animate-float rounded-2xl relative z-10 ${className}`}
        style={{ 
          filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.4))',
          animationDuration: '3s'
        }}
        onError={(e) => {
          console.error('Error cargando imagen de celebración')
          e.target.style.display = 'none'
        }}
      />
    </div>
  )
}

