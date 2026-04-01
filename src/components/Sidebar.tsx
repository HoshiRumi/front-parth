import { useState, useEffect } from "react";
import { Home, Users, BookOpen, LogOut, ShoppingBag, HeadphonesIcon, Mail, UserCircle, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const publicNavItems = [
  { icon: Home,            label: "ГЛАВНАЯ",   sectionId: "главная" },
  { icon: BookOpen,        label: "ИСТОРИЯ",   sectionId: "история" },
  { icon: Users,           label: "ПЕРСОНАЖИ", sectionId: "персонажи" },
];

const privateNavItems = [
  { icon: ShoppingBag,    label: "МАГАЗИН",   sectionId: "магазин" },
  { icon: HeadphonesIcon, label: "ПОДДЕРЖКА", sectionId: "поддержка" },
  { icon: Mail,           label: "КОНТАКТЫ",  sectionId: "контакты" },
];

export default function Sidebar() {
  const { user, logout, openAuthModal } = useAuth();
  const [active, setActive] = useState("ГЛАВНАЯ");
  const [hovered, setHovered] = useState(false);

  const allNavItems = user ? [...publicNavItems, ...privateNavItems] : publicNavItems;

  const scrollToSection = (sectionId: string, label: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(label);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offsets = allNavItems.map(({ sectionId, label }) => {
        const el = document.getElementById(sectionId);
        if (!el) return { label, top: Infinity };
        return { label, top: Math.abs(el.getBoundingClientRect().top) };
      });
      const closest = offsets.reduce((prev, curr) => curr.top < prev.top ? curr : prev);
      setActive(closest.label);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [user]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');

        .sidebar-root {
          position: fixed; top: 0; left: 0; height: 100vh; width: 58px;
          background: rgba(10, 4, 20, 0.96);
          border-right: 1px solid rgba(150, 80, 255, 0.12);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          display: flex; flex-direction: column;
          z-index: 1000; overflow: hidden;
          transition: width 0.38s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 4px 0 40px rgba(140,60,255,0.07), inset -1px 0 0 rgba(150,80,255,0.08);
        }
        .sidebar-root[data-expanded="true"] {
          width: 230px;
          box-shadow: 6px 0 50px rgba(140,60,255,0.18), inset -1px 0 0 rgba(150,80,255,0.15);
        }
        .sidebar-root::before {
          content: ''; position: absolute; inset: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(150,80,255,0.012) 3px, rgba(150,80,255,0.012) 4px);
          pointer-events: none; z-index: 0;
        }
        .sidebar-logo {
          position: relative; z-index: 1;
          display: flex; align-items: center; gap: 12px;
          padding: 22px 15px; min-height: 74px; flex-shrink: 0;
        }
        .logo-mark {
          width: 28px; height: 28px; flex-shrink: 0;
          position: relative; display: flex; align-items: center; justify-content: center;
        }
        .logo-mark::before {
          content: ''; position: absolute; inset: 0;
          border: 1px solid rgba(150,80,255,0.5);
          clip-path: polygon(0 18%, 18% 0, 100% 0, 100% 82%, 82% 100%, 0 100%);
          background: rgba(150,80,255,0.07);
        }
        .logo-mark-inner {
          font-family: 'Nunito', cursive; font-size: 17px; font-weight: 800;
          color: hsl(270 80% 70%); line-height: 1;
          text-shadow: 0 0 10px rgba(150,80,255,0.8), 0 0 24px rgba(150,80,255,0.4);
          letter-spacing: -1px; position: relative; z-index: 1;
        }
        .logo-wordmark {
          display: flex; flex-direction: column; line-height: 1;
          opacity: 0; transform: translateX(-10px);
          transition: opacity 0.28s ease 0.08s, transform 0.28s ease 0.08s;
          pointer-events: none; white-space: nowrap;
        }
        .sidebar-root[data-expanded="true"] .logo-wordmark { opacity: 1; transform: translateX(0); }
        .logo-mi {
          font-family: 'Nunito', cursive; font-size: 20px; font-weight: 800;
          color: #ffffff; letter-spacing: 1px;
          text-shadow: 0 0 6px rgba(255,255,255,0.9), 0 0 20px rgba(180,140,255,0.6), 0 0 40px rgba(150,80,255,0.4);
        }
        .sidebar-divider {
          position: relative; z-index: 1; height: 1px; margin: 0 14px;
          background: linear-gradient(to right, transparent, rgba(150,80,255,0.35), transparent);
          flex-shrink: 0;
        }
        .sidebar-nav {
          position: relative; z-index: 1;
          display: flex; flex-direction: column;
          padding: 10px 0; flex: 1;
          overflow-y: auto; overflow-x: hidden;
        }
        .sidebar-nav::-webkit-scrollbar { display: none; }
        .sidebar-item {
          position: relative; display: flex; align-items: center; gap: 14px;
          padding: 11px 15px; color: rgba(180,150,220,0.5);
          transition: color 0.22s ease; overflow: hidden; cursor: pointer;
          font-family: 'Nunito', sans-serif; background: none; border: none;
          width: 100%; text-align: left;
        }
        .sidebar-item::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(150,80,255,0.09), transparent);
          opacity: 0; transition: opacity 0.22s ease;
        }
        .sidebar-item:hover { color: rgba(200,170,255,0.95); }
        .sidebar-item:hover::before { opacity: 1; }
        .sidebar-item.active { color: hsl(270 80% 70%); }
        .sidebar-item.active::before { opacity: 1; background: linear-gradient(90deg, rgba(150,80,255,0.14), transparent); }
        .active-glow {
          position: absolute; left: 0; top: 10%; height: 80%; width: 2px;
          background: linear-gradient(to bottom, transparent, hsl(270 80% 70%), transparent);
          box-shadow: 0 0 8px hsl(270 80% 70%), 0 0 20px rgba(150,80,255,0.4);
          border-radius: 2px;
        }
        .item-icon {
          flex-shrink: 0; width: 22px; height: 22px;
          display: flex; align-items: center; justify-content: center; margin-left: 3px;
        }
        .sidebar-item.active .item-icon { filter: drop-shadow(0 0 5px rgba(150,80,255,0.7)); }
        .item-label {
          font-size: 10.5px; font-weight: 700; letter-spacing: 2.8px;
          white-space: nowrap; opacity: 0; transform: translateX(-8px);
          transition: opacity 0.28s ease, transform 0.28s ease;
        }
        .sidebar-root[data-expanded="true"] .item-label { opacity: 1; transform: translateX(0); }
        .section-label {
          font-family: 'Nunito', sans-serif; font-size: 8px; letter-spacing: 3px;
          padding: 10px 18px 4px; color: rgba(150,80,255,0.4);
          white-space: nowrap; opacity: 0; transition: opacity 0.28s ease 0.05s;
        }
        .sidebar-root[data-expanded="true"] .section-label { opacity: 1; }
        .profile-block {
          position: relative; z-index: 1;
          display: flex; align-items: center; gap: 10px;
          padding: 14px 15px; flex-shrink: 0; overflow: hidden;
        }
        .profile-avatar {
          width: 28px; height: 28px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(150,80,255,0.3), rgba(150,80,255,0.1));
          border: 1px solid rgba(150,80,255,0.5);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; color: hsl(270 80% 70%);
        }
        .profile-info {
          opacity: 0; transform: translateX(-8px);
          transition: opacity 0.28s ease 0.06s, transform 0.28s ease 0.06s;
          white-space: nowrap; overflow: hidden;
        }
        .sidebar-root[data-expanded="true"] .profile-info { opacity: 1; transform: translateX(0); }
        .profile-name {
          font-family: 'Nunito', sans-serif; font-size: 11px; font-weight: 700;
          color: hsl(270 80% 75%); letter-spacing: 0.5px;
        }
        .profile-role {
          font-family: 'Nunito', sans-serif; font-size: 8px; letter-spacing: 2px;
          color: rgba(150,80,255,0.5); text-transform: uppercase;
        }
        .sidebar-bottom {
          position: relative; z-index: 1;
          display: flex; flex-direction: column;
          padding-bottom: 10px; flex-shrink: 0;
        }
        .sidebar-bottom .sidebar-item { color: rgba(150,100,220,0.45); }
        .sidebar-bottom .sidebar-item:hover { color: rgba(180,140,255,0.9); }

        /* Кнопка Аккаунт */
        .account-btn {
          position: relative; display: flex; align-items: center; gap: 14px;
          padding: 11px 15px; cursor: pointer;
          font-family: 'Nunito', sans-serif; background: none; border: none;
          width: 100%; text-align: left; overflow: hidden;
          color: hsl(270 80% 70%);
          transition: color 0.22s ease;
        }
        .account-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(150,80,255,0.13), transparent);
          opacity: 0; transition: opacity 0.22s ease;
        }
        .account-btn:hover::before { opacity: 1; }
        .account-btn .item-icon { filter: drop-shadow(0 0 5px rgba(150,80,255,0.6)); }
      `}</style>

      <aside
        className="sidebar-root"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-expanded={hovered}
      >
        {/* Логотип */}
        <div className="sidebar-logo">
          <div className="logo-mark">
            <span className="logo-mark-inner">M</span>
          </div>
          <div className="logo-wordmark">
            <span className="logo-mi">MiSide</span>
          </div>
        </div>

        <div className="sidebar-divider" />

        {/* Профиль (если авторизован) */}
        {user && (
          <>
            <div className="profile-block">
              <div className="profile-avatar">
                <UserCircle size={16} />
              </div>
              <div className="profile-info">
                <div className="profile-name">{user.username}</div>
                <div className="profile-role">// ОНЛАЙН</div>
              </div>
            </div>
            <div className="sidebar-divider" />
          </>
        )}

        <nav className="sidebar-nav">
          {publicNavItems.map(({ icon: Icon, label, sectionId }) => (
            <button
              key={label}
              className={`sidebar-item ${active === label ? "active" : ""}`}
              onClick={() => scrollToSection(sectionId, label)}
            >
              {active === label && <span className="active-glow" />}
              <span className="item-icon"><Icon size={19} strokeWidth={1.6} /></span>
              <span className="item-label">{label}</span>
            </button>
          ))}

          {user && (
            <>
              <div className="sidebar-divider" style={{ marginTop: 6, marginBottom: 2 }} />
              <span className="section-label">// ТОЛЬКО ДЛЯ СВОИХ</span>
              {privateNavItems.map(({ icon: Icon, label, sectionId }) => (
                <button
                  key={label}
                  className={`sidebar-item ${active === label ? "active" : ""}`}
                  onClick={() => scrollToSection(sectionId, label)}
                >
                  {active === label && <span className="active-glow" />}
                  <span className="item-icon"><Icon size={19} strokeWidth={1.6} /></span>
                  <span className="item-label">{label}</span>
                </button>
              ))}
            </>
          )}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-divider" />
          {user ? (
            <button className="sidebar-item" onClick={logout}>
              <span className="item-icon"><LogOut size={19} strokeWidth={1.6} /></span>
              <span className="item-label">ВЫЙТИ</span>
            </button>
          ) : (
            /* Одна кнопка АККАУНТ → открывает вкладку "войти", внутри уже есть "нет аккаунта? зарегистрироваться" */
            <button className="account-btn" onClick={() => openAuthModal("login")}>
              <span className="item-icon"><User size={19} strokeWidth={1.6} /></span>
              <span className="item-label">АККАУНТ</span>
            </button>
          )}
        </div>
      </aside>
    </>
  );
}