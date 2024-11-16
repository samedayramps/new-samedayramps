import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah M.",
    location: "Dallas, TX",
    date: "October 1, 2024",
    rating: 5,
    text: "Renting a ramp from Same Day Ramps was the perfect solution for our temporary needs. The installation was quick, and the team was incredibly helpful."
  },
  {
    name: "John D.",
    location: "Fort Worth, TX",
    date: "September 15, 2024",
    rating: 4,
    text: "Same Day Ramps made it so easy to get a temporary ramp for my mom's visit. The flexibility of renting was perfect, and their service was outstanding!"
  },
  {
    name: "Emily R.",
    location: "Arlington, TX",
    date: "September 10, 2024",
    rating: 5,
    text: "The ramp rental process was seamless, and the team was very accommodating to our schedule. Highly recommend!"
  },
  {
    name: "Michael B.",
    location: "Plano, TX",
    date: "September 5, 2024",
    rating: 5,
    text: "Great service and quick installation. The ramp was exactly what we needed."
  }
]

const Testimonials = () => {
  return (
    <section className="bg-base-200 py-6 sm:py-12 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl lg:text-4xl">
              Customer Testimonials
            </h2>
            
            <div className="mb-4 flex items-center justify-center gap-2 sm:mb-6">
              <Image 
                src="/google-logo.png" 
                alt="Google Reviews" 
                width={16} 
                height={16}
                className="h-4 w-auto sm:h-5"
              />
              <span className="text-sm font-medium sm:text-base">Google Reviews</span>
            </div>

            <div className="mb-3 flex items-center justify-center gap-0.5 sm:mb-4 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400 sm:h-5 sm:w-5" 
                />
              ))}
            </div>

            <p className="text-base font-bold sm:text-lg">
              5.0 Stars | 21 reviews
            </p>
          </div>

          <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex flex-col gap-2 rounded-lg bg-base-100 p-3 text-left shadow-md sm:gap-3 sm:p-4 lg:p-6"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content sm:h-10 sm:w-10 sm:text-base">
                    {testimonial.name[0]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-bold sm:text-base">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-base-content/60 sm:text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-xs text-base-content/60 sm:text-sm">
                    {testimonial.date}
                  </div>
                </div>

                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4" 
                    />
                  ))}
                </div>

                <p className="text-xs text-base-content/80 sm:text-sm lg:text-base">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 