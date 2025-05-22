import { Box, Typography, useTheme } from "@mui/material";
import {
  Code as JSIcon,
  DataObject as ReactIcon,
  PhoneIphone as ReactNativeIcon,
  Fireplace as FirebaseIcon,
  Storage as SQLIcon,
  Cloud as AWSIcon,
  Http as PostmanIcon,
  Folder as FilezillaIcon,
} from "@mui/icons-material";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const skillItems = [
  { label: "JavaScript", icon: <JSIcon sx={{ fontSize: 40, color: "#f7df1e" }} /> },
  { label: "React", icon: <ReactIcon sx={{ fontSize: 40, color: "#61dafb" }} /> },
  { label: "React Native", icon: <ReactNativeIcon sx={{ fontSize: 40, color: "#61dafb" }} /> },
  { label: "Firebase", icon: <FirebaseIcon sx={{ fontSize: 40, color: "#FFA000" }} /> },
  { label: "SQL", icon: <SQLIcon sx={{ fontSize: 40, color: "#00758F" }} /> },
  { label: "AWS", icon: <AWSIcon sx={{ fontSize: 40, color: "#FF9900" }} /> },
  { label: "Postman", icon: <PostmanIcon sx={{ fontSize: 40, color: "#FF6C37" }} /> },
  { label: "FileZilla", icon: <FilezillaIcon sx={{ fontSize: 40, color: "#FF0000" }} /> },
];

const Skills = () => {
  const theme = useTheme();
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const x = useSpring(scrollXProgress, { stiffness: 100, damping: 20 });
  const width = useTransform(x, (value: number) => `${value * 100}%`); // Use useTransform
  const { t } = useTranslation();

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        {t("skills")}
      </Typography>

      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          pb: 2,
          px: 1,
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {skillItems.map((skill, index) => (
          <Box
            key={index}
            sx={{
              minWidth: 90,
              height: 90,
              bgcolor: theme.palette.mode === "dark" ? "#1f1f1f" : "#f4f4f4",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              scrollSnapAlign: "start",
              flexShrink: 0,
              boxShadow: theme.palette.mode === "dark" ? 2 : 3,
              transition: "all 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            {skill.icon}
          </Box>
        ))}
      </Box>

      {/* Scroll Indicator */}
      <Box
        sx={{
          height: 3,
          width: "100%",
          bgcolor: "divider",
          borderRadius: 1,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <motion.div
          style={{
            height: 3,
            backgroundColor: "#f1c40f",
            borderRadius: 1,
            width: width,
          }}
        />
      </Box>
    </Box>
  );
};

export default Skills;
