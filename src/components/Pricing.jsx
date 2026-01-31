import { useState } from 'react'
import PricingCard from './PricingCard'
import PaymentPlanModal from './PaymentPlanModal'

export default function Pricing({ data }) {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const premiumIndex = data.findIndex(plan => plan.plan === 'Premium')

  return (
    <section id="pricing" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-md text-primary dark:text-blue-400 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your school's needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {data.map((plan, idx) => (
            <PricingCard
              key={idx}
              {...plan}
              isPopular={idx === premiumIndex}
              onSelectPlan={() => setSelectedPlan(plan)}
            />
          ))}
        </div>

        <p className="text-center text-gray-600 dark:text-gray-400 mt-12">
          All plans include mobile app access, cloud storage, and free staff training.
        </p>
      </div>

      <PaymentPlanModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
    </section>
  )
}
