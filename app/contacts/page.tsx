import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { YandexOrgMap } from "@/components/contacts/yandex-org-map"
import { YandexReviews } from "@/components/contacts/yandex-reviews"
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal"
import { Phone, MapPin, Clock, Instagram, ExternalLink } from "lucide-react"

export default function ContactsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="pt-32 pb-12 bg-brand-green">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-3">Свяжитесь с нами</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white text-balance">Контакты</h1>
          <p className="text-white/60 text-lg mt-4 max-w-xl">
            Ждём вас каждый день. Звоните для бронирования столов и организации мероприятий.
          </p>
        </Reveal>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <StaggerGroup className="flex flex-col gap-8">
              <StaggerItem>
                <div className="bg-secondary rounded-xl p-7 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-white" />
                    </div>
                    <h2 className="text-foreground text-lg font-semibold tracking-[-0.01em]">Телефон</h2>
                  </div>
                  <a
                    href="tel:+79267915485"
                    className="text-2xl font-bold text-brand-green hover:text-brand-green-light transition-colors"
                  >
                    +7 (926) 791-54-85
                  </a>
                  <p className="text-muted-foreground text-sm">
                    Бронирование, вопросы по меню, организация мероприятий
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-secondary rounded-xl p-7 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-white" />
                    </div>
                    <h2 className="text-foreground text-lg font-semibold tracking-[-0.01em]">Адрес</h2>
                  </div>
                  <p className="text-foreground font-medium text-lg">просп. Мира, 119, стр. 60, Москва</p>
                  <p className="text-muted-foreground text-sm">м. ВДНХ — 5 минут пешком через главный вход парка</p>
                  <a
                    href="https://yandex.ru/maps/-/CPu9mX2I"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-green text-sm font-medium hover:text-brand-green-light transition-colors mt-1"
                  >
                    Открыть в Яндекс.Картах
                    <ExternalLink size={13} />
                  </a>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-secondary rounded-xl p-7 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-white" />
                    </div>
                    <h2 className="text-foreground text-lg font-semibold tracking-[-0.01em]">Режим работы</h2>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <span className="text-foreground font-medium">Понедельник — Пятница</span>
                      <span className="text-brand-green font-bold">11:00 — 23:00</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <span className="text-foreground font-medium">Суббота</span>
                      <span className="text-brand-green font-bold">10:00 — 00:00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-medium">Воскресенье</span>
                      <span className="text-brand-green font-bold">10:00 — 00:00</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-brand-green rounded-xl p-7 flex items-center justify-between gap-6">
                  <div>
                    <h2 className="text-white text-lg font-semibold tracking-[-0.01em] mb-1">Мы в Instagram</h2>
                    <p className="text-white/60 text-sm">Следите за новостями и акциями</p>
                  </div>
                  <a
                    href="https://www.instagram.com/dolina.park"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-brand-gold text-brand-green-dark font-semibold px-5 py-3 text-sm hover:bg-brand-gold-light transition-colors shrink-0"
                  >
                    <Instagram size={15} />
                    @dolina.park
                  </a>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </Reveal>

          <StaggerGroup className="flex flex-col gap-5" delayChildren={0.1}>
            <StaggerItem>
              <div>
                <p className="text-brand-gold text-xs uppercase tracking-[0.25em] mb-3">Где нас найти</p>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-balance mb-3">Карта организации</h2>
                <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                  Точный org-widget с маршрутом до входа, контекстом ВДНХ и прямым переходом в карточку ресторана.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <YandexOrgMap />
            </StaggerItem>

            <StaggerItem>
              <YandexReviews />
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-secondary py-14 lg:py-16">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-8">
            <p className="text-brand-gold text-xs uppercase tracking-[0.25em] mb-2">Навигация</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold">Как добраться</h2>
          </div>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="bg-card rounded-xl p-6 border border-border flex h-full flex-col gap-2">
                <div className="w-8 h-px bg-brand-gold mb-2" />
                <h3 className="text-foreground font-semibold text-base">На метро</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Станция «ВДНХ» (Калужско-Рижская линия). Выход из метро, пройти через главный вход ВДНХ прямо —
                  около 5–7 минут пешком.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-card rounded-xl p-6 border border-border flex h-full flex-col gap-2">
                <div className="w-8 h-px bg-brand-gold mb-2" />
                <h3 className="text-foreground font-semibold text-base">На автомобиле</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Въезд на ВДНХ через главные ворота с Проспекта Мира. Парковка на территории парка. Адрес для
                  навигатора: Проспект Мира 119, стр. 60.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-card rounded-xl p-6 border border-border flex h-full flex-col gap-2">
                <div className="w-8 h-px bg-brand-gold mb-2" />
                <h3 className="text-foreground font-semibold text-base">Ориентир</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Исторический полукруглый павильон с колоннадой и куполом. Вывеска «Чайхана Долина» хорошо видна с
                  центральной аллеи ВДНХ.
                </p>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </Reveal>
      </section>

      <section className="bg-foreground py-16 lg:py-20">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-3">Бронирование</p>
          <h2 className="font-serif text-white text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Забронируйте стол прямо сейчас
          </h2>
          <p className="text-white/60 text-base max-w-lg mx-auto mb-8">
            Для бронирования позвоните нам или напишите в Instagram. Мы поможем подобрать лучший столик для вашего
            визита.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+79267915485"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark font-semibold px-8 py-4 text-sm hover:bg-brand-gold-light transition-colors"
            >
              <Phone size={16} />
              Позвонить
            </a>
            <a
              href="https://www.instagram.com/dolina.park"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-8 py-4 text-sm hover:border-white hover:bg-white/10 transition-colors"
            >
              <Instagram size={16} />
              Написать в Instagram
            </a>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
