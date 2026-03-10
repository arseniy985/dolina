import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ReviewsTeaser } from "@/components/home/reviews-teaser"
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal"
import Link from "next/link"
import { ArrowRight, MapPin, Phone, Clock, ChevronRight } from "lucide-react"
import Image from "next/image"

const highlights = [
  { label: "Восточный интерьер", desc: "Две площадки в историческом павильоне ВДНХ" },
  { label: "Кухня Средней Азии", desc: "Плов, манты, шашлык и многое другое" },
  { label: "Живая музыка", desc: "Вечерние выступления в выходные дни" },
  { label: "Парковка", desc: "Бесплатная парковка рядом с ВДНХ" },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/outside-bBx2u84wX0SxMoVK7XjjZMzyi1FZBd.webp"
            alt="Чайхана Долина — вход, ВДНХ"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28 pt-40">
            <div className="max-w-2xl">
              <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-6 font-medium">ВДНХ · Москва</p>
              <h1 className="font-serif text-white text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
                Чайхана
                <br />
                <span className="text-brand-gold">Долина</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                Тепло, вкус и традиции Средней Азии в&nbsp;сердце Москвы&nbsp;— в&nbsp;историческом павильоне ВДНХ.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-3 bg-brand-gold text-brand-green-dark font-semibold px-8 py-4 text-sm hover:bg-brand-gold-light transition-colors"
                >
                  Смотреть меню
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contacts"
                  className="inline-flex items-center gap-2 border border-white/50 text-white font-medium px-8 py-4 text-sm hover:border-white hover:bg-white/10 transition-colors"
                >
                  Забронировать стол
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/15 bg-black/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-wrap items-center gap-x-8 gap-y-2 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>м. ВДНХ, проспект Мира 119/60</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <a href="tel:+79267915485" className="hover:text-white transition-colors">
                  +7 (926) 791-54-85
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>Пн–Пт 11:00–23:00, Сб–Вс 10:00–00:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-brand-gold text-xs uppercase tracking-[0.25em] mb-2">Что мы предлагаем</p>
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground font-bold text-balance">
                Вкус Востока
                <br />в каждом блюде
              </h2>
            </div>
            <Link
              href="/menu"
              className="hidden md:flex items-center gap-1.5 text-brand-green text-sm font-medium hover:gap-3 transition-all"
            >
              Всё меню <ChevronRight size={16} />
            </Link>
          </div>

          <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 auto-rows-[180px] lg:auto-rows-[200px]">
            <StaggerItem className="col-span-2 row-span-2">
              <Link
                href="/menu"
                className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-brand-green p-8 group"
              >
                <div>
                  <p className="text-brand-gold text-xs uppercase tracking-[0.2em] mb-3">Наше меню</p>
                  <h3 className="font-serif text-white text-3xl lg:text-4xl font-bold leading-tight mb-2">
                    Более 80 блюд восточной кухни
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mt-2">
                    Плов, шашлык, манты, люля-кебаб, салаты и многое другое
                  </p>
                </div>
                <div className="flex items-center gap-2 text-brand-gold text-sm font-medium group-hover:gap-4 transition-all">
                  Открыть меню <ArrowRight size={15} />
                </div>
                <div className="absolute right-0 bottom-0 w-40 h-40 rounded-full border border-brand-gold/20 translate-x-16 translate-y-16" />
                <div className="absolute right-8 bottom-8 w-24 h-24 rounded-full border border-brand-gold/10" />
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link
                href="/menu/plov"
                className="flex h-full flex-col justify-between rounded-xl bg-secondary p-6 group transition-colors duration-300 hover:bg-brand-green"
              >
                <p className="text-foreground text-xl font-semibold group-hover:text-white transition-colors">Плов</p>
                <div>
                  <p className="text-muted-foreground text-xs group-hover:text-white/60 transition-colors mb-2">
                    Несколько видов
                  </p>
                  <div className="flex items-center gap-1 text-brand-green text-xs font-medium group-hover:text-brand-gold transition-colors">
                    Подробнее <ChevronRight size={12} />
                  </div>
                </div>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link
                href="/menu/shashlyk"
                className="flex h-full flex-col justify-between rounded-xl bg-secondary p-6 group transition-colors duration-300 hover:bg-brand-green"
              >
                <p className="text-foreground text-xl font-semibold group-hover:text-white transition-colors">Шашлык</p>
                <div>
                  <p className="text-muted-foreground text-xs group-hover:text-white/60 transition-colors mb-2">
                    На мангале ежедневно
                  </p>
                  <div className="flex items-center gap-1 text-brand-green text-xs font-medium group-hover:text-brand-gold transition-colors">
                    Подробнее <ChevronRight size={12} />
                  </div>
                </div>
              </Link>
            </StaggerItem>

            <StaggerItem className="col-span-2">
              <Link href="/about" className="relative block h-full overflow-hidden rounded-xl group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inside4-0dBjYmapDM71VQWNDnxlsWDrlwV99x.webp"
                  alt="Интерьер Чайханы Долина"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-white font-serif text-lg font-bold">Интерьер</p>
                    <p className="text-white/60 text-xs">Исторический павильон ВДНХ</p>
                  </div>
                  <span className="text-brand-gold group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={18} />
                  </span>
                </div>
              </Link>
            </StaggerItem>

            <StaggerItem className="col-span-2 md:col-span-1">
              <Link
                href="/contacts"
                className="flex h-full flex-col justify-between rounded-xl bg-brand-gold p-6 group transition-colors duration-300 hover:bg-brand-gold-light"
              >
                <p className="font-serif text-brand-green-dark text-xl font-bold">Банкеты и мероприятия</p>
                <div className="flex items-center gap-1 text-brand-green-dark text-xs font-medium group-hover:gap-2 transition-all">
                  Связаться с нами <ChevronRight size={12} />
                </div>
              </Link>
            </StaggerItem>

            <StaggerItem className="col-span-2 md:col-span-1">
              <Link href="/about" className="relative block h-full overflow-hidden rounded-xl group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inside3-2cACH9z2gpZ469IupHqzSyZmzp0aMo.webp"
                  alt="Залы Чайханы Долина"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <p className="text-white font-serif text-lg font-bold">Залы</p>
                  <p className="text-white/60 text-xs">2 этажа и банкетные кабинки</p>
                </div>
              </Link>
            </StaggerItem>
          </StaggerGroup>
        </Reveal>
      </section>

      <section className="bg-brand-green py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border border-brand-gold/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-brand-gold/10 rounded-full" />
        <div className="absolute top-1/2 right-20 w-20 h-20 border border-brand-gold/15 rounded-full -translate-y-1/2" />

        <Reveal className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <div className="w-16 h-px bg-brand-gold mx-auto mb-8" />
          <blockquote className="font-serif text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-balance">
            «Восточное гостеприимство начинается с&nbsp;искренности и&nbsp;заканчивается сытым гостем»
          </blockquote>
          <p className="text-brand-gold text-sm uppercase tracking-[0.25em]">Философия Долины</p>
        </Reveal>
      </section>

      <section className="bg-secondary py-16 lg:py-20">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-brand-gold text-xs uppercase tracking-[0.25em] mb-3">Почему выбирают нас</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-balance">Всё для вашего комфорта</h2>
          </div>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h, i) => (
              <StaggerItem key={h.label}>
                <div className="flex h-full flex-col gap-3 text-center lg:text-left">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto lg:mx-0">
                    <span className="text-brand-green font-serif font-bold text-lg">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-lg mb-1">{h.label}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>
      </section>

      <ReviewsTeaser />

      <section className="bg-background py-16 lg:py-24">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-brand-gold text-xs uppercase tracking-[0.25em] mb-3">Наше пространство</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-balance mb-6 leading-tight">
                Архитектура эпохи,
                <br />дух Востока
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Павильон ВДНХ с монументальной колоннадой и&nbsp;куполом стал домом для Чайханы Долина. Здесь
                классические формы советской архитектуры переплетаются с&nbsp;тёплыми красками и&nbsp;орнаментами
                Средней Азии.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Мы сохранили величие пространства и&nbsp;наполнили его восточным гостеприимством: мягкие диваны,
                живая музыка по&nbsp;вечерам, ароматы свежего плова и&nbsp;шашлыка с&nbsp;мангала.
              </p>
              <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-green" />
                  <span className="text-foreground font-medium">2 этажа</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-green" />
                  <span className="text-foreground font-medium">VIP-кабинки</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-green" />
                  <span className="text-foreground font-medium">Летняя терраса</span>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand-green font-medium text-sm hover:gap-4 transition-all border-b border-brand-green pb-0.5"
              >
                Узнать больше <ArrowRight size={15} />
              </Link>
            </div>

            <StaggerGroup className="grid grid-cols-2 gap-3 h-[400px] lg:h-[480px]" delayChildren={0.12}>
              <StaggerItem className="row-span-2">
                <div className="relative h-full rounded-xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inside-L7QPRo54jJQJGy4Knvbrk62O5FtPkT.webp"
                    alt="Лестница Чайханы Долина"
                    fill
                    className="object-cover"
                  />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="relative h-full rounded-xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inside1-jVc5xFHuB9TQb94MFm6wr7CjpPVSAV.webp"
                    alt="Купол Чайханы Долина"
                    fill
                    className="object-cover"
                  />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="relative h-full rounded-xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/outside6-QH7LFrSRrgMaID6vaTYYJXlH1vuVLe.webp"
                    alt="Фасад летом"
                    fill
                    className="object-cover"
                  />
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </Reveal>
      </section>

      <section className="bg-foreground py-16 lg:py-20">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-3">Ждём вас</p>
              <h2 className="font-serif text-white text-4xl lg:text-5xl font-bold mb-3 text-balance">
                Забронируйте стол заранее
              </h2>
              <p className="text-white/60 text-base max-w-lg">
                Звоните или пишите — мы всегда рады гостям. Проведите мероприятие у нас.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                href="tel:+79267915485"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark font-semibold px-8 py-4 text-sm hover:bg-brand-gold-light transition-colors"
              >
                <Phone size={16} />
                +7 (926) 791-54-85
              </a>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-8 py-4 text-sm hover:border-white hover:bg-white/10 transition-colors"
              >
                Как добраться
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
