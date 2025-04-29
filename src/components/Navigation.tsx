import { BottomNavigation, BottomNavigationAction, Paper, Tooltip } from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PersonIcon from '@mui/icons-material/Person';

type Page = "AboutMe" | "Contact" | "Porfolio" | "Resume";
interface NavigationProps {
  setCurrentPage: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ setCurrentPage }) => {
  const handleChange = (event: React.SyntheticEvent, newValue: Page) => {
    setCurrentPage(newValue);
  };

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels onChange={handleChange}>
        <Tooltip title="AboutMe" placement="top">
          <BottomNavigationAction value="AboutMe" label="About" icon={<PersonIcon />} />
        </Tooltip>
        <Tooltip title="Porfolio" placement="top">
          <BottomNavigationAction value="Porfolio" label="Portfolio" icon={<WorkIcon />} />
        </Tooltip>
        <Tooltip title="Contact" placement="top">
          <BottomNavigationAction value="Contact" label="Contact" icon={<ContactMailIcon />} />
        </Tooltip>
      </BottomNavigation>
    </Paper>
  );
};

export default Navigation;

