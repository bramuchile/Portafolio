import {
  Paper,
  Typography,
  Avatar,
  Stack,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTranslation } from "react-i18next";

const AvatarCard = () => {
  const { t } = useTranslation();
  return (
    <Paper
      sx={{
        p: 3,
        bgcolor: "#1E1E1E", // Fondo oscuro
        textAlign: "center",
        borderRadius: 5,
        color: "white",
        maxWidth: 300,
        mx: "auto",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 120,
          height: 120,
          mx: "auto",
          mb: 2,
          mt: 4
        }}
      >
        <Avatar
          src="/avatar.png"
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "#2C2C2C",
            borderRadius: 4,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 8,
            right: 8,
            width: 16,
            height: 16,
            bgcolor: "limegreen",
            borderRadius: "50%",
            border: "2px solid #1E1E1E",
          }}
        />
      </Box>

      <Typography variant="h6" fontWeight="bold">
        Carlos Bravo Muñoz
      </Typography>

      <Box
        sx={{
          display: "inline-block",
          bgcolor: "#2B2B2C",
          px: 4,
          borderRadius: 2,
          fontSize: 12,
          mt: 2,
          mb: 2,
          py: 1,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",


        }}
      >
        {t("software_engineer")}
      </Box>

      <Divider sx={{ my: 2, bgcolor: "rgba(255,255,255,0.1)" }} />

      {/* Contact Info */}
      <Stack spacing={2}>
        <InfoItem icon={<MailOutlineIcon />} label="EMAIL" value="carlos.bravo..." />
        <InfoItem icon={<PhoneAndroidIcon />} label="PHONE" value="+9 7575 ****" />
        <InfoItem icon={<LocationOnIcon />} label="LOCATION" value="Curicó, Chile" />
      </Stack>

      {/* Social icons */}
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 1 }}>
        <IconButton sx={{ color: "white" }}><LinkedInIcon fontSize="small" /></IconButton>
        <IconButton sx={{ color: "white" }}><GitHubIcon fontSize="small" /></IconButton>
        <IconButton sx={{ color: "white" }}><GoogleIcon fontSize="small" /></IconButton>
        <IconButton sx={{ color: "white" }}><TwitterIcon fontSize="small" /></IconButton>
      </Box>
    </Paper>
  );
};

// Reusable contact item
const InfoItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <Box sx={{
    display: "flex",
    alignItems: "center",
    p: 1.2,
    borderRadius: 2,
    gap: 1.5
  }}>
    <Box
      sx={{
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        alignItems: "center",
        bgcolor: "#2C2C2C",
        p: 1,
        borderRadius: 2,
        width: "60px"
      }}
    >
      <Box sx={{ color: "gold" }}>{icon}</Box>
    </Box>
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="caption"
        sx={{ fontSize: 10, opacity: 0.6 }}
      >
        {label}
      </Typography>
      <Typography variant="body2" sx={{ fontSize: 13 }}>
        {value}
      </Typography>
    </Box>
  </Box>
);

export default AvatarCard;
