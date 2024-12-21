"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import StatisticsItem from "./statisticsItem"
import About from "./about"
import Services from "./services"
import Projects from "./projects"
import Values from "./values"
import TeamSection from "./team"
import ContactSection from "./contact"
import Testimonial from "./testimonial"

export function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const images = [
        "/carousel-1.jpg",
        "/tech-2.jpeg",
        "/carousel-2.jpg",
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))
    }

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    }

    return (
        <>
            <div className="relative min-h-screen">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                            currentSlide === index ? "opacity-100" : "opacity-0"
                        }`}
                        aria-hidden={currentSlide !== index}
                    >
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                ))}
                <div className="relative z-10">
                    <div className="container mx-auto max-w-7xl p-4 md:p-8 min-h-screen flex items-center">
                        <motion.div 
                            className="max-w-2xl space-y-6"
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <motion.div 
                                variants={itemVariants}
                                className="inline-block rounded-[5px] bg-blue-100/90 p-3 text-sm text-blue-600 backdrop-blur-sm"
                            >
                                Software & Solutions Provider
                            </motion.div>
                            <motion.h1 
                                variants={itemVariants}
                                className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
                            >
                                An Innovative <span className="text-blue-400">IT Solutions</span> Agency
                            </motion.h1>
                            <motion.p 
                                variants={itemVariants}
                                className="text-xl text-gray-200"
                            >
                                Pioneering holistic solutions for businesses, bridging technology and innovation.
                            </motion.p>
                            <motion.div 
                                variants={itemVariants}
                                className="flex gap-4"
                            >
                                <Button 
                                    size="lg" 
                                    className="bg-blue-600 rounded-[5px] hover:bg-blue-700 text-white"
                                >
                                    Get Started
                                </Button>
                                <Button 
                                    variant="outline" 
                                    size="lg" 
                                    className="text-white rounded-[5px] border-white hover:bg-white/20 transition-colors duration-200"
                                >
                                    Learn More
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                <motion.div 
                    className="absolute bottom-4 right-4 flex gap-2 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <Button
                        variant="secondary"
                        size="icon"
                        className="bg-white/80 hover:bg-white"
                        onClick={handlePrevSlide}
                    >
                        <ChevronLeft className="h-4 w-4 text-blue-600" />
                    </Button>
                    <Button
                        variant="secondary"
                        size="icon"
                        className="bg-white/80 hover:bg-white"
                        onClick={handleNextSlide}
                    >
                        <ChevronRight className="h-4 w-4 text-blue-600" />
                    </Button>
                </motion.div>

                {/* Dots Navigation */}
                <motion.div 
                    className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    {[0, 1, 2].map((index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 rounded-full transition-colors ${
                                currentSlide === index ? "bg-blue-400" : "bg-gray-300"
                            }`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </motion.div>
            </div>

            <StatisticsItem />
            <About />
            <Services />
            <Projects />
            <Values />
            <TeamSection />
            <Testimonial />
            <ContactSection />
        </>
    )
}

