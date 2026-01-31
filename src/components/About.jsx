import { Target, Heart, Zap, Users } from 'lucide-react'

export default function About({ data }) {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-md text-primary dark:text-blue-400 mb-4">About eSync</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transforming education through innovative technology
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <Target size={32} className="text-primary dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800">
            <div className="flex items-center gap-3 mb-4">
              <Zap size={32} className="text-secondary dark:text-teal-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.vision}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.values.map((value, idx) => (
              <div key={idx} className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-blue-500/10 transition">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {value.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Story/History */}
        <div className="mb-16 p-8 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {data.story}
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {data.storyPart2}
          </p>
        </div>

        {/* Stats/Milestones */}
        {data.milestones && (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.milestones.map((milestone, idx) => (
              <div key={idx} className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                <p className="text-3xl font-bold text-primary dark:text-blue-400 mb-2">
                  {milestone.stat}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {milestone.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
