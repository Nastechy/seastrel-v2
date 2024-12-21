"use client"

import { useEffect, useState } from "react"

interface StatItemProps {
  finalValue: number
  label: string
  duration?: number
}

function StatItem({ finalValue, label, duration = 2000 }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration

      if (progress < 1) {
        const randomValue = Math.floor(
          finalValue * Math.random() * (1 - progress) + finalValue * progress
        )
        setDisplayValue(randomValue)
        animationFrame = requestAnimationFrame(animate)
      } else {
        setDisplayValue(finalValue)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [finalValue, duration])

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <span className="text-[#FCFDFF] text-4xl md:text-5xl font-bold mb-2">
        {displayValue}
      </span>
      <p className="text-[#FCFDFF] font-600 text-sm md:text-base text-center">{label}</p>
    </div>
  )
}

export default function StatisticsItem() {
  const stats = [
    { value: 99, label: "Success in getting happy customer" },
    { value: 25, label: "Thousands of successful business" },
    { value: 120, label: "Total clients who love Seastrel" },
    { value: 5, label: "Stars reviews given by satisfied clients" },
  ]

  return (
    <div className="w-full bg-[#1D4ED8] py-12">
      <div className="container mx-auto max-w-7xl ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              finalValue={stat.value}
              label={stat.label}
              duration={2000 + index * 500} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

