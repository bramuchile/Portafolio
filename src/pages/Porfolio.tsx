import { Typography, Grid,  Container, Box, useTheme } from "@mui/material";
import ProjectCard from "../components/Portfolio/ProjectCard";


const Portfolio = () => {
  const theme = useTheme();
  const projects = [
    {
      url: "https://example.com/nagarik-app",
      urlImage: "/images/nagarik-app.png",
      title: "Nagarik App",
      subtitle: "Application",
    },
    {
      url: "https://example.com/ambition-guru",
      urlImage: "/images/ambition-guru.png",
      title: "Ambition Guru",
      subtitle: "Application",
    },
    {
      url: "https://example.com/socialr",
      urlImage: "/images/socialr.png",
      title: "Socialr",
      subtitle: "Application",
    }
  
    
    
  ];

  return (
    <Container sx={{ mt: 2, mb: 4 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Portfolio
      </Typography>
      <Box
        sx={{
          width: 40,
          height: 4,
          bgcolor: theme.palette.primary.main,
          borderRadius: 2,
          mb: 3,
        }}
      />
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Explore some of my recent projects across applications, web development, and UI/UX design.
      </Typography>
      <Grid container spacing={3} alignContent={"center"} flex={1}>
        {projects.map((project, index) => (
          <Grid size={{xs:12, sm:6, md:4}}  key={index}>
            <ProjectCard
              url={project.url}
              urlImage={project.urlImage}
              title={project.title}
              subtitle={project.subtitle}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;