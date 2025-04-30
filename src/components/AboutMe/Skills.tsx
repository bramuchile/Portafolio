import { Grid, Typography, Box } from "@mui/material";
import FlutterIcon from "@mui/icons-material/FlutterDash"; // Ejemplo, reemplaza con íconos personalizados si es necesario
import DartIcon from "@mui/icons-material/Code"; // Ejemplo
import FirebaseIcon from "@mui/icons-material/Fireplace"; // Ejemplo
import DesignIcon from "@mui/icons-material/Brush"; // Ejemplo

const Skills = () => {
  const skills = [
    { icon: <DartIcon />, label: "Dart" },
    { icon: <FlutterIcon />, label: "Flutter" },
    { icon: <FirebaseIcon />, label: "Firebase" },
    { icon: <DesignIcon />, label: "UI/UX Design" },
  ];

  return (
    <>
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
        Skills
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid size={{xs:6, sm:3}} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  fontSize: 60,
                  color: "primary.main",
                  mb: 1,
                }}
              >
                {skill.icon}
              </Box>
              <Typography variant="body1" fontWeight="bold">
                {skill.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Skills;