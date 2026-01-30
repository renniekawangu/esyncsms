import { iconComponents } from '../utils/icons'

export default function Features({ data }) {
  return (
    <section id="features" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-md text-primary dark:text-blue-400 mb-4">Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to manage your school, all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((feature, idx) => {
            const IconComponent = iconComponents[feature.icon.charAt(0).toUpperCase() + 
              feature.icon.slice(1).replace(/-/g, (m) => feature.icon[feature.icon.indexOf(m) + 1]?.toUpperCase() || '')]
            
            // Proper icon name mapping
            const iconKey = feature.icon
              .split('-')
              .map((part, i) => i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1))
              .join('')
            
            const Icon = iconComponents[iconKey] || iconComponents[Object.keys(iconComponents)[0]]

            return (
              <div
                key={idx}
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-blue-400 hover:shadow-lg dark:hover:shadow-blue-500/10 transition duration-300 bg-white dark:bg-gray-900"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={28} className="text-primary dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
