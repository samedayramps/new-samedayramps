import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  variant?: 'primary' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  fullWidth?: boolean
}

export const Button = ({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
}: ButtonProps) => {
  const baseStyles = 'inline-flex w-full items-center justify-center rounded-lg font-bold transition-transform hover:scale-105 active:scale-100 sm:w-auto'
  
  const variantStyles = {
    primary: 'bg-primary text-primary-content',
    accent: 'bg-accent text-accent-content',
    outline: 'border-2 border-current bg-transparent'
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-lg sm:px-8 sm:py-4',
    lg: 'px-8 py-4 text-xl sm:px-10 sm:py-5'
  }

  const widthStyle = fullWidth ? 'sm:w-full' : ''

  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${widthStyle}
    ${className}
  `.trim()

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  )
} 