import { X } from 'lucide-react'

export default function PaymentPlanModal({ plan, onClose }) {
  if (!plan) return null

  const paymentOptions = [
    { label: 'Monthly', value: plan.monthlyPrice, period: 'month' },
    { label: 'Termly', value: plan.termlyPrice, period: 'term (3 months)' },
    { label: 'Semester', value: plan.semesterPrice, period: 'semester (6 months)' },
    { label: 'Annually', value: plan.annualPrice, period: 'year' },
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {plan.plan} Plan
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Best for: {plan.bestFor}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition"
            aria-label="Close"
          >
            <X size={24} className="text-gray-900 dark:text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Plan Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Plan Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">Student Capacity</p>
                <p className="text-2xl font-bold text-primary dark:text-blue-400 mt-1">
                  {plan.students}
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">Best For</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                  {plan.bestFor}
                </p>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Payment Options
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {paymentOptions.map((option, idx) => (
                <div
                  key={idx}
                  className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary dark:hover:border-blue-400 transition cursor-pointer text-center group hover:bg-blue-50 dark:hover:bg-gray-800"
                >
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 uppercase font-semibold tracking-wide">
                    {option.label}
                  </p>
                  <p className="text-2xl font-bold text-primary dark:text-blue-400">
                    K{option.value.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    per {option.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Included */}
          {plan.features && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Features Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="w-5 h-5 bg-primary dark:bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Service Breakdown */}
          {plan.services && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Service Breakdown (Annual)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Service</th>
                      <th className="text-right p-3 font-semibold text-gray-900 dark:text-white">Cost</th>
                      <th className="text-right p-3 font-semibold text-gray-900 dark:text-white">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plan.services.map((service, idx) => (
                      <tr key={idx} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="p-3 text-gray-700 dark:text-gray-300">{service.name}</td>
                        <td className="p-3 text-right font-semibold text-primary dark:text-blue-400">
                          K{service.cost.toLocaleString()}
                        </td>
                        <td className="p-3 text-right text-gray-600 dark:text-gray-400">{service.duration}</td>
                      </tr>
                    ))}
                    <tr className="bg-blue-50 dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700">
                      <td className="p-3 font-bold text-gray-900 dark:text-white">Total Annual Cost</td>
                      <td className="p-3 text-right font-bold text-2xl text-primary dark:text-blue-400">
                        K{plan.annualPrice.toLocaleString()}
                      </td>
                      <td className="p-3"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Custom Features Note */}
          {plan.customFeatures && (
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <span className="font-semibold">Note:</span> {plan.customFeatures}
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <a
              href="#contact"
              onClick={onClose}
              className="flex-1 btn-primary text-center"
            >
              Request Quotation
            </a>
            <button
              onClick={onClose}
              className="flex-1 btn-secondary"
            >
              Close
            </button>
          </div>

          {/* Contact Info */}
          <div className="text-center text-sm text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="font-semibold text-gray-900 dark:text-white mb-2">Have Questions?</p>
            <p>Contact: Rennie Kawangu</p>
            <p>📞 +260 770 817 839</p>
            <p>📧 renniekawangu@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
