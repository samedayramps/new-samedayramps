'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Typography } from '@/components/ui/Typography'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) setIsServicesOpen(false)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto'
  }
  
  const handleServicesToggle = () => setIsServicesOpen(!isServicesOpen)
  
  return (
    <>
      <div className="navbar sticky top-0 z-50 min-h-[4rem] bg-primary px-4 text-primary-content shadow-lg">
        {/* Logo - Always visible */}
        <div className="flex-1">
          <Link 
            href="/" 
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Same Day Ramps Home"
          >
            <Image
              src="/logo.svg"
              alt="Same Day Ramps"
              width={150}
              height={40}
              className="h-10 w-auto transition-transform duration-200 hover:scale-105 md:h-12"
              priority
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex-none lg:hidden">
          <button
            className="btn-ghost btn h-16 w-16 rounded-full"
            onClick={handleMenuToggle}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-10 w-10 stroke-current transition-transform duration-200"
              style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'none' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Typography as="span" variant="body" className="text-lg font-medium">
                <Link href="/">Home</Link>
              </Typography>
            </li>
            <li>
              <Typography as="span" variant="body" className="text-lg font-medium">
                <Link href="/about">About</Link>
              </Typography>
            </li>
            <li>
              <details>
                <summary className="text-lg font-medium">Services</summary>
                <ul className="p-2 bg-base-100 rounded-box shadow-lg">
                  <li>
                    <Typography as="span" variant="body">
                      <Link href="/services/rental">Rental</Link>
                    </Typography>
                  </li>
                  <li>
                    <Typography as="span" variant="body">
                      <Link href="/services/installation">Installation</Link>
                    </Typography>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Typography as="span" variant="body" className="text-lg font-medium">
                <Link href="/contact">Contact</Link>
              </Typography>
            </li>
          </ul>
        </div>

        {/* CTA Button - Desktop only */}
        <div className="hidden lg:flex lg:flex-none">
          <Link 
            href="/quote" 
            className="btn btn-accent text-accent-content font-bold"
            aria-label="Get a quote"
          >
            <Typography as="span" variant="body" className="font-bold">
              Get a Quote
            </Typography>
          </Link>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div 
        className={`fixed inset-x-0 top-16 z-40 transform bg-primary transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="max-h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="menu menu-lg p-4 pt-8 space-y-2">
            {['Home', 'About'].map((item) => (
              <li key={item}>
                <Typography 
                  as={Link} 
                  href={`/${item.toLowerCase()}`} 
                  variant="body"
                  className="text-xl text-primary-content"
                  onClick={handleMenuToggle}
                >
                  {item}
                </Typography>
              </li>
            ))}
            <li>
              <button 
                onClick={handleServicesToggle}
                className="text-xl text-primary-content justify-between"
                aria-expanded={isServicesOpen}
              >
                <Typography variant="body" className="text-xl">
                  Services
                </Typography>
                <svg
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul className={`menu menu-lg ${isServicesOpen ? 'block' : 'hidden'}`}>
                {['Rental', 'Installation'].map((service) => (
                  <li key={service}>
                    <Typography 
                      as={Link}
                      href={`/services/${service.toLowerCase()}`}
                      variant="body"
                      className="text-lg text-primary-content pl-4"
                      onClick={handleMenuToggle}
                    >
                      {service}
                    </Typography>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Typography 
                as={Link}
                href="/contact"
                variant="body"
                className="text-xl text-primary-content"
                onClick={handleMenuToggle}
              >
                Contact
              </Typography>
            </li>
            
            {/* CTA Button - Mobile */}
            <li className="mt-8 mb-4">
              <Typography 
                as={Link}
                href="/quote"
                variant="body"
                className="btn-accent btn h-14 w-full justify-center text-center text-xl font-bold 
                  text-accent-content transition-transform active:scale-95"
                onClick={handleMenuToggle}
                aria-label="Get a quote"
              >
                Get a Quote
              </Typography>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar 