'use client';

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const heroImages = [
  '/hero1.webp',
  '/hero2.webp',
  '/hero3.webp'
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

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Hero Images */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt=""
            fill
            priority={index === 0}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={90}
          />
          {/* Gradient overlay for better text readability */}
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