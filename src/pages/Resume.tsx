
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
  Container,
  useTheme
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Container sx={{ mt: 2, mb: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {t("resumePage.title")}
      </Typography>
      <Box
        sx={{
          width: 40,
          height: 4,
          bgcolor: theme.palette.primary.main,
          borderRadius: 2,
          mb: 3,
        }}
      />

      <Section icon={<SchoolIcon />} title={t("resumePage.education.title")}>
        <ResumeItem
          title={t("resumePage.education.item1.title")}
          subtitle={t("resumePage.education.item1.subtitle")}
          date="2016"
        />
        <ResumeItem
          title={t("resumePage.education.item2.title")}
          subtitle={t("resumePage.education.item2.subtitle")}
          date="2014"
        />
        <ResumeItem
          title={t("resumePage.education.item3.title")}
          subtitle={t("resumePage.education.item3.subtitle")}
          date="2011"
        />
      </Section>

      <Section icon={<WorkIcon />} title={t("resumePage.experience.title")}>
        {Array.from({ length: 7 }).map((_, i) => (
          <ResumeItem
            key={i}
            title={t(`resumePage.experience.item${i + 1}.title`)}
            subtitle={t(`resumePage.experience.item${i + 1}.subtitle`)}
            date={t(`resumePage.experience.item${i + 1}.date`)}
            bullets={t(`resumePage.experience.item${i + 1}.bullets`, { returnObjects: true })}
          />
        ))}
      </Section>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<DownloadIcon />}
          sx={{
            borderRadius: "30px",
            fontWeight: "bold",
            px: 4,
            py: 1,
            textTransform: "none",
            boxShadow: 3,
          }}
          href="/cv_carlos_bravo.pdf"
          download
        >
          {t("resumePage.download")}
        </Button>
      </Box>
    </Container>
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
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ mb: 6 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Avatar
          sx={{
            bgcolor: theme.palette.primary.main,
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
      <Divider sx={{ mb: 3, width: "50px", borderBottomWidth: 3, borderColor: theme.palette.primary.main }} />
      <Box>{children}</Box>
    </Box>
  );
};

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
}) => {
  const theme = useTheme();
  return (
    <Grid container spacing={2} sx={{ position: "relative", mb: 5 }}>
      <Grid size={{ xs: 1 }} sx={{ display: "flex", justifyContent: "center", position: "relative" }}>
        <Box
          sx={{
            width: 12,
            height: 12,
            bgcolor: theme.palette.primary.main,
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
            bgcolor: theme.palette.divider,
          }}
        />
      </Grid>

      <Grid size={{ xs: 11 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 9 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
              {subtitle}
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 3 }}
            sx={{ textAlign: { xs: "left", sm: "right" }, color: theme.palette.text.disabled }}
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
};
