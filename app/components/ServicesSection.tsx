"use client"

import { useState, useEffect, JSX } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, PenTool, Globe } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

interface Service {
  id: string
  name: string
  description: string
  icon: JSX.Element
}

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
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

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    // Simulated API call
    setTimeout(() => {
      setServices([
        {
          id: "1",
          name: "1:1 Personal Branding Coaching",
          description:
            "Personalized coaching sessions to help you build a strong, faith-aligned personal brand that resonates with your audience.",
          icon: <Users className="w-6 h-6" />,
        },
        {
          id: "2",
          name: "Social Media Management",
          description:
            "Strategic content creation and management for your social media platforms to build visibility and engagement.",
          icon: <Globe className="w-6 h-6" />,
        },
        {
          id: "3",
          name: "Ghostwriting Services",
          description:
            "Professional writing services for LinkedIn posts, blogs, e-books, and more to establish your thought leadership.",
          icon: <PenTool className="w-6 h-6" />,
        },
        {
          id: "4",
          name: "PR & Media Authority Building",
          description:
            "Strategic media placements and speaking opportunities to build your authority and visibility in your industry.",
          icon: <BookOpen className="w-6 h-6" />,
        },
      ])
      setLoading(false)
    }, 1500)
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
    <section id="services" className="py-20" ref={ref}>
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h2>
      <motion.div
        className="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {loading
          ? Array(4)
              .fill(0)
              .map((_, index) => (
                <Card key={index} className="bg-white border-green-200">
                  <CardContent className="p-6">
                    <Skeleton className="h-12 w-12 rounded-full mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-3/4" />
                  </CardContent>
                  <CardFooter>
                    <Skeleton className="h-10 w-full" />
                  </CardFooter>
                </Card>
              ))
          : services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-white border-green-200 hover:border-primary transition-colors h-full flex flex-col">
                  <CardContent className="p-6 flex-grow">
                    <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full rounded-xl">
                      <Link href="#packages">View Packages</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
      </motion.div>
    </section>
  )
}

