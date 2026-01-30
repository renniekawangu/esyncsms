import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Roles from './components/Roles'
import Pricing from './components/Pricing'
import WhyChoose from './components/WhyChoose'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import WhatsAppButton from './components/WhatsAppButton'
import portfolioData from '../esync.portfolio.json'

function App() {
  const [data, setData] = useState(portfolioData)
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    // Close mobile nav when clicking outside or on a link
    const handleLinkClick = (e) => {
      if (e.target.getAttribute('href')?.startsWith('#')) {
        setIsNavOpen(false)
      }
    }

    document.addEventListener('click', handleLinkClick)
    return () => document.removeEventListener('click', handleLinkClick)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="+260XXX XXX XXX" message="Hi, I'm interested in requesting a demo of eSync for my school." />

      {/* Navigation */}
      <nav className="sticky top-0 bg-white dark:bg-gray-950 shadow-sm dark:shadow-gray-800 z-40 transition-colors duration-300">
        <div className="container-max px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="eSync Logo" className="h-20 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition">
              Features
            </a>
            <a href="#gallery" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition">
              Gallery
            </a>
            <a href="#pricing" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition">
              Contact
            </a>
            <ThemeToggle />
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-label="Toggle menu"
            >
              {isNavOpen ? (
                <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isNavOpen && (
          <div className="md:hidden bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-4 space-y-3">
            <a
              href="#features"
              className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition py-2"
            >
              Features
            </a>
            <a
              href="#gallery"
              className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition py-2"
            >
              Gallery
            </a>
            <a
              href="#pricing"
              className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition py-2"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition py-2"
            >
              Contact
            </a>
            <a href="#contact" className="btn-primary w-full text-center">
              Get Started
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero data={data.hero} />
        <Features data={data.features} />
        <Gallery />
        <Roles data={data.roles} />
        <Pricing data={data.pricing} />
        <WhyChoose data={data.whyChoose} />
        <Contact data={data.contact} />
      </main>

      {/* Footer */}
      <Footer data={data.footer} brand={data.brand} />
    </div>
  )
}

export default App
