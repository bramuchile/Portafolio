
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Tooltip,
  useTheme,
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PersonIcon from '@mui/icons-material/Person';
import TimelineIcon from '@mui/icons-material/Timeline';

type Page = "AboutMe" | "Contact" | "Porfolio" | "Resume";

interface NavigationProps {
  setCurrentPage: (page: Page) => void;
  currentPage: Page;
}

const Navigation: React.FC<NavigationProps> = ({ setCurrentPage, currentPage }) => {
  const theme = useTheme();

  const handleChange = (_event: React.SyntheticEvent, newValue: Page) => {
    setCurrentPage(newValue);
  };

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels value={currentPage} onChange={handleChange}>
        {[
          { key: "AboutMe", label: "About", icon: <PersonIcon /> },
          { key: "Resume", label: "Resume", icon: <TimelineIcon /> },
          { key: "Porfolio", label: "Portfolio", icon: <WorkIcon /> },
          { key: "Contact", label: "Contact", icon: <ContactMailIcon /> },
        ].map((item) => (
          <Tooltip key={item.key} title={item.label} placement="top">
            <BottomNavigationAction
              value={item.key}
              label={item.label}
              icon={item.icon}
              sx={{
                color:
                  currentPage === item.key
                    ? theme.palette.primary.main
                    : theme.palette.text.primary,
              }}
            />
          </Tooltip>
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default Navigation;
