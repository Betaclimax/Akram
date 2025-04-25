"use client"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"
import { ArrowRight, ChevronLeft, ChevronRight, ShoppingBag, Star } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const slides = [
    { src: "/images/car4.PNG", alt: "2023 Porsche 911" },
    { src: "/images/car5.PNG", alt: "2023 Mercedes-Benz AMG GT" },
    { src: "/images/car6.PNG", alt: "2023 Audi e-tron GT" },
  ]
  const [currentSlide, setCurrentSlide] = useState(0)
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      }, 5000)
      return () => clearInterval(interval)
    }, [slides.length])

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SiteHeader />
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
                  priority={index === 0} 
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
                { name: "Sports", image: "/images/sports/sports vehicles1.PNG", count: 24 },
                { name: "Luxury", image: "/images/luxury/luxury vehicles1.PNG", count: 18 },
                { name: "SUV", image: "/images/SUV/SUV vehicles1.PNG", count: 32 },
                { name: "Electric", image: "/images/eletric/eletric.PNG", count: 15 },
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
                      price: 142995,
                      image: "/images/trending/trending car1.PNG",
                      rating: 4.9,
                      reviews: 28,
                    },
                    {
                      id: 2,
                      make: "Audi",
                      model: "e-tron GT",
                      price: 106995,
                      image: "images/trending/trending car2.PNG",
                      rating: 4.8,
                      reviews: 19,
                      tag: "Electric",
                    },
                    {
                      id: 3,
                      make: "Porsche",
                      model: "911 Turbo S",
                      price: 216995,
                      image: "/images/trending/trending car3.PNG",
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
                            alt={`${car.make} ${car.model}`}
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
                    src="/images/service/service.PNG"
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
                    <Image
                    src="/images/avatar/avatarman.PNG"
                    alt="Luxury car experience"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                    />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">Alex Reynolds</p>
                    </div>
                  </div>
                </div>
              </div>
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
      <SiteFooter />
    </div>
  )
}