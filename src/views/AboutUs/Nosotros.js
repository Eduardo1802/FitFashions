import React from "react";
import { Bread } from "../../components/customs/Bread";
import { Grid, Typography, Paper, Box } from "@mui/material";
import { HomeRounded, BusinessRounded } from "@mui/icons-material";
import imgAus from "./SobreNosotros.webp";
import imgMural from "./full_logo.webp";
import TimelineUsLarge from "./TimelineUsLarge";
import TimelineUsSmall from './TimelineUsSmall';

export const Nosotros = () => {
  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <Bread
        migas={[
          { miga: "INICIO", ruta: "/inicio", icono: <HomeRounded /> },
          {
            miga: "SOBRE NOSOTROS",
            ruta: "/sobre-nosotros",
            icono: <BusinessRounded />,
          },
        ]}
      />
      <Paper elevation={0}>
        <Grid container spacing={1}>
          <Grid item xs sx={{ p: 3 }}>
            <Typography variant="h4" color="secundary" textAlign="center">
              Sobre nosotros
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
          <TimelineUsLarge imgAus={imgAus} imgMural={imgMural} />
        </Box>
        <Box
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <TimelineUsSmall imgAus={imgAus} imgMural={imgMural} />
        </Box>
      </Paper>
    </Box>
  );
};
