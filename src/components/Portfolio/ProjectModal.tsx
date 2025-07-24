import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Chip,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Swiper, SwiperSlide } from "swiper/react";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: any;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ open, onClose, project }) => {
  if (!project) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {project.title}
        <IconButton onClick={onClose} sx={{ position: "absolute", right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Swiper spaceBetween={10} slidesPerView={1}>
          {project.images.map((img: string, i: number) => (
            <SwiperSlide key={i}>
              <img src={img} alt={project.title} style={{ width: "100%", borderRadius: 8 }} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box mt={2}>
          <Typography variant="body1" paragraph>{project.description}</Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {project.technologies.map((tech: string, idx: number) => (
              <Chip key={idx} label={tech} />
            ))}
          </Box>
          <Box mt={2}>
            <Button variant="contained" href={project.url} target="_blank">
              Ver proyecto
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
