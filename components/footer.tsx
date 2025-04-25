"use client"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 md:px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">AkramCar</h3>
            <p className="text-gray-400 mb-4">
              Providing exceptional automotive experiences since 2023. Our mission is to connect drivers with their dream vehicles.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="transition-all duration-200 hover:text-cyan-400 hover:scale-110">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="transition-all duration-200 hover:text-cyan-400 hover:scale-110">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="transition-all duration-200 hover:text-cyan-400 hover:scale-110">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="transition-all duration-200 hover:text-cyan-400 hover:scale-110">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/cars" className="hover:text-cyan-400 transition-colors">Cars</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Car Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cars?category=sports" className="hover:text-cyan-400 transition-colors">Sports Cars</Link>
              </li>
              <li>
                <Link href="/cars?category=luxury" className="hover:text-cyan-400 transition-colors">Luxury Cars</Link>
              </li>
              <li>
                <Link href="/cars?category=suv" className="hover:text-cyan-400 transition-colors">SUVs</Link>
              </li>
              <li>
                <Link href="/cars?category=electric" className="hover:text-cyan-400 transition-colors">Electric Cars</Link>
              </li>
              <li>
                <Link href="/cars?category=classic" className="hover:text-cyan-400 transition-colors">Classic Cars</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Automotive Avenue</p>
              <p>Car City, CC 12345</p>
              <p className="mt-4">
                <a href="tel:+15551234567" className="hover:text-cyan-400 transition-colors">+1 (555) 123-4567</a>
              </p>
              <p>
                <a href="mailto:info@akramcar.com" className="hover:text-cyan-400 transition-colors">info@akramcar.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} AkramCar. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6 text-sm">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-cyan-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
