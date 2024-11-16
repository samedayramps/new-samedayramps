'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'

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
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Typography 
          variant="section-title" 
          className="mb-12 text-center text-3xl font-bold"
        >
          How It Works
        </Typography>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="rounded-lg bg-gray-50"
            >
              <button
                onClick={() => handleStepClick(step.number)}
                className="w-full"
              >
                <div className="flex items-center gap-6 p-6">
                  {/* Circle with number */}
                  <div 
                    className={`flex h-12 w-12 shrink-0 items-center 
                      justify-center rounded-full text-xl font-semibold
                      ${step.number === activeStep 
                        ? "bg-blue-500 text-white" 
                        : "bg-gray-200 text-gray-600"
                      }`}
                  >
                    {step.number}
                  </div>

                  <div className="flex flex-1 items-center justify-between">
                    <Typography 
                      variant="card-title"
                      className="text-xl font-semibold text-gray-900"
                    >
                      {step.title}
                    </Typography>
                    
                    <ChevronDown 
                      className={`h-6 w-6 text-gray-400 transition-transform duration-200
                        ${activeStep === step.number ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>
              </button>
              
              {activeStep === step.number && (
                <div className="px-24 pb-6">
                  <Typography 
                    variant="body"
                    className="text-gray-600"
                  >
                    {step.description}
                  </Typography>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Button 
            href="/quote"
            variant="accent"
            size="lg"
          >
            Get A Quote
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 