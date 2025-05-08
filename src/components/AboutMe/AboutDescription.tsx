import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const AboutDescription = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ mb: 6 }}>
      {/* Título con línea decorativa amarilla */}
      <Typography variant="h4" fontWeight="bold" color="white" sx={{ mb: 1 }}>
        {t("about_me")}
      </Typography>
      <Box
        sx={{
          width: 40,
          height: 4,
          bgcolor: "#FFD54F", // Amarillo suave
          borderRadius: 2,
          mb: 3,
        }}
      />

      {/* Primer párrafo */}
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", mb: 2, lineHeight: 1.8 }}
      >
        A passionate Flutter developer with strong expertise in cross-platform
        apps, REST APIs, UI/UX, widgets, and state management solutions. Proven
        track record in delivering cutting-edge solutions, including API
        integration, third-party libraries, and performance optimization. Adept
        at debugging to ensure high-quality, responsive apps and an agile
        collaborator committed to staying current with industry trends.
      </Typography>

      {/* Segundo párrafo */}
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", lineHeight: 1.8 }}
      >
        If you're seeking a skilled Flutter developer to breathe life into your
        project and exceed your expectations, I am here to collaborate and
        create magic together. Reach out, and let's transform your vision into a
        reality!
      </Typography>
    </Box>
  );
};

export default AboutDescription;
