const mapLinks = [
  {
    href: "https://yandex.ru/maps/org/chaykhana_dolina/154766066455/?utm_medium=mapframe&utm_source=maps",
    label: "Чайхана Долина",
  },
  {
    href: "https://yandex.ru/maps/213/moscow/category/cafe/184106390/?utm_medium=mapframe&utm_source=maps",
    label: "Кафе в Москве",
  },
  {
    href: "https://yandex.ru/maps/213/moscow/category/banquet_hall/184108315/?utm_medium=mapframe&utm_source=maps",
    label: "Банкетный зал в Москве",
  },
]

export function YandexOrgMap() {
  return (
    <div className="rounded-xl border border-border bg-card p-3 shadow-[0_18px_45px_-32px_rgba(15,58,28,0.45)]">
      <div className="mb-3 flex flex-wrap gap-2">
        {mapLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:text-brand-green"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl">
        <iframe
          src="https://yandex.ru/map-widget/v1/org/chaykhana_dolina/154766066455/?from=mapframe&ll=37.628110%2C55.833916&z=17"
          width="100%"
          height="420"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          title="Чайхана Долина на Яндекс Картах"
          className="block min-h-[320px] w-full"
        />
      </div>
    </div>
  )
}
