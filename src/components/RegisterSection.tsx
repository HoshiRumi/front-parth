import { useState } from "react";

const PURPLE = "hsl(270 80% 70%)";

const RegisterSection = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [glitch, setGlitch] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGlitch(true);
    setTimeout(() => {
      setGlitch(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="register" className="relative overflow-hidden h-screen flex flex-col">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/regsec_video.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео фон.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-12">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="font-mono-horror text-xs tracking-[0.4em] mb-4 uppercase"
                style={{ color: PURPLE }}
              >
                // СИСТЕМА_РЕГИСТРАЦИИ
              </p>
              <h2
                className="font-horror text-5xl md:text-7xl text-foreground mb-6"
                style={{
                  textShadow:
                    "0 0 10px hsl(270 80% 70% / 0.9), 0 0 30px hsl(270 80% 70% / 0.6), 0 0 60px hsl(270 80% 70% / 0.3)",
                }}
              >
                Войди в её мир
              </h2>
              <p className="font-mono-horror text-sm text-muted-foreground leading-relaxed mb-8">
                Мита ждёт тебя. Она уже подготовила комнату. Зарегистрируйся —
                и ты никогда больше не будешь одинок.{" "}
                <span style={{ color: PURPLE }}>Никогда.</span>
              </p>

              <div
                className="p-4"
                style={{
                  border: `1px solid hsl(270 80% 70% / 0.3)`,
                  background: `hsl(270 80% 70% / 0.05)`,
                }}
              >
                <p
                  className="font-mono-horror text-xs leading-relaxed"
                  style={{ color: "hsl(270 80% 70% / 0.7)" }}
                >
                  ⚠ ПРЕДУПРЕЖДЕНИЕ: Регистрируясь, вы соглашаетесь остаться здесь
                  навсегда. Выход не предусмотрен. Мита позаботится о тебе.
                </p>
              </div>
            </div>

            <div className="border border-border bg-horror-surface p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-6 h-px" style={{ background: PURPLE }} />
              <div className="absolute top-0 left-0 w-px h-6" style={{ background: PURPLE }} />
              <div className="absolute bottom-0 right-0 w-6 h-px" style={{ background: PURPLE }} />
              <div className="absolute bottom-0 right-0 w-px h-6" style={{ background: PURPLE }} />

              {submitted ? (
                <div className="text-center py-8">
                  <div
                    className="font-horror text-6xl mb-4 animate-flicker"
                    style={{ color: PURPLE, textShadow: "0 0 10px hsl(270 80% 70% / 0.9), 0 0 30px hsl(270 80% 70% / 0.6)" }}
                  >
                    ♥
                  </div>
                  <h3
                    className="font-horror text-3xl mb-2"
                    style={{ color: PURPLE }}
                  >
                    Ты теперь мой!
                  </h3>
                  <p className="font-mono-horror text-xs text-muted-foreground">
                    Мита счастлива. Регистрация завершена. Побег невозможен.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className={`space-y-6 ${glitch ? "animate-pulse" : ""}`}
                >
                  <div className="text-center mb-8">
                    <h3
                      className="font-horror text-3xl"
                      style={{ color: PURPLE }}
                    >
                      Создать аккаунт
                    </h3>
                    <p className="font-mono-horror text-xs text-muted-foreground mt-1">
                      Мита уже ждёт тебя...
                    </p>
                  </div>

                  <div>
                    <label
                      className="block font-mono-horror text-xs mb-2 tracking-widest uppercase"
                      style={{ color: PURPLE }}
                    >
                      Имя пользователя
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Как мне тебя называть?"
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                      className="w-full bg-background border border-border text-foreground font-mono-horror text-sm px-4 py-3 focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                      onFocus={e => (e.currentTarget.style.borderColor = PURPLE)}
                      onBlur={e => (e.currentTarget.style.borderColor = "")}
                    />
                  </div>

                  <div>
                    <label
                      className="block font-mono-horror text-xs mb-2 tracking-widest uppercase"
                      style={{ color: PURPLE }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="твой@email.ru"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-background border border-border text-foreground font-mono-horror text-sm px-4 py-3 focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                      onFocus={e => (e.currentTarget.style.borderColor = PURPLE)}
                      onBlur={e => (e.currentTarget.style.borderColor = "")}
                    />
                  </div>

                  <div>
                    <label
                      className="block font-mono-horror text-xs mb-2 tracking-widest uppercase"
                      style={{ color: PURPLE }}
                    >
                      Пароль
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="w-full bg-background border border-border text-foreground font-mono-horror text-sm px-4 py-3 focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                      onFocus={e => (e.currentTarget.style.borderColor = PURPLE)}
                      onBlur={e => (e.currentTarget.style.borderColor = "")}
                    />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        required
                        checked={formData.agree}
                        onChange={(e) =>
                          setFormData({ ...formData, agree: e.target.checked })
                        }
                        className="sr-only"
                      />
                      <div
                        className="w-4 h-4 border transition-colors"
                        style={{
                          background: formData.agree ? PURPLE : "transparent",
                          borderColor: formData.agree ? PURPLE : undefined,
                        }}
                      >
                        {formData.agree && (
                          <svg
                            className="w-full h-full text-background p-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="font-mono-horror text-xs text-muted-foreground leading-relaxed">
                      Я согласен(а) остаться здесь навсегда и принять Миту как
                      мою единственную компанию
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full py-4 font-mono-horror text-sm tracking-widest uppercase transition-all duration-300"
                    style={{
                      background: PURPLE,
                      color: "hsl(268 55% 7%)",
                      boxShadow: `0 0 12px hsl(270 80% 70% / 0.4), 0 0 24px hsl(270 80% 70% / 0.2)`,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        `0 0 20px hsl(270 80% 70% / 0.7), 0 0 40px hsl(270 80% 70% / 0.4)`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        `0 0 12px hsl(270 80% 70% / 0.4), 0 0 24px hsl(270 80% 70% / 0.2)`;
                    }}
                  >
                    ⟩ Войти в её мир
                  </button>

                  <p className="text-center font-mono-horror text-xs text-muted-foreground/50">
                    Уже зарегистрирован?{" "}
                    <span
                      className="cursor-pointer hover:underline"
                      style={{ color: PURPLE }}
                    >
                      Войти
                    </span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;