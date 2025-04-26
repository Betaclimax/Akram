"use client"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"
import { ChevronDown, Filter, Search, Star, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// Add type definition at the top of the file after imports
interface Car {
  id: number;
  make: string;
  model: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  year: number;
  mileage: number;
  condition: string;
  fuelType: string;
  tag?: string;
}

export default function CarsPage() {
  const searchParams = useSearchParams()
  const [priceRange, setPriceRange] = useState([0, 300000])
  const [filtersApplied, setFiltersApplied] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  
  // Add states for all filter types
  const [selectedConditions, setSelectedConditions] = useState<string[]>([])
  const [selectedMakes, setSelectedMakes] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([])
  
  // Original cars data
  const originalCars: Car[] = [
    {
      id: 1,
      make: "Mercedes-Benz",
      model: "AMG GT",
      price: 142995,
      image: "/images/trending/trending car1.PNG",
      rating: 4.9,
      reviews: 28,
      year: 2023,
      mileage: 0,
      condition: "New",
      fuelType: "Gasoline",
    },
    {
      id: 2,
      make: "Audi",
      model: "e-tron GT",
      price: 106995,
      image: "/images/trending/trending car2.PNG",
      rating: 4.8,
      reviews: 19,
      year: 2023,
      mileage: 0,
      condition: "New",
      tag: "Electric",
      fuelType: "Electric",
    },
    {
      id: 3,
      make: "Porsche",
      model: "911 Turbo S",
      price: 216995,
      image: "/images/trending/trending car3.PNG",
      rating: 5.0,
      reviews: 32,
      year: 2023,
      mileage: 0,
      condition: "New",
      fuelType: "Gasoline",
    },
    {
      id: 4,
      make: "BMW",
      model: "M8 Competition",
      price: 164295,
      image: "/images/luxury/luxury vehicles1.PNG",
      rating: 4.9,
      reviews: 24,
      year: 2022,
      mileage: 5200,
      condition: "Used",
      fuelType: "Gasoline",
    },
    {
      id: 5,
      make: "Ferrari",
      model: "488 GTB",
      price: 189750,
      image: "/images/sports/sports vehicles1.PNG",
      rating: 4.7,
      reviews: 18,
      year: 2021,
      mileage: 8500,
      condition: "Used",
      fuelType: "Gasoline",
    },
    {
      id: 6,
      make: "Tesla",
      model: "Model S Plaid",
      price: 124990,
      image: "/images/eletric/eletric.PNG",
      rating: 4.8,
      reviews: 42,
      year: 2023,
      mileage: 0,
      condition: "New",
      tag: "Electric",
      fuelType: "Electric",
    },
  ]

  // Filtered cars state
  const [filteredCars, setFilteredCars] = useState<Car[]>(originalCars)

  // Apply initial filters from URL parameters
  useEffect(() => {
    const filter = searchParams.get('filter')
    const type = searchParams.get('type')
    
    if (filter) {
      setSelectedConditions([filter])
    }
    if (type) {
      setSelectedTypes([type])
    }
    
    // Apply filters if URL parameters are present
    if (filter || type) {
      applyFilters()
    }
  }, [searchParams])

  const clearFilters = () => {
    setPriceRange([0, 300000])
    setSelectedConditions([])
    setSelectedMakes([])
    setSelectedTypes([])
    setSelectedFuelTypes([])
    setFiltersApplied(false)
    setFilteredCars(originalCars)
  }

  const applyFilters = () => {
    const filtered = originalCars.filter(car => {
      const meetsPrice = car.price >= priceRange[0] && car.price <= priceRange[1]
      const meetsCondition = selectedConditions.length === 0 || selectedConditions.includes(car.condition) 
      const meetsMake = selectedMakes.length === 0 || selectedMakes.includes(car.make)
      const meetsFuelType = selectedFuelTypes.length === 0 || selectedFuelTypes.includes(car.fuelType)
      const meetsType = selectedTypes.length === 0 || (car.tag && selectedTypes.includes(car.tag))
      return meetsPrice && meetsCondition && meetsMake && meetsFuelType && meetsType
    })

    setFilteredCars(filtered)
    setFiltersApplied(true)
    setIsSheetOpen(false)
  }

  // Filter component that's shared between desktop and mobile
  const FilterControls = ({ onApply = () => {}, onClear = () => {} }) => (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Filters</h2>
        <Button 
          variant="outline" 
          size="sm" 
          className="text-gray-500 hover:text-gray-900 rounded-full border-gray-300"
          onClick={onClear}
        >
          <X className="h-4 w-4 mr-2" /> Clear All
        </Button>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="price" className="border-b">
          <AccordionTrigger className="text-base font-medium">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider 
                defaultValue={[0, 300000]} 
                max={500000} 
                step={5000}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value)}
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">${priceRange[0].toLocaleString()}</span>
                <span className="text-sm">${priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="condition" className="border-b">
          <AccordionTrigger className="text-base font-medium">Condition</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["New", "Used", "Certified Pre-Owned"].map((condition) => (
                <div key={condition} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`condition-${condition}`}
                    checked={selectedConditions.includes(condition)}
                    onCheckedChange={(checked) => {
                      setSelectedConditions(prev => 
                        checked 
                          ? [...prev, condition]
                          : prev.filter(c => c !== condition)
                      )
                    }}
                  />
                  <label htmlFor={`condition-${condition}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {condition}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="make" className="border-b">
          <AccordionTrigger className="text-base font-medium">Make</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Audi", "BMW", "Ferrari", "Mercedes-Benz", "Porsche", "Tesla"].map((make) => (
                <div key={make} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`make-${make}`}
                    checked={selectedMakes.includes(make)}
                    onCheckedChange={(checked) => {
                      setSelectedMakes(prev => 
                        checked 
                          ? [...prev, make]
                          : prev.filter(m => m !== make)
                      )
                    }}
                  />
                  <label htmlFor={`make-${make}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {make}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="type" className="border-b">
          <AccordionTrigger className="text-base font-medium">Vehicle Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Sports", "Luxury", "SUV", "Electric", "Convertible"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`type-${type}`}
                    checked={selectedTypes.includes(type)}
                    onCheckedChange={(checked) => {
                      setSelectedTypes(prev => 
                        checked 
                          ? [...prev, type]
                          : prev.filter(t => t !== type)
                      )
                    }}
                  />
                  <label htmlFor={`type-${type}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="fuel" className="border-b">
          <AccordionTrigger className="text-base font-medium">Fuel Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Gasoline", "Diesel", "Electric", "Hybrid", "Plug-in Hybrid"].map((fuel) => (
                <div key={fuel} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`fuel-${fuel}`}
                    checked={selectedFuelTypes.includes(fuel)}
                    onCheckedChange={(checked) => {
                      setSelectedFuelTypes(prev => 
                        checked 
                          ? [...prev, fuel]
                          : prev.filter(f => f !== fuel)
                      )
                    }}
                  />
                  <label htmlFor={`fuel-${fuel}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {fuel}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button 
        className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full"
        onClick={onApply}
      >
        <Filter className="h-4 w-4 mr-2" /> Apply Filters
      </Button>
    </>
  )

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Banner Section */}
        <section className="relative w-full h-[60vh] overflow-hidden">
          <Image
            src="/images/discover/discover2.png"
            alt="Luxury car collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="max-w-2xl space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                  Find Your Perfect <span className="text-cyan-400">Drive</span>
                </h1>
                <p className="text-lg text-white/90 font-light leading-relaxed tracking-wide backdrop-blur-sm bg-black/10 p-3 rounded-lg border-l-2 border-cyan-400">
                  Browse our extensive collection of premium vehicles, from sports cars to luxury sedans and electric innovations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Results */}
        <section className="py-12">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Browse Our Inventory</h2>
                <p className="text-gray-500">Discover your perfect ride from our curated collection</p>
              </div>
              
              {/* Mobile Filter Button - Only visible on mobile */}
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button className="lg:hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                    <Filter className="h-4 w-4 mr-2" /> Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
                  <SheetHeader className="mb-4">
                    <SheetTitle>Filter Vehicles</SheetTitle>
                    <SheetDescription>
                      Narrow down your search with these filters
                    </SheetDescription>
                  </SheetHeader>
                  <FilterControls 
                    onApply={() => applyFilters()}
                    onClear={clearFilters}
                  />
                </SheetContent>
              </Sheet>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar - Only visible on desktop */}
              <div className="hidden lg:block lg:w-1/4">
                <div className="sticky top-20 bg-white rounded-xl border p-6 shadow-sm">
                  <FilterControls onApply={applyFilters} onClear={clearFilters} />
                </div>
              </div>
              {/* Results */}
              <div className="lg:w-3/4 w-full">
                {/* Active Filters */}
                {filtersApplied && (
                  <div className="mb-6 flex flex-wrap gap-2 items-center">
                    <span className="text-sm font-medium text-gray-700">Active filters:</span>
                    {priceRange[0] > 0 || priceRange[1] < 300000 ? (
                      <div className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center">
                        ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                        <button 
                          className="ml-2 text-gray-500 hover:text-gray-700"
                          onClick={() => setPriceRange([0, 300000])}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ) : null}
                    {/* Add other active filters here */}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="rounded-full border-gray-300 text-sm"
                      onClick={clearFilters}
                    >
                      Clear all
                    </Button>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                  <p className="text-gray-500 mb-4 sm:mb-0">Showing <span className="font-medium text-gray-900">{filteredCars.length}</span> vehicles</p>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                    <Select defaultValue="featured">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="newest">Newest First</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCars.map((car) => (
                    <Card
                      key={car.id}
                      className="group overflow-hidden border-0 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300"
                    >
                      <Link href={`/cars/${car.id}`} className="block">
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
                          <div className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-black/70 text-white rounded-full">
                            {car.condition}
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
                        </div>


                      </Link>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>



                            <Link href={`/cars/${car.id}`} className="hover:text-cyan-600 transition-colors">
                              <h3 className="text-xl font-bold">
                                {car.make} {car.model}
                              </h3>
                            </Link>
                            <p className="text-gray-500 text-sm">{car.year} • {car.mileage.toLocaleString()} miles</p>
                            
                            {/* Additional details */}
                            <div className="mt-2 flex flex-wrap gap-2">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                {car.fuelType}
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                Automatic
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                {car.condition === "New" ? "0 owners" : "1-2 owners"}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
                            <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500 mr-1" />
                            <span className="text-xs font-medium">
                              {car.rating} ({car.reviews})
                            </span>
                          </div>
                        </div>
                        
                        {/* Features list */}
                        <div className="mt-3 mb-4">
                          <ul className="text-xs text-gray-500 space-y-1">
                            <li className="flex items-center">
                              <div className="w-1 h-1 rounded-full bg-cyan-500 mr-2"></div>
                              Premium Sound System
                            </li>
                            <li className="flex items-center">
                              <div className="w-1 h-1 rounded-full bg-cyan-500 mr-2"></div>
                              Navigation System
                            </li>
                            <li className="flex items-center">
                              <div className="w-1 h-1 rounded-full bg-cyan-500 mr-2"></div>
                              {car.fuelType === "Electric" ? "Fast Charging" : "Leather Interior"}
                            </li>
                          </ul>
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <span className="text-sm text-gray-500 font-normal">Starting at</span>
                            <p className="text-2xl font-bold">${car.price.toLocaleString()}</p>
                            <span className="text-xs text-gray-500">Est. ${Math.round(car.price / 60).toLocaleString()}/mo</span>
                          </div>
                          <Link href={`/cars/${car.id}`}>
                            <Button className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" disabled>
                      <ChevronDown className="h-4 w-4 rotate-90" />
                    </Button>
                    <Button variant="outline" size="sm" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-0">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronDown className="h-4 w-4 -rotate-90" />
                    </Button>
                  </div>
                </div>
              </div>   
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
