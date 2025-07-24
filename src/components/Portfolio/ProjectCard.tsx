import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

interface ProjectCardProps {
  project: {
    title: string;
    subtitle: string;
    images: string[];
  };
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        borderRadius: 3,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        cursor: "pointer",
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        height="140"
        image={project.images[0]}
        alt={project.title}
        sx={{ objectFit: "cover", bgcolor: "background.default" }}
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
