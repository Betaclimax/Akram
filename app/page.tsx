"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight, ShoppingBag, Star } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const slides = [
    { src: "/images/car1.PNG", alt: "2023 Porsche 911" },
    { src: "/images/car2.PNG", alt: "2023 Mercedes-Benz AMG GT" },
    { src: "/images/car3.PNG", alt: "2023 Audi e-tron GT" },
  ]
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  // Handle Previous/Next button clicks
  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  // Handle indicator clicks
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-20 flex items-center bg-white sticky top-0 z-50 shadow-md">
        <Link href="/" className="flex items-center justify-center">
          <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            AKRAM CAR
          </span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-8">
          <Link href="/cars" className="text-sm font-medium hover:text-cyan-500 transition-colors">
            INVENTORY
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-cyan-500 transition-colors">
            ABOUT
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-cyan-500 transition-colors">
            CONTACT
          </Link>
          <Link href="/cart" className="text-sm font-medium hover:text-cyan-500 transition-colors flex items-center">
            <ShoppingBag className="h-4 w-4 mr-1" />
            CART
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        {/* Hero Slider Section */}
        <section className="relative w-full h-[80vh] overflow-hidden">
          <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-full relative flex-shrink-0">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0} // Only prioritize the first image for performance
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
                  <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-lg space-y-6">
                      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                        Ride <span className="text-cyan-400">with Confidence</span>
                      </h1>
                      <p className="text-lg text-white/80">
                        At our car shop, we are committed to providing our customers with exceptional service and competitive pricing.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 rounded-full px-8">
                          Explore Now
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 rounded-full px-8"
                        >
                          Book Test Drive
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-8 right-8 flex gap-2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              onClick={goToPreviousSlide}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              onClick={goToNextSlide}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>

          {/* Slider Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "w-12 bg-cyan-500" : "w-8 bg-white/30"
                }`}
              ></button>
            ))}
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Browse By Category</h2>
              <p className="text-gray-500 max-w-2xl">
                Discover your perfect ride from our curated collection of premium vehicles
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Sports", image: "/placeholder.svg?height=300&width=300&text=Sports+Car", count: 24 },
                { name: "Luxury", image: "/placeholder.svg?height=300&width=300&text=Luxury+Sedan", count: 18 },
                { name: "SUV", image: "/placeholder.svg?height=300&width=300&text=Luxury+SUV", count: 32 },
                { name: "Electric", image: "/placeholder.svg?height=300&width=300&text=Electric+Car", count: 15 },
              ].map((category) => (
                <Link key={category.name} href={`/cars?category=${category.name.toLowerCase()}`} className="group">
                  <div className="relative overflow-hidden rounded-2xl aspect-square">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <div>
                        <h3 className="text-xl font-bold text-white">{category.name}</h3>
                        <p className="text-white/70 text-sm">{category.count} vehicles</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Vehicles */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Trending Vehicles</h2>
                <p className="text-gray-500">The most viewed and requested vehicles this month</p>
              </div>
              <Link
                href="/cars"
                className="text-cyan-500 font-medium flex items-center hover:text-cyan-600 transition-colors"
              >
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-8 bg-gray-100 p-1 rounded-full">
                <TabsTrigger
                  value="all"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="new"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  New
                </TabsTrigger>
                <TabsTrigger
                  value="used"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  Used
                </TabsTrigger>
                <TabsTrigger
                  value="electric"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  Electric
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      id: 1,
                      make: "Mercedes-Benz",
                      model: "AMG GT",
                      year: 2023,
                      price: 142995,
                      image: "/placeholder.svg?height=400&width=600&text=Mercedes+AMG+GT",
                      rating: 4.9,
                      reviews: 28,
                    },
                    {
                      id: 2,
                      make: "Audi",
                      model: "e-tron GT",
                      year: 2023,
                      price: 106995,
                      image: "/placeholder.svg?height=400&width=600&text=Audi+e-tron+GT",
                      rating: 4.8,
                      reviews: 19,
                      tag: "Electric",
                    },
                    {
                      id: 3,
                      make: "Porsche",
                      model: "911 Turbo S",
                      year: 2023,
                      price: 216995,
                      image: "/placeholder.svg?height=400&width=600&text=Porsche+911",
                      rating: 5.0,
                      reviews: 32,
                      tag: "New",
                    },
                  ].map((car) => (
                    <Card
                      key={car.id}
                      className="group overflow-hidden border-0 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="relative">
                        <div className="aspect-[4/3] overflow-hidden">
                          <Image
                            src={car.image || "/placeholder.svg"}
                            alt={`${car.year} ${car.make} ${car.model}`}
                            width={600}
                            height={400}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        {car.tag && (
                          <div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                            {car.tag}
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold">
                              {car.make} {car.model}
                            </h3>
                            <p className="text-gray-500 text-sm">{car.year}</p>
                          </div>
                          <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
                            <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500 mr-1" />
                            <span className="text-xs font-medium">
                              {car.rating} ({car.reviews})
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <p className="text-2xl font-bold">${car.price.toLocaleString()}</p>
                          <Button className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="new" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="text-center p-12 col-span-full">
                    <p className="text-gray-500">Switch to the "All" tab to see example vehicles</p>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="used" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="text-center p-12 col-span-full">
                    <p className="text-gray-500">Switch to the "All" tab to see example vehicles</p>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="electric" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="text-center p-12 col-span-full">
                    <p className="text-gray-500">Switch to the "All" tab to see example vehicles</p>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Featured Banner */}
        <section className="py-16 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight">Experience Luxury Like Never Before</h2>
                <p className="text-white/80 text-lg">
                  Our VIP program offers exclusive benefits, priority access to new arrivals, and personalized concierge
                  service.
                </p>
                <Button className="bg-white text-cyan-600 hover:bg-white/90 rounded-full px-8">Join VIP Program</Button>
              </div>
              <div className="relative">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Luxury+Experience"
                    alt="Luxury car experience"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <span className="ml-2 font-medium">5.0</span>
                  </div>
                  <p className="text-gray-700 italic">
                    "The most exceptional car buying experience I've ever had. Truly remarkable service."
                  </p>
                  <div className="mt-3 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold">
                      A
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">Alex Reynolds</p>
                      <p className="text-gray-500 text-sm">CEO, Vertex Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Latest From Our Blog</h2>
                <p className="text-gray-500">Insights, news, and automotive trends</p>
              </div>
              <Link
                href="/blog"
                className="text-cyan-500 font-medium flex items-center hover:text-cyan-600 transition-colors"
              >
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "The Future of Electric Luxury Vehicles",
                  excerpt:
                    "Exploring how premium brands are embracing electric technology without compromising on luxury.",
                  image: "/placeholder.svg?height=300&width=500&text=Electric+Luxury",
                  date: "June 12, 2023",
                  category: "Technology",
                },
                {
                  title: "Collector's Guide: Investing in Classic Cars",
                  excerpt:
                    "Expert advice on which classic models are most likely to appreciate in value over the next decade.",
                  image: "/placeholder.svg?height=300&width=500&text=Classic+Cars",
                  date: "May 28, 2023",
                  category: "Investment",
                },
                {
                  title: "Inside the Making of the New Porsche 911",
                  excerpt: "A behind-the-scenes look at the engineering and design process of an automotive icon.",
                  image: "/placeholder.svg?height=300&width=500&text=Porsche+911",
                  date: "May 15, 2023",
                  category: "Behind the Scenes",
                },
              ].map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-0 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-[5/3] overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-0.5 bg-cyan-100 text-cyan-800 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link href="/blog/post" className="text-cyan-500 font-medium hover:text-cyan-600 transition-colors">
                      Read More
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Stay Updated</h2>
              <p className="text-gray-500 mb-8">
                Subscribe to our newsletter for exclusive offers, new arrivals, and automotive insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="inline-block mb-4">
                <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  AUTOVOGUE
                </span>
              </Link>
              <p className="text-gray-400 mb-4">
                Redefining the luxury automotive experience with curated selections and exceptional service.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/cars" className="text-gray-400 hover:text-white transition-colors">
                    Browse Inventory
                  </Link>
                </li>
                <li>
                  <Link href="/financing" className="text-gray-400 hover:text-white transition-colors">
                    Financing Options
                  </Link>
                </li>
                <li>
                  <Link href="/sell" className="text-gray-400 hover:text-white transition-colors">
                    Sell Your Car
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-gray-400 hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-gray-400 hover:text-white transition-colors">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <address className="not-italic text-gray-400">
                <p>1234 Luxury Lane</p>
                <p>Beverly Hills, CA 90210</p>
                <p className="mt-3">info@autovogue.com</p>
                <p>+1 (800) 555-CARS</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} AUTOVOGUE. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/cookies" className="text-gray-400 text-sm hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}