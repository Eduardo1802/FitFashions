import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import productCurvyLines from "./png/productCurvyLines.png";
import Typography from "../../components/items/Typography";
import nike from './svg/nike.svg'
import adidas from './svg/adidas.svg'
import pumas from './svg/puma.svg'

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

const image = {
  height: 55,
  my: 4,
};

const ProductHowItWorks = () => {
  return (
    <Box
      component="section"
      sx={{ display: "flex", background: "#eeeeee", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={productCurvyLines}
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14, textAlign: "center" }}>
          Marcas destacadas
        </Typography>
        <div>
          <Grid container spacing={5}>
            {/* NIKE */}
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>Nike</Box>
                {/* <Typography variant="h5" align="center">Nike</Typography> */}
                <Box
                  component="img"
                  src={nike}
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                    Una marca líder en innovación y diseño de productos deportivos.
                </Typography>
              </Box>
            </Grid>
            {/* ADIDAS */}
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>Adidas</Box>
                <Box
                  component="img"
                  src={adidas}
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                    Con productos de calidad y estilo, Adidas es una elección popular entre los atletas.
                </Typography>
              </Box>
            </Grid>
            {/* PUMA */}
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>Puma</Box>
                <Box
                  component="img"
                  src={pumas}
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                    Ofrece una amplia gama de productos deportivos de alto rendimiento con un toque de estilo.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
};

export default ProductHowItWorks;
