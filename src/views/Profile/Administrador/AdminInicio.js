import React, { useState } from "react";
import {Box, Chip,Button, Container, Grid, Stack, Typography, useMediaQuery} from "@mui/material";
import { useAuth } from "../../../components/context/AuthContext";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import { BannerProfile } from "./BannerProfile";
import EditIcon from '@mui/icons-material/Edit';
import { messaging } from "../../../config/firebase";
import { getToken, onMessage } from "firebase/messaging";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

export const AdminInicio = () => {
  const [name, setName] = useState("");
  const { user } = useAuth();
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  console.log("vista administrador: id del usuario =>", user.uid);

  // const activarMensajes = async () => {
  //   const token = await getToken(messaging,{
  //     vapidKey:"BOYdk8LrLhI4UdE3pbBWr8SF8dnStE1e-iNn-CD0V0bpFURgGjd_SQF3ScCGnBkgkxeYPTfVBz774uN4Dya1RV4"
  //   }).catch(error => console.log("Tuviste un error al generar el token: ",error));

  //   if(token) console.log("Tu token:",token);
  //   if(!token) console.log("No tienes Token");
  // }

  const activarMensajes = async () => {
    try {
      const token = await getToken(messaging, {
        vapidKey: "BOYdk8LrLhI4UdE3pbBWr8SF8dnStE1e-iNn-CD0V0bpFURgGjd_SQF3ScCGnBkgkxeYPTfVBz774uN4Dya1RV4"
      });
  
      console.log("Tu token:", token);
      setName(token)
    } catch (error) {
      console.error("Error al generar el token:", error.message);
    }
  }

  React.useEffect(()=>{
    onMessage(messaging, message=>{
      console.log("Tu mensaje:", message);
      toast(message.notification.title);
    })
  })

  return (
    <Box>
      {/* <ToastContainer>
        <Button onClick={activarMensajes}>Generar Token</Button>
      </ToastContainer> */}
      {/* CONTENEDOR GRID */}
      <Grid container sx={{ bgcolor: "background.paper" }}>
        <Grid item xs={12}>
          <BannerProfile />
        </Grid>

        <Grid container sx={{ position: "relative", bottom: "70px",  marginTop: "100px", justifyContent:"center" }}>
          {/* DATOS PERFIL */}
          <Grid item md={6} sm={8} xs={12} >
            <Box sx={{ display: "flex", height: "100%", flexDirection: "column", justifyContent: "flex-end", }}>
              <Stack direction="row" justifyContent={{ md: "left", sm: "left", xs: "center" }}>
                <Chip
                  icon={<AdminPanelSettingsRoundedIcon />}
                  label="Administrador"
                  color="success"
                  sx={{ background: "#9C27B0", color:"white" }}
                />
              </Stack>
              <Typography textAlign={{ md: "left", sm: "left", xs: "center" }} variant="h5">
                Hola, Bienvenido
              </Typography>
              <Typography textAlign={{ md: "left", sm: "left", xs: "center" }} variant="body1">
                {user ? user.email : user.displayName}
              </Typography>
            </Box>
          </Grid>
          {/* FIN DATOS PERFIL */}

          {/* BOTON EDITAR PERFIL */}
          <Grid item md={3} sm={12} xs={12}>
            <Box sx={{ height: "100%", display: "flex", alignItems: "flex-end", p: 3, justifyContent:"center" }}>
              <Button variant="contained" startIcon={<EditIcon/>} color="secondary" aria-label='abrir ventana para editar el perfil' onClick={activarMensajes}>Activar Notificaciones</Button>
            </Box>
          </Grid>
          {/* FIN BOTON EDITAR PERFIL */}
        </Grid>

        <Container maxWidth="md" sx={{ marginTop: "-60px", p: 3 }}>
          <Typography sx={{fontStyle: "italic"}} variant={isSmallScreen ? "body1" : "h5"}>
            Tu token:  {name}
          </Typography>
          <hr />
          <Typography sx={{fontStyle: "italic"}} variant={isSmallScreen ? "body1" : "h5"}>
            "Bienvenido a nuestra tienda deportiva online. Ofrecemos productos de alta calidad para entusiastas del fitness y amantes del deporte al aire libre. Descubre moda deportiva, equipos innovadores y accesorios especializados. Únete a nuestra comunidad para elevar tu experiencia deportiva. ¡Haz de cada entrenamiento una victoria y cada actividad al aire libre una aventura inolvidable con nosotros!"
          </Typography>
        </Container>
      </Grid>
      {/* FIN CONTENEDOR GRID */}
    </Box>
  )
}
