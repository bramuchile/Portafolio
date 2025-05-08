import { Card, Typography, Box } from "@mui/material";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        borderRadius: 3,
        boxShadow: 4,
        p: 2.5,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 2,
        height: "100%",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      {/* Icono */}
      <Box
        sx={{
          fontSize: 40,
          color: "primary.main",
          flexShrink: 0,
          mt: 0.5,
        }}
      >
        {icon}
      </Box>

      {/* Texto */}
      <Box>
        <Typography variant="subtitle1" fontWeight="bold" color="text.primary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {description}
        </Typography>
      </Box>
    </Card>
  );
};

export default ServiceCard;
