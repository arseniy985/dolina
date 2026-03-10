import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { notFound } from "next/navigation"

// Menu items data by category
const menuData: Record<
  string,
  {
    name: string
    desc: string
    items: { name: string; desc?: string; price: string; weight?: string }[]
  }
> = {
  plov: {
    name: "Плов",
    desc: "Несколько видов настоящего узбекского плова, приготовленного на открытом огне",
    items: [
      { name: "Плов по-фергански", desc: "С бараниной, нутом и зирой", price: "690 ₽", weight: "350 г" },
      { name: "Плов с курицей", desc: "Нежное куриное филе с рисом девзира", price: "590 ₽", weight: "350 г" },
      { name: "Плов с изюмом и нутом", desc: "Вегетарианский вариант", price: "550 ₽", weight: "350 г" },
      { name: "Плов праздничный", desc: "С бараниной, айвой и сухофруктами", price: "790 ₽", weight: "400 г" },
      { name: "Плов с говядиной", desc: "Классический рецепт с говяжьей вырезкой", price: "720 ₽", weight: "350 г" },
    ],
  },
  shashlyk: {
    name: "Шашлык",
    desc: "Отборное мясо на мангале каждый день",
    items: [
      { name: "Шашлык из баранины", desc: "Маринад на кефире с луком", price: "820 ₽", weight: "200 г" },
      { name: "Шашлык из говядины", desc: "Мраморная говядина на углях", price: "780 ₽", weight: "200 г" },
      { name: "Шашлык из курицы", desc: "Куриное бедро в пряностях", price: "550 ₽", weight: "200 г" },
      { name: "Люля-кебаб из баранины", desc: "Рубленое мясо с зеленью", price: "690 ₽", weight: "180 г" },
      { name: "Люля-кебаб из говядины", desc: "С курдючным салом", price: "650 ₽", weight: "180 г" },
      { name: "Шашлык из печени", desc: "Куриная печень в беконе", price: "490 ₽", weight: "150 г" },
      { name: "Рёбрышки ягнёнка", desc: "Томлёные на углях", price: "950 ₽", weight: "250 г" },
    ],
  },
  manty: {
    name: "Манты",
    desc: "Приготовлено на пару по традиционным рецептам",
    items: [
      { name: "Манты с бараниной", desc: "С луком и курдюком", price: "520 ₽", weight: "250 г (5 шт)" },
      { name: "Манты с тыквой", desc: "Вегетарианские, сладковатые", price: "480 ₽", weight: "250 г (5 шт)" },
      { name: "Манты с картофелем", desc: "С луком и зеленью", price: "460 ₽", weight: "250 г (5 шт)" },
      { name: "Манты с говядиной", desc: "Сочная начинка с луком", price: "510 ₽", weight: "250 г (5 шт)" },
    ],
  },
  salads: {
    name: "Салаты",
    desc: "Свежие овощи и восточные заправки",
    items: [
      { name: "Салат Ачичук", desc: "Помидоры, огурцы, лук, базилик", price: "350 ₽", weight: "200 г" },
      { name: "Морковь по-корейски", desc: "Острая морковь с кунжутом", price: "320 ₽", weight: "150 г" },
      { name: "Салат Ташкентский", desc: "Редька, говядина, яйцо", price: "450 ₽", weight: "220 г" },
      { name: "Салат из свежих овощей", desc: "Микс сезонных овощей", price: "330 ₽", weight: "200 г" },
      { name: "Салат с языком", desc: "Говяжий язык, овощи, майонез", price: "520 ₽", weight: "200 г" },
    ],
  },
  soups: {
    name: "Супы",
    desc: "Наваристые бульоны и традиционные супы",
    items: [
      { name: "Шурпа из баранины", desc: "Густой бульон с овощами", price: "490 ₽", weight: "350 мл" },
      { name: "Лагман", desc: "Лапша с мясом и овощами", price: "510 ₽", weight: "400 мл" },
      { name: "Мастава", desc: "Рисовый суп с бараниной", price: "450 ₽", weight: "350 мл" },
      { name: "Чучвара", desc: "Пельмени в бульоне", price: "480 ₽", weight: "350 мл" },
      { name: "Шурпа из говядины", desc: "С картофелем и болгарским перцем", price: "470 ₽", weight: "350 мл" },
    ],
  },
  hot: {
    name: "Горячие блюда",
    desc: "Традиционные горячие блюда восточной кухни",
    items: [
      { name: "Димлама", desc: "Тушёные овощи с бараниной", price: "680 ₽", weight: "350 г" },
      { name: "Дамлама с курицей", desc: "Курица с овощами в казане", price: "620 ₽", weight: "350 г" },
      { name: "Самса с мясом", desc: "Слоёное тесто с бараниной (3 шт)", price: "450 ₽", weight: "180 г" },
      { name: "Самса с курицей", desc: "Нежная начинка (3 шт)", price: "420 ₽", weight: "180 г" },
      { name: "Нарын", desc: "Отварное мясо с домашней лапшой", price: "550 ₽", weight: "300 г" },
      { name: "Казан-кабоб", desc: "Мясо с картофелем в казане", price: "720 ₽", weight: "350 г" },
    ],
  },
  drinks: {
    name: "Напитки и чай",
    desc: "Чай, компоты, свежевыжатые соки",
    items: [
      { name: "Зелёный чай (чайник)", desc: "Узбекский зелёный чай", price: "280 ₽", weight: "600 мл" },
      { name: "Чёрный чай с мятой", desc: "Ароматный чай с травами", price: "290 ₽", weight: "600 мл" },
      { name: "Компот из сухофруктов", desc: "Домашний, из кураги и изюма", price: "220 ₽", weight: "300 мл" },
      { name: "Свежевыжатый апельсиновый", desc: "Из свежих апельсинов", price: "380 ₽", weight: "250 мл" },
      { name: "Свежевыжатый морковный", desc: "Со сливками", price: "350 ₽", weight: "250 мл" },
      { name: "Айран", desc: "Кисломолочный напиток", price: "180 ₽", weight: "250 мл" },
      { name: "Тан", desc: "С зеленью и солью", price: "190 ₽", weight: "250 мл" },
    ],
  },
  desserts: {
    name: "Десерты",
    desc: "Восточные сладости и выпечка",
    items: [
      { name: "Чак-чак", desc: "Традиционная медовая сладость", price: "350 ₽", weight: "150 г" },
      { name: "Пахлава", desc: "Слоёное тесто с орехами и мёдом", price: "380 ₽", weight: "120 г" },
      { name: "Нават", desc: "Кристаллический сахар к чаю", price: "120 ₽", weight: "100 г" },
      { name: "Халва узбекская", desc: "Подсолнечная, домашняя", price: "280 ₽", weight: "100 г" },
      { name: "Курага в шоколаде", desc: "С грецким орехом внутри", price: "320 ₽", weight: "100 г" },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(menuData).map((category) => ({ category }))
}

export default async function MenuCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const data = menuData[category]

  if (!data) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-10 bg-background border-b border-border">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-brand-green text-sm font-medium mb-6 hover:gap-3 transition-all"
          >
            <ChevronLeft size={16} />
            Все категории
          </Link>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground text-balance">{data.name}</h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl">{data.desc}</p>
        </Reveal>
      </section>

      {/* Dishes list */}
      <section className="bg-background py-12 lg:py-16 flex-1">
        <Reveal className="max-w-4xl mx-auto px-6 lg:px-10">
          <StaggerGroup className="flex flex-col" delayChildren={0.05} staggerChildren={0.06}>
            {data.items.map((item, idx) => (
              <StaggerItem key={item.name}>
                <div
                  className={`flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-8 py-6 ${
                    idx !== data.items.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex-1">
                    <h3 className="text-foreground text-lg font-semibold tracking-[-0.01em]">{item.name}</h3>
                    {item.desc && <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>}
                    {item.weight && <p className="text-muted-foreground/60 text-xs mt-1">{item.weight}</p>}
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="text-brand-green font-semibold text-lg">{item.price}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>
      </section>

      {/* Note */}
      <section className="bg-secondary py-10">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">* Цены указаны ориентировочно. Уточняйте у официанта.</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="border border-brand-green text-brand-green text-sm font-medium px-6 py-3 rounded-sm hover:bg-brand-green hover:text-white transition-colors"
            >
              Все категории
            </Link>
            <a
              href="tel:+79267915485"
              className="bg-brand-green text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-brand-green-light transition-colors"
            >
              Позвонить
            </a>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
