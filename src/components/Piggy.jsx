import { useState, useEffect } from 'react'

const Piggy = ({ size = 'text-3xl', position = 'static', animation = 'bounce', delay = 0, onClick }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  const animationClasses = {
    bounce: 'animate-bounce',
    pulse: 'animate-pulse',
    wiggle: 'animate-wiggle',
    spin: 'animate-spin',
    float: 'animate-float'
  }

  const positionClasses = {
    absolute: 'absolute',
    fixed: 'fixed',
    static: 'static',
    relative: 'relative'
  }

  const isClickable = !!onClick;

  return (
    <div 
      onClick={onClick} 
      className={`relative inline-block group ${isClickable ? 'cursor-pointer' : ''}`}
    >
      <span 
        className={`${size} ${positionClasses[position]} inline-block transform hover:scale-125 transition-transform duration-300 ${isVisible ? animationClasses[animation] || '' : 'opacity-0'}`}
        style={{ 
          animationDuration: animation === 'bounce' ? '2s' : animation === 'pulse' ? '2s' : '1s',
          animationDelay: `${delay}ms`
        }}
      >
        🐷
      </span>
      {isClickable && (
        <div className="absolute px-3 py-1 mb-2 text-xs font-bold text-purple-700 transition-opacity duration-300 -translate-x-1/2 bg-white rounded-full shadow-lg opacity-0 bottom-full left-1/2 w-max group-hover:opacity-100 whitespace-nowrap">
          Press!
        </div>
      )}
    </div>
  )
}

export default Piggy
