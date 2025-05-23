
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Container,
  useTheme
} from "@mui/material";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Container sx={{ mt: 2, mb: 4 }}>
      {/* Título */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {t("contactPage.title")}
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

      {/* Mapa */}
      <Box
        sx={{
          width: "100%",
          height: "300px",
          borderRadius: 3,
          overflow: "hidden",
          mb: 4,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104608.86183327694!2d-71.31018968674078!3d-34.980990116691956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966519c706a5d7d3%3A0xd0866d47d2259f4!2zQ3VyaWPDsywgTWF1bGU!5e0!3m2!1ses-419!2scl!4v1746148963534!5m2!1ses-419!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </Box>

      {/* Formulario */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        {t("contactPage.formTitle")}
      </Typography>

      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label={t("contactPage.fullName")}
              variant="outlined"
              sx={{
                bgcolor: theme.palette.background.paper,
                borderRadius: 1,
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label={t("contactPage.email")}
              variant="outlined"
              sx={{
                bgcolor: theme.palette.background.paper,
                borderRadius: 1,
              }}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              label={t("contactPage.subject")}
              variant="outlined"
              sx={{
                bgcolor: theme.palette.background.paper,
                borderRadius: 1,
              }}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              label={t("contactPage.message")}
              variant="outlined"
              multiline
              rows={4}
              sx={{
                bgcolor: theme.palette.background.paper,
                borderRadius: 1,
              }}
            />
          </Grid>
          <Grid size={12} sx={{ textAlign: "right" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                px: 4,
                py: 1,
                borderRadius: 2,
              }}
              endIcon={<span>🚀</span>}
            >
              {t("contactPage.send")}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
