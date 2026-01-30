import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
// Replace 'YOUR_EMAILJS_PUBLIC_KEY' with your actual public key from emailjs.com
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY')

export default function ContactForm() {
  const [formData, setFormData] = useState({
    schoolName: '',
    email: '',
    phone: '',
    studentCount: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // 'loading', 'success', 'error'
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your service ID
        'YOUR_TEMPLATE_ID', // Replace with your template ID
        {
          from_name: formData.schoolName,
          from_email: formData.email,
          phone: formData.phone,
          student_count: formData.studentCount,
          message: formData.message,
          to_email: 'info@esync.co.zm',
        }
      )

      if (response.status === 200) {
        setStatus('success')
        setMessage("Request sent! We'll contact you shortly.")
        setFormData({
          schoolName: '',
          email: '',
          phone: '',
          studentCount: '',
          message: '',
        })
      }
    } catch (error) {
      setStatus('error')
      setMessage('Failed to send request. Please try again or contact us directly.')
      console.error('Email error:', error)
    }

    // Clear status after 5 seconds
    setTimeout(() => setStatus(null), 5000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
            School Name
          </label>
          <input
            type="text"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
            placeholder="Your school name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
            placeholder="+260 XXX XXX XXX"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Student Count
          </label>
          <select
            name="studentCount"
            value={formData.studentCount}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
          >
            <option value="">Select range</option>
            <option value="0-500">Up to 500 students</option>
            <option value="501-1000">501-1000 students</option>
            <option value="1001-2000">1001-2000 students</option>
            <option value="2000+">2000+ students</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
          placeholder="Tell us about your school and specific needs..."
        ></textarea>
      </div>

      {status === 'success' && (
        <div className="flex items-center gap-3 p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg">
          <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
          <p className="text-green-800 dark:text-green-200">{message}</p>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-3 p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg">
          <AlertCircle size={20} className="text-red-600 dark:text-red-400" />
          <p className="text-red-800 dark:text-red-200">{message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send size={20} />
        {status === 'loading' ? 'Sending...' : 'Send Request'}
      </button>

      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
        We'll contact you within 24 hours to arrange a demo.
      </p>
    </form>
  )
}
