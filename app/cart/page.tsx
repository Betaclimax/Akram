import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Minus, Plus, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CartPage() {
  // Mock cart items
  const cartItems = [
    {
      id: 1,
      make: "BMW",
      model: "3 Series",
      year: 2023,
      price: 45999,
      image: "/placeholder.svg?height=150&width=200&text=BMW+3+Series",
      quantity: 1,
    },
  ]

  const isEmpty = cartItems.length === 0

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
            Cart ({cartItems.length})
          </Link>
          <Link href="/account" className="text-sm font-medium hover:underline underline-offset-4">
            Account
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/cars" className="text-muted-foreground hover:text-foreground">
              <ArrowRight className="h-4 w-4 rotate-180" />
              <span className="sr-only">Back to browsing</span>
            </Link>
            <h1 className="text-3xl font-bold">Your Cart</h1>
          </div>

          {isEmpty ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
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
                className="h-12 w-12 mb-4 text-muted-foreground"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Looks like you haven't added any vehicles to your cart yet.</p>
              <Button asChild>
                <Link href="/cars">Browse Vehicles</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <Card className="border-0 shadow-none">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle>Items in Cart</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Vehicle</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Quantity</TableHead>
                          <TableHead>Total</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {cartItems.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  width={80}
                                  height={60}
                                  alt={`${item.year} ${item.make} ${item.model}`}
                                  className="rounded-md"
                                />
                                <div>
                                  <div className="font-medium">
                                    {item.year} {item.make} {item.model}
                                  </div>
                                  <Link href={`/cars/${item.id}`} className="text-sm text-primary hover:underline">
                                    View Details
                                  </Link>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>${item.price.toLocaleString()}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                  <Minus className="h-3 w-3" />
                                  <span className="sr-only">Decrease quantity</span>
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                  <Plus className="h-3 w-3" />
                                  <span className="sr-only">Increase quantity</span>
                                </Button>
                              </div>
                            </TableCell>
                            <TableCell className="font-medium">
                              ${(item.price * item.quantity).toLocaleString()}
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="icon">
                                <Trash className="h-4 w-4" />
                                <span className="sr-only">Remove</span>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="flex justify-between px-0">
                    <Button variant="outline" asChild>
                      <Link href="/cars">Continue Shopping</Link>
                    </Button>
                    <Button variant="ghost">Clear Cart</Button>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>
                        ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (estimated)</span>
                      <span>
                        $
                        {Math.round(
                          cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.07,
                        ).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span>$299</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input placeholder="Promo Code" />
                      <Button variant="outline">Apply</Button>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>
                        $
                        {(
                          cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) +
                          Math.round(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.07) +
                          299
                        ).toLocaleString()}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/checkout">Proceed to Checkout</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <div className="mt-6 space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 text-sm">
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
                          className="h-5 w-5 text-primary"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                        <span>Free 7-day returns on all vehicles</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 text-sm">
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
                          className="h-5 w-5 text-primary"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                        <span>Secure payment processing</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
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
  )
}
