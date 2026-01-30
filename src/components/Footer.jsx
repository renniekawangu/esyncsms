export default function Footer({ data, brand }) {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 dark:text-gray-500 section-padding py-12">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white dark:text-gray-100 font-bold text-lg mb-2">
              {brand.name}
            </h3>
            <p className="text-sm">
              {brand.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-white dark:text-gray-100 font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {data.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="block text-sm hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-white dark:text-gray-100 font-semibold mb-4">Location</h4>
            <p className="text-sm">
              {brand.location}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm">
            {data.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
