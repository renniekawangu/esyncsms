import { ArrowRight } from 'lucide-react'

export default function Hero({ data }) {
  const { headline, subheadline, cta } = data

  return (
    <section id="hero" className="bg-gradient-to-b from-gray-50 to-white section-padding">
      <div className="container-max">
        <div className="text-center">
          <h1 className="heading-lg text-primary mb-6 leading-tight">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={cta.link}
              className="btn-primary inline-flex items-center gap-2 group"
            >
              {cta.text}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#features"
              className="btn-secondary"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
