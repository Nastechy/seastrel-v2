"use client"

import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'

interface TeamMemberProps {
  name: string
  role: string
  image: string
}

function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-6 flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-[#1D4ED8] rounded-t-lg" />
        
        <div className="relative z-10 mx-auto w-48 h-48 rounded-full border-4 border-white overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <h3 className="text-xl font-bold mb-1 text-gray-900">
          {name}
        </h3>
        <p className="text-gray-600 mb-4">{role}</p>
        
        <div className="flex justify-center gap-3">
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="p-2 rounded-full bg-[#1D4ED8] text-white hover:bg-black transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function TeamSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const team = [
    {
      name: "Samuel Emeka Anakwe",
      role: "Chief Managing Director",
      image: "/Samuel2.png",
    },
    {
      name: "Daniel Okon",
      role: "Head of Operations",
      image: "/Daniel2.png",
    },
    {
      name: "Okoli Johnson",
      role: "Chief Technical Officer",
      image: "/Samuel2.png",
    },
    {
      name: "Sarah Williams",
      role: "Head of Marketing",
      image: "/Daniel2.png",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "/Samuel2.png",
    },
    {
      name: "Jessica Parker",
      role: "Product Manager",
      image: "/Daniel2.png",
    }
  ]

  return (
    <section className="py-20 px-0 md:px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-[#1D4ED8] font-bold mb-2">Our Team</h2>
          <h1 className="text-3xl font-bold md:text-4xl">
            Meet our expert Team
          </h1>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8">
              {team.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8 md:hidden">
            <button 
              onClick={scrollPrev}
              className="p-2 rounded-full bg-[#1D4ED8] text-white hover:bg-opacity-90 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="p-2 rounded-full bg-[#1D4ED8] text-white hover:bg-opacity-90 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="hidden md:block">
            <button 
              onClick={scrollPrev}
              className="absolute top-1/2 -left-12 transform -translate-y-1/2 p-2 rounded-full bg-[#1D4ED8] text-white hover:bg-opacity-90 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="absolute top-1/2 -right-12 transform -translate-y-1/2 p-2 rounded-full bg-[#1D4ED8] text-white hover:bg-opacity-90 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

