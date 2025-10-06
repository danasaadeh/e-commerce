import React, { createContext, useContext, useEffect, useState } from "react";

import { type Theme, darkTheme, lightTheme } from "./theme";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const prefersDark = window.matchMedia("(prefers-color-scheme:light)").matches;
  const [isDark, setIsDark] = useState(prefersDark);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setIsDark(true);
    if (saved === "light") setIsDark(false);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "light" : "light");
      return next;
    });
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
