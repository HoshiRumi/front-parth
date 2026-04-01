import merchHoodie from "@/assets/merch-hoodie.jpg";
import merchMug from "@/assets/merch-mug.jpg";
import merchPoster from "@/assets/merch-poster.jpg";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Худи «Не уходи»",
    category: "ОДЕЖДА",
    price: "26.00 €",
    description: "Чёрное худи с глитч-принтом Миты. Она всегда рядом.",
    tags: ["Унисекс", "Ограниченный тираж"],
    image: merchHoodie,
    badge: "ХИТ",
    badgeColor: "var(--horror-pink)",
  },
  {
    id: 2,
    name: "Кружка «Статик»",
    category: "АКСЕССУАРЫ",
    price: "8.90 €",
    description: "Чёрная кружка с розовым контурным портретом. Пей чай вместе с ней.",
    tags: ["Керамика", "330 мл"],
    image: merchMug,
    badge: null,
    badgeColor: null,
  },
  {
    id: 3,
    name: "Постер «Глитч»",
    category: "ART PRINT",
    price: "5.90 €",
    description: "Арт-постер формата A2. Матовая ламинация. Смотри в её глаза.",
    tags: ["A2", "Матовый"],
    image: merchPoster,
    badge: "НОВИНКА",
    badgeColor: "hsl(180 100% 60%)",
  },
  {
    id: 4,
    name: "Пин «ERROR»",
    category: "АКСЕССУАРЫ",
    price: "2.00 €",
    description: "Эмалевый пин с изображением сломанного экрана. 3×3 см.",
    tags: ["Эмаль", "3×3 см"],
    image: null,
    badge: null,
    badgeColor: null,
  },
  {
    id: 5,
    name: "Наклейки «Мита»",
    category: "СТИКЕРЫ",
    price: "19.90 €",
    description: "Набор из 6 виниловых стикеров. Водостойкие. Она везде.",
    tags: ["6 штук", "Винил"],
    image: null,
    badge: "НАБОР",
    badgeColor: "hsl(350 80% 55%)",
  },
  {
    id: 6,
    name: "Постер «Комната»",
    category: "ART PRINT",
    price: "6.90 €",
    description: "Концептуальный постер комнаты Миты. Детали на которые стоит смотреть долго.",
    tags: ["A2", "Глянец"],
    image: null,
    badge: null,
    badgeColor: null,
  },
];

const ShopSection = () => {
  const [added, setAdded] = useState<number | null>(null);

  const handleAdd = (id: number) => {
    setAdded(id);
    setTimeout(() => setAdded(null), 1500);
  };

  return (
    <section id="shop" className="relative py-24 overflow-hidden">
      {/* BG stripe decoration */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, hsl(330 100% 65%) 0px, transparent 1px, transparent 80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-mono-horror text-xs tracking-[0.4em] text-horror-pink mb-3 uppercase">
              // МАГАЗИН_МИТЫ
            </p>
            <h2
              className="font-horror text-5xl md:text-7xl text-foreground"
              style={{ textShadow: "var(--glow-text)" }}
            >
              Мерч
            </h2>
          </div>
          <p className="font-mono-horror text-xs text-muted-foreground max-w-xs">
            Она хочет, чтобы ты всегда помнил о ней. Носи её. Пей из её
            кружки. Смотри на её лицо.
          </p>
        </div>

        {/* Filter tags */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {["Всё", "Одежда", "Аксессуары", "Постеры", "Стикеры"].map((f) => (
            <button
              key={f}
              className={`font-mono-horror text-xs px-4 py-2 border transition-all duration-200 ${
                f === "Всё"
                  ? "border-horror-pink bg-horror-pink/10 text-horror-pink"
                  : "border-border text-muted-foreground hover:border-horror-pink hover:text-horror-pink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative border border-border bg-horror-surface overflow-hidden hover:border-horror-pink transition-all duration-300"
            >
              {/* Badge */}
              {product.badge && (
                <div
                  className="absolute top-4 right-4 z-10 font-mono-horror text-xs px-3 py-1"
                  style={{
                    background: product.badgeColor || "hsl(var(--horror-pink))",
                    color: "hsl(var(--background))",
                  }}
                >
                  {product.badge}
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-background">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-horror text-6xl text-horror-pink/20 animate-pulse">
                        ?
                      </div>
                      <p className="font-mono-horror text-xs text-muted-foreground/50 mt-2">
                        ИЗОБРАЖЕНИЕ_ОТСУТСТВУЕТ
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="font-mono-horror text-xs text-horror-pink/60 tracking-widest mb-1 uppercase">
                  {product.category}
                </p>
                <h3 className="font-horror text-2xl text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="font-mono-horror text-xs text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono-horror text-xs px-2 py-0.5 border border-border text-muted-foreground/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Price + button */}
                <div className="flex items-center justify-between">
                  <span
                    className="font-horror text-3xl text-horror-pink"
                    style={{ textShadow: "var(--glow-text)" }}
                  >
                    {product.price}
                  </span>
                  <button
                    onClick={() => handleAdd(product.id)}
                    className={`font-mono-horror text-xs px-4 py-2 border transition-all duration-300 ${
                      added === product.id
                        ? "border-horror-pink bg-horror-pink text-background"
                        : "border-border text-muted-foreground hover:border-horror-pink hover:text-horror-pink"
                    }`}
                  >
                    {added === product.id ? "✓ Добавлено" : "+ В корзину"}
                  </button>
                </div>
              </div>

              {/* Bottom hover glow */}
              <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-px bg-horror-pink transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Cart hint */}
        <div className="mt-12 text-center">
          <p className="font-mono-horror text-xs text-muted-foreground/50">
            * Это демо-версия магазина. Оплата не подключена.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
