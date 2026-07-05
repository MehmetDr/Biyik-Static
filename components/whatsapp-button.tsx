import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/905050653851"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile bize ulaşın"
      className="group fixed bottom-6 right-6 z-50 flex items-center"
    >
      {/* Tooltip - appears on hover */}
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        Bize Ulaşın
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center">
        {/* Glowing / ringing ping effect behind the icon */}
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
          style={{ backgroundColor: '#25D366' }}
        />
        {/* Solid button with subtle continuous pulse */}
        <span
          className="relative inline-flex h-14 w-14 animate-pulse items-center justify-center rounded-full text-white shadow-xl transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: '#25D366' }}
        >
          <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
        </span>
      </span>
    </a>
  )
}
