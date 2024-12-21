"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container max-w-8xl mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-600">Seastrel</span>
          <span className="text-xl font-bold text-blue-400">Tech</span>
        </Link>    
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link href="/projects" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">   
          <Button className="bg-blue-600 rounded-[5px] hover:bg-blue-700 text-white transition-colors duration-200">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}

