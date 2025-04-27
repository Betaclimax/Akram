"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TestDriveModal } from "@/components/test-drive-modal"
import { VirtualConsultationModal } from "@/components/virtual-consultation-modal"
import { 
  Car, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Share2, 
  Heart, 
  Star, 
  ChevronRight,
  Check,
  Info,
  Settings,
  Shield,
  Users,
  Clock,
  Fuel,
  Gauge,
  Box,
  Wrench,
  Camera,
  Video,
  ArrowLeft,
  MessageCircle,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Info as InfoIcon,
  Search,
  Filter,
  SlidersHorizontal
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

// Mock data for a single car
const carData = {
  id: 1,
  make: "Mercedes-Benz",
  model: "AMG GT",
  year: 2023,
  price: 142995,
  images: [
    "/images/trending/trending car1.PNG",
    "/images/trending/trending car2.PNG",
    "/images/trending/trending car3.PNG",
    "/images/trending/trending car4.PNG",
  ],
  rating: 4.9,
  reviews: 28,
  mileage: 0,
  condition: "New",
  fuelType: "Gasoline",
  transmission: "Automatic",
  color: "Obsidian Black",
  interior: "Black Nappa Leather",
  features: [
    "Premium Sound System",
    "Navigation System",
    "Leather Interior",
    "Panoramic Sunroof",
    "Heated Seats",
    "Blind Spot Monitoring",
    "Lane Departure Warning",
    "Adaptive Cruise Control",
  ],
  specifications: {
    engine: "4.0L V8 Biturbo",
    horsepower: "577 hp",
    torque: "516 lb-ft",
    acceleration: "3.2 seconds",
    topSpeed: "318 km/h",
    fuelEconomy: "17/24 mpg",
    seating: "2",
    cargo: "10.1 cu ft",
  },
  safety: [
    "Active Brake Assist",
    "Attention Assist",
    "Blind Spot Assist",
    "Crosswind Assist",
    "Pre-Safe System",
    "Tire Pressure Monitoring",
  ],
  warranty: {
    basic: "4 years / 50,000 miles",
    powertrain: "4 years / 50,000 miles",
    corrosion: "4 years / 50,000 miles",
    roadside: "4 years / Unlimited miles",
  },
  location: {
    address: "123 Luxury Car Avenue",
    city: "Beverly Hills",
    state: "CA",
    zip: "90210",
  },
  contact: {
    phone: "+1 (555) 123-4567",
    email: "sales@luxurycars.com",
  },
  virtualTour: {
    images: [
      "/images/virtual/interior1.jpg",
      "/images/virtual/interior2.jpg",
      "/images/virtual/interior3.jpg",
    ],
    video: "/videos/car-tour.mp4",
  },
}

export function CarDetails() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isTestDriveModalOpen, setIsTestDriveModalOpen] = useState(false)
  const [isVirtualConsultationOpen, setIsVirtualConsultationOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [isFavorite, setIsFavorite] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [searchPreferences, setSearchPreferences] = useState({
    priceRange: [0, 200000],
    make: "",
    model: "",
    year: "",
    mileage: "",
    fuelType: "",
    transmission: "",
  })

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = `${carData.make} ${carData.model} - Luxury Car`
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
        break
      case 'whatsapp':
        window.open(`https://wa.me/?text=${title}%20${url}`, '_blank')
        break
    }
    
    setShowShareMenu(false)
    toast.success(`Shared on ${platform}!`)
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    toast.success(isFavorite ? "Removed from favorites" : "Added to favorites")
  }

  const saveSearchPreferences = () => {
    // Here you would typically save to localStorage or a backend
    toast.success("Search preferences saved!")
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <Link href="/cars" className="text-gray-500 hover:text-gray-700">Cars</Link>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-900">{carData.make} {carData.model}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-8">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  <Image
                    src={carData.images[selectedImage]}
                    alt={`${carData.make} ${carData.model}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/20 rounded-full"
                        onClick={toggleFavorite}
                      >
                        <Heart className={`h-6 w-6 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                      <DropdownMenu open={showShareMenu} onOpenChange={setShowShareMenu}>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/20 rounded-full"
                          >
                            <Share2 className="h-6 w-6" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem onClick={() => handleShare('facebook')}>
                            <Facebook className="h-4 w-4 mr-2" /> Facebook
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleShare('twitter')}>
                            <Twitter className="h-4 w-4 mr-2" /> Twitter
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleShare('linkedin')}>
                            <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleShare('whatsapp')}>
                            <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {carData.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-[4/3] rounded-lg overflow-hidden group ${
                        selectedImage === index ? 'ring-2 ring-cyan-500' : ''
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${carData.make} ${carData.model} - View ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Car Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">
                    {carData.make} {carData.model}
                  </h1>
                  <p className="text-gray-500 mt-2">{carData.year} • {carData.mileage.toLocaleString()} miles</p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="text-sm font-medium">
                      {carData.rating} ({carData.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                    <Car className="h-4 w-4 text-cyan-500 mr-1" />
                    <span className="text-sm font-medium">{carData.condition}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    {carData.fuelType}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    {carData.transmission}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    {carData.color}
                  </span>
                </div>

                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold">${carData.price.toLocaleString()}</span>
                  <span className="text-gray-500">or ${Math.round(carData.price / 60).toLocaleString()}/mo</span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full py-6"
                    onClick={() => setIsTestDriveModalOpen(true)}
                  >
                    <Car className="h-5 w-5 mr-2" /> Book Test Drive
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-gray-200 hover:border-cyan-500 hover:text-cyan-500 rounded-full py-6"
                    onClick={() => setIsVirtualConsultationOpen(true)}
                  >
                    <Video className="h-5 w-5 mr-2" /> Virtual Consultation
                  </Button>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="ghost" 
                          className="text-gray-500 hover:text-gray-700"
                          onClick={toggleFavorite}
                        >
                          <Heart className={`h-5 w-5 mr-2 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} /> 
                          {isFavorite ? 'Saved' : 'Save'}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="text-gray-500 hover:text-gray-700">
                        <Share2 className="h-5 w-5 mr-2" /> Share
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem onClick={() => handleShare('facebook')}>
                        <Facebook className="h-4 w-4 mr-2" /> Facebook
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleShare('twitter')}>
                        <Twitter className="h-4 w-4 mr-2" /> Twitter
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleShare('linkedin')}>
                        <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleShare('whatsapp')}>
                        <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Preferences Section */}
        <section className="py-8 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Save Search Preferences</h3>
                  <Button
                    variant="outline"
                    className="text-cyan-500 border-cyan-500 hover:bg-cyan-50"
                    onClick={saveSearchPreferences}
                  >
                    <Bookmark className="h-4 w-4 mr-2" /> Save Preferences
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Price Range</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        placeholder="Min"
                        value={searchPreferences.priceRange[0]}
                        onChange={(e) => setSearchPreferences(prev => ({
                          ...prev,
                          priceRange: [parseInt(e.target.value), prev.priceRange[1]]
                        }))}
                      />
                      <span>-</span>
                      <Input
                        type="number"
                        placeholder="Max"
                        value={searchPreferences.priceRange[1]}
                        onChange={(e) => setSearchPreferences(prev => ({
                          ...prev,
                          priceRange: [prev.priceRange[0], parseInt(e.target.value)]
                        }))}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Make</Label>
                    <Input
                      placeholder="e.g., Mercedes-Benz"
                      value={searchPreferences.make}
                      onChange={(e) => setSearchPreferences(prev => ({
                        ...prev,
                        make: e.target.value
                      }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Model</Label>
                    <Input
                      placeholder="e.g., AMG GT"
                      value={searchPreferences.model}
                      onChange={(e) => setSearchPreferences(prev => ({
                        ...prev,
                        model: e.target.value
                      }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Year</Label>
                    <Input
                      type="number"
                      placeholder="e.g., 2023"
                      value={searchPreferences.year}
                      onChange={(e) => setSearchPreferences(prev => ({
                        ...prev,
                        year: e.target.value
                      }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Mileage</Label>
                    <Input
                      type="number"
                      placeholder="e.g., 10000"
                      value={searchPreferences.mileage}
                      onChange={(e) => setSearchPreferences(prev => ({
                        ...prev,
                        mileage: e.target.value
                      }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Fuel Type</Label>
                    <Input
                      placeholder="e.g., Gasoline"
                      value={searchPreferences.fuelType}
                      onChange={(e) => setSearchPreferences(prev => ({
                        ...prev,
                        fuelType: e.target.value
                      }))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-8 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-4 bg-white p-1 rounded-full">
                <TabsTrigger 
                  value="overview"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="specifications"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  Specifications
                </TabsTrigger>
                <TabsTrigger 
                  value="features"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  Features
                </TabsTrigger>
                <TabsTrigger 
                  value="virtual-tour"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  Virtual Tour
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Vehicle Description</h3>
                      <p className="text-gray-600">
                        Experience the pinnacle of luxury and performance with the {carData.make} {carData.model}. 
                        This exceptional vehicle combines cutting-edge technology with unparalleled comfort and style.
                      </p>
                      <div className="mt-6 space-y-4">
                        <div className="flex items-center space-x-2">
                          <Check className="h-5 w-5 text-cyan-500" />
                          <span className="text-gray-600">Premium {carData.interior} Interior</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Check className="h-5 w-5 text-cyan-500" />
                          <span className="text-gray-600">{carData.specifications.engine} Engine</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Check className="h-5 w-5 text-cyan-500" />
                          <span className="text-gray-600">{carData.specifications.horsepower} Power</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Location & Contact</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-cyan-500 mt-1" />
                          <div>
                            <p className="font-medium">{carData.location.address}</p>
                            <p className="text-gray-600">{carData.location.city}, {carData.location.state} {carData.location.zip}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-cyan-500" />
                          <a href={`tel:${carData.contact.phone}`} className="text-gray-600 hover:text-cyan-500">
                            {carData.contact.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-cyan-500" />
                          <a href={`mailto:${carData.contact.email}`} className="text-gray-600 hover:text-cyan-500">
                            {carData.contact.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between py-2 border-b">
                          <span className="text-gray-600">Engine</span>
                          <span className="font-medium">{carData.specifications.engine}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <span className="text-gray-600">Horsepower</span>
                          <span className="font-medium">{carData.specifications.horsepower}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <span className="text-gray-600">Torque</span>
                          <span className="font-medium">{carData.specifications.torque}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <span className="text-gray-600">Acceleration (0-60 mph)</span>
                          <span className="font-medium">{carData.specifications.acceleration}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <span className="text-gray-600">Top Speed</span>
                          <span className="font-medium">{carData.specifications.topSpeed}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <span className="text-gray-600">Fuel Economy</span>
                          <span className="font-medium">{carData.specifications.fuelEconomy}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Dimensions & Capacity</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between py-2 border-b">
                          <span className="text-gray-600">Seating Capacity</span>
                          <span className="font-medium">{carData.specifications.seating} seats</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <span className="text-gray-600">Cargo Space</span>
                          <span className="font-medium">{carData.specifications.cargo}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <span className="text-gray-600">Fuel Tank</span>
                          <span className="font-medium">21.1 gallons</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <span className="text-gray-600">Weight</span>
                          <span className="font-medium">3,715 lbs</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Key Features</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {carData.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Check className="h-5 w-5 text-cyan-500" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Safety Features</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {carData.safety.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Shield className="h-5 w-5 text-cyan-500" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="virtual-tour" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">360° Interior View</h3>
                      <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                        <Image
                          src={carData.virtualTour.images[0]}
                          alt="Interior View"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        {carData.virtualTour.images.map((image, index) => (
                          <div key={index} className="aspect-[4/3] relative rounded-lg overflow-hidden">
                            <Image
                              src={image}
                              alt={`Interior View ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Video Tour</h3>
                      <div className="aspect-video relative rounded-xl overflow-hidden bg-black">
                        <video
                          src={carData.virtualTour.video}
                          controls
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-gray-600 mt-4">
                        Take a virtual tour of this exceptional vehicle and experience its luxury and performance firsthand.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <SiteFooter />

      {/* Modals */}
      <TestDriveModal 
        isOpen={isTestDriveModalOpen} 
        onClose={() => setIsTestDriveModalOpen(false)} 
      />
      <VirtualConsultationModal
        isOpen={isVirtualConsultationOpen}
        onClose={() => setIsVirtualConsultationOpen(false)}
      />
    </div>
  )
} 