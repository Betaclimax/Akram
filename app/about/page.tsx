"use client"
import Link from "next/link"
import Image from "next/image"
import { Award, Car, Heart, ShieldCheck, Star, Users } from "lucide-react"
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
     <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src="/images/about/about3.png"
            alt="Luxury car showroom"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="max-w-lg space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                  About <span className="text-cyan-400">Akram import and export</span>
                </h1>
                <p className="text-lg text-white/80">Redefining the luxury automotive experience since 2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                  Our Story
                </div>
                <h2 className="text-3xl font-bold tracking-tight">A Legacy of Excellence</h2>
                <p className="text-gray-600">
                Founded in 2023, Akram Import and Export began with a simple vision: to transform the car buying experience into something truly exceptional. What started as a small boutique dealership has grown into one of Algeria’s most prestigious luxury automotive retailers.
                </p>
                <p className="text-gray-600">
                Our founder, Akram Benseridi believed that purchasing a luxury vehicle should be as refined and exceptional as the cars themselves. This philosophy continues to guide everything we do, from our curated selection process to our white-glove customer service.
                </p>
                <p className="text-gray-600">
                Today, Akram import and export represents the pinnacle of automotive luxury, offering an unparalleled collection of the world's finest vehicles and a buying experience that is second to none.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about/about2.png"
                    alt="AUTOVOGUE showroom"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                  <div className="flex items-center mb-3">
                    <Car className="h-8 w-8 text-cyan-500" />
                    <span className="ml-2 font-bold text-xl">18+ Years</span>
                  </div>
                  <p className="text-gray-700">
                    Of exceptional service and delivering automotive excellence to discerning clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">What Sets Us Apart</h2>
              <p className="text-gray-600">
              Akram Import and Export, we're driven by a set of core values that define who we are and how we serve our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Uncompromising Quality",
                  description:
                    "Every vehicle in our collection undergoes a rigorous 150-point inspection process to ensure it meets our exacting standards.",
                },
                {
                  icon: Heart,
                  title: "Passion for Excellence",
                  description:
                    "Our team shares a genuine passion for automotive excellence, bringing enthusiasm and expertise to every client interaction.",
                },
                {
                  icon: Users,
                  title: "Client-Centered Approach",
                  description:
                    "We build lasting relationships based on trust, transparency, and a deep understanding of our clients' unique preferences.",
                },
              ].map((value, index) => (
                <Card key={index} className="border-0 shadow-lg rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-600/10 p-3 w-fit mb-6">
                      <value.icon className="h-8 w-8 text-cyan-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full mb-4">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Leadership</h2>
              <p className="text-gray-600">
                The passionate individuals who drive our vision forward and ensure an exceptional experience for every
                client.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Akram Benseridi",
                  role: "Founder & CEO",
                  image: "https://via.placeholder.com/400x400?text=Akram+Benseridi",
                  bio: "Akram founded Akram Import and Export with a vision to redefine the car buying experience.",
                },
                {
                  name: "Sophia Chen",
                  role: "Chief Operating Officer",
                  image: "https://via.placeholder.com/400x400?text=Sophia+Chen",
                  bio: "Sophia brings her expertise in operations and luxury retail to ensure that every aspect of Akram Import and Export meets our exacting standards.",
                },
                {
                  name: "Marcus Williams",
                  role: "Head of Acquisitions",
                  image: "https://via.placeholder.com/400x400?text=Marcus+Williams",
                  bio: "Marcus travels the world to source the most exceptional vehicles for our collection, with an unmatched eye for quality and rarity.",
                },
              ].map((member, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-2xl aspect-square mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                        <p className="text-cyan-400 font-medium">{member.role}</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-cyan-500 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide uppercase bg-white/20 backdrop-blur-sm text-white rounded-full mb-4">
                Recognition
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Achievements</h2>
              <p className="text-white/80">
                We're proud to be recognized for our commitment to excellence in the luxury automotive industry.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Luxury Dealer of the Year",
                  description: "2025, 2024, 2023,",
                },
                {
                  icon: Star,
                  title: "Customer Satisfaction",
                  description: "98% Rating",
                },
                {
                  icon: Users,
                  title: "Clients Served",
                  description: "10,00+",
                },
                {
                  icon: Car,
                  title: "Luxury Vehicles Sold",
                  description: "25,00+",
                },
              ].map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="rounded-full bg-white/10 backdrop-blur-sm p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <achievement.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                  <p className="text-white/80">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full mb-4">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
              <p className="text-gray-600">
                Hear from our satisfied clients about their Akram Import and Export experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "The most exceptional car buying experience I've ever had. The team at Akram Import and Export went above and beyond to find me the perfect Porsche 911.",
                  image: "/images/avatar/avatarman2.png",
                  author: "Yacine",
                  rating: 5,
                },
                {
                  quote:
                    "From the moment I walked in, I knew this wasn't your typical dealership. The attention to detail and personalized service is unmatched.",
                  image: "/images/avatar/avatarwoman.png",
                  author: "Amel",
                  rating: 5,
                },
                {
                  quote:
                    "I've purchased three vehicles from Akram Import and Export over the years, and each experience has been better than the last. They truly understand luxury.",
                  image: "/images/avatar/avatarman3.png",
                  author: "Bilal",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover rounded-full"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="font-bold">{testimonial.author}</p>       
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Ready to Experience Akram Import and Export?</h2>
              <p className="text-gray-600">
                Visit our showroom to explore our curated collection of luxury vehicles and experience our exceptional
                service firsthand.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-8">
                  Visit Showroom
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-gray-200 hover:border-cyan-500 hover:text-cyan-500 px-8"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
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