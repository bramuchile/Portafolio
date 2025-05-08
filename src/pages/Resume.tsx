import {
  Box,
  Typography,
  Divider,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const Resume = () => {
  return (
    <Box
      sx={{
        maxWidth: "900px",
        mx: "auto",
        py: 6,
        px: { xs: 2, sm: 4 },
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ borderBottom: "3px solid #f0b90b", display: "inline-block", mb: 6 }}
      >
        Resume
      </Typography>

      {/* Education */}
      <Section icon={<SchoolIcon />} title="Education">
        <ResumeItem
          title="Nihareeka College Of Management And Information Technology"
          subtitle="Bachelor of Science in Computer Science and Information Technology (BSc. CSIT)"
          date="2017 — 2021"
        />
        <ResumeItem
          title="Greenland International College"
          subtitle="+2 Science"
          date="2015 — 2017"
        />
      </Section>

      {/* Experience */}
      <Section icon={<WorkIcon />} title="Experience">
        <ResumeItem
          title="Mid-Level Flutter Developer"
          subtitle="Tolfam Technologies, Kathmandu, Nepal"
          date="Aug, 2024 – Present · 10 mos"
          bullets={[
            "Developed new features and implemented UI designs using Flutter.",
            "Created scrollable forms, Google & Facebook auth.",
            "Used BLoC pattern and API integrations.",
          ]}
        />
        <ResumeItem
          title="Flutter Developer"
          subtitle="Infoneer Technology, Kathmandu, Nepal"
          date="Oct, 2022 – Aug, 2024 · 1 yr, 11 mos"
          bullets={[
            "Developed UI and optimized performance.",
            "Integrated eSewa for transactions.",
            "Wrote clean and scalable code.",
          ]}
        />
        <ResumeItem
          title="Flutter Developer Intern"
          subtitle="YAI Tech Pvt. Ltd, Kathmandu, Nepal"
          date="May, 2022 – Sep, 2022 · 5 mos"
          bullets={[
            "Maintained Flutter apps.",
            "Worked with cross-functional teams.",
            "Debugged and refined features.",
          ]}
        />
      </Section>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="contained"
          color="warning"
          startIcon={<DownloadIcon />}
          sx={{
            borderRadius: "30px",
            fontWeight: "bold",
            px: 4,
            py: 1,
            textTransform: "none",
            boxShadow: 3,
          }}
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
};

export default Resume;

// ---------- Subcomponents ----------

const Section = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <Box sx={{ mb: 6 }}>
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <Avatar
        sx={{
          bgcolor: "warning.main",
          width: 32,
          height: 32,
          mr: 1,
        }}
      >
        {icon}
      </Avatar>
      <Typography variant="h6" fontWeight="bold">
        {title}
      </Typography>
    </Box>
    <Divider sx={{ mb: 3, width: "50px", borderBottomWidth: 3, borderColor: "warning.main" }} />
    <Box>{children}</Box>
  </Box>
);

const ResumeItem = ({
  title,
  subtitle,
  date,
  bullets,
}: {
  title: string;
  subtitle: string;
  date: string;
  bullets?: string[];
}) => (
  <Grid container spacing={2} sx={{ position: "relative", mb: 5 }}>
    {/* Timeline bar */}
    <Grid
      size={{ xs: 1 }}
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: 12,
          height: 12,
          bgcolor: "warning.main",
          borderRadius: "50%",
          mt: 1,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: "50%",
          width: "2px",
          height: "calc(100% - 16px)",
          bgcolor: "divider",
        }}
      />
    </Grid>

    {/* Main content */}
    <Grid size={{ xs: 11 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 9 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {subtitle}
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 3 }}
          sx={{ textAlign: { xs: "left", sm: "right" }, color: "text.disabled" }}
        >
          <Typography variant="caption">{date}</Typography>
        </Grid>
      </Grid>

      {bullets && (
        <List dense sx={{ pl: 2, mt: 1 }}>
          {bullets.map((point, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}
            >
              <ListItemText primary={point} />
            </ListItem>
          ))}
        </List>
      )}
    </Grid>
  </Grid>
);
