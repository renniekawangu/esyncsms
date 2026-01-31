export default function FeaturedSchools({ data }) {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="container-max">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
            Trusted by Schools Across Zambia
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.map((school, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-blue-400 hover:shadow-md transition duration-300"
            >
              <div className="text-center">
                <p className="font-semibold text-gray-900 dark:text-white text-sm">
                  {school.name}
                </p>
                {school.students && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {school.students}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
