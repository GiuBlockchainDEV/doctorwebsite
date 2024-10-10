import { Phone, Mail, MapPin } from 'lucide-react'

type FooterProps = {
  content: {
    nav: string[]
    contact: {
      email: string
      phone: string
      address: string
    }
  }
  scrollToSection: (sectionId: string) => void
}

export default function Footer({ content, scrollToSection }: FooterProps) {
  return (
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
  )
}