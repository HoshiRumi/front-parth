import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  register: (username: string, email: string, password: string) => void;
  logout: () => void;
  isAuthModalOpen: boolean;
  authModalTab: "login" | "register";
  openAuthModal: (tab?: "login" | "register") => void;
  closeAuthModal: () => void;
}

interface ModalState {
  isOpen: boolean;
  tab: "login" | "register";
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [modal, setModal] = useState<ModalState>({ isOpen: false, tab: "login" });

  const login = (email: string, _password: string) => {
    setUser({ username: email.split("@")[0], email });
    setModal({ isOpen: false, tab: "login" });
  };

  const register = (username: string, email: string, _password: string) => {
    setUser({ username, email });
    setModal({ isOpen: false, tab: "login" });
  };

  const logout = () => setUser(null);

  const openAuthModal = (tab: "login" | "register" = "login") => {
    setModal({ isOpen: true, tab });
  };

  const closeAuthModal = () => {
    setModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <AuthContext.Provider value={{
      user, login, register, logout,
      isAuthModalOpen: modal.isOpen,
      authModalTab: modal.tab,
      openAuthModal, closeAuthModal,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};