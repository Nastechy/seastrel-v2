"use client"

import Image from "next/image"
import { Code, ShoppingBag, Layers, Smartphone, Monitor, LineChart } from 'lucide-react'

interface ProjectCardProps {
  title: string
  imageSrc: string
  icon: React.ReactNode
}

function ProjectCard({ title, imageSrc, icon }: ProjectCardProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-[10px] group ">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[#1D4ED8]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
        <div className="text-white mb-4 w-12 h-12">
          {icon}
        </div>
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-white">Development</p>
      </div>
    </div>
  )
}

export default function Projects() {
  const projects = [
    {
      title: "Intachurch",
      imageSrc: "/project-1.jpg",
      icon: <Code className="w-full h-full" />
    },
    {
      title: "Menerva Shop",
      imageSrc: "/project-2.jpg",
      icon: <ShoppingBag className="w-full h-full" />
    },
    {
      title: "My bank",
      imageSrc: "/project-3.jpg",
      icon: <Layers className="w-full h-full" />
    },
    {
      title: "Chatbot",
      imageSrc: "/project-4.jpg",
      icon: <Smartphone className="w-full h-full" />
    },
    {
      title: "Sil Registry",
      imageSrc: "/project-5.jpg",
      icon: <Monitor className="w-full h-full" />
    },
    {
      title: "Artspilt",
      imageSrc: "/project-6.jpg",
      icon: <LineChart className="w-full h-full" />
    }
  ]

  return (
    <section className="px-4 md:px-0 py-20 mt-10 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-[#1D4ED8] font-bold mb-4">Our Project</h2>
          <h1 className="text-3xl font-bold md:text-4xl">
            Our Recently Completed<br />
            Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 shadow-lg">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              imageSrc={project.imageSrc}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

