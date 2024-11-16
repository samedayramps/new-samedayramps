'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Typography } from '@/components/ui/Typography'

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
    <section className="bg-base-100 px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <Typography 
          variant="section-title" 
          className="mb-8 text-center sm:mb-16"
        >
          How It Works
        </Typography>

        {/* Steps */}
        <div className="relative space-y-4 sm:space-y-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Vertical Line (now inside the step div) */}
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-10 h-[calc(100%+2.5rem)] w-0.5 bg-gray-200 sm:left-[31px] sm:top-14 sm:h-[calc(100%+4rem)]" />
              )}

              <button
                onClick={() => handleStepClick(step.number)}
                className="group w-full rounded-lg bg-base-200/50 p-4 transition-all duration-200 hover:bg-base-200 sm:p-6"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Circle with number */}
                  <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-base-100 text-xl font-bold transition-colors duration-300 sm:h-14 sm:w-14 sm:text-2xl lg:h-16 lg:w-16 ${
                    step.number === activeStep 
                      ? "bg-[#3B82F6] text-white" 
                      : "bg-gray-200 text-gray-500 group-hover:bg-gray-300"
                  }`}>
                    {step.number}
                  </div>

                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <Typography 
                        variant="card-title"
                        className="text-lg font-bold sm:text-xl lg:text-2xl"
                      >
                        {step.title}
                      </Typography>
                      <ChevronDown 
                        className={`h-5 w-5 text-base-content/50 transition-transform duration-300 
                          group-hover:text-base-content/70 sm:h-6 sm:w-6 
                          ${activeStep === step.number ? 'rotate-180' : ''}`}
                      />
                    </div>
                    
                    <Typography 
                      variant="body"
                      className={`mt-2 text-base-content/70 transition-all duration-300
                        ${activeStep === step.number 
                          ? 'max-h-32 opacity-100' 
                          : 'max-h-0 overflow-hidden opacity-0'
                        }`}
                    >
                      {step.description}
                    </Typography>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center sm:mt-12 lg:mt-16">
          <Link
            href="/quote"
            className="inline-flex w-full items-center justify-center rounded-lg 
              bg-accent px-6 py-3 text-lg font-bold text-accent-content 
              transition-transform hover:scale-105 active:scale-100
              sm:w-auto sm:px-8 sm:py-4 sm:text-xl"
          >
            Get A Quote
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 