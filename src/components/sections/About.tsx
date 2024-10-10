import { Button } from "../ui/button"
import { ChevronRight } from 'lucide-react'
import { scrollToSection } from '../../utils/helpers'

type AboutProps = {
  content: {
    title: string
    content: string
  }
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold mb-8">{content.title}</h2>
            <p className="text-xl text-gray-500">{content.content}</p>
            <div className="mt-8">
              <Button variant="outline" onClick={() => scrollToSection('expertise')}>
                Scopri di più
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <img src="/placeholder.svg?height=600&width=800" alt="Dr. Neroni" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}