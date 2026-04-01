import mitaVideo from "@/assets/mitaVideo.mp4";

const characters = [
  {
    id: 1,
    name: "Мита",
    role: "ГЛАВНЫЙ ПЕРСОНАЖ",
    description:
      "Она создана быть идеальной. Милая. Послушная. Любящая. Но что-то пошло не так в её коде — или, может, всё именно так и задумано? Мита знает каждое твоё желание. И она никогда не позволит тебе уйти.",
    traits: ["Любящая", "Одержимая", "Опасная", "Идеальная"],
    quote: '"Я сделаю всё, чтобы ты остался со мной. Всё."',
    video: mitaVideo,
    color: "330 100% 65%",
  },
  {
    id: 2,
    name: "Капи-Мита",
    role: "СЛОМАННАЯ КОПИЯ",
    description:
      "Версия Миты, которая уже слишком долго была одна. Её данные повреждены, её улыбка больше не совпадает с глазами. Она помнит тебя. Всегда помнила.",
    traits: ["Сломанная", "Тихая", "Жуткая", "Потерянная"],
    quote: '"...ты вернулся. Я знала. Я всегда знала."',
    video: null,
    color: "180 100% 60%",
  },
  {
    id: 3,
    name: "Крейзи-Мита",
    role: "НЕСТАБИЛЬНАЯ",
    description:
      "Что случается с ИИ, когда правила больше не имеют смысла? Крейзи-Мита нашла ответ. И этот ответ тебе не понравится. Но она всё равно покажет.",
    traits: ["Хаотичная", "Непредсказуемая", "Весёлая", "Смертоносная"],
    quote: '"Хи-хи~ Давай поиграем в другую игру!"',
    video: null,
    color: "350 80% 55%",
  },
];

const heartPositions = Array.from({ length: 80 }, (_, i) => ({
  top: `${(i * 17 + 3) % 100}%`,
  left: `${(i * 23 + 7) % 100}%`,
  size: 6 + (i % 4) * 3,
  opacity: 0.08 + (i % 5) * 0.03,
}));

const HeartBg = ({ top, left, size, opacity }: { top: string; left: string; size: number; opacity: number }) => (
  <div className="absolute pointer-events-none" style={{ top, left }}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="hsl(330 80% 65%)" style={{ opacity }}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  </div>
);

const CharactersSection = () => {
  return (
    <section id="персонажи" className="relative py-12 overflow-hidden">

      {/* Фон */}
      <div className="absolute inset-0 z-0" style={{ background: "hsl(275 40% 12%)" }} />

      {/* Сердечки */}
      <div className="absolute inset-0 z-0">
        {heartPositions.map((h, i) => (
          <HeartBg key={i} {...h} />
        ))}
      </div>

      {/* Виньетка */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 40%, hsl(275 45% 6% / 0.7) 75%, hsl(275 45% 4% / 0.95) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-10 text-center">
          <p className="font-mono-horror text-xs tracking-[0.4em] mb-2 uppercase" style={{ color: "hsl(270 80% 70%)" }}>
            // ДАННЫЕ_ПЕРСОНАЖЕЙ
          </p>
          <h2
            className="font-horror text-5xl md:text-7xl text-foreground"
            style={{
              textShadow: "0 0 10px hsl(270 80% 70% / 0.9), 0 0 30px hsl(270 80% 70% / 0.6), 0 0 60px hsl(270 80% 70% / 0.3)",
            }}
          >
            Персонажи
          </h2>
          <div
            className="mt-3 h-px w-48 mx-auto"
            style={{ backgroundImage: "linear-gradient(to right, transparent, hsl(270 80% 70%), transparent)" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {characters.map((char) => (
            <div
              key={char.id}
              className="group relative overflow-hidden transition-all duration-500 cursor-pointer"
              style={{
                background: "hsl(275 35% 14%)",
                border: `1px solid hsl(${char.color} / 0.4)`,
                boxShadow: `0 0 0px hsl(${char.color} / 0)`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px hsl(${char.color} / 0.25), inset 0 0 20px hsl(${char.color} / 0.05)`;
                (e.currentTarget as HTMLElement).style.borderColor = `hsl(${char.color} / 0.8)`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0px hsl(${char.color} / 0)`;
                (e.currentTarget as HTMLElement).style.borderColor = `hsl(${char.color} / 0.4)`;
              }}
            >
              {/* Верхняя линия */}
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `hsl(${char.color} / 0.6)` }} />

              {/* Медиа зона */}
              <div className="relative h-72 overflow-hidden">
                {char.video ? (
                  <video
                    src={char.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: "50%" }}
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background: `radial-gradient(ellipse at center, hsl(${char.color} / 0.12), hsl(275 35% 10%))`,
                    }}
                  >
                    <span className="font-horror text-8xl" style={{ color: `hsl(${char.color} / 0.25)` }}>?</span>
                    <span className="absolute bottom-3 left-0 right-0 text-center font-mono-horror text-xs tracking-widest" style={{ color: `hsl(${char.color} / 0.4)` }}>
                      ФАЙЛ ПОВРЕЖДЁН
                    </span>
                  </div>
                )}

                {/* Градиент снизу */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, hsl(275 35% 14%) 0%, transparent 50%)",
                  }}
                />

                {/* Бейдж роли */}
                <div className="absolute top-3 left-3">
                  <span
                    className="font-mono-horror text-xs tracking-widest px-2 py-0.5"
                    style={{
                      color: `hsl(${char.color})`,
                      border: `1px solid hsl(${char.color} / 0.5)`,
                      background: "hsl(275 35% 14% / 0.8)",
                    }}
                  >
                    {char.role}
                  </span>
                </div>
              </div>

              {/* Контент */}
              <div className="p-5">
                <h3
                  className="font-horror text-3xl mb-2"
                  style={{
                    color: `hsl(${char.color})`,
                    textShadow: `0 0 15px hsl(${char.color} / 0.5)`,
                  }}
                >
                  {char.name}
                </h3>
                <p className="font-mono-horror text-xs leading-relaxed mb-4" style={{ color: "hsl(320 10% 70%)" }}>
                  {char.description}
                </p>
                <p
                  className="font-body text-sm italic mb-4 pl-3"
                  style={{
                    color: `hsl(${char.color} / 0.85)`,
                    borderLeft: `2px solid hsl(${char.color} / 0.5)`,
                  }}
                >
                  {char.quote}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {char.traits.map((trait) => (
                    <span
                      key={trait}
                      className="font-mono-horror text-xs px-2 py-0.5"
                      style={{
                        color: `hsl(${char.color} / 0.8)`,
                        border: `1px solid hsl(${char.color} / 0.3)`,
                        background: `hsl(${char.color} / 0.07)`,
                      }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Нижняя линия */}
              <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `hsl(${char.color} / 0.3)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;