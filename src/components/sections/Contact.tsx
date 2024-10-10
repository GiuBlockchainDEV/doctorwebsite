import { ArrowRight, Phone } from 'lucide-react'
import { Button } from "../ui/button"
import { handlePhoneCall, handleWhatsApp } from "../../utils/helpers"

type ContactProps = {
  content: {
    title: string
    email: string
    phone: string
    address: string
  }
}

export default function Contact({ content }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-8">{content.title}</h2>
        <div className="text-center">
          <p className="text-xl mb-2">{content.email}</p>
          <p className="text-xl mb-2">{content.phone}</p>
          <p className="text-xl">{content.address}</p>
        </div>
        <div className="mt-10 flex justify-center">
          <Button size="lg" variant="default" className="bg-green-600 hover:bg-green-700 text-white mr-4" onClick={() => handleWhatsApp(content.phone)}>
            Invia un messaggio
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white" onClick={() => handlePhoneCall(content.phone)}>
            Chiama ora
            <Phone className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}