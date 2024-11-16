import { Typography } from '@/components/ui/Typography'

const situations = [
  {
    title: "Recovery & Rehabilitation",
    description: "Perfect for recovery from surgery or injury when you need temporary accessibility. More affordable than buying a permanent ramp."
  },
  {
    title: "Temporary Home Modifications",
    description: "Ideal while waiting for permanent accessibility solutions. Professional installation with no property damage concerns."
  },
  {
    title: "Visiting Family Members",
    description: "Quick setup for when loved ones with mobility needs come to stay. Flexible rental periods to match their visit."
  },
  {
    title: "Bridge to Permanent Solutions",
    description: "Immediate accessibility while you plan or wait for long-term modifications. ADA-compliant and professionally installed."
  }
]

const PerfectFor = () => {
  return (
    <section className="bg-base-100 py-8 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Typography 
            variant="section-title" 
            className="mb-3 sm:mb-4"
          >
            Looking for a Wheelchair Ramp?
          </Typography>
          
          <Typography 
            variant="section-subtitle" 
            className="mb-8 sm:mb-12"
          >
            You&apos;re probably finding out it&apos;s not as easy or affordable as you hoped. 
            We make renting simple and hassle-free.
          </Typography>
          
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">
            {situations.map((situation, index) => (
              <div 
                key={index}
                className="flex flex-col gap-2 rounded-lg bg-base-200 p-4 text-left shadow-lg sm:p-6"
              >
                <Typography 
                  variant="card-title" 
                  className="text-primary"
                >
                  {situation.title}
                </Typography>
                <Typography 
                  variant="body" 
                  className="text-base-content/80"
                >
                  {situation.description}
                </Typography>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg bg-primary/10 p-4 sm:mt-12 sm:p-8">
            <Typography 
              variant="card-title" 
              className="mb-3 sm:mb-4"
            >
              Why Choose Renting?
            </Typography>
            <ul className="text-left text-base leading-relaxed sm:text-lg">
              <li className="mb-2">✓ Avoid thousands in upfront costs</li>
              <li className="mb-2">✓ Professional installation included</li>
              <li className="mb-2">✓ No maintenance or storage hassles</li>
              <li>✓ Flexible rental periods - pay only for what you need</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerfectFor 