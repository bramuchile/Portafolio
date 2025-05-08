import {
  Paper,
  Typography,
  Avatar,
  Stack,
  Box,
  IconButton,
  Divider,
  Tooltip,
  Grid,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

const AvatarCard = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  // For small screens, use the expand toggle; for large, always show
  const showDetails = !isSmallScreen || expanded;

  return (
    
      <Paper
        sx={{
          p: isSmallScreen  ? 2 : 3,
          
          bgcolor: "background.paper",
          textAlign: "center",
          borderRadius: 5,
          color: "white",
          width: "100%",
          mx: "auto",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          position: "relative",
          
        }}
      >
        {/* Botón visible solo en pantallas pequeñas */}
        {isSmallScreen && (
          <IconButton
            onClick={() => setExpanded(!expanded)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              padding: "4px",
              "&:hover": { color: "#aaa" },
            }}
            size="small"
          >
            {expanded ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
          </IconButton>
        )}
        <Box sx={{ display:isSmallScreen ? "flex" : "block", alignItems:isSmallScreen ? "flex-start": "center"}}>

        <Box
          sx={{
            position: "relative",
            width: isSmallScreen ? 80 : 120,
            height: isSmallScreen ? 80 : 120,
            mx: isSmallScreen ? 0 : "auto",
            my: isSmallScreen ? 1 : 2,
            
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
          <Tooltip title="Disponible para trabajar" arrow placement="top">
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
                animation: `${pulse} 1.5s infinite ease-in-out`,
              }}
            />
          </Tooltip>
        </Box>
        <Box sx={{ px:2, mt:2}}>

        <Typography variant={isSmallScreen ? "subtitle1" :"h5"} fontWeight="bold" textAlign={isSmallScreen ? "left" : "center"}>
          Carlos Bravo
        </Typography>

        <Box
          sx={{
            display: "inline-block",
            bgcolor: "#2B2B2C",
            px: 4,
            borderRadius: 2,
            fontSize: 12,
            mt: isSmallScreen ? 1 : 2,
            mb: 2,
            py: 1,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          {t("software_engineer")}
        </Box>
        </Box>
        </Box>

        {isSmallScreen ? (
          <Collapse in={expanded}>
            <DetailsSection />
          </Collapse>
        ) : (
          <DetailsSection />
        )}
      </Paper>
    
  );
};

const DetailsSection = () => (
  <>
    <Divider sx={{ my: 2, bgcolor: "rgba(255,255,255,0.1)" }} />

    <Stack spacing={2}>
      <InfoItem icon={<MailOutlineIcon />} label="EMAIL" value="carlos.bravo..." />
      <InfoItem icon={<PhoneAndroidIcon />} label="PHONE" value="+9 7575 ****" />
      <InfoItem icon={<LocationOnIcon />} label="LOCATION" value="Curicó, Chile" />
    </Stack>

    <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 1.5 }}>
      <StyledSocialIcon icon={<LinkedInIcon fontSize="small" />} />
      <StyledSocialIcon icon={<GitHubIcon fontSize="small" />} />
      <StyledSocialIcon icon={<GoogleIcon fontSize="small" />} />
      <StyledSocialIcon icon={<TwitterIcon fontSize="small" />} />
    </Box>
  </>
);

const InfoItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <Box sx={{ display: "flex", alignItems: "center", p: 1.2, borderRadius: 2, gap: 1.5 }}>
    <Box
      sx={{
        alignItems: "center",
        bgcolor: "#2C2C2C",
        p: 1.2,
        borderRadius: 2,
        boxShadow: "0px 2px 6px rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center",
        width: "45px",
        height: "45px",
      }}
    >
      <Box sx={{ color: "gold" }}>{icon}</Box>
    </Box>
    <Box sx={{ textAlign: "left" }}>
      <Typography variant="caption" sx={{ fontSize: 10, opacity: 0.6 }}>
        {label}
      </Typography>
      <Typography variant="body2" sx={{ fontSize: 13 }}>
        {value}
      </Typography>
    </Box>
  </Box>
);

const StyledSocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <IconButton
    sx={{
      bgcolor: "#2B2B2B",
      color: "white",
      "&:hover": {
        bgcolor: "#3C3C3C",
      },
      boxShadow: "0px 2px 6px rgba(0,0,0,0.3)",
    }}
  >
    {icon}
  </IconButton>
);

export default AvatarCard;
