"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    alert("Thank you for your message! We'll get back to you shortly.")
    setFormState({
      name: "",
      email: "",
      phone: "",
      subject: "general",
      message: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
    <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src="/images/contact/contact.PNG"
            alt="Contact AUTOVOGUE"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="max-w-lg space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                  Contact <span className="text-cyan-400">Us</span>
                </h1>
                <p className="text-lg text-white/80">We're here to assist you with any questions or inquiries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-600/10 p-3 w-fit mb-6">
                    <MapPin className="h-8 w-8 text-cyan-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Visit Our Showroom</h3>
                  <address className="not-italic text-gray-600">
                    <p>address</p>
                    <p>address</p>
                    <p className="mt-4">Algeria</p>
                  </address>
                  <Button
                    variant="outline"
                    className="mt-6 rounded-full border-gray-200 hover:border-cyan-500 hover:text-cyan-500"
                    // onClick={() => window.open("https://maps.google.com", "_blank")}
                  >
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-600/10 p-3 w-fit mb-6">
                    <Phone className="h-8 w-8 text-cyan-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Call Us</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Sales Department:</p>
                    <p className="font-medium">12345678</p>
                    <p className="mt-4">Customer Service:</p>
                    <p className="font-medium">1234567890</p>
                  </div>
                  <Button
                    variant="outline"
                    className="mt-6 rounded-full border-gray-200 hover:border-cyan-500 hover:text-cyan-500"
                    onClick={() => window.open("tel:+18005552277", "_blank")}
                  >
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-600/10 p-3 w-fit mb-6">
                    <Mail className="h-8 w-8 text-cyan-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Email Us</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>General Inquiries:</p>
                    <p className="font-medium">info@Akram.com</p>
                    <p className="mt-4">Sales Department:</p>
                    <p className="font-medium">sales@Akram.com</p>
                  </div>
                  <Button
                    variant="outline"
                    className="mt-6 rounded-full border-gray-200 hover:border-cyan-500 hover:text-cyan-500"
                    onClick={() => window.open("mailto:info@autovogue.com", "_blank")}
                  >
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Hours Section */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full mb-4">
                  Hours of Operation
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">When to Visit Us</h2>
              </div>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Clock className="h-6 w-6 text-cyan-500 mr-3" />
                    <h3 className="text-xl font-bold">Business Hours</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Monday - Friday</p>
                        <p className="text-gray-600">9:00 AM - 7:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium">Saturday</p>
                        <p className="text-gray-600">10:00 AM - 6:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium">Sunday</p>
                        <p className="text-gray-600">11:00 AM - 5:00 PM</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Service Department</p>
                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                      <div>
                        <p className="font-medium">Holiday Hours</p>
                        <p className="text-gray-600">Hours may vary on holidays.</p>
                        <p className="text-gray-600">Please call ahead to confirm.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full mb-4">
                  Get in Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Have a question about a specific vehicle? Interested in financing options? Or just want to provide
                  feedback? Fill out the form, and our team will get back to you promptly.
                </p>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/contact/question.PNG"
                    alt="AUTOVOGUE contact team"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="rounded-lg border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="rounded-lg border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(123) 456-7890"
                          value={formState.phone}
                          onChange={handleChange}
                          className="rounded-lg border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Inquiry Type</Label>
                      <RadioGroup
                        value={formState.subject}
                        onValueChange={handleRadioChange}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="general" />
                          <Label htmlFor="general" className="cursor-pointer">
                            General Inquiry
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sales" id="sales" />
                          <Label htmlFor="sales" className="cursor-pointer">
                            Sales Inquiry
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="service" id="service" />
                          <Label htmlFor="service" className="cursor-pointer">
                            Service Inquiry
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="feedback" id="feedback" />
                          <Label htmlFor="feedback" className="cursor-pointer">
                            Feedback
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="min-h-[120px] rounded-lg border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full mb-4">
                FAQ
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to common questions about our services, policies, and procedures.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-xl overflow-hidden bg-white shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                    What financing options do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                    We offer a variety of financing options to suit your needs, including traditional auto loans, lease
                    options, and special financing programs. Our finance team works with multiple lenders to ensure you
                    get the best rates and terms available. We also offer pre-approval options to make your car buying
                    experience as smooth as possible.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-xl overflow-hidden bg-white shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                    Do you accept trade-ins?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                    Yes, we accept trade-ins of all makes and models. Our team will provide a fair market evaluation of
                    your current vehicle, and the value can be applied directly to your new purchase. We strive to make
                    the trade-in process as seamless as possible, handling all the paperwork and logistics for you.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-xl overflow-hidden bg-white shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                    What warranty options are available?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                    All our vehicles come with a comprehensive warranty package. New vehicles include the manufacturer's
                    warranty, while our pre-owned vehicles come with our Akram Import and Export Certified warranty. We also offer
                    extended warranty options for additional peace of mind. Our warranty packages cover everything from
                    mechanical issues to roadside assistance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-xl overflow-hidden bg-white shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                    Can I schedule a test drive online?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                    You can schedule a test drive directly through our website by visiting the vehicle's detail page and
                    clicking the "Schedule Test Drive" button. Alternatively, you can call us or use the contact form on
                    this page to arrange a time that works for you. We also offer at-home test drives for your
                    convenience.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-xl overflow-hidden bg-white shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                    What services does your maintenance department offer?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                    Our state-of-the-art service department offers comprehensive maintenance and repair services for all
                    makes and models. This includes routine maintenance, major repairs, detailing, and customization.
                    Our factory-trained technicians use only genuine parts and the latest diagnostic equipment to ensure
                    your vehicle performs at its best.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full mb-4">
                Location
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Find Us</h2>
              <p className="text-gray-600">
                Visit our showroom to experience our exceptional collection of luxury vehicles in person.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] relative">
              {/* <Image
                src="/placeholder.svg?height=800&width=1600&text=Map+Location"
                alt="AUTOVOGUE location map"
                fill
                className="object-cover"
              /> */}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Ready for the Ultimate Driving Experience?</h2>
              <p className="text-white/80">
                Visit our showroom today or schedule a personalized consultation with one of our luxury vehicle
                specialists.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="rounded-full bg-white text-cyan-600 hover:bg-white/90 px-8">
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8"
                >
                  View Inventory
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
