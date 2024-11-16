import { ElementType, ComponentPropsWithoutRef } from 'react';

type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'section-title' 
  | 'section-subtitle' 
  | 'card-title' 
  | 'body' 
  | 'small';

type TypographyProps<C extends ElementType> = {
  children: React.ReactNode;
  variant?: TypographyVariant;
  className?: string;
  as?: C;
} & ComponentPropsWithoutRef<C>;

const variantMapping: Record<TypographyVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  'section-title': 'h2',
  'section-subtitle': 'h3',
  'card-title': 'h3',
  body: 'p',
  small: 'p',
};

const variantStyles: Record<TypographyVariant, string> = {
  h1: 'text-heading-sm md:text-heading-base lg:text-heading-lg xl:text-heading-xl font-bold tracking-tight',
  h2: 'text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight',
  h3: 'text-xl md:text-2xl lg:text-3xl font-bold tracking-tight',
  h4: 'text-lg md:text-xl lg:text-2xl font-semibold',
  'section-title': 'text-2xl md:text-3xl lg:text-4xl font-bold',
  'section-subtitle': 'text-lg md:text-xl text-base-content/80',
  'card-title': 'text-lg md:text-xl font-semibold',
  body: 'text-base md:text-lg leading-relaxed',
  small: 'text-sm md:text-base text-base-content/80',
};

export const Typography = <C extends ElementType = 'p'>({ 
  children, 
  variant = 'body',
  className = '',
  as,
  ...props
}: TypographyProps<C>) => {
  const baseStyles = 'max-w-prose';
  const Component = as || variantMapping[variant];
  
  return (
    <Component 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}; 