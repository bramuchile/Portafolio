import { Box, Typography,useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const AboutDescription = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box sx={{ mb: 6 }}>
      {/* Título con línea decorativa amarilla */}
      <Typography variant="h4" fontWeight="bold"  sx={{ mb: 1 }}>
        {t("about_me")}
      </Typography>
      <Box
        sx={{
          width: 40,
          height: 4,
          bgcolor: theme.palette.primary.main, // Amarillo suave
          borderRadius: 2,
          mb: 3,
        }}
      />

      {/* Primer párrafo */}
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", mb: 2, lineHeight: 1.8 }}
      >
       {t("about_me_description1")}
      </Typography>

      {/* Segundo párrafo */}
      <Typography
        variant="body1"
        sx={{ color: "text.secondary",mb: 2, lineHeight: 1.8 }}
      >
        {t("about_me_description2")}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", lineHeight: 1.8 }}
      >
        {t("about_me_description3")}
      </Typography>
    </Box>
  );
};

export default AboutDescription;
