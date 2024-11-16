import { CheckCircle, Clock, DollarSign, Wrench } from 'lucide-react'

const benefits = [
  {
    icon: <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8" />,
    title: "Professional Service",
    description: "Expert installation and removal included. ADA-compliant and immediately available."
  },
  {
    icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8" />,
    title: "Flexible & Fast",
    description: "Rent only for the time you need. Same-day installation available."
  },
  {
    icon: <DollarSign className="h-6 w-6 sm:h-8 sm:w-8" />,
    title: "Cost Effective",
    description: "More affordable than buying. No maintenance or storage costs."
  },
  {
    icon: <Wrench className="h-6 w-6 sm:h-8 sm:w-8" />,
    title: "Hassle Free",
    description: "No DIY assembly. No property damage concerns. Professional fit guaranteed."
  }
]

const WhyRentFromUs = () => {
  return (
    <section className="bg-base-100 py-8 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl lg:text-4xl">Why Rent From Us?</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-2 rounded-lg bg-base-200 p-4 text-center shadow-lg sm:gap-3 sm:p-6"
              >
                <div className="mb-1 flex justify-center text-primary sm:mb-2">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold sm:text-xl">
                  {benefit.title}
                </h3>
                <p className="text-sm text-base-content/80 sm:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyRentFromUs 