export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/919820000000?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20planning%20my%20wedding."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[500] flex items-center gap-3 bg-[#25D366] text-white rounded-full px-5 py-3 shadow-[0_4px_20px_rgba(37,211,102,0.35)] font-label text-[0.7rem] font-medium tracking-[0.1em] uppercase transition-all duration-[250ms] ease-in-out animate-float min-h-[48px] hover:bg-[#20BA5A] hover:shadow-[0_8px_28px_rgba(37,211,102,0.45)] hover:-translate-y-[3px] hover:scale-[1.04]"
      aria-label="Chat on WhatsApp"
    >
      <span className="text-[1.2rem] leading-none">💬</span>
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
