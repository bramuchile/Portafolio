import { Grid, Typography, Box } from "@mui/material";

import WebIcon from "@mui/icons-material/Web";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import StorageIcon from "@mui/icons-material/Storage";
import  IconApp from "../../assets/icon-app.svg";
import IconBackend from "../../assets/icon-backend.svg";
import IconUI from "../../assets/icon-design.svg";
import IconWeb from "../../assets/icon-dev.svg";

import { useTranslation } from "react-i18next";
import ServiceCard from "./ServiceCard";

const WhatIDo = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <img src={IconApp} alt="App Icon" style={{ width: 40, height: 40 }} />,
      title: t("title_mobile"),
      description: t("description_mobile"),
    },
    {
      icon: <img src={IconWeb} alt="Web Icon" style={{ width: 40, height: 40 }} />,
      title: t("title_web"),
      description: t("description_web"),
    },
    {
      icon: <img src={IconUI} alt="Design Icon" style={{ width: 40, height: 40 }} />,
      title: t("title_UI"),
      description: t("description_UI"),
    },
    {
      icon: <img src={IconBackend} alt="Backend Icon" style={{ width: 40, height: 40 }} />,
      title: t("title_backend"),
      description: t("description_backend"),
    },
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" fontWeight="bold" color="white" sx={{ mb: 2 }}>
        {t("what_im_doing")}
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={index}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhatIDo;
