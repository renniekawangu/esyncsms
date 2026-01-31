import { Check, X } from 'lucide-react'

export default function Comparison({ data }) {
  return (
    <section id="comparison" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-md text-primary dark:text-blue-400 mb-4">eSync vs Traditional Methods</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how eSync compares to manual processes and outdated systems
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 border-b-2 border-gray-200 dark:border-gray-700">
                <th className="p-4 text-left font-semibold text-gray-900 dark:text-white w-1/3">
                  Feature
                </th>
                <th className="p-4 text-center font-semibold">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 bg-primary dark:bg-blue-400 rounded-lg flex items-center justify-center">
                      <Check size={20} className="text-white" />
                    </div>
                    <span className="text-gray-900 dark:text-white">eSync</span>
                  </div>
                </th>
                <th className="p-4 text-center font-semibold text-gray-600 dark:text-gray-400">
                  Traditional Methods
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-gray-200 dark:border-gray-700 ${
                    idx % 2 === 0
                      ? 'bg-white dark:bg-gray-950'
                      : 'bg-gray-50 dark:bg-gray-900'
                  } hover:bg-blue-50 dark:hover:bg-gray-800 transition`}
                >
                  <td className="p-4 font-medium text-gray-900 dark:text-white">
                    {item.feature}
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      {item.esync === true ? (
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium">
                          <Check size={20} className="flex-shrink-0" />
                          <span className="hidden sm:inline">{item.esyncText || 'Yes'}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600 font-medium">
                          <X size={20} className="flex-shrink-0" />
                          <span className="hidden sm:inline">{item.esyncText || 'No'}</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      {item.traditional === true ? (
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium">
                          <Check size={20} className="flex-shrink-0" />
                          <span className="hidden sm:inline">{item.traditionalText || 'Yes'}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-red-500 dark:text-red-400 font-medium">
                          <X size={20} className="flex-shrink-0" />
                          <span className="hidden sm:inline">{item.traditionalText || 'No'}</span>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Ready to modernize your school?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Stop wasting time on paperwork. Switch to eSync and focus on what matters—educating your students.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}
