import { Grid, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import WebIcon from "@mui/icons-material/Web";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import StorageIcon from "@mui/icons-material/Storage";

const WhatIDo = () => {
  const services = [
    {
      icon: <MobileFriendlyIcon />,
      title: "Mobile Apps",
      description: "Professional development of applications for Android and iOS.",
    },
    {
      icon: <WebIcon />,
      title: "Web Development",
      description: "High-quality development of sites at the professional level.",
    },
    {
      icon: <DesignServicesIcon />,
      title: "UI/UX Design",
      description: "The most modern and high-quality design made at a professional level.",
    },
    {
      icon: <StorageIcon />,
      title: "Backend Development",
      description: "High-performance backend services designed for scalability and seamless user experience.",
    },
  ];

  return (
    <>
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
        What I'm Doing
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid size={{xs:12, sm:6, md:3}} key={index}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default WhatIDo;