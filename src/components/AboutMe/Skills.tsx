import { Box, Typography, Tooltip, useTheme } from "@mui/material";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import ReactImage from "../../assets/skills/react.png"
import JavascriptImage from "../../assets/skills/javascript.png";
import FirebaseImage from "../../assets/skills/firebase.png";
import GithubImage from "../../assets/skills/github.png";
import SQLImage from "../../assets/skills/sql.png";
import PostmanImage from "../../assets/skills/postman.png";
import AWSImage from "../../assets/skills/aws.png";
import FilezillaImage from "../../assets/skills/filezilla.png";
import AndroidImage from "../../assets/skills/android.png";
import AppleImage from "../../assets/skills/apple.png";

const skillItems = [
  {
    label: "JavaScript",
    img: JavascriptImage,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "React",
    img: ReactImage,
    link: "https://reactjs.org",
  },
  {
    label: "Firebase",
    img: FirebaseImage,
    link: "https://firebase.google.com",
  },
  {
    label: "GitHub",
    img: GithubImage,
    link: "https://www.github.com/",
  },
  {
    label: "SQL",
    img: SQLImage,
    link: "https://www.mysql.com/",
  },
  {
    label: "AWS",
    img: AWSImage,
    link: "https://aws.amazon.com/",
  },
  {
    label: "Postman",
    img: PostmanImage,
    link: "https://www.postman.com/",
  },
  {
    label: "FileZilla",
    img: FilezillaImage,
    link: "https://filezilla-project.org/",
  },
  {
    label: "Playstore",
    img: AndroidImage,
    link: "https://play.google.com",
  },
  {
    label: "Appstore",
    img: AppleImage,
    link: "https://www.apple.com/cl/app-store/",
  },
];

const Skills = () => {
  const theme = useTheme();
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const x = useSpring(scrollXProgress, { stiffness: 100, damping: 20 });
  const width = useTransform(x, (value: number) => `${value * 100}%`);
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
          <Tooltip key={index} title={skill.label} arrow>
            <Box
              onClick={() => window.open(skill.link, "_blank")}
              sx={{
                minWidth: 120,
                height: 120,
                bgcolor: theme.palette.mode === "dark" ? "#1f1f1f" : "#f4f4f4",
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                scrollSnapAlign: "start",
                flexShrink: 0,
                boxShadow: theme.palette.mode === "dark" ? 2 : 3,
                transition: "all 0.3s",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <img
                src={skill.img}
                alt={skill.label}
                style={{ width: 80, height: 80, objectFit: "contain" }}
              />
            </Box>
          </Tooltip>
        ))}
      </Box>

    </Box>
  );
};

export default Skills;
