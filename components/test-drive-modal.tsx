"use client"
import { useState } from "react"
import { Calendar, Car, Mail, Phone, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface TestDriveModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TestDriveModal({ isOpen, onClose }: TestDriveModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    carModel: "",
    additionalNotes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Test Drive Form submitted:", formData)
    alert("Thank you for booking a test drive! We'll contact you shortly to confirm your appointment.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      carModel: "",
      additionalNotes: "",
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 bg-white rounded-2xl overflow-hidden">
        <div className="relative">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-6 text-white">
            <div className="flex justify-between items-start">
              <div>
                <DialogTitle className="text-2xl font-bold">Book a Test Drive</DialogTitle>
                <DialogDescription className="text-white/80 mt-2">
                  Experience your dream car firsthand
                </DialogDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 rounded-full"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10"
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="carModel">Car Model</Label>
                  <div className="relative">
                    <Car className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Select
                      value={formData.carModel}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, carModel: value }))}
                    >
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Select a model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mercedes-amg">Mercedes-AMG GT</SelectItem>
                        <SelectItem value="audi-etron">Audi e-tron GT</SelectItem>
                        <SelectItem value="porsche-911">Porsche 911 Turbo S</SelectItem>
                        <SelectItem value="bmw-m8">BMW M8 Competition</SelectItem>
                        <SelectItem value="ferrari-488">Ferrari 488 GTB</SelectItem>
                        <SelectItem value="tesla-s">Tesla Model S Plaid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred Time</Label>
                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, preferredTime: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (1:00 PM - 4:00 PM)</SelectItem>
                      <SelectItem value="evening">Evening (4:00 PM - 7:00 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="additionalNotes">Additional Notes</Label>
                <Textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  placeholder="Any specific requirements or questions?"
                  className="min-h-[100px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Book Test Drive
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 