import { CheckCircle } from 'lucide-react'

export default function WhyChoose({ data }) {
  return (
    <section id="why-choose" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-md text-primary dark:text-blue-400 mb-12 text-center">Why Choose eSync?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle size={28} className="text-secondary dark:text-green-400 mt-1" />
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {reason}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg border-l-4 border-secondary dark:border-green-500">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-semibold text-primary dark:text-blue-400">eSync</span> is built by people who understand Zambian schools.
              We've worked with teachers, admins, and parents to create a system that actually works for you—not against you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
