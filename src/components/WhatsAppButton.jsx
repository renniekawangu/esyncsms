import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton({ phoneNumber = "+260980117950", message = "Hi, I'm interested in requesting a demo of eSync for my school." }) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300 transform hover:scale-110 flex items-center gap-2 group"
      aria-label="Chat with us on WhatsApp"
      title="Request Demo via WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden group-hover:inline text-sm font-semibold pr-2">Chat</span>
    </a>
  )
}
