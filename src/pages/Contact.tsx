import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      {/* Título */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Contact
      </Typography>

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

      {/* Formulario de contacto */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        Contact Form
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={3}>
          {/* Nombre y correo */}
          <Grid size={{ xs:12, sm:6}}>
            <TextField
              fullWidth
              label="Full name"
              variant="outlined"
              sx={{ bgcolor: "background.paper", borderRadius: 1 }}
            />
          </Grid>
          <Grid size={{ xs:12, sm:6}}>
            <TextField
              fullWidth
              label="Email address"
              variant="outlined"
              sx={{ bgcolor: "background.paper", borderRadius: 1 }}
            />
          </Grid>

          {/* Asunto */}
          <Grid size={12}>
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              sx={{ bgcolor: "background.paper", borderRadius: 1 }}
            />
          </Grid>

          {/* Mensaje */}
          <Grid size={12}>
            <TextField
              fullWidth
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
              sx={{ bgcolor: "background.paper", borderRadius: 1 }}
            />
          </Grid>

          {/* Botón de envío */}
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
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;