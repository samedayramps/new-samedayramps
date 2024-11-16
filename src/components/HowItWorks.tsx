'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const steps = [
  {
    number: "1",
    title: "Request A Quote",
    description: "Fill out our form or call (940) 373-5713. We'll help you understand what you need."
  },
  {
    number: "2",
    title: "We Install Your Ramp",
    description: "We arrive at the scheduled install time to set up your ramp. We make sure it's safe."
  },
  {
    number: "3",
    title: "You Use The Ramp",
    description: "Enjoy the simple freedom that easy access into and out of your home provides."
  },
  {
    number: "4",
    title: "We Remove the Ramp",
    description: "We remove the ramp when you no longer need it, leaving your home just as it was before."
  }
]

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState<string>("1")

  const handleStepClick = (stepNumber: string) => {
    setActiveStep(stepNumber === activeStep ? "" : stepNumber)
  }

  return (
    <section className="bg-base-100 py-8 sm:py-12 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold sm:mb-16 sm:text-4xl lg:text-5xl">
            How It Works
          </h2>

          {/* Steps */}
          <div className="relative flex flex-col">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative mb-10 last:mb-0 sm:mb-16"
                onClick={() => handleStepClick(step.number)}
              >
                {/* Vertical Line (now inside the step div) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-5 top-10 h-[calc(100%+2.5rem)] w-0.5 bg-gray-200 sm:left-[31px] sm:top-14 sm:h-[calc(100%+4rem)]" />
                )}

                <div className="group flex cursor-pointer gap-4 sm:gap-6 lg:gap-8">
                  {/* Circle with number */}
                  <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-base-100 text-xl font-bold transition-colors duration-300 sm:h-14 sm:w-14 sm:text-2xl lg:h-16 lg:w-16 ${
                    step.number === activeStep 
                      ? "bg-[#3B82F6] text-white" 
                      : "bg-gray-200 text-gray-500 group-hover:bg-gray-300"
                  }`}>
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col pt-1 sm:pt-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold sm:text-2xl lg:text-3xl">
                        {step.title}
                      </h3>
                      <ChevronDown 
                        className={`h-5 w-5 text-gray-400 transition-transform duration-300 group-hover:text-gray-600 sm:h-6 sm:w-6 
                          ${activeStep === step.number ? 'rotate-180' : ''}`}
                      />
                    </div>
                    <p className={`mt-2 overflow-hidden text-base text-gray-600 transition-all duration-300 sm:text-lg lg:text-xl
                      ${activeStep === step.number ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center sm:mt-16">
            <Link
              href="/quote"
              className="inline-block w-full rounded-lg bg-[#E8FF32] px-6 py-3 text-lg font-bold text-black hover:scale-105 active:scale-100 sm:w-auto sm:px-8 sm:py-4 sm:text-xl"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 