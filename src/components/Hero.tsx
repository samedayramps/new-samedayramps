'use client';

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const heroImages = [
  {
    src: '/hero1.webp',
    alt: "Wheelchair ramp installation service",
    width: 1920,
    height: 1080
  },
  {
    src: '/hero2.webp',
    alt: "Professional ramp rental and setup",
    width: 1920,
    height: 1080
  },
  {
    src: '/hero3.webp',
    alt: "Temporary wheelchair ramp solutions",
    width: 1920,
    height: 1080
  }
]

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)

  // Auto-advance the slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const handleImageLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.classList.remove('opacity-0')
  }, [])

  return (
    <section className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden lg:h-screen">
      {/* Hero Images */}
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover object-center opacity-0 transition-opacity duration-500"
            sizes="100vw"
            quality={85}
            onLoad={handleImageLoad}
            width={image.width}
            height={image.height}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-lg font-medium tracking-wide sm:text-xl md:text-2xl">
            WHEELCHAIR RAMP RENTALS
          </h1>
          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Make Your Home<br />
            Accessible<br />
            Again
          </h2>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl md:text-2xl">
            We make getting a wheelchair ramp simple and easy so you have one less thing to worry about.
          </p>
          {/* CTA Button */}
          <div className="pt-8 sm:pt-10">
            <Link
              href="/quote"
              className="rounded-lg bg-[#E8FF32] px-8 py-4 text-lg font-bold text-black hover:scale-105 active:scale-100"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 