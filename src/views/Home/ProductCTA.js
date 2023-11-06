import React from "react"; // , { useState }
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "../../components/items/Typography";
import TextField from "../../components/items/TextField";
import Button from "../../components/items/Button";
import productCTAImageDots from './png/productCTAImageDots.png'

const ProductCTA = () => {
  // const [open, setOpen] = useState(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Container component="section" sx={{ mt: 10, display: "flex" }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              background: "#d1c4e9",
              py: 8,
              px: 3,
            }}
          >
            <Box
              component="form"
              // onSubmit={handleSubmit}
              sx={{ maxWidth: 400 }}
            >
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                Contacto
              </Typography>
              <Typography variant="h5">
                Si tiene alguna pregunta, inquietud o simplemente desea obtener
                más información sobre nuestros productos y servicios, no dude en
                comunicarse con nosotros.
              </Typography>
              <TextField
                noBorder
                placeholder="Escribe tu mensaje"
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 2 }}
              />
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: "100%" }}
              >
                Enviar
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: "100%",
              background: `url(${productCTAImageDots})`,
            }}
          />
          <Box
            component="img"
            // src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750"
            src="https://firebasestorage.googleapis.com/v0/b/fit-fashions.appspot.com/o/Home%2Ffull_logo.png?alt=media&token=1493d5be-957c-4bbb-9055-1ac086e46d48&_gl=1*ycsckb*_ga*NjQ4NjA4NzUxLjE2OTU0NjExOTc.*_ga_CW55HF8NVT*MTY5OTE1OTk4MC40My4xLjE2OTkxNjAxMjUuNS4wLjA."
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductCTA;
