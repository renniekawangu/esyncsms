import { BarChart3, Users, Award, Zap } from 'lucide-react'

export default function Stats({ data }) {
  const statsWithIcons = [
    { ...data[0], icon: Users },
    { ...data[1], icon: Award },
    { ...data[2], icon: BarChart3 },
    { ...data[3], icon: Zap },
  ]

  return (
    <section className="section-padding bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsWithIcons.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <Icon size={32} className="text-primary dark:text-blue-400" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
