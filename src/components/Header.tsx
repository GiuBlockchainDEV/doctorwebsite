import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

type HeaderProps = {
  activeSection: string
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  scrollToSection: (sectionId: string) => void
  navItems: string[]
}

export default function Header({ activeSection, mobileMenuOpen, setMobileMenuOpen, scrollToSection, navItems }: HeaderProps) {
  return (
    <header className="fixed w-full bg-white z-10 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-semibold">Dr. Neroni</span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  activeSection === item.toLowerCase().replace(' ', '-')
                    ? 'border-b-2 border-black'
                    : 'text-gray-500 hover:text-gray-700'
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

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-8 w-8" />
            </button>
            <nav className="flex flex-col items-center space-y-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollToSection(item.toLowerCase().replace(' ', '-'))
                    setMobileMenuOpen(false)
                  }}
                  className="text-2xl font-medium text-gray-900 hover:text-gray-700"
                >
                  {item}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}