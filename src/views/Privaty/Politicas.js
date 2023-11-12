import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, Paper } from "@mui/material";
import { Bread } from "../../components/customs/Bread";
import { HomeRounded, SecurityRounded } from "@mui/icons-material";
import Text from './Text2'

export const Politicas = () => {
  return (
    <Box sx={{ bgcolor: "background.default" }}>
      {/* Breadcrumbs */}
      <Bread
        migas={[
          { miga: "INICIO", ruta: "/inicio", icono: <HomeRounded /> },
          {
            miga: "POLÍTICAS DE PRIVACIDAD",
            ruta: "/politicas-de-privacidad",
            icono: <SecurityRounded />,
          },
        ]}
      />

      {/* Aviso de privacidad */}
      <Paper elevation={0}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h4" color="secondary" textAlign="center">
              Políticas de privacidad
            </Typography>
          </Grid>
          {/* Contenido */}
          <Grid item xs={12}>
            <Text/>
          </Grid>
        </Grid>
      </Paper>
    </Box>

  )
}
