import { Link } from "react-scroll";

const PURPLE = "hsl(270 80% 70%)";

const footerLinks = [
  { label: "Главная",     to: "главная" },
  { label: "Персонажи",  to: "персонажи" },
  { label: "История",    to: "история" },
  { label: "Регистрация", to: "регистрация" },
];

const heartPositions = Array.from({ length: 80 }, (_, i) => ({
  top: `${(i * 17 + 3) % 100}%`,
  left: `${(i * 23 + 7) % 100}%`,
  size: 6 + (i % 4) * 3,
  opacity: 0.08 + (i % 5) * 0.03,
}));

const HeartBg = ({ top, left, size, opacity }: { top: string; left: string; size: number; opacity: number }) => (
  <div className="absolute pointer-events-none" style={{ top, left }}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="hsl(270 60% 65%)" style={{ opacity }}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  </div>
);

const Footer = () => {
  return (
    <footer className="relative border-t border-border py-12 overflow-hidden">

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

      {/* Полоски — фиолетовые */}
      <div
        className="absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, hsl(270 80% 70%) 0px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p
              className="font-horror text-4xl mb-1 animate-flicker"
              style={{
                color: PURPLE,
                textShadow:
                  "0 0 10px hsl(270 80% 70% / 0.9), 0 0 30px hsl(270 80% 70% / 0.6), 0 0 60px hsl(270 80% 70% / 0.3)",
              }}
            >
              MiSide
            </p>
            <p className="font-mono-horror text-xs tracking-widest" style={{ color: "hsl(270 50% 75%)" }}>
              // ОНА НИКОГДА НЕ ОТПУСТИТ
            </p>
          </div>

          <div className="flex gap-8">
            {footerLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                smooth={true}
                duration={600}
                offset={-58}
                className="font-mono-horror text-xs tracking-widest uppercase transition-colors cursor-pointer"
                style={{ color: "hsl(270 50% 75%)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = PURPLE)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "hsl(270 50% 75%)")}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            {["VK", "TG", "YT"].map((s) => (
              <button
                key={s}
                className="w-10 h-10 font-mono-horror text-xs transition-all duration-200 flex items-center justify-center"
                style={{
                  border: "1px solid hsl(270 60% 50% / 0.4)",
                  color: "hsl(270 50% 75%)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = PURPLE;
                  (e.currentTarget as HTMLElement).style.color = PURPLE;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "hsl(270 60% 50% / 0.4)";
                  (e.currentTarget as HTMLElement).style.color = "hsl(270 50% 75%)";
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid hsl(270 60% 50% / 0.25)" }}
        >
          <p className="font-mono-horror text-xs" style={{ color: "hsl(270 40% 60% / 0.6)" }}>
            © 2025 MiSide Fan Site — Фан-проект. Не является официальным сайтом.
          </p>
          <p
            className="font-mono-horror text-xs animate-flicker"
            style={{ color: "hsl(270 80% 70% / 0.4)" }}
          >
            [ФАЙЛ_ПОВРЕЖДЁН — НЕ ЗАКРЫВАЙ ЭТУ СТРАНИЦУ]
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;