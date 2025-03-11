"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function VisionSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} id="vision" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <motion.div className="max-w-4xl mx-auto" style={{ y, opacity }}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Vision
          </motion.h2>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-green-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-6 text-gray-700">
              At Asalah, we envision a world where Muslim professionals, entrepreneurs, and business leaders confidently
              embrace their faith while excelling in their careers. Our goal is to bridge the gap between personal faith
              and professional success, empowering Muslims to build authentic personal brands that align with their
              values.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              In an era where identity can often be a barrier to growth, we strive to create an ecosystem where faith
              and success go hand in hand. Through strategic personal branding, we help Muslim professionals stand out,
              gain recognition, and make a meaningful impact in their industries.
            </p>
            <p className="text-lg text-gray-700">
              By fostering confidence, credibility, and influence, we aspire to see Muslim professionals lead with
              excellence, inspire change, and leave a lasting legacy—one that reflects their faith, values, and
              commitment to ethical success.
            </p>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold my-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Mission
          </motion.h2>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-green-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-6 text-gray-700">
              At Asalah, we empower Muslim professionals, entrepreneurs, and business leaders to build faith-aligned
              personal brands that drive success while staying true to Islamic values. Through strategic personal
              branding, social media management, ghostwriting, and PR services, we help Muslim professionals gain
              visibility, influence, and credibility in their industries.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Our faith-driven branding approach integrates Qur'anic and Sunnah-based leadership principles, enabling
              clients to monetize their expertise, enhance their reputation, and create a lasting impact.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              We're on a mission to empower 1 lakh students globally with free personal branding training, giving them
              the tools to build powerful, authentic brands and unlock exciting opportunities even before they step into
              the professional world.
            </p>
            <p className="text-lg font-semibold text-primary">
              At Asalah, we don't just build brands—we shape legacies of excellence and faith.
            </p>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold my-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Cause
          </motion.h2>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-green-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-6 text-gray-700">
              At Asalah, we are on a mission to provide free personal branding training to 1 lakh students worldwide,
              equipping them with the tools to build authentic, powerful personal brands that unlock exciting career
              opportunities before they even enter the professional world. By giving students the confidence and skills
              to stand out early, we're creating a generation of influential, high-impact leaders who will thrive in
              their careers.
            </p>
            <p className="text-xl font-semibold text-center text-primary mt-6">
              Empowering Tomorrow's Leaders with Personal Branding!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

