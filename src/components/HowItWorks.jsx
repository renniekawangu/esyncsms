import { CheckCircle, ArrowRight } from 'lucide-react'

export default function HowItWorks({ data }) {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-md text-primary dark:text-blue-400 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Getting your school up and running with eSync is simple and fast
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-gray-300 dark:via-blue-400 dark:to-gray-700" />

          {data.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Step Number Circle */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full border-4 border-primary dark:border-blue-400 flex items-center justify-center relative shadow-lg z-10">
                  <span className="text-2xl font-bold text-primary dark:text-blue-400">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Step Content */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-blue-500/10 transition duration-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                  {step.description}
                </p>

                {/* Details List */}
                <div className="space-y-3">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex gap-2">
                      <CheckCircle size={18} className="text-secondary dark:text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Timeline Duration */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium text-primary dark:text-blue-400 text-center">
                    {step.duration}
                  </p>
                </div>
              </div>

              {/* Arrow for mobile */}
              {idx < data.length - 1 && (
                <div className="flex justify-center mt-4 lg:hidden">
                  <ArrowRight size={24} className="text-primary dark:text-blue-400 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Ready to transform your school?
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Request a Demo
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
