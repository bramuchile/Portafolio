import { Typography, Grid, Box } from "@mui/material";
import ProjectCard from "../components/Portfolio/ProjectCard";

const Portfolio = () => {
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
    },
    {
      url: "https://example.com/tokmo",
      urlImage: "/images/tokmo.png",
      title: "Tokmo",
      subtitle: "Application",
    },
    {
      url: "https://example.com/saara",
      urlImage: "/images/saara.png",
      title: "Saara",
      subtitle: "Application",
    },
    {
      url: "https://example.com/ifood",
      urlImage: "/images/ifood.png",
      title: "iFood",
      subtitle: "Application",
    },
    {
      url: "https://example.com/mera-date",
      urlImage: "/images/mera-date.png",
      title: "MeraDate",
      subtitle: "Application",
    },
    {
      url: "https://example.com/weather-app",
      urlImage: "/images/weather-app.png",
      title: "Weather App",
      subtitle: "Application",
    },
    {
      url: "https://example.com/music-app",
      urlImage: "/images/music-app.png",
      title: "Music App",
      subtitle: "Application",
    },
    {
      url: "https://example.com/movie-app",
      urlImage: "/images/movie-app.png",
      title: "Movie App",
      subtitle: "Application",
    },
    {
      url: "https://example.com/github-search",
      urlImage: "/images/github-search.png",
      title: "GitHub Users Search App",
      subtitle: "Web development",
    },
    {
      url: "https://example.com/car-zone",
      urlImage: "/images/car-zone.png",
      title: "Car Zone",
      subtitle: "Web development",
    },
    {
      url: "https://example.com/movflix",
      urlImage: "/images/movflix.png",
      title: "Movflix",
      subtitle: "Web development",
    },
    
  ];

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Portfolio
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Explore some of my recent projects across applications, web development, and UI/UX design.
      </Typography>
      <Grid container spacing={3}>
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
    </Box>
  );
};

export default Portfolio;