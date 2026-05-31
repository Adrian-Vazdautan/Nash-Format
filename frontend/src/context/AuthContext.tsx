import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Создаем контекст
const AuthContext = createContext<any>(null);

// 2. Создаем провайдер, который будет «обертывать» приложение
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const login = (token: string) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Создаем хук, который ты будешь использовать в любом файле
export const useAuth = () => useContext(AuthContext);