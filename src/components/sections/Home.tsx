import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from "../ui/button"
import { handlePhoneCall } from '../../utils/helpers'

type HomeProps = {
  content: {
    title: string
    subtitle: string
    cta: string
  }
}

export default function Home({ content }: HomeProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/placeholder.svg?height=1080&width=1920" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="text-center relative z-10 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
        >
          {content.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-xl sm:text-2xl"
        >
          {content.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" onClick={() => handlePhoneCall('+39 3386496923')}>
            {content.cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}