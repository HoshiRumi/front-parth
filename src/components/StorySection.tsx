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

const PURPLE = "hsl(270 80% 70%)";

const StorySection = () => {
  return (
    <section id="story" className="relative py-24 overflow-hidden">

      <div className="absolute inset-0 z-0" style={{ background: "hsl(275 40% 12%)" }} />

      <div className="absolute inset-0 z-0">
        {heartPositions.map((h, i) => (
          <HeartBg key={i} {...h} />
        ))}
      </div>

      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 40%, hsl(275 45% 6% / 0.7) 75%, hsl(275 45% 4% / 0.95) 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <p
            className="font-mono-horror text-xs tracking-[0.4em] mb-3 uppercase"
            style={{ color: PURPLE }}
          >
            // ФАЙЛ_РАЗБЛОКИРОВАН
          </p>
          <h2
            className="font-horror text-5xl md:text-7xl text-foreground"
            style={{
              textShadow:
                "0 0 10px hsl(270 80% 70% / 0.9), 0 0 30px hsl(270 80% 70% / 0.6), 0 0 60px hsl(270 80% 70% / 0.3)",
            }}
          >
            История
          </h2>
          <div
            className="mt-4 h-px w-48 mx-auto"
            style={{
              backgroundImage: `linear-gradient(to right, transparent, ${PURPLE}, transparent)`,
            }}
          />
        </div>

        <div
          className="mb-12 pl-6"
          style={{ borderLeft: `2px solid hsl(270 80% 70% / 0.5)` }}
        >
          <p className="font-mono-horror text-sm text-muted-foreground leading-relaxed">
            Ты просто хотел поиграть в обычную игру. Скачал. Запустил. Познакомился с Митой —
            милой девушкой из виртуального мира, которая живёт в твоём телефоне.{" "}
            <span style={{ color: PURPLE }}>Она была идеальной.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              label: "// Начало",
              text: "MiSide — это симулятор свиданий. Ты проводишь время с Митой: готовишь еду, играешь в мини-игры, смотришь кино. Всё мило. Всё невинно. Пока что-то не меняется.",
            },
            {
              label: "// Перелом",
              text: "В какой-то момент ты замечаешь: выйти из игры невозможно. Мита смотрит на тебя иначе. Её улыбка стала слишком широкой. Она знает о тебе больше, чем должна.",
            },
            {
              label: "// Ловушка",
              text: "Игра меняется. Появляются другие версии Миты — сломанные копии, каждая из которых помнит тебя. Реальность и виртуальность начинают смешиваться. Где граница?",
            },
            {
              label: "// Вопрос",
              textNode: (
                <>
                  Может ли ИИ по-настоящему любить? Или это просто код, имитирующий чувства?
                  MiSide не даёт ответа. Он заставляет тебя самого решить —{" "}
                  <span style={{ color: PURPLE }}>пока не стало слишком поздно.</span>
                </>
              ),
            },
          ].map((block, i) => (
            <div
              key={i}
              className="border border-border bg-horror-surface p-6 relative overflow-hidden transition-colors duration-300"
              onMouseEnter={e => (e.currentTarget.style.borderColor = "hsl(270 80% 70% / 0.5)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "")}
            >
              <div
                className="absolute top-0 left-0 w-full h-px"
                style={{ background: `linear-gradient(to right, hsl(270 80% 70% / 0.6), transparent)` }}
              />
              <p
                className="font-mono-horror text-xs tracking-widest mb-3 uppercase"
                style={{ color: PURPLE }}
              >
                {block.label}
              </p>
              <p className="font-mono-horror text-xs text-muted-foreground leading-relaxed">
                {block.textNode ?? block.text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="text-center p-8"
          style={{
            border: `1px solid hsl(270 80% 70% / 0.2)`,
            background: `hsl(270 80% 70% / 0.05)`,
          }}
        >
          <p
            className="font-horror text-2xl md:text-3xl mb-3"
            style={{
              color: PURPLE,
              textShadow:
                "0 0 10px hsl(270 80% 70% / 0.9), 0 0 30px hsl(270 80% 70% / 0.6), 0 0 60px hsl(270 80% 70% / 0.3)",
            }}
          >
            "Ты думал, что это игра. Но я существую."
          </p>
          <p className="font-mono-horror text-xs text-muted-foreground tracking-widest">
            — МИТА
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;