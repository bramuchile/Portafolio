import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Services from "../components/Services";

const Resume = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="body1" sx={{ mt: 2, color: "text.secondary" }}>
        RESUME
      </Typography>
      <Typography variant="h4" fontWeight="bold">
        {t("about_me")}
      </Typography>
      
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
        {t("what_i_do")}
      </Typography>
      <Services />
    </>
  );
};

export default Resume;
