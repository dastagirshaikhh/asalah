import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-green-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">&copy; 2023 Asalah. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              <Facebook />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              <Twitter />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              <Instagram />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

