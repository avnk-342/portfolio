import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate scroll progress from 0 to 1 based on viewport height
  const progress = Math.min(scrollY / window.innerHeight, 0.5)

  return (
    <div className="sticky top-0 inset-0 z-0 h-[90vh] w-screen overflow-hidden">
      
      {/* 1. Background moves down slower (Parallax effect) */}
      <div 
        className="absolute inset-0 bg-[url('assets/synthwave.png')] bg-position-[0%_40%] opacity-50 will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      ></div>

      <div className="absolute text-text-dark inset-0 flex perspective-normal items-center justify-center">
        
        {/* 2. Glowing circle shrinks and fades out slightly */}
        <div 
          className="absolute p-25! bg-white rounded-full blur-xl w-[60%] will-change-transform"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px) scale(${1 - progress * 0.2})`,
            opacity: 1 - progress * 0.8 
          }}
        ></div>

        {/* 3. Heading moves upwards and fades out as you scroll */}
        <h1 
          className="text-6xl font-['Sekuya'] w-[60%] text-center transform-3d rotate-x-25 will-change-transform"
          style={{ 
            transform: `translateY(${-scrollY * 0.08}px) rotateX(25deg)`,
            opacity: 1 - progress * 1
          }}
        >
          I Turn ideas to experiences
        </h1>

      </div>
    </div>
  )
}

export default Hero