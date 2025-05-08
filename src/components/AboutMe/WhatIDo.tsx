import { Grid, Typography, Box } from "@mui/material";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import WebIcon from "@mui/icons-material/Web";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import StorageIcon from "@mui/icons-material/Storage";
import ServiceCard from "./ServiceCard";

const WhatIDo = () => {
  const services = [
    {
      icon: <MobileFriendlyIcon fontSize="large" />,
      title: "Mobile Apps",
      description: "Professional development of applications for Android and iOS.",
    },
    {
      icon: <WebIcon fontSize="large" />,
      title: "Web Development",
      description: "High-quality development of sites at the professional level.",
    },
    {
      icon: <DesignServicesIcon fontSize="large" />,
      title: "UI/UX Design",
      description: "The most modern and high-quality design made at a professional level.",
    },
    {
      icon: <StorageIcon fontSize="large" />,
      title: "Backend Development",
      description: "High-performance backend services designed for scalability and seamless user experience.",
    },
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" fontWeight="bold" color="white" sx={{ mb: 2 }}>
        What I'm Doing
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
