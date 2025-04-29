import { createContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ThemeContext = createContext({ toggleTheme: () => {}, mode: "dark" });

export const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">(localStorage.getItem("theme") as "light" | "dark" || "dark");

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#FFD700" },
          background: { default: mode === "dark" ? "#121212" : "#ffffff" },
          text: { primary: mode === "dark" ? "#fff" : "#000" },
        },
        typography: {
          fontFamily: "Poppins, sans-serif",
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
