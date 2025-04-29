import { createTheme } from "@mui/material";    

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
          main: "#FFD700", // Amarillo dorado como en la imagen
        },
        secondary: {
          main: "#FFFFFF",
        },
        background: {
          default: "#121212",
          paper: "#1E1E1E",
        },
        text: {
          primary: "#ffffff",
          secondary: "#aaaaaa",
        },
      },
      typography: {
        fontFamily: "Arial, sans-serif",
      },
    });
    
    export default theme;