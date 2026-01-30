import { Shield } from 'lucide-react'

export default function Roles({ data }) {
  return (
    <section id="roles" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-md text-primary dark:text-blue-400 mb-4">Role-Based Access</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Each user type gets a customized dashboard with only the features they need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((role, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md dark:hover:shadow-green-500/10 transition duration-300 border-l-4 border-secondary dark:border-green-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Shield size={24} className="text-secondary dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {role.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {role.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
