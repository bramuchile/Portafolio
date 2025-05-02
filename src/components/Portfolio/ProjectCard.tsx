import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

interface ProjectCardProps {
  url: string;
  urlImage: string;
  title: string;
  subtitle: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ url, urlImage, title, subtitle }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        bgcolor: "background.paper",
        borderRadius: 3,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <CardActionArea href={url} target="_blank" rel="noopener noreferrer">
        <CardMedia
          component="img"
          height="140"
          image={urlImage}
          alt={title}
          sx={{ objectFit: "contain", bgcolor: "background.default" }}
        />
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;