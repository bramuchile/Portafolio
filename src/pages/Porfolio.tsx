import { useState } from "react";
import {
  Typography,
  Grid,
  Container,
  Box,
  useTheme,
} from "@mui/material";
import ProjectCard from "../components/Portfolio/ProjectCard";
import ProjectModal from "../components/Portfolio/ProjectModal";

const Portfolio = () => {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const projects = [
    {
      title: "Nagarik App",
      subtitle: "Mobile Application",
      url: "https://example.com/nagarik-app",
      images: ["/images/nagarik-app-1.png", "/images/nagarik-app-2.png"],
      description:
        "A citizen-focused mobile app providing access to government services with secure authentication.",
      technologies: ["React Native", "Firebase", "Expo"],
    },
    {
      title: "Ambition Guru",
      subtitle: "E-learning Platform",
      url: "https://example.com/ambition-guru",
      images: ["/images/ambition-guru-1.png", "/images/ambition-guru-2.png"],
      description:
        "An online learning platform that connects students with expert mentors in various fields.",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    },
    {
      title: "Socialr",
      subtitle: "Social Network",
      url: "https://example.com/socialr",
      images: ["/images/socialr-1.png", "/images/socialr-2.png"],
      description:
        "A modern social network that focuses on meaningful interactions and curated content.",
      technologies: ["React", "Node.js", "GraphQL", "PostgreSQL"],
    },
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

      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid size={{xs:12 , sm:6 , md:4 }}  key={index}>
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </Grid>
        ))}
      </Grid>

      <ProjectModal
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </Container>
  );
};

export default Portfolio;
