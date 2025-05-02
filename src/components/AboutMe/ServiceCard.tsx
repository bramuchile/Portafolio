import { Card, CardContent, Typography, Box } from "@mui/material";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        borderRadius: 3,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        p: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        height: "100%",
      }}
    >
    
      <Box sx={{ fontSize: 50, color: "primary.main", mb: 2 }}>{icon}</Box>
      <Box>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" >
        {description}
      </Typography>
      </Box>
    </Card>
  );
};

export default ServiceCard;