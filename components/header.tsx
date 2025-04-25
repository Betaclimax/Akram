"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight, ShoppingBag, Star, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  
    const toggleMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
          <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl font-bold tracking-tight">
                Akram<span className="text-cyan-500">Car</span>
              </span>
            </Link>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={toggleMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-cyan-500 transition-colors">
                Home
              </Link>
              <Link href="/cars" className="text-sm font-medium hover:text-cyan-500 transition-colors">
                Cars
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-cyan-500 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-cyan-500 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Desktop CTA buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full px-6 font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-1"
              >
                Get Started <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            {/* Mobile Navigation (Slide-down menu) */}
            {isMobileMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden">
                <div className="flex flex-col p-4 space-y-4">
                  <Link 
                    href="/" 
                    className="text-sm font-medium hover:text-cyan-500 transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/cars" 
                    className="text-sm font-medium hover:text-cyan-500 transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Cars
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-sm font-medium hover:text-cyan-500 transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-sm font-medium hover:text-cyan-500 transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="flex flex-col gap-2 pt-2 border-t">
                    <Button variant="ghost" size="sm" className="justify-center">
                      Sign In
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white justify-center rounded-full px-6 font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-1"
                    >
                      Get Started <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
    )
  }