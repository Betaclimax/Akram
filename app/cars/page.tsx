import Link from "next/link"
import Image from "next/image"
import { Filter, Search, Sliders } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"

export default function CarsPage() {
  // Mock data for cars
  const cars = [
    {
      id: 1,
      make: "Mercedes-Benz",
      model: "AMG GT",
      year: 2023,
      price: 142995,
      mileage: 1200,
      image: "/placeholder.svg?height=300&width=400&text=Mercedes+AMG+GT",
      fuel: "Hybrid",
      transmission: "Automatic",
      color: "Obsidian Black",
      tag: "Featured",
    },
    {
      id: 2,
      make: "Porsche",
      model: "911 Turbo S",
      year: 2023,
      price: 215000,
      mileage: 850,
      image: "/placeholder.svg?height=300&width=400&text=Porsche+911",
      fuel: "Gasoline",
      transmission: "PDK",
      color: "GT Silver",
      tag: "New Arrival",
    },
    {
      id: 3,
      make: "Bentley",
      model: "Continental GT",
      year: 2023,
      price: 242995,
      mileage: 500,
      image: "/placeholder.svg?height=300&width=400&text=Bentley+Continental",
      fuel: "Gasoline",
      transmission: "Automatic",
      color: "Glacier White",
    },
    {
      id: 4,
      make: "Aston Martin",
      model: "DB11",
      year: 2022,
      price: 205999,
      mileage: 1500,
      image: "/placeholder.svg?height=300&width=400&text=Aston+Martin+DB11",
      fuel: "Gasoline",
      transmission: "Automatic",
      color: "Quantum Silver",
    },
    {
      id: 5,
      make: "Lamborghini",
      model: "Huracán",
      year: 2023,
      price: 332990,
      mileage: 200,
      image: "/placeholder.svg?height=300&width=400&text=Lamborghini+Huracan",
      fuel: "Gasoline",
      transmission: "Automatic",
      color: "Verde Mantis",
      tag: "Limited",
    },
    {
      id: 6,
      make: "Ferrari",
      model: "Roma",
      year: 2022,
      price: 249995,
      mileage: 1200,
      image: "/placeholder.svg?height=300&width=400&text=Ferrari+Roma",
      fuel: "Gasoline",
      transmission: "Automatic",
      color: "Rosso Corsa",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-20 flex items-center bg-white sticky top-0 z-50 shadow-md">
        <Link href="/" className="flex items-center justify-center">
          <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            AUTOVOGUE
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mr-1"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            CART (0)
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[40vh] overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=1200&text=Luxury+Car+Collection"
            alt="Luxury car collection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="max-w-lg space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                  Discover Your <span className="text-cyan-400">Perfect</span> Ride
                </h1>
                <p className="text-white/80">
                  Browse our extensive collection of premium vehicles curated for the discerning driver.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search by make, model, or keywords"
                    className="w-full pl-10 h-12 rounded-full border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="h-12 rounded-full border-gray-200 flex gap-2">
                      <Filter className="h-5 w-5" /> Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-[300px] sm:w-[400px] overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Filter Vehicles</SheetTitle>
                      <SheetDescription>Narrow down your search with specific criteria</SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-6 py-6">
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-cyan-600">Price Range</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <Input type="number" placeholder="Min Price" className="rounded-full border-gray-200" />
                          <Input type="number" placeholder="Max Price" className="rounded-full border-gray-200" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-cyan-600">Make</h3>
                        <div className="space-y-2">
                          {["Mercedes-Benz", "Porsche", "Bentley", "Aston Martin", "Lamborghini", "Ferrari"].map(
                            (make) => (
                              <div key={make} className="flex items-center space-x-2">
                                <Checkbox
                                  id={`make-${make}`}
                                  className="rounded-sm data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                                />
                                <label htmlFor={`make-${make}`} className="text-sm">
                                  {make}
                                </label>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-cyan-600">Year</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <Select>
                            <SelectTrigger className="rounded-full border-gray-200">
                              <SelectValue placeholder="Min Year" />
                            </SelectTrigger>
                            <SelectContent>
                              {[2018, 2019, 2020, 2021, 2022, 2023].map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                  {year}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Select>
                            <SelectTrigger className="rounded-full border-gray-200">
                              <SelectValue placeholder="Max Year" />
                            </SelectTrigger>
                            <SelectContent>
                              {[2018, 2019, 2020, 2021, 2022, 2023].map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                  {year}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-cyan-600">Body Type</h3>
                        <div className="space-y-2">
                          {["Sedan", "Coupe", "Convertible", "SUV", "Supercar", "Grand Tourer"].map((body) => (
                            <div key={body} className="flex items-center space-x-2">
                              <Checkbox
                                id={`body-${body}`}
                                className="rounded-sm data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                              />
                              <label htmlFor={`body-${body}`} className="text-sm">
                                {body}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                      <Button className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                        Apply Filters
                      </Button>
                      <Button variant="outline" className="rounded-full border-gray-200">
                        Reset
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
                <Select>
                  <SelectTrigger className="h-12 rounded-full border-gray-200 min-w-[180px]">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="year-new">Year: Newest First</SelectItem>
                    <SelectItem value="mileage-low">Mileage: Low to High</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                  <Sliders className="h-5 w-5 mr-2" /> Advanced
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">6 vehicles found</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">View:</span>
                <Button variant="outline" size="sm" className="rounded-full border-gray-200 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                  <span className="sr-only">Grid view</span>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full border-gray-200 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <line x1="21" y1="6" x2="3" y2="6" />
                    <line x1="21" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="18" x2="3" y2="18" />
                  </svg>
                  <span className="sr-only">List view</span>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car) => (
                <Card
                  key={car.id}
                  className="group overflow-hidden border-0 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={car.image || "/placeholder.svg"}
                        alt={`${car.year} ${car.make} ${car.model}`}
                        width={400}
                        height={300}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {car.tag && (
                      <div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                        {car.tag}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold">
                          {car.make} {car.model}
                        </h3>
                        <p className="text-gray-500 text-sm">{car.year}</p>
                      </div>
                      <p className="text-lg font-bold">${car.price.toLocaleString()}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 mt-4 mb-6">
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Mileage:</span>
                        <span>{car.mileage.toLocaleString()} mi</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Fuel:</span>
                        <span>{car.fuel}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Trans:</span>
                        <span>{car.transmission}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Color:</span>
                        <span>{car.color}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Button
                        variant="outline"
                        className="rounded-full border-gray-200 hover:border-cyan-500 hover:text-cyan-500"
                      >
                        Add to Compare
                      </Button>
                      <Button className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Pagination className="mt-12">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" className="rounded-full border-gray-200" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    isActive
                    className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-0"
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="rounded-full border-gray-200">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="rounded-full border-gray-200">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis className="text-gray-400" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" className="rounded-full border-gray-200" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Can't Find What You're Looking For?</h2>
              <p className="text-white/80">
                Our inventory is constantly updating. Let us know what you're looking for and we'll notify you when it
                arrives.
              </p>
              <Button className="rounded-full bg-white text-cyan-600 hover:bg-white/90 px-8">Request a Vehicle</Button>
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
