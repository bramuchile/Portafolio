import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";

type Page = "AboutMe" | "Contact" | "Porfolio" | "Resume";

interface Props {
  onPageChange: (page: Page) => void;
}
const DesktopNavbar = ({ onPageChange }: Props) => {
  const { t } = useTranslation();
  const [active, setActive] = useState<string>("AboutMe");

  const menuItems = [    { key: "AboutMe", label: t("about") },    { key: "Resume", label: t("resume") },    { key: "Porfolio", label: t("portfolio") },    { key: "Contact", label: t("contact") },  ];

  return (  
    <AppBar position="absolute" color="transparent" elevation={0} sx={{ mt:0,m:0, top: -2, // Ajusta la distancia desde arriba
      right: -25, // Ajusta la distancia desde la derecha
      zIndex: 0, }}>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <Box display="flex" gap={1} sx={{bgcolor:"#282829", borderRadius:"0 20px 0 20px", p:2,
              border: "1px solid rgba(255, 255, 255, 0.1)", height: "60px",
              }}>
          {menuItems.map((item) => (
            <Button
              key={item.key}
              onClick={() => {
                setActive(item.key);
                onPageChange(item.key as Page);
              }}
              sx={{
                color: active === item.key ? "yellow" : "white",
                fontWeight: active === item.key ? "bold" : "normal",
                textTransform: "none",
                fontSize: "0.9rem",
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopNavbar;
