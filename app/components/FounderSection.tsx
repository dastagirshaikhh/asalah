"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export default function FounderSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} id="about" className="py-20 relative overflow-hidden bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div className="grid md:grid-cols-2 gap-12 items-center" style={{ y, opacity }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/0 rounded-3xl transform -rotate-6"></div>
            <Image
              src="https://images.pexels.com/photos/2738919/pexels-photo-2738919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Kasmira Saudagar"
              width={600}
              height={600}
              className="rounded-3xl relative z-10"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Founder's Note</h2>
            <p className="text-lg mb-6 text-gray-700">
              Asalah was born from a deep desire to empower Muslim professionals. In recent times, the rise of
              Islamophobia has led many of us to face discrimination—especially in the workplace. I, too, experienced it
              firsthand.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              After completing my education, I was eager to embark on my professional journey. I had the qualifications,
              skills, and experience required for the role I was applying for. Yet, my interview did not go as expected.
              My first impression of my appearance was enough for them to dismiss my potential without even considering
              my CV.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              But Alhamdulillah, when Allah is your priority, what seems like a loss is never truly a loss. I have spent
              the past three years as a freelance writer, building my career remotely. And in this journey, I have
              witnessed how Allah's help comes in ways beyond our imagination.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              With Asalah, I want to help my brothers and sisters establish personal brands that are strong, authentic,
              and rooted in character. We are not just professionals—we are contributors to our communities. We are
              visionaries, dreamers, and changemakers.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              When we earn, we spend. When we spend, we contribute to the economy and society. Our impact goes beyond
              ourselves, and through faith-driven personal branding, we can shape narratives, build influence, and leave
              a lasting legacy.
            </p>
            <p className="text-lg font-semibold text-primary">
              — Kasmira Saudagar
              <br />
              Founder, Asalah
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

