import { motion } from 'framer-motion'

type ExpertiseProps = {
  content: {
    title: string
    areas: Array<{
      title: string
      description: string
      image: string
    }>
  }
}

export default function Expertise({ content }: ExpertiseProps) {
  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">{content.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.areas.map((area, index) => (
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
  )
}