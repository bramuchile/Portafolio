
import { createTheme, Theme } from "@mui/material/styles";

export const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFD700", // Amarillo dorado
    },
    secondary: {
      main: "#AAAAAA",
    },
    background: {
      default: "#0F0F0F",
      paper: "#1A1A1A",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#AAAAAA",
    },
    divider: "rgba(255,255,255,0.1)",
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none", // quitar sombra que interfiere con navbar
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1A1A1A",
          borderRadius: 4,
        },
      },
    },
  },
});

export const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976D2", // Azul elegante (Material Blue 700)
    },
    secondary: {
      main: "#0D47A1", // Azul profundo para contraste
    },
    background: {
      default: "#F0F4F8", // Gris azulado muy suave
      paper: "#FFFFFF",   // Papel limpio, pero no tan blanco puro
    },
    text: {
      primary: "#1E1E1E", // Gris oscuro
      secondary: "#555555",
    },
    divider: "rgba(0,0,0,0.1)",
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.06)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          borderRadius: 4,
        },
      },
    },
  },
});

