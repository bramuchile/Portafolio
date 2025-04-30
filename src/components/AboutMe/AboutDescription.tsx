import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const AboutDescription = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        {t("about_me")}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        A passionate Flutter developer with strong expertise in cross-platform apps, REST APIs, UI/UX, widgets, and state management solutions. Proven track record in delivering cutting-edge solutions, including API integration, third-party libraries, and performance optimization. Adept at debugging to ensure high-quality, responsive apps and an agile collaborator committed to staying current with industry trends.
      </Typography>
      <Typography variant="body1" color="text.secondary">
        If you're seeking a skilled Flutter developer to breathe life into your project and exceed your expectations, I am here to collaborate and create magic together. Reach out, and let's transform your vision into a reality!
      </Typography>
    </>
  );
};

export default AboutDescription;