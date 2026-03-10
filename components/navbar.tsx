"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navLinks = [
  { label: "Главная", href: "/" },
  { label: "Меню", href: "/menu" },
  { label: "О нас", href: "/about" },
  { label: "Контакты", href: "/contacts" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isHome = pathname === "/"

  // On homepage: always dark header until scrolled, then white
  // On other pages: always white
  const showDarkHeader = isHome && !scrolled
  const showWhiteHeader = !isHome || scrolled

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showWhiteHeader
          ? "bg-white/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-black/40 backdrop-blur-sm border-b border-white/10"
      )}
    >
      <div className="max-w-7xl mx-auto grid h-16 grid-cols-[1fr_auto] items-center gap-6 px-6 lg:h-20 lg:grid-cols-[1fr_auto_1fr] lg:px-10">
        {/* Logo with actual image */}
        <Link href="/" className="flex items-center gap-3 group justify-self-start">
          <div className="w-10 h-10 lg:w-12 lg:h-12 relative rounded-full overflow-hidden bg-white">
            <Image
              src="/images/dolina/brand-logo.webp"
              alt="Долина"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={cn(
                "font-serif font-bold text-base lg:text-lg transition-colors",
                showWhiteHeader ? "text-brand-green" : "text-white"
              )}
            >
              Долина
            </span>
            <span
              className={cn(
                "text-[10px] uppercase tracking-[0.15em] transition-colors",
                showWhiteHeader ? "text-muted-foreground" : "text-white/70"
              )}
            >
              Чайхана
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center justify-self-center lg:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative group text-sm font-medium tracking-[0.12em] uppercase transition-colors",
                pathname === link.href
                  ? showWhiteHeader
                    ? "text-brand-green"
                    : "text-white"
                  : showWhiteHeader
                  ? "text-foreground/70 hover:text-brand-green"
                  : "text-white/80 hover:text-white"
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-0.5 left-0 h-px bg-brand-gold transition-all duration-300",
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center justify-self-end lg:flex lg:gap-4">
          <a
            href="tel:+79267915485"
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              showWhiteHeader ? "text-brand-green hover:text-brand-green-light" : "text-white/90 hover:text-white"
            )}
          >
            <Phone size={14} />
            +7 (926) 791-54-85
          </a>
          <Link
            href="/menu"
            className={cn(
              "text-sm font-medium px-5 py-2.5 rounded-sm transition-colors",
              showWhiteHeader
                ? "bg-brand-green text-white hover:bg-brand-green-light"
                : "bg-brand-gold text-brand-green-dark hover:bg-brand-gold-light"
            )}
          >
            Смотреть меню
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={cn("justify-self-end transition-colors lg:hidden", showWhiteHeader ? "text-foreground" : "text-white")}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-medium py-2 border-b border-border/50",
                  pathname === link.href ? "text-brand-green" : "text-foreground/70"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+79267915485" className="flex items-center gap-2 text-brand-green font-medium mt-2">
              <Phone size={16} />
              +7 (926) 791-54-85
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
