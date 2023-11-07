import React from 'react'
import {Box, Grid, Paper} from '@mui/material';
import { Bread } from '../../components/customs/Bread';
import { HomeRounded, LoginRounded } from '@mui/icons-material';
import { ImgAcceso } from './ImgAcceso';
import { FormAcceso } from './FormAcceso';

export const Acceso = () => {
  return (
    <Box sx={{bgcolor: "background.default", marginBottom: 2}}>
      {/* BREADCRUBS */}
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "ACCESO", ruta: "/acceso", icono: <LoginRounded/>}]}/>
      {/* CONTENIDO */}
      <Paper elevation={0}>
        <Grid container spacing={1}>
          {/* IMAGEN */}
          <Grid item md={7} sm={6} xs={12} order={{md:1, sm:1, xs:2}} display={{md: "block", sm: "block", xs: "none"}}>
            <ImgAcceso/>
          </Grid>
          {/* FORMULARIO */}
          <Grid item md={5} sm={6} xs={12} order={{md:2, sm:2, xs:1}} sx={{display: "flex", alignItems:"center"}}>
            <FormAcceso/>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}
