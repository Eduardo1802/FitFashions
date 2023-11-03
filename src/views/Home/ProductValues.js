import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import productCurvyLines from "./png/productCurvyLines.png";
import ropa from './svg/ropa.svg'
import calzado from './svg/calzado.svg'
import equipamiento from './svg/equipamiento.svg'
import nutricion from "./svg/nutricion.svg";
import Typography from "../../components/items/Typography";


const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const ProductValues = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
        // bgcolor: "secondary.contrastText",
        background: '#eeeeee'
      }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative", maxWidth: "100%" }}>
        <Box
          component="img"
          src={productCurvyLines}
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          {/* ROPA */}
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Box
                component="img"
                src={ropa}
                alt="suitcase"
                sx={{ height: 65 }}
              />
              <Typography variant="h6" sx={{ my: 5, textAlign: "center" }}>
                Ropa 
              </Typography>
              <Typography variant="h5">
                {
                    "Ofrecemos una variedad de ropa deportiva. Esto incluye camisetas, pantalones cortos, mallas, chaquetas,"
                }
                {
                    "sudaderas, camisetas de compresión y otros tipos de prendas diseñadas para diferentes actividades deportivas."
                }
              </Typography>
            </Box>
          </Grid>
          {/* CALZADO */}
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Box
                component="img"
                src={calzado}
                alt="graph"
                sx={{ height: 65 }}
              />
              <Typography variant="h6" sx={{ my: 5, textAlign: "center"}}>
                Calzado 
              </Typography>
              <Typography variant="h5">
                {
                    "Ofrecemos una amplia gama de calzado para diferentes deportes, como zapatillas para correr, "
                }
                {
                    "botas de fútbol, zapatillas de baloncesto, zapatillas de tenis, sandalias deportivas y más."
                }
              </Typography>
            </Box>
          </Grid>
          {/* EQUIPAMIENTO */}
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Box
                component="img"
                src={equipamiento}
                alt="clock"
                sx={{ height: 65 }}
              />
              <Typography variant="h6" sx={{ my: 5, textAlign: "center" }}>
                Equipamiento 
              </Typography>
              <Typography variant="h5">
                {
                    "Ofrecemos una amplia selección de equipos deportivos, como balones, raquetas, palos de golf, guantes, "
                }
                {
                    "cascos, redes, pesas y otros artículos necesarios para diversas disciplinas deportivas."
                }
              </Typography>
            </Box>
          </Grid>
          {/* NUTRICIÓN */}
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Box
                component="img"
                src={nutricion}
                alt="clock"
                sx={{ height: 65 }}
              />
              <Typography variant="h6" sx={{ my: 5, textAlign: "center" }} >
                Accesorios y nutrición
              </Typography>
              <Typography variant="h5">
                {"Ofrecemos distintos articulos como mochilas,relojes deportivos, suplementos nutricionales, "}
                {"y otros productos relacionados con el bienestar y el rendimiento deportivo."}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductValues;
