"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Check, Users, PenTool, Globe, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const servicePackages = [
  {
    category: "1:1 Personal Branding Coaching for Muslims",
    packages: [
      {
        name: "Starter Package",
        price: "$149",
        icon: <Users className="w-6 h-6" />,
        features: [
          "1-on-1 coaching session (60 minutes)",
          "Personal SWOT analysis",
          "Basic social media audit",
          "Simple content strategy overview",
        ],
        sessions: "1 session",
      },
      {
        name: "Growth Package",
        price: "$399",
        icon: <Users className="w-6 h-6" />,
        features: [
          "1-on-1 coaching sessions (60 minutes per session)",
          "Personal SWOT & self-awareness exercises",
          "Full social media profile optimization",
          "Content & thought leadership strategy",
          "Networking & visibility growth strategy",
        ],
        sessions: "2 sessions",
        popular: true,
      },
      {
        name: "Premium Package",
        price: "$800",
        icon: <Users className="w-6 h-6" />,
        features: [
          "1-on-1 coaching sessions (60 minutes per session)",
          "Comprehensive social media and online profile optimisation",
          "Personal brand development (messaging, tone, storytelling)",
          "Career/business positioning",
          "Monetization strategy for personal brand",
        ],
        sessions: "4 sessions",
      },
    ],
  },
  {
    category: "Social Media Management for Muslim Professionals",
    packages: [
      {
        name: "Basic Social Media Package",
        price: "$399/month",
        icon: <Globe className="w-6 h-6" />,
        features: [
          "Profile Optimization (LinkedIn, Instagram, or Twitter)",
          "8-10 posts per month (graphic posts, carousels, storytelling)",
          "Content calendar and scheduling",
          "Monthly analytics report",
        ],
        platforms: "1 platform",
      },
      {
        name: "Standard Social Media Package",
        price: "$699/month",
        icon: <Globe className="w-6 h-6" />,
        features: [
          "Profile Optimization for 2 platforms",
          "15-20 posts per month",
          "Content strategy and calendar",
          "Audience engagement & community building",
          "Hashtag & SEO strategy",
        ],
        platforms: "2 platforms",
        popular: true,
      },
      {
        name: "Premium Social Media Package",
        price: "$999/month",
        icon: <Globe className="w-6 h-6" />,
        features: [
          "Profile Optimization for 3 platforms",
          "25-30 posts per month",
          "Full content strategy (engagement-focused)",
          "Reputation management",
          "Monthly analytics & growth tracking",
        ],
        platforms: "3 platforms",
      },
    ],
  },
  {
    category: "Ghostwriting for Muslim Professionals",
    packages: [
      {
        name: "LinkedIn Posts & Newsletter",
        price: "$400/month",
        icon: <PenTool className="w-6 h-6" />,
        features: [
          "8-10 posts (thought leadership, faith-based stories)",
          "4 articles (From your professional background sharing your expertise)",
        ],
      },
      {
        name: "Blog Writing",
        price: "$600/month",
        icon: <PenTool className="w-6 h-6" />,
        features: [
          "4 blogs",
          "In-depth industry insights (1,000-1,500 words)",
          "Faith-based and topics related to your profession",
          "SEO Friendly",
        ],
        popular: true,
      },
      {
        name: "E-books & Whitepapers",
        price: "$1,500",
        icon: <PenTool className="w-6 h-6" />,
        features: ["5-10 page e-book or whitepaper", "Content that demonstrates expertise"],
      },
      {
        name: "Executive Bio & Personal Story",
        price: "$599",
        icon: <PenTool className="w-6 h-6" />,
        features: ["Compelling personal narrative", "Career highlights and leadership experiences"],
      },
      {
        name: "Speech & Keynote Writing",
        price: "$899",
        icon: <PenTool className="w-6 h-6" />,
        features: ["Professional speech writing", "Tailored content for events or conferences"],
      },
    ],
  },
  {
    category: "PR, Media & Authority Building",
    packages: [
      {
        name: "Podcast Guest Outreach",
        price: "$1000 per appearance",
        icon: <Award className="w-6 h-6" />,
        features: ["Pitching & outreach for podcast guest spots", "Interview preparation and talking points"],
      },
      {
        name: "Reputation Repair & Crisis Management",
        price: "$1,000 - $2,000/month",
        icon: <Award className="w-6 h-6" />,
        features: ["Strategy for reputation management", "Crisis response plan and execution"],
      },
      {
        name: "Custom Branding Package",
        price: "Starting at $2,500/month",
        icon: <Award className="w-6 h-6" />,
        features: [
          "Includes a mix of personal branding coaching, social media management, ghostwriting, PR services, and more",
          "Discounted rates if bundled as part of a long-term engagement (3-6 months)",
        ],
        popular: true,
      },
    ],
  },
]

export default function PackagesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index)
    setHoveredCard(null) // Reset hovered card when changing category
    controls.start("visible") // Animate new category content
  }

  return (
    <section ref={ref} id="packages" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/20 to-white"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Packages</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect package for your needs and start building your faith-aligned personal brand today
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {servicePackages.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === index ? "default" : "outline"}
              onClick={() => handleCategoryChange(index)}
              className="mb-2"
            >
              {category.category.split(" ")[0]}
            </Button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicePackages[activeCategory].packages.map((pkg, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card
                className={`relative h-full ${
                  hoveredCard === index ? "scale-105" : "scale-100"
                } transition-all duration-300`}
              >
                <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-br from-green-200 to-green-50">
                  <div className="absolute inset-0 rounded-lg bg-white"></div>
                </div>

                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardContent className="relative p-6 rounded-lg h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 rounded-full bg-green-100 text-primary mb-4">{pkg.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-gray-800">{pkg.price}</div>
                    {pkg.sessions && <div className="text-sm text-gray-500 mt-1">{pkg.sessions}</div>}
                    {pkg.platforms && <div className="text-sm text-gray-500 mt-1">{pkg.platforms}</div>}
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={hoveredCard === index ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                        >
                          <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full">
                    <a href="#contact">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

