// Componente para mostrar las imágenes de animales reales
// Las imágenes se cargan desde la carpeta src con fondo transparente
import dogImage from '../dog-drinking.png'
import pandaImage from '../panda-lifting.png'
import monkeyImage from '../monkey-meditating.png'
import koalaImage from '/images/koala-durmiendo.png'

export const AnimalImage = ({ type, size = 'w-32 h-32', className = '' }) => {
  // URLs de las imágenes - usa imports para mejor compatibilidad con base path
  const imageUrls = {
    dog: dogImage, 
    panda: pandaImage, 
    monkey: monkeyImage, 
    koala: koalaImage
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
