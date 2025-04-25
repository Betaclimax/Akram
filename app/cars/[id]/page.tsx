import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, Heart, Share, Shield, Tag, TrendingUp } from "lucide-react";
import type { Metadata } from 'next';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";


type CarPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: CarPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const car = {
    id: resolvedParams.id,
    make: "BMW",
    model: "3 Series",
    year: 2023,
  };

  return {
    title: `${car.year} ${car.make} ${car.model} | CarShop`,
    description: `View details for this ${car.year} ${car.make} ${car.model} with ID ${resolvedParams.id}.`,
  };
}

export default async function CarPage({ params }: CarPageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const car = {
    id: id,
    make: "BMW",
    model: "3 Series",
    year: 2023,
    price: 45999,
    mileage: 10500,
    description:
      "Experience luxury and performance with this stunning BMW 3 Series. This vehicle combines elegance, power, and cutting-edge technology to deliver an exceptional driving experience. With its sleek design, responsive handling, and premium features, this BMW is the perfect choice for those who demand the best.",
    features: [
      "Leather Seats",
      "Sunroof/Moonroof",
      "Navigation System",
      "Bluetooth",
      "Backup Camera",
      "Parking Sensors",
      "Heated Seats",
      "Premium Sound System",
      "Apple CarPlay/Android Auto",
      "Blind Spot Monitoring",
    ],
    specifications: {
      engine: "2.0L Turbocharged I4",
      transmission: "8-Speed Automatic",
      drivetrain: "Rear-Wheel Drive",
      fuelType: "Gasoline",
      fuelEconomy: "26 City / 36 Highway",
      exteriorColor: "Alpine White",
      interiorColor: "Black",
      vin: "WBA73AK03MCF82945",
      stockNumber: "BM10023",
    },
    images: [
      "/placeholder.svg?height=600&width=800&text=BMW+3+Series+Front",
      "/placeholder.svg?height=600&width=800&text=BMW+3+Series+Side",
      "/placeholder.svg?height=600&width=800&text=BMW+3+Series+Rear",
      "/placeholder.svg?height=600&width=800&text=BMW+3+Series+Interior",
      "/placeholder.svg?height=600&width=800&text=BMW+3+Series+Dashboard",
    ],
    similarCars: [
      {
        id: 10,
        make: "Audi",
        model: "A4",
        year: 2022,
        price: 42995,
        image: "/placeholder.svg?height=300&width=400&text=Audi+A4",
      },
      {
        id: 11,
        make: "Mercedes-Benz",
        model: "C-Class",
        year: 2023,
        price: 47500,
        image: "/placeholder.svg?height=300&width=400&text=Mercedes+C-Class",
      },
      {
        id: 12,
        make: "Lexus",
        model: "IS",
        year: 2022,
        price: 41995,
        image: "/placeholder.svg?height=300&width=400&text=Lexus+IS",
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center">
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
            className="h-6 w-6 mr-2"
          >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
          </svg>
          <span className="font-bold">CarShop</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/cars" className="text-sm font-medium hover:underline underline-offset-4">
            Browse Cars
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href="/cart" className="text-sm font-medium hover:underline underline-offset-4">
            Cart (0)
          </Link>
          <Link href="/account" className="text-sm font-medium hover:underline underline-offset-4">
            Account
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col">
        <nav className="flex py-4 px-4 md:px-6">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li>
              <Link href="/cars" className="text-muted-foreground hover:text-foreground">
                Cars
              </Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li>
              <span className="font-medium">
                {car.year} {car.make} {car.model}
              </span>
            </li>
          </ol>
        </nav>

        <div className="container px-4 md:px-6 pb-12">
          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
            <div className="md:w-2/3">
              <div className="flex gap-2 items-center mb-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="/cars">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Back to listings</span>
                  </Link>
                </Button>
                <h1 className="text-2xl font-bold md:text-3xl">
                  {car.year} {car.make} {car.model}
                </h1>
              </div>

              <div className="rounded-lg overflow-hidden mb-6">
                <Image
                  src={car.images[0] || "/placeholder.svg"}
                  width={800}
                  height={600}
                  alt={`${car.year} ${car.make} ${car.model}`}
                  className="w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-4 gap-2 mb-8">
                {car.images.slice(1).map((image, i) => (
                  <div key={i} className="rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      width={200}
                      height={150}
                      alt={`${car.year} ${car.make} ${car.model} view ${i + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </div>
                ))}
              </div>

              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="py-4">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Description</h2>
                    <p>{car.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Low Mileage</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">One Owner</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Clean Title</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Non-Smoker</Badge>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="features" className="py-4">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Features & Options</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {car.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="specifications" className="py-4">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Vehicle Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(car.specifications).map(([key, value]) => (
                        <div key={key} className="flex flex-col">
                          <span className="text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className="md:w-1/3">
              <Card className="sticky top-4">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="flex justify-between items-baseline">
                      <h2 className="text-3xl font-bold">${car.price.toLocaleString()}</h2>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                          <Heart className="h-4 w-4" />
                          <span className="sr-only">Add to favorites</span>
                        </Button>
                        <Button variant="outline" size="icon">
                          <Share className="h-4 w-4" />
                          <span className="sr-only">Share</span>
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Plus taxes & licensing</p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col text-center p-2 bg-muted rounded-lg">
                        <span className="text-lg font-semibold">{car.mileage.toLocaleString()}</span>
                        <span className="text-sm text-muted-foreground">Miles</span>
                      </div>
                      <div className="flex flex-col text-center p-2 bg-muted rounded-lg">
                        <span className="text-lg font-semibold">{car.year}</span>
                        <span className="text-sm text-muted-foreground">Year</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-medium">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-green-500">Good price</span>
                      <span className="text-muted-foreground">$2,000 below market</span>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Tag className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">Special Offer: 1.9% APR Financing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">3-Year/36,000-Mile Warranty Included</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Button className="w-full">Add to Cart</Button>
                  <Button variant="outline" className="w-full">
                    Schedule Test Drive
                  </Button>
                  <div className="text-center w-full text-sm text-muted-foreground mt-2">
                    <span>
                      Stock #: {car.specifications.stockNumber} | VIN: {car.specifications.vin}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Similar Vehicles</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {car.similarCars.map((similarCar) => (
                <Link key={similarCar.id} href={`/cars/${similarCar.id}`} className="group">
                  <Card className="overflow-hidden h-full">
                    <Image
                      src={similarCar.image || "/placeholder.svg"}
                      width={400}
                      height={300}
                      alt={`${similarCar.year} ${similarCar.make} ${similarCar.model}`}
                      className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg">
                          {similarCar.year} {similarCar.make} {similarCar.model}
                        </h3>
                        <p className="font-bold text-xl">${similarCar.price.toLocaleString()}</p>
                        <Button className="w-full mt-2">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-2">
              <Link href="/" className="flex items-center space-x-2">
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
                  className="h-6 w-6"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
                <span className="font-bold">CarShop</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Your trusted partner for quality vehicles. Find your perfect car today.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Shop</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/cars" className="text-sm hover:underline underline-offset-4">
                    Browse Cars
                  </Link>
                </li>
                <li>
                  <Link href="/special-offers" className="text-sm hover:underline underline-offset-4">
                    Special Offers
                  </Link>
                </li>
                <li>
                  <Link href="/financing" className="text-sm hover:underline underline-offset-4">
                    Financing
                  </Link>
                </li>
                <li>
                  <Link href="/trade-in" className="text-sm hover:underline underline-offset-4">
                    Trade-In
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/about" className="text-sm hover:underline underline-offset-4">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm hover:underline underline-offset-4">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:underline underline-offset-4">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm hover:underline underline-offset-4">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Connect</h3>
              <p className="text-sm text-muted-foreground">
                Follow us on social media for the latest updates and offers.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Facebook</span>
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Twitter</span>
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Instagram</span>
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 flex flex-col gap-2 sm:flex-row items-center justify-between">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} CarShop. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:underline underline-offset-4">
                Privacy
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:underline underline-offset-4">
                Terms
              </Link>
              <Link href="/sitemap" className="text-xs text-muted-foreground hover:underline underline-offset-4">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}