import { Check } from 'lucide-react'

export default function PricingCard({ plan, students, price, features, isPopular = false, onSelectPlan = () => {} }) {
  return (
    <div
      className={`rounded-lg p-8 transition duration-300 ${
        isPopular
          ? 'bg-primary text-white shadow-2xl transform lg:scale-105'
          : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-blue-500/10'
      }`}
    >
      <h3 className={`text-2xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
        {plan}
      </h3>
      <p className={`mb-4 ${isPopular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
        {students}
      </p>
      <p className={`text-4xl font-bold mb-6 ${isPopular ? 'text-white' : 'text-primary'}`}>
        {price}
      </p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check
              size={20}
              className={`flex-shrink-0 mt-1 ${isPopular ? 'text-blue-200' : 'text-secondary'}`}
            />
            <span className={isPopular ? 'text-blue-50' : 'text-gray-700'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelectPlan}
        className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
          isPopular
            ? 'bg-white text-primary hover:bg-blue-50 dark:bg-gray-900 dark:text-blue-400 dark:hover:bg-gray-800'
            : 'bg-primary text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700'
        }`}
      >
        View Payment Plans
      </button>
    </div>
  )
}
