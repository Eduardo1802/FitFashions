import React from 'react'
import {Box, Grid, Paper} from '@mui/material';
import { Bread } from '../../components/customs/Bread';
import { HomeRounded, HowToRegRounded } from '@mui/icons-material';
import { ImgRegistro } from './ImgRegistro';
import FormRegistro from './FormRegistro';

export const Registro = () => {
  return (
    <Box sx={{bgcolor: "background.default"}}>
      {/* BREADCRUMBS */}
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "REGISTRO", ruta: "/registro", icono: <HowToRegRounded/>}]}/>
      {/* CONTENIDO */}
      <Paper elevation={0} sx={{marginBottom: 2}}>
        <Grid container spacing={1}>
          {/* IMAGEN */}
          <Grid item xl={5} lg={4} md={3} sm={1} xs={12} order={{md:2, sm:2, xs:1}} display={{md: "block", sm: "block", xs: "none"}}> 
            <ImgRegistro/>
          </Grid>
          
          {/* FORMULARIO */}
          <Grid item xl={7} lg={8} md={9} sm={11} xs={12} order={{md:1, sm:1, xs:2}} sx={{display: "flex", alignItems:"center"}}>
            <FormRegistro />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}
