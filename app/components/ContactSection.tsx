"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Send, CheckCircle } from "lucide-react"
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '@/lib/email'
import emailjs from '@emailjs/browser'


export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulating an API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    // console.log("Form submitted:", formData)
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      EMAILJS_PUBLIC_KEY
    )
    setIsSubmitting(false)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-green-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-green/[0.02] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-green-50 to-transparent" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-800">
          Get in Touch
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="max-w-md mx-auto bg-white/90 backdrop-blur-lg rounded-lg p-8 shadow-xl border border-green-100"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/80 border-green-200 text-gray-800 placeholder-gray-500 rounded-tl-xl rounded-br-xl"
              />
            </div>
            <div className="mb-4">
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/80 border-green-200 text-gray-800 placeholder-gray-500 rounded-bl-xl rounded-tr-xl"
              />
            </div>
            <div className="mb-4">
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white/80 border-green-200 text-gray-800 placeholder-gray-500 rounded-tl-xl rounded-br-xl"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-white hover:bg-green-600 transition-colors relative overflow-hidden group rounded-xl"
              disabled={isSubmitting || isSubmitted}
            >
              <span className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2" size={18} />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    Send Message
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}

