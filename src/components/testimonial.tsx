"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface TestimonialCard {
  name: string
  role: string
  company: string
  image: string
  text: string
  rating: number
}

const testimonials: TestimonialCard[] = [
  {
    name: "Alex Rivera",
    role: "IT Manager",
    company: "Global Logistics Corp.",
    image: "/testimonial-1.jpg",
    text: "I was amazed at the efficiency and professionalism of the Seastrel team. Their ability to deliver high-quality results under tight deadlines is why they are our go-to partner for all our IT needs.",
    rating: 5,
  },
  {
    name: "Maria Gonzalez",
    role: "Owner",
    company: "Bloom Florists",
    image: "/testimonial-2.jpg",
    text: "As a small business owner, I was looking for a reliable partner to help us navigate the digital landscape. Seastrel not only met but exceeded our expectations with their personalized and results-driven strategies.",
    rating: 5,
  },
  {
    name: "Jamie Chen",
    role: "Co-Founder & CEO",
    company: "Tech Innovations Inc.",
    image: "/testimonial-3.jpg",
    text: "Partnering with Seastrel was a game-changer for our startup. Their innovative solutions and dedicated team helped us scale our operations efficiently. Highly recommend their services.",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Chief Marketing Officer",
    company: "HealthCare Innovations",
    image: "/testimonial-4.jpg",
    text: "Seastrel helped us refine our marketing strategy and deliver results faster. Their team is both innovative and dependable, and we couldn't be happier with the outcome.",
    rating: 5,
  },
  {
    name: "Carlos Mendez",
    role: "Operations Manager",
    company: "EcoTech Solutions",
    image: "/testimonial-1.jpg",
    text: "The team at Seastrel understands our challenges and consistently delivers solutions that help us grow. They're always on time and on budget.",
    rating: 5,
  },
  {
    name: "Laura Wang",
    role: "Founder & CEO",
    company: "Creative Studios",
    image: "/testimonial-2.jpg",
    text: "Seastrel's creativity and technical expertise helped our brand stand out in a crowded market. They're an essential partner in our ongoing growth.",
    rating: 5,
  },
]

const Testimonial = () => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1)
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2)
      } else {
        setItemsToShow(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNext = () => {
    setCurrentStartIndex((prev) =>
      (prev + itemsToShow) % testimonials.length
    )
  }

  const handlePrev = () => {
    setCurrentStartIndex((prev) =>
      (prev - itemsToShow + testimonials.length) % testimonials.length
    )
  }

  const visibleTestimonials = testimonials.slice(
    currentStartIndex,
    currentStartIndex + itemsToShow
  )

  return (
    <section className="py-16 px-4 bg-white text-center">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold  text-blue-600">Our Testimonial</h2>
          <h3 className="text-xl font-semibold  text-gray-600">Our Clients Saying!</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-r from-blue-500 to-purple-600 rounded-[10px] shadow-xl p-6 text-white"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-semibold mb-2">{testimonial.name}</h4>
              <p className="text-sm mb-2">
                {testimonial.role}, {testimonial.company}
              </p>
              <p className="text-sm italic mb-4 line-clamp-4">{testimonial.text}</p>
              <div className="flex justify-center gap-1">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <svg
                    key={idx}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-4 text-[14px]">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      </div>

    </section>
  )
}

export default Testimonial

