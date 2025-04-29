import { Grid, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const services = [
  { title: "Mobile Apps", description: "Desarrollo de apps para Android y iOS." },
  { title: "Web Development", description: "Desarrollo de sitios web de alta calidad." },
  { title: "UI/UX Design", description: "Diseño moderno y profesional." },
  { title: "Backend Development", description: "APIs escalables y optimizadas." },
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {services.map((service, index) => (
        <Grid size={{xs:12,md:6}} key={index}>
          <Paper
            sx={{
              p: 2,
              textAlign: "center",
              borderRadius: 2,
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="h6" fontWeight="bold">{service.title}</Typography>
            <Typography variant="body2" color="text.secondary">{service.description}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Services;
