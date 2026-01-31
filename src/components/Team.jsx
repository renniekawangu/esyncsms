import { Linkedin, Mail } from 'lucide-react'

export default function Team({ data }) {
  return (
    <section id="team" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-md text-primary dark:text-blue-400 mb-4">Meet the Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Dedicated professionals committed to transforming education in Zambia
          </p>
        </div>

        {/* Company Story */}
        {data.story && (
          <div className="mb-16 p-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {data.story}
            </p>
          </div>
        )}

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.members.map((member, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl dark:hover:shadow-blue-500/10 transition duration-300 transform hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="h-64 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl">
                {member.avatar}
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary dark:text-blue-400 font-semibold text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white dark:hover:bg-blue-400 transition"
                      aria-label="Email"
                    >
                      <Mail size={18} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white dark:hover:bg-blue-400 transition"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Join Our Mission
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-xl mx-auto">
            We're looking for passionate individuals to help transform education in Zambia. If you're interested in joining our team, we'd love to hear from you.
          </p>
          <a href="mailto:careers@esync.zm" className="btn-primary inline-flex items-center gap-2">
            View Opportunities
          </a>
        </div>
      </div>
    </section>
  )
}
