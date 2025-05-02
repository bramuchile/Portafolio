import { Typography, Box, List, ListItem, ListItemIcon, ListItemText, Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import DownloadIcon from "@mui/icons-material/Download";

const Resume = () => {
  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      {/* Education Section */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        Education
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <SchoolIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Nihareeka College Of Management And Information Technology"
            secondary="Bachelor of Science in Computer Science and Information Technology (BSc. CSIT) | 2017 – 2021"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SchoolIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Greenland International College"
            secondary="+2 Science | 2015 – 2017"
          />
        </ListItem>
      </List>

      {/* Experience Section */}
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
        Experience
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <WorkIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Mid-Level Flutter Developer | Tokimo Technologies"
            secondary="Aug 2024 – Present | Kathmandu, Nepal"
          />
        </ListItem>
        <Box sx={{ pl: 7, mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            • Developed new features and implemented UI designs into code using Flutter.<br />
            • Designed and created custom e-form features including scrolling features and data entries.<br />
            • Integrated Google and Facebook sign-in for user authentication.<br />
            • Designed dynamic functionalities using the BLOC design pattern.<br />
            • Implemented payment gateway integration like Khalti for secure transactions.<br />
            • Collaborated with other developers and backend team to deliver features.<br />
            • Ensured smooth functionality and user-friendly experiences throughout the app.<br />
          </Typography>
        </Box>

        <ListItem>
          <ListItemIcon>
            <WorkIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Flutter Developer | Infanceer Technology"
            secondary="Oct 2022 – Aug 2024 | Kathmandu, Nepal"
          />
        </ListItem>
        <Box sx={{ pl: 7, mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            • Developed new features and transformed UI designs into fully functional user interfaces.<br />
            • Integrated payment solution like eSewa for secure and seamless transactions.<br />
            • Optimized application performance to ensure a smooth and engaging user experience.<br />
            • Performed code review and deployed the app in Playstore and Appstore.<br />
          </Typography>
        </Box>

        <ListItem>
          <ListItemIcon>
            <WorkIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Flutter Developer Intern | YAI Tech Pvt. Ltd"
            secondary="May 2022 – Sep 2022 | Kathmandu, Nepal"
          />
        </ListItem>
        <Box sx={{ pl: 7 }}>
          <Typography variant="body2" color="text.secondary">
            • Assisted in developing and maintaining Flutter applications.<br />
            • Collaborated with cross-functional teams to deliver efficient, high-quality, and scalable solutions.<br />
            • Gained hands-on experience in debugging, troubleshooting, and refining app features.<br />
          </Typography>
        </Box>
      </List>

      {/* Download Button */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<DownloadIcon />}
          href="/path/to/cv.pdf"
          download
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
};

export default Resume;