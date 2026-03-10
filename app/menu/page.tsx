import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

// Menu categories data
export const menuCategories = [
  {
    id: "plov",
    name: "Плов",
    desc: "Несколько видов настоящего узбекского плова, приготовленного на открытом огне",
    size: "xl",
    bg: "bg-brand-green",
    textColor: "text-white",
    subColor: "text-white/60",
    accentColor: "text-brand-gold",
    img: null,
  },
  {
    id: "shashlyk",
    name: "Шашлык",
    desc: "Отборное мясо на мангале каждый день",
    size: "tall",
    bg: "bg-foreground",
    textColor: "text-white",
    subColor: "text-white/50",
    accentColor: "text-brand-gold",
    img: null,
  },
  {
    id: "manty",
    name: "Манты",
    desc: "Приготовлено на пару по традиционным рецептам",
    size: "md",
    bg: "bg-secondary",
    textColor: "text-foreground",
    subColor: "text-muted-foreground",
    accentColor: "text-brand-green",
    img: null,
  },
  {
    id: "salads",
    name: "Салаты",
    desc: "Свежие овощи и восточные заправки",
    size: "md",
    bg: "bg-brand-gold",
    textColor: "text-brand-green-dark",
    subColor: "text-brand-green-dark/60",
    accentColor: "text-brand-green-dark",
    img: null,
  },
  {
    id: "soups",
    name: "Супы",
    desc: "Наваристые бульоны и традиционные супы",
    size: "wide",
    bg: "bg-secondary",
    textColor: "text-foreground",
    subColor: "text-muted-foreground",
    accentColor: "text-brand-green",
    img: null,
  },
  {
    id: "hot",
    name: "Горячие блюда",
    desc: "Традиционные горячие блюда восточной кухни",
    size: "md",
    bg: "bg-brand-green",
    textColor: "text-white",
    subColor: "text-white/60",
    accentColor: "text-brand-gold",
    img: null,
  },
  {
    id: "drinks",
    name: "Напитки и чай",
    desc: "Чай, компоты, свежевыжатые соки",
    size: "md",
    bg: "bg-foreground",
    textColor: "text-white",
    subColor: "text-white/50",
    accentColor: "text-brand-gold",
    img: null,
  },
  {
    id: "desserts",
    name: "Десерты",
    desc: "Восточные сладости и выпечка",
    size: "md",
    bg: "bg-secondary",
    textColor: "text-foreground",
    subColor: "text-muted-foreground",
    accentColor: "text-brand-green",
    img: null,
  },
]

const gridOrder = ["plov", "shashlyk", "manty", "salads", "soups", "hot", "drinks", "desserts"]

export default function MenuPage() {
  const ordered = gridOrder
    .map((id) => menuCategories.find((c) => c.id === id))
    .filter(Boolean) as typeof menuCategories

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 bg-background border-b border-border">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-3">Чайхана Долина</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground text-balance">Меню</h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl">
            Блюда узбекской и среднеазиатской кухни. Выберите категорию, чтобы посмотреть блюда.
          </p>
        </Reveal>
      </section>

      {/* ASYMMETRIC BENTO CATEGORIES GRID */}
      <section className="bg-background py-12 lg:py-16">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10">
          <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 auto-rows-[160px] md:auto-rows-[180px] lg:auto-rows-[200px]">
            {ordered.map((cat) => {
              const isXl = cat.size === "xl"
              const isTall = cat.size === "tall"
              const isWide = cat.size === "wide"

              const gridClass = isXl
                ? "col-span-2 row-span-2"
                : isTall
                ? "col-span-1 row-span-2"
                : isWide
                ? "col-span-2 row-span-1"
                : "col-span-1 row-span-1"

              return (
                <StaggerItem key={cat.id} className={gridClass}>
                  <Link
                    href={`/menu/${cat.id}`}
                    className={`${cat.bg} relative flex h-full flex-col justify-between overflow-hidden rounded-xl p-6 lg:p-8 group transition-transform duration-300 hover:scale-[1.02]`}
                  >
                    {cat.img && (
                      <div className="absolute inset-0">
                        <Image src={cat.img} alt={cat.name} fill className="object-cover opacity-30" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                    )}

                    <div className="relative z-10">
                      <h2
                        className={`font-serif font-bold ${cat.textColor} ${
                          isXl ? "text-3xl lg:text-4xl" : isTall ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
                        }`}
                      >
                        {cat.name}
                      </h2>
                      <p
                        className={`${cat.subColor} text-sm leading-relaxed mt-2 ${
                          isXl ? "max-w-sm" : isTall ? "max-w-xs" : ""
                        }`}
                      >
                        {cat.desc}
                      </p>
                    </div>

                    <div
                      className={`relative z-10 mt-auto flex items-center gap-2 pt-4 text-sm font-medium ${cat.accentColor} transition-all group-hover:gap-3`}
                    >
                      Смотреть блюда <ArrowRight size={15} />
                    </div>

                    {isXl && (
                      <>
                        <div className="absolute right-0 bottom-0 w-48 h-48 rounded-full border border-brand-gold/10 translate-x-20 translate-y-20 pointer-events-none" />
                        <div className="absolute right-12 bottom-12 w-28 h-28 rounded-full border border-brand-gold/5 pointer-events-none" />
                      </>
                    )}
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </Reveal>
      </section>

      {/* Note */}
      <section className="bg-secondary py-10">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">
            Цены указаны ориентировочно. Полное меню и актуальные цены уточняйте у официанта или по телефону.
          </p>
          <a
            href="tel:+79267915485"
            className="bg-brand-green text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-brand-green-light transition-colors shrink-0"
          >
            Позвонить и уточнить
          </a>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-16 lg:py-20">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-3">Голодны?</p>
            <h2 className="font-serif text-white text-3xl lg:text-4xl font-bold mb-2 text-balance">
              Забронируйте стол и&nbsp;попробуйте лучшее
            </h2>
            <p className="text-white/60 text-base">
              Наш плов, шашлык и манты ждут вас каждый день
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href="tel:+79267915485"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark font-semibold px-7 py-4 text-sm hover:bg-brand-gold-light transition-colors"
            >
              Забронировать <ArrowRight size={15} />
            </a>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-7 py-4 text-sm hover:border-white hover:bg-white/10 transition-colors"
            >
              Как добраться
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
