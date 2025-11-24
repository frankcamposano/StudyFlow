import { useState, useEffect } from 'react'

const Piggy = ({ size = 'text-3xl', position = 'static', animation = 'bounce', delay = 0 }) => {
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

  return (
    <span 
      className={`${size} ${positionClasses[position]} inline-block transform hover:scale-125 transition-transform duration-300 ${isVisible ? animationClasses[animation] || '' : 'opacity-0'}`}
      style={{ 
        animationDuration: animation === 'bounce' ? '2s' : animation === 'pulse' ? '2s' : '1s',
        animationDelay: `${delay}ms`
      }}
    >
      🐷
    </span>
  )
}

export default Piggy

