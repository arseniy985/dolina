import Link from "next/link"
import { ArrowRight, ExternalLink, MessageSquareQuote, MapPinned } from "lucide-react"

export function ReviewsTeaser() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.95fr]">
          <div className="rounded-xl bg-brand-green px-7 py-8 text-white shadow-[0_25px_55px_-35px_rgba(15,58,28,0.75)] lg:px-10 lg:py-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-brand-gold">
              <MessageSquareQuote size={14} />
              Отзывы гостей
            </div>
            <h2 className="font-serif text-3xl font-bold leading-tight text-balance lg:text-4xl">
              Смотрите, как нас оценивают на Яндекс Картах
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/72">
              Без витринных цитат и придуманных рейтингов. Только живая карточка ресторана, актуальная карта и
              реальные отзывы гостей.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contacts#reviews"
                className="inline-flex items-center gap-2 rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-green-dark transition-colors hover:bg-brand-gold-light"
              >
                Открыть отзывы
                <ArrowRight size={15} />
              </Link>
              <a
                href="https://yandex.ru/maps/org/chaykhana_dolina/154766066455/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-white/24 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/8"
              >
                Карточка организации
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-xl border border-border bg-secondary p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-green text-white">
                <MapPinned size={18} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">Навигация</p>
              <p className="mt-2 font-serif text-2xl font-bold text-foreground">Карта организации</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                На странице контактов уже есть полноценный org-widget с точной точкой входа и быстрым переходом в Яндекс.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold">Прозрачность</p>
              <p className="mt-2 font-serif text-2xl font-bold text-foreground">Реальные мнения гостей</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Виджет с отзывами встроен без искусственных KPI, чтобы страница выглядела убедительно, а не рекламно.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
