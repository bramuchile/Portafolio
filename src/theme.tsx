
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
      main: "#FFD700",
    },
    secondary: {
      main: "#333333",
    },
    background: {
      default: "#F9F9FB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1A1A",
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
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none", // evitar sombra en AppBar
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
