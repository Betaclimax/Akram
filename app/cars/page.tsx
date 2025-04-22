import Link from "next/link"
import Image from "next/image"
import { Filter, Search, Sliders } from "lucide-react"
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"
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
  const cars = [
    {
      id: 1,
      make: "Mercedes-Benz",
      model: "AMG GT",
      year: 2023,
      price: 142995,
      mileage: 1200,
      image: "/images/vehicles/vehicle1.PNG",
      fuel: "Hybrid",
      transmission: "Automatic",
      color: "white  ",
      tag: "Featured",
    },
    {
      id: 2,
      make: "Porsche",
      model: "911 Turbo S",
      year: 2023,
      price: 215000,
      mileage: 850,
      image: "/images/vehicles/vehicle2.PNG",
      fuel: "Gasoline",
      transmission: "PDK",
      color: "Black",
      tag: "New Arrival",
    },
    {
      id: 3,
      make: "Bentley",
      model: "Continental GT",
      year: 2023,
      price: 242995,
      mileage: 500,
      image: "/images/vehicles/vehicle3.PNG",
      fuel: "Gasoline",
      transmission: "Automatic",
      color: "Black",
    },
    {
      id: 4,
      make: "Aston Martin",
      model: "DB11",
      year: 2022,
      price: 205999,
      mileage: 1500,
      image: "/images/vehicles/vehicle4.PNG",
      fuel: "Gasoline",
      transmission: "Automatic",
      color: "white",
    },
    {
      id: 5,
      make: "Lamborghini",
      model: "Huracán",
      year: 2023,
      price: 332990,
      mileage: 200,
      image: "/images/vehicles/vehicle5.PNG",
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
      image: "/images/vehicles/vehicle6.PNG",
      fuel: "Gasoline",
      transmission: "Automatic",
      color: "Black",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src="/images/discover/discover.PNG"
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
      <SiteFooter />
    </div>
  )
}
