import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import VisionSection from "./components/VisionSection"
import FounderSection from "./components/FounderSection"
import ServicesSection from "./components/ServicesSection"
import PackagesSection from "./components/PackagesSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import ClientWrapper from "./components/ClientWrapper"

export default function Home() {
  return (
    <div className="min-h-screen text-gray-800 relative">
      <ClientWrapper>
        <Header />
        <main>
          <HeroSection />
          <VisionSection />
          <ServicesSection />
          <PackagesSection />
          <FounderSection />
          <ContactSection />
        </main>
        <Footer />
      </ClientWrapper>
    </div>
  )
}

