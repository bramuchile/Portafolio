import { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { useTranslation } from "react-i18next";
import { Container, Grid, Paper, IconButton, Box } from "@mui/material";
import { GlobalStyles } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import TranslateIcon from "@mui/icons-material/Translate";
import AvatarCard from "./components/AvatarCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import Navigation from "./components/Navigation";
import DesktopNavbar from "./components/DesktopNavbar";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Porfolio from "./pages/Porfolio";
import Resume from "./pages/Resume";


function App() {
  const { toggleTheme, mode } = useContext(ThemeContext);
  const { i18n } = useTranslation();
  const isMediumScreen = useMediaQuery("(min-width:960px)");
  const [currentPage, setCurrentPage] = useState<"AboutMe" | "Contact" | "Porfolio" | "Resume">("AboutMe");

  const handleToggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  const pages = {
    AboutMe: <AboutMe />,
    Contact: <Contact />,
    Porfolio: <Porfolio />,
    Resume: <Resume />,
  };

  return (
    <>

      <GlobalStyles
        styles={{
          html: {
            scrollbarWidth: "auto", // para Firefox
            scrollbarColor: "rgba(100, 100, 100, 0.4) transparent",
          },
          body: {
            scrollbarWidth: "auto",
            scrollbarColor: "rgba(100, 100, 100, 0.4) transparent",
          },
          "::-webkit-scrollbar": {
            width: "12px", // más ancho
          },
          "::-webkit-scrollbar-track": {
            background: "transparent",
            marginTop: "200px", // Increased margin top
            marginBottom: "200px", // Increased margin bottom
          },
          "::-webkit-scrollbar-corner": {
            background: "transparent", // Corner transparente
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(100, 100, 100, 0.4)",
            borderRadius: "10px",
            border: "3px solid transparent", // para darle un espacio interior
            backgroundClip: "content-box",
          },
        }}
      />

      <Container maxWidth="lg" sx={{ py: isMediumScreen ? 8 : 4 }}>
        <Grid container spacing={3} sx={{ flexDirection: { xs: "column", md: "row" } }}>

          {/* Sidebar: Avatar + Configuración */}
          <Grid size={{ xs: 12, md: 3.5 }}>
            <Box
              sx={{
                position: { xs: "relative", md: "sticky" },
                top: { md: 64 }, // espacio desde el top (puedes ajustar)
                alignSelf:  "flex-start" ,
                justifyContent: { md: "flex-end", xs: "flex-start" },
                maxWidth: isMediumScreen ? "300px": null
              }}
            >

              {!isMediumScreen && <Grid container justifyContent={"flex-end"}><Paper
                sx={{
                  mt: 0,
                  mb: 2,
                  width:"200px",
                  p: 0,
                  display: "flex",
                  justifyContent: "space-between",
                  bgcolor: "background.paper",
                  borderRadius: 5,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <IconButton onClick={toggleTheme} color="inherit">
                  {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                <IconButton onClick={handleToggleLanguage} color="inherit">
                  <TranslateIcon />
                </IconButton>
              </Paper></Grid>}
              <AvatarCard />
              {isMediumScreen && <Paper
                sx={{
                  mt: 3,
                  p: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  bgcolor: "background.paper",
                  borderRadius: 5,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <IconButton onClick={toggleTheme} color="inherit">
                  {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                <IconButton onClick={handleToggleLanguage} color="inherit">
                  <TranslateIcon />
                </IconButton>
              </Paper>}
              
            </Box>
          </Grid>


          {/* Sección principal */}
          <Grid size={{ xs: 12, md: 8.5 }}>
            <Paper
              sx={{
                position: "relative",
                m: 0,
                pt: 0,
                bgcolor: "background.paper",
                color: "text.primary",
                minHeight: "400px",
                borderRadius: 5,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {isMediumScreen && <DesktopNavbar onPageChange={setCurrentPage} />}
              {pages[currentPage] || <AboutMe />}
            </Paper>
          </Grid>
        </Grid>

        {/* Menú de Navegación */}
        {!isMediumScreen && <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />}
      </Container>
    </>
  );
}

export default App;
