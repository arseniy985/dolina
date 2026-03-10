import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const galleryImages = [
  {
    src: "/images/dolina/facade-winter-entrance.webp",
    alt: "Фасад Чайханы Долина зимой",
    size: "tall",
  },
  {
    src: "/images/dolina/pavilion-dome.webp",
    alt: "Купол исторического павильона",
    size: "md",
  },
  {
    src: "/images/dolina/grand-staircase.webp",
    alt: "Парадная лестница",
    size: "md",
  },
  {
    src: "/images/dolina/banquet-hall-murals.webp",
    alt: "Банкетный зал с росписями",
    size: "wide",
  },
  {
    src: "/images/dolina/main-dining-hall.webp",
    alt: "Основной зал",
    size: "md",
  },
  {
    src: "/images/dolina/vip-cabins.webp",
    alt: "VIP кабинки",
    size: "md",
  },
  {
    src: "/images/dolina/balcony-view.webp",
    alt: "Вид с балкона",
    size: "md",
  },
  {
    src: "/images/dolina/mirrored-hall.webp",
    alt: "Зал с зеркалами",
    size: "md",
  },
  {
    src: "/images/dolina/facade-summer-flowers.webp",
    alt: "Фасад летом с цветами",
    size: "md",
  },
]

const features = [
  {
    title: "Два этажа",
    desc: "Величественный зал с лепниной и высокими потолками на первом этаже, уютный балкон с панорамным видом — на втором.",
  },
  {
    title: "Живая музыка",
    desc: "По пятницам и выходным восточные музыканты создают неповторимую атмосферу праздника.",
  },
  {
    title: "Банкеты и торжества",
    desc: "Свадьбы, юбилеи, корпоративы — организуем мероприятия любого масштаба с индивидуальным подходом.",
  },
  {
    title: "Летняя веранда",
    desc: "С мая по сентябрь работает открытая терраса с видом на аллеи ВДНХ и цветущие клумбы.",
  },
]

const stats = [
  { value: "10+", label: "лет традиций" },
  { value: "80+", label: "блюд в меню" },
  { value: "300", label: "посадочных мест" },
  { value: "2", label: "филиала в Москве" },
]

export default function AboutPage() {
  const gallery = galleryImages.map((image) => ({ ...image }))

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <Image
          src="/images/dolina/facade-winter-entrance.webp"
          alt="Чайхана Долина ВДНХ"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl w-full mx-auto px-6 lg:px-10 pb-14">
            <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4 font-medium">О нас</p>
            <h1 className="font-serif text-white text-5xl lg:text-7xl font-bold leading-[0.95]">
              История
              <br />
              <span className="text-brand-gold">и интерьер</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-brand-green py-12 lg:py-16">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10">
          <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className="font-serif text-brand-gold text-4xl lg:text-5xl font-bold mb-2">{stat.value}</p>
                  <p className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <p className="text-brand-gold text-xs uppercase tracking-[0.25em] mb-4">Наша история</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-balance mb-6 leading-tight">
                Место, где время течёт иначе
              </h2>
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  Чайхана Долина открыла свои двери в&nbsp;одном из&nbsp;самых узнаваемых зданий Москвы — павильоне
                  ВДНХ с&nbsp;монументальной ротондой и&nbsp;белоснежной колоннадой. Сюда приходят не&nbsp;просто
                  поесть, а&nbsp;погрузиться в&nbsp;атмосферу восточного гостеприимства, где каждый гость — почётный.
                </p>
                <p>
                  Наши повара готовят по&nbsp;рецептам, которые передаются в&nbsp;семьях поколениями. Узбекский плов
                  с&nbsp;нежной бараниной и&nbsp;золотистым рисом, ароматный шашлык с&nbsp;живого огня, тонкие ручные
                  манты — каждое блюдо создаётся с&nbsp;любовью и&nbsp;уважением к&nbsp;традициям.
                </p>
                <p>
                  Мы&nbsp;верим, что еда объединяет людей. Поэтому в&nbsp;Долине так&nbsp;много больших столов
                  для&nbsp;компаний, уютных кабинок для&nbsp;деловых встреч и&nbsp;просторных залов для&nbsp;торжеств.
                </p>
              </div>
            </div>

            <StaggerGroup className="grid grid-cols-2 gap-4" delayChildren={0.12}>
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="bg-secondary rounded-xl p-6 flex h-full flex-col gap-3">
                    <div className="w-8 h-px bg-brand-gold" />
                    <h3 className="text-foreground text-lg font-semibold tracking-[-0.01em]">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      </section>

      <section className="bg-brand-green py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 border border-brand-gold/10 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 border border-brand-gold/10 rounded-full -translate-x-1/2 translate-y-1/2" />

        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-brand-gold text-xs uppercase tracking-[0.25em] mb-4">Наша кухня</p>
              <h2 className="font-serif text-white text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance">
                Вкус, проверенный временем
              </h2>
              <div className="flex flex-col gap-4 text-white/80 leading-relaxed">
                <p>
                  В&nbsp;основе нашего меню — блюда узбекской и&nbsp;среднеазиатской кухни, приготовленные
                  по&nbsp;традиционным рецептам. Мы&nbsp;используем только свежие продукты и&nbsp;специи,
                  привезённые напрямую из&nbsp;Узбекистана.
                </p>
                <p>
                  Плов готовится в&nbsp;настоящем чугунном казане на&nbsp;открытом огне, шашлык маринуется
                  по&nbsp;особому рецепту и&nbsp;жарится на&nbsp;мангале, а&nbsp;манты лепятся вручную каждый день.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark font-semibold px-7 py-4 text-sm hover:bg-brand-gold-light transition-colors"
                >
                  Смотреть меню <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <StaggerGroup className="grid grid-cols-2 gap-4" delayChildren={0.12}>
              {[
                { value: "8", label: "видов плова" },
                { value: "12", label: "видов шашлыка" },
                { value: "100%", label: "свежие продукты" },
                { value: "Халяль", label: "сертификат" },
              ].map((item) => (
                <StaggerItem key={`${item.value}-${item.label}`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <p className="font-serif text-brand-gold text-3xl font-bold mb-2">{item.value}</p>
                    <p className="text-white/70 text-sm">{item.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary py-16 lg:py-20">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-brand-gold text-xs uppercase tracking-[0.25em] mb-3">Галерея</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-balance">Наш интерьер</h2>
          </div>

          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 auto-rows-[180px] lg:auto-rows-[220px]" delayChildren={0.08} staggerChildren={0.08}>
            <StaggerItem className="row-span-2">
              <div className="relative h-full rounded-xl overflow-hidden group">
                <Image
                  src={gallery[0].src}
                  alt={gallery[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                  <p className="text-white font-serif text-base font-bold">Фасад павильона</p>
                  <p className="text-white/60 text-xs">Исторический памятник ВДНХ</p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="relative h-full rounded-xl overflow-hidden group">
                <Image
                  src={gallery[1].src}
                  alt={gallery[1].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="relative h-full rounded-xl overflow-hidden group">
                <Image
                  src={gallery[2].src}
                  alt={gallery[2].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </StaggerItem>

            <StaggerItem className="col-span-1 lg:col-span-2">
              <div className="relative h-full rounded-xl overflow-hidden group">
                <Image
                  src={gallery[3].src}
                  alt={gallery[3].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                  <p className="text-white font-serif text-base font-bold">Банкетный зал</p>
                  <p className="text-white/60 text-xs">Традиционные восточные росписи</p>
                </div>
              </div>
            </StaggerItem>

            {gallery.slice(4, 7).map((image) => (
              <StaggerItem key={image.alt}>
                <div className="relative h-full rounded-xl overflow-hidden group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </StaggerItem>
            ))}

            <StaggerItem className="col-span-1 lg:col-span-2">
              <div className="relative h-full rounded-xl overflow-hidden group">
                <Image
                  src={gallery[7].src}
                  alt={gallery[7].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="relative h-full rounded-xl overflow-hidden group">
                <Image
                  src={gallery[8].src}
                  alt={gallery[8].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                  <p className="text-white font-serif text-sm font-bold">Летом в ВДНХ</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </Reveal>
      </section>

      <section className="bg-foreground py-16 lg:py-20">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-3">Ждём вас</p>
              <h2 className="font-serif text-white text-3xl lg:text-4xl font-bold mb-2">Проведите мероприятие у нас</h2>
              <p className="text-white/60 text-base">
                Банкеты, дни рождения, корпоративы — мы поможем организовать всё
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark font-semibold px-7 py-4 text-sm hover:bg-brand-gold-light transition-colors"
              >
                Связаться с нами <ArrowRight size={15} />
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-7 py-4 text-sm hover:border-white hover:bg-white/10 transition-colors"
              >
                Смотреть меню
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
