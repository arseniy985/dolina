export function YandexReviews() {
  return (
    <div
      id="reviews"
      className="rounded-xl border border-border bg-card p-3 shadow-[0_18px_45px_-32px_rgba(15,58,28,0.45)] scroll-mt-28"
    >
      <div className="mb-3 flex items-center justify-between gap-4 px-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-brand-gold">Отзывы гостей</p>
          <p className="mt-1 text-sm text-muted-foreground">Живые комментарии и оценки из карточки организации.</p>
        </div>
        <a
          href="https://yandex.ru/maps/org/chaykhana_dolina/154766066455/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 text-sm font-medium text-brand-green transition-colors hover:text-brand-green-light sm:inline-flex"
        >
          Открыть в Яндексе
        </a>
      </div>

      <div className="relative overflow-hidden rounded-xl">
        <iframe
          src="https://yandex.ru/maps-reviews-widget/154766066455?comments"
          title="Отзывы о Чайхане Долина"
          loading="lazy"
          className="h-[520px] w-full rounded-xl border border-border"
        />
        <a
          href="https://yandex.ru/maps/org/chaykhana_dolina/154766066455/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-x-0 bottom-2 mx-4 truncate rounded-full bg-white/92 px-4 py-2 text-center text-[11px] text-muted-foreground shadow-sm backdrop-blur-sm transition-colors hover:text-brand-green"
        >
          Чайхана Долина на карте Москвы — Яндекс Карты
        </a>
      </div>
    </div>
  )
}
