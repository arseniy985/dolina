import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Clock, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white">
      {/* Gold decorative divider at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand with actual logo */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 relative rounded-full overflow-hidden bg-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dolina-park-logo-1-vQxC74yq8kYUx13jZpCCfocqeVmaeM.webp"
                alt="Долина"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-bold text-lg text-white">Долина</span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/60">Чайхана</span>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Аутентичная кухня Средней Азии в уникальном историческом павильоне ВДНХ. Мы объединяем восточное гостеприимство и традиционные рецепты.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-brand-gold text-sm font-semibold uppercase tracking-[0.16em] mb-4">Навигация</h3>
          <ul className="flex flex-col gap-2.5">
            {[
              { label: "Главная", href: "/" },
              { label: "Меню", href: "/menu" },
              { label: "О нас", href: "/about" },
              { label: "Контакты", href: "/contacts" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/70 text-sm hover:text-brand-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-brand-gold text-sm font-semibold uppercase tracking-[0.16em] mb-4">Контакты</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="tel:+79267915485"
                className="flex items-start gap-2.5 text-sm text-white/70 hover:text-brand-gold transition-colors"
              >
                <Phone size={14} className="mt-0.5 shrink-0" />
                +7 (926) 791-54-85
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dolina.park"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/70 hover:text-brand-gold transition-colors"
              >
                <Instagram size={14} className="shrink-0" />
                @dolina.park
              </a>
            </li>
            <li>
              <div className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>просп. Мира, 119, стр. 60, Москва, ВДНХ</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-brand-gold text-sm font-semibold uppercase tracking-[0.16em] mb-4">Режим работы</h3>
          <ul className="flex flex-col gap-2 text-sm text-white/70">
            <li className="flex justify-between gap-4">
              <span>Пн — Пт</span>
              <span>11:00 — 23:00</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Сб — Вс</span>
              <span>10:00 — 00:00</span>
            </li>
          </ul>
          <div className="flex items-center gap-2 mt-4 text-brand-gold/80 text-xs">
            <Clock size={12} />
            <span>Без выходных</span>
          </div>
        </div>
      </div>

      {/* Bottom bar with separator */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© 2026 Чайхана Долина. Все права защищены.</span>
          <span>м. ВДНХ, Москва</span>
        </div>
      </div>
    </footer>
  )
}
