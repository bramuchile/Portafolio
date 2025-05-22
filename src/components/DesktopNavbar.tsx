import { AppBar, Toolbar, Button, Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";

type Page = "AboutMe" | "Contact" | "Porfolio" | "Resume";

interface Props {
  onPageChange: (page: Page) => void;
}

const DesktopNavbar = ({ onPageChange }: Props) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [active, setActive] = useState<string>("AboutMe");

  const menuItems = [
    { key: "AboutMe", label: t("about") },
    { key: "Resume", label: t("resume") },
    { key: "Porfolio", label: t("portfolio") },
    { key: "Contact", label: t("contact") },
  ];

  return (
    <AppBar
      position="absolute"
      color="transparent"
      elevation={0}
      sx={{
        mt: 0,
        m: 0,
        top: -2,
        right: -25,
        zIndex: 0,
        boxShadow: "none", // asegurar que no tenga sombra
      }}
    >
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <Box
          display="flex"
          gap={1}
          sx={{
            bgcolor: "#282829", // color fijo para dark navbar
            borderRadius: "0px 16px 0px 16px",
            p: 2,
            border: `1px solid ${theme.palette.divider}`,
            height: "60px",
          }}
        >
          {menuItems.map((item) => (
            <Button
              key={item.key}
              onClick={() => {
                setActive(item.key);
                onPageChange(item.key as Page);
              }}
              sx={{
                color:
                  active === item.key
                    ? theme.palette.primary.main
                    : theme.palette.text.primary,
                fontWeight: active === item.key ? "bold" : "normal",
                textTransform: "none",
                fontSize: "0.9rem",
                borderRadius: 4,
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
