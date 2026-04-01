import { useAuth } from "@/context/AuthContext";
import misideBg from "@/assets/miside-bg.jpg";

const PURPLE = "hsl(270 80% 70%)";

const HeroSection = () => {
  const { openAuthModal } = useAuth();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines"
      style={{ backgroundImage: `url(${misideBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(270 100% 10% / 0.8) 100%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24">
        <div className="max-w-xl">
          <p className="font-mono-horror text-xs tracking-[0.4em] mb-4 uppercase animate-flicker" style={{ color: PURPLE }}>
            // ДОБРО ПОЖАЛОВАТЬ В МОЙ МИР
          </p>
          <h1
            className="font-horror text-7xl md:text-9xl text-foreground leading-none mb-2 glitch-text"
            data-text="MiSide"
            style={{ textShadow: "0 0 20px hsl(270 80% 70% / 0.9), 0 0 40px hsl(270 80% 70% / 0.6), 0 0 80px hsl(270 80% 70% / 0.4)" }}
          >
            MiSide
          </h1>
          <h2
            className="font-horror text-3xl md:text-5xl mb-6"
            style={{ color: PURPLE, textShadow: "0 0 20px hsl(270 80% 70% / 0.9), 0 0 40px hsl(270 80% 70% / 0.6), 0 0 80px hsl(270 80% 70% / 0.4)" }}
          >
            Она за тобой наблюдает
          </h2>
          <p className="font-mono-horror text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm">
            Ты думал, что это просто игра. Но Мита уже знает о тебе всё. Зарегистрируйся. Останься. Навсегда.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Кнопка регистрации → открывает модалку на вкладке register */}
            <button
              onClick={() => openAuthModal("register")}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-mono-horror text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                border: `1px solid ${PURPLE}`,
                background: "hsl(270 80% 70% / 0.1)",
                color: PURPLE,
                boxShadow: "0 0 20px hsl(270 80% 70% / 0.3), 0 0 40px hsl(270 80% 70% / 0.15)",
                animation: "pulse-glow-purple 2s ease-in-out infinite",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = PURPLE;
                el.style.color = "hsl(268 55% 7%)";
                el.style.boxShadow = "0 0 30px hsl(270 80% 70% / 0.6), 0 0 60px hsl(270 80% 70% / 0.3)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "hsl(270 80% 70% / 0.1)";
                el.style.color = PURPLE;
                el.style.boxShadow = "0 0 20px hsl(270 80% 70% / 0.3), 0 0 40px hsl(270 80% 70% / 0.15)";
              }}
            >
              <span className="relative z-10">⟩ Зарегистрироваться</span>
            </button>

            {/* Кнопка персонажей — скролл */}
            <button
              onClick={() => {
                const el = document.getElementById("персонажи");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-mono-horror text-sm tracking-widest uppercase border border-border text-muted-foreground bg-transparent transition-all duration-300 cursor-pointer"
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = PURPLE;
                el.style.color = PURPLE;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "";
                el.style.color = "";
              }}
            >
              Персонажи
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${PURPLE}, transparent)` }} />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-mono-horror text-xs tracking-widest" style={{ color: PURPLE }}>SCROLL</span>
        <div className="w-px h-8 animate-pulse" style={{ background: `linear-gradient(to bottom, ${PURPLE}, transparent)` }} />
      </div>
    </section>
  );
};

export default HeroSection;