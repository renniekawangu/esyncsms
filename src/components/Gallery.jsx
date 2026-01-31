import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react'
import { useState } from 'react'

const mockDashboards = [
  {
    id: 1,
    title: 'Student Overview',
    description: 'Students access their personal academic dashboard',
    image: '/assets/screenshots/child_overview.png',
    color: 'from-blue-500 to-blue-600',
    category: 'Student',
    features: ['View grades', 'Check attendance', 'See announcements']
  },
  {
    id: 2,
    title: 'Academics & Results',
    description: 'View detailed academic records and progress',
    image: '/assets/screenshots/child_academics.png',
    color: 'from-green-500 to-green-600',
    category: 'Academic',
    features: ['Subject performance', 'Progress tracking', 'Report cards']
  },
  {
    id: 3,
    title: 'Parent Dashboard',
    description: 'Parents monitor their children\'s performance',
    image: '/assets/screenshots/parent_dashboard.png',
    color: 'from-purple-500 to-purple-600',
    category: 'Parent',
    features: ['Child progress', 'Fee status', 'School updates']
  },
  {
    id: 4,
    title: 'Teacher Dashboard',
    description: 'Teachers manage classes and student records',
    image: '/assets/screenshots/teacher_dashboard.png',
    color: 'from-orange-500 to-orange-600',
    category: 'Admin',
    features: ['Mark attendance', 'Enter results', 'Send messages']
  },
  {
    id: 5,
    title: 'Fees Management',
    description: 'Track fees, payments, and balances easily',
    image: '/assets/screenshots/child_fees.png',
    color: 'from-red-500 to-red-600',
    category: 'Finance',
    features: ['Payment tracking', 'Arrears management', 'Receipts']
  },
  {
    id: 6,
    title: 'Real-time Messaging',
    description: 'Communicate with parents and staff instantly',
    image: '/assets/screenshots/realtime_messaging.png',
    color: 'from-indigo-500 to-indigo-600',
    category: 'Communication',
    features: ['Send announcements', 'Direct messages', 'Notifications']
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', ...new Set(mockDashboards.map(d => d.category))]
  
  const filteredDashboards = filter === 'All' 
    ? mockDashboards 
    : mockDashboards.filter(d => d.category === filter)

  const handlePrevious = () => {
    if (selectedImageIndex > 0) {
      const newIndex = selectedImageIndex - 1
      setSelectedImage(filteredDashboards[newIndex])
      setSelectedImageIndex(newIndex)
    }
  }

  const handleNext = () => {
    if (selectedImageIndex < filteredDashboards.length - 1) {
      const newIndex = selectedImageIndex + 1
      setSelectedImage(filteredDashboards[newIndex])
      setSelectedImageIndex(newIndex)
    }
  }

  const openImage = (dashboard, index) => {
    setSelectedImage(dashboard)
    setSelectedImageIndex(index)
  }

  return (
    <section id="gallery" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-md text-primary dark:text-blue-400 mb-4">
            See eSync in Action
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Explore our intuitive interface designed for every role in your school
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setFilter(category)
                  setSelectedImage(null)
                  setSelectedImageIndex(null)
                }}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  filter === category
                    ? 'bg-primary dark:bg-blue-400 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-blue-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDashboards.map((dashboard, index) => (
            <div
              key={dashboard.id}
              onClick={() => openImage(dashboard, index)}
              className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800"
            >
              <div className={`h-48 bg-gradient-to-br ${dashboard.color} relative overflow-hidden`}>
                <img
                  src={dashboard.image}
                  alt={dashboard.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
                  <Eye size={40} className="text-white opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold bg-primary bg-opacity-10 dark:bg-blue-400 dark:bg-opacity-10 text-primary dark:text-blue-400 px-2 py-1 rounded">
                    {dashboard.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {dashboard.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {dashboard.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {dashboard.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
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

            {/* Navigation Buttons */}
            {selectedImageIndex > 0 && (
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} className="text-gray-900 dark:text-white" />
              </button>
            )}

            {selectedImageIndex < filteredDashboards.length - 1 && (
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight size={24} className="text-gray-900 dark:text-white" />
              </button>
            )}

            <div className={`h-96 bg-gradient-to-br ${selectedImage.color}`}>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-400px)]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-semibold bg-primary bg-opacity-10 dark:bg-blue-400 dark:bg-opacity-10 text-primary dark:text-blue-400 px-3 py-1 rounded-full">
                  {selectedImage.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                {selectedImage.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedImage.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary dark:bg-blue-400 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {selectedImageIndex + 1} of {filteredDashboards.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
