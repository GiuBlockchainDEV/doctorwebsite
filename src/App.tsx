import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, ChevronRight, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from "./components/ui/button"

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'chi-sono', 'expertise', 'contatti']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      setMobileMenuOpen(false)
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }

  const content = {
    nav: ['Home', 'Chi Sono', 'Expertise', 'Contatti'],
    home: {
      title: 'Dott. Gabriele Neroni',
      subtitle: 'Chirurgo Generale e Vascolare',
      cta: 'Prenota una consulenza'
    },
    about: {
      title: 'Chi Sono',
      content: 'Con oltre 30 anni di esperienza nel campo della chirurgia generale e vascolare, mi dedico a fornire cure di altissima qualità e trattamenti all\'avanguardia. La mia passione per la medicina e l\'impegno verso i pazienti guidano ogni aspetto della mia pratica. Specializzato presso l\'Università La Sapienza di Roma, ho dedicato la mia carriera al miglioramento continuo delle tecniche chirurgiche e alla cura personalizzata di ogni paziente.'
    },
    expertise: {
      title: 'La Mia Expertise',
      areas: [
        {
          title: 'Chirurgia Generale',
          description: 'Specializzato in procedure chirurgiche avanzate e minimamente invasive, garantendo risultati ottimali e tempi di recupero ridotti.',
          image: 'https://ideogram.ai/assets/image/lossless/response/jmvb9SDZRx-VVxiVROGw8w'
        },
        {
          title: 'Chirurgia Vascolare',
          description: 'Esperto in diagnostica e trattamento delle patologie vascolari, utilizzando tecniche all\'avanguardia per la salute del sistema circolatorio.',
          image: 'https://ideogram.ai/assets/progressive-image/balanced/response/Ze6KVzOEREqc7Lm9DACqOA'
        },
        {
          title: 'Medicina Estetica',
          description: 'Trattamenti innovativi per risultati naturali e duraturi, combinando sicurezza ed efficacia per valorizzare la bellezza di ogni paziente.',
          image: 'https://ideogram.ai/assets/image/lossless/response/-PaJMWKYQAqfxstZm4ZrQw'
        }
      ]
    },
    contact: {
      title: 'Contattami',
      email: 'gabriele952@gmail.com',
      phone: '+39 3386496923',
      address: 'Via Croce Tani Fumone 175 - 03013 Ferentino, Italia'
    }
  }

  const handlePhoneCall = () => {
    window.location.href = `tel:${content.contact.phone}`
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${content.contact.phone.replace(/\s+/g, '')}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="fixed w-full bg-white z-10 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-semibold">Dr. Neroni</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {content.nav.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors duration-200 ease-in-out ${
                    activeSection === item.toLowerCase().replace(' ', '-')
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <span className="text-xl font-semibold text-black">Dr. Neroni</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <nav className="flex-grow flex flex-col justify-center bg-white">
                {content.nav.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className={`py-4 text-center text-lg font-medium ${
                      activeSection === item.toLowerCase().replace(' ', '-')
                        ? 'text-black bg-gray-100'
                        : 'text-gray-600 hover:text-black hover:bg-gray-50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://images.pexels.com/photos/27819512/pexels-photo-27819512/free-photo-of-rosso-arte-modello-trama.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="text-center relative z-10 text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
            >
              {content.home.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 text-xl sm:text-2xl"
            >
              {content.home.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" onClick={() => scrollToSection('contatti')}>
                {content.home.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="chi-sono" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-extrabold mb-8">{content.about.title}</h2>
                <p className="text-xl text-gray-500">{content.about.content}</p>
                <div className="mt-8">
                  <Button variant="outline" onClick={() => scrollToSection('expertise')}>
                    Scopri di più
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:w-1/2">
                <img src="https://i.ibb.co/0VsnNm4/Photoroom-20241010-085517.png" alt="Dr. Neroni" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-12">{content.expertise.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.expertise.areas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img src={area.image} alt={area.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contatti" className="py-20 bg-gray-100 text-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-8">{content.contact.title}</h2>
            <div className="text-center">
              <p className="text-xl mb-2">{content.contact.email}</p>
              <p className="text-xl mb-2">{content.contact.phone}</p>
              <p className="text-xl">{content.contact.address}</p>
            </div>
            <div className="mt-10 flex justify-center">
              <Button size="lg" variant="default" className="bg-green-600 hover:bg-green-700 text-white mr-4" onClick={handleWhatsApp}>
                Invia un messaggio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white" onClick={handlePhoneCall}>
                Chiama ora
                <Phone className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 text-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Dr. Gabriele Neroni</h3>
              <p className="text-sm">Chirurgo Generale e Vascolare</p>
              
              <p className="text-sm">Esperto di Medicina Estetica</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contatti</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <a href={`tel:${content.contact.phone}`} className="hover:underline">{content.contact.phone}</a>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <a href={`mailto:${content.contact.email}`} className="hover:underline">{content.contact.email}</a>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{content.contact.address}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Collegamenti rapidi</h3>
              <ul className="space-y-2">
                {content.nav.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                      className="text-gray-600 hover:text-gray-900 hover:underline"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p>&copy; {new Date().getFullYear()} Dott. Gabriele Neroni. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}