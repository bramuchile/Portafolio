import { Grid, Typography, Box, useTheme } from "@mui/material";



import { useTranslation } from "react-i18next";
import ServiceCard from "./ServiceCard";
import IconApp from "./Icons/IconApp";
import IconBackend from "./Icons/IconBackend";
import IconDesign from "./Icons/IconDesing";
import IconDev from "./Icons/IconDev";

const WhatIDo = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <IconApp width={40} height={40} />,
      title: t("title_mobile"),
      description: t("description_mobile"),
    },
    {
      icon: <IconDev  />,
      title: t("title_web"),
      description: t("description_web"),
    },
    {
      icon: <IconDesign />,
      title: t("title_UI"),
      description: t("description_UI"),
    },
    {
      icon: <IconBackend width={40} height={40} />,
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
