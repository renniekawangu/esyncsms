import { Mail, Phone, ArrowRight } from 'lucide-react'
import ContactForm from './ContactForm'

export default function Contact({ data }) {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-md text-primary dark:text-blue-400 mb-6">Get Started with eSync</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Ready to digitise your school? Fill out the form below for a free demo or contact us directly.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800 mb-12">
            <ContactForm />
          </div>

          {/* Direct Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-blue-500/20 transition border border-gray-200 dark:border-gray-800">
              <div className="flex justify-center mb-4">
                <Mail size={32} className="text-primary dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">Email</h3>
              <a
                href={`mailto:${data.email}`}
                className="text-primary dark:text-blue-400 font-semibold hover:underline block text-center"
              >
                {data.email}
              </a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-green-500/20 transition border border-gray-200 dark:border-gray-800">
              <div className="flex justify-center mb-4">
                <Phone size={32} className="text-secondary dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">Phone</h3>
              <a
                href={`tel:${data.phone}`}
                className="text-secondary dark:text-green-400 font-semibold hover:underline block text-center"
              >
                {data.phone}
              </a>
            </div>
          </div>

          <div className="text-center mt-12 p-6 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 font-semibold mb-3">Prefer WhatsApp?</p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Click the WhatsApp button in the bottom right to chat with us directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
