import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Services from "../components/Services";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="body1" sx={{ mt: 2, color: "text.secondary" }}>
        CONTACT
      </Typography>
      <Typography variant="h4" fontWeight="bold">
        {t("about_me")}
      </Typography>
      <Contact />
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
        {t("what_i_do")}
      </Typography>
      <Services />
    </>
  );
};

export default Contact;
