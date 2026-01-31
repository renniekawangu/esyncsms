import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ({ data }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="faq" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-md text-primary dark:text-blue-400 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions? We've got answers. Can't find what you're looking for? 
            <a href="#contact" className="text-primary dark:text-blue-400 font-semibold hover:underline"> Contact us</a>
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {data.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-primary dark:hover:border-blue-400 transition"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-primary dark:text-blue-400 transition-transform ${
                      activeIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeIndex === idx && (
                  <div className="px-6 pb-6 pt-0 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a 
              href="https://wa.me/260980117950?text=Hi%2C%20I%20have%20a%20question%20about%20eSync"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
