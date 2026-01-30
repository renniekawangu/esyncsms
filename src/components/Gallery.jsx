import { X } from 'lucide-react'
import { useState } from 'react'

const mockDashboards = [
  {
    id: 1,
    title: 'Student Overview',
    description: 'Students access their personal academic dashboard',
    image: '/assets/screenshots/child_overview.png',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Academics & Results',
    description: 'View detailed academic records and progress',
    image: '/assets/screenshots/child_academics.png',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 3,
    title: 'Parent Dashboard',
    description: 'Parents monitor their children\'s performance',
    image: '/assets/screenshots/parent_dashboard.png',
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 4,
    title: 'Teacher Dashboard',
    description: 'Teachers manage classes and student records',
    image: '/assets/screenshots/teacher_dashboard.png',
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 5,
    title: 'Fees Management',
    description: 'Track fees, payments, and balances easily',
    image: '/assets/screenshots/child_fees.png',
    color: 'from-red-500 to-red-600',
  },
  {
    id: 6,
    title: 'Real-time Messaging',
    description: 'Communicate with parents and staff instantly',
    image: '/assets/screenshots/realtime_messaging.png',
    color: 'from-indigo-500 to-indigo-600',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-md text-primary dark:text-blue-400 mb-4">
            See eSync in Action
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our intuitive interface designed for every role in your school
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockDashboards.map((dashboard) => (
            <div
              key={dashboard.id}
              onClick={() => setSelectedImage(dashboard)}
              className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-br ${dashboard.color} relative overflow-hidden`}>
                <img
                  src={dashboard.image}
                  alt={dashboard.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {dashboard.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {dashboard.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Close modal"
            >
              <X size={24} className="text-gray-900 dark:text-white" />
            </button>

            <div className={`h-96 bg-gradient-to-br ${selectedImage.color}`}>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {selectedImage.description}
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-4">
                Click outside or the X button to close
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
