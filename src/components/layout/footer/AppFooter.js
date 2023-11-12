import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import facebook from "react-useanimations/lib/facebook";
import instagram from "react-useanimations/lib/instagram";
import youtube from "react-useanimations/lib/youtube";
import UseAnimations from "react-useanimations";
import { LinkStyled } from "./footer.elements";
import { Link } from "react-router-dom";
import { Typography, TextField, CardMedia } from "@mui/material";
import imgLogo1 from "../navbar/logo.png";
import productCurvyLines from "../../../views/Home/png/productCurvyLines.png";

const LANGUAGES = [
  {
    id: 1,
    code: "es-ES",
    name: "Español",
  },
  {
    id: 2,
    code: "en-US",
    name: "Inglés",
  },
];

export const AppFooter = () => {
  // const [open, setOpen] = useState(false);
  // const handleClick = () => {
  //   setOpen(true);
  // };

  return (
    <Box
      component="section"
      sx={{ display: "flex", background: "#eeeeee", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 5,
          mb: 8,
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
        <Grid container spacing={2} pb={3}>
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            order={{ xs: 6, sm: 1, md: 1 }}
            container
            alignItems="center"
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              spacing={2}
            >
              {/* REDES */}
              <Grid
                item
                container
                direction="row"
                justifyContent={{
                  xs: "center",
                  sm: "flex-start",
                  md: "flex-start",
                }}
                wrap="nowrap"
              >
                <Link to="https://es-la.facebook.com/" target="_BLANK">
                  <UseAnimations
                    animation={facebook}
                    size={56}
                    strokeColor={"#616161"}
                  />
                </Link>
                <Link to="https://www.instagram.com/" target="_BLANK">
                  <UseAnimations
                    animation={instagram}
                    size={56}
                    strokeColor={"#616161"}
                  />
                </Link>
                <Link to="https://youtube.com/" target="_BLANK">
                  <UseAnimations
                    animation={youtube}
                    size={56}
                    strokeColor={"#616161"}
                  />
                </Link>
              </Grid>
              {/* DERECHOS DEL SITIO */}
              <Grid
                item
                container
                justifyContent={{
                  xs: "center",
                  sm: "flex-start",
                  md: "flex-start",
                }}
              >
                <Typography variant="body1" sx={{ color: "black" }}>
                  &#169; Fit Fashion 2023
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* ENLACES */}
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            order={{ xs: 1, sm: 3, md: 2 }}
            container
            direction="column"
            alignItems="flex-start"
          >
            <Typography
              variant="h6"
              component="p"
              sx={{ color: "black" }}
              // sx={{ color: theme.palette.background.paper }}
            >
              Categorias
            </Typography>
            <LinkStyled to="tienda">Ropa</LinkStyled>
            <LinkStyled to="tienda">Calzado</LinkStyled>
            <LinkStyled to="tienda">Equipamiento</LinkStyled>
            <LinkStyled to="tienda">Nutrición</LinkStyled>
          </Grid>
          {/* SOBRE NOSOTROS */}
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            order={{ xs: 2, sm: 4, md: 3 }}
            container
            direction="column"
            alignItems="flex-start"
          >
            <Typography variant="h6" component="p" sx={{ color: "black" }}>
              Sobre nosotros
            </Typography>
            <LinkStyled to="sobre-nosotros">Acerca de nosotros</LinkStyled>
            <LinkStyled to="sobre-nosotros">Misión, visión y valores</LinkStyled>
            <LinkStyled to="terminos-y-condiciones">Términos y condiciones</LinkStyled>
            <LinkStyled to="sobre-nosotros">Políticas de privacidad</LinkStyled>
          </Grid>
          {/* SOPORTE */}
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            order={{ xs: 3, sm: 5, md: 4 }}
            container
            direction="column"
            alignItems="flex-start"
          >
            <Typography variant="h6" component="p" sx={{ color: "black" }}>
              Soporte
            </Typography>
            <LinkStyled to="#">Preguntas frecuentes</LinkStyled>
            <LinkStyled to="#">Ayuda en linea</LinkStyled>
            <LinkStyled to="#">Confianza y seguridad</LinkStyled>
          </Grid>
          {/* LENGUAJE */}
          <Grid item xs={12} sm={8} md={9} order={{ xs: 4, sm: 2, md: 5 }}>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: "black" }}
            >
              Idioma
            </Typography>
            <TextField
              // onChange={handleClick}
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{
                mt: 1,
                width: 150,
                "& .MuiInputBase-root": {
                  color: "black",
                  bgcolor: "background.paper",
                },
                "& .MuiSelect-root": {
                  bgcolor: "secondary.main",
                  color: "black",
                },
              }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          {/* LOGO */}
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            order={{ xs: 5, sm: 6, md: 6 }}
            container
            direction="row"
            justifyContent={{ xs: "center", sm: "flex-end", md: "flex-start" }}
          >
            <CardMedia
              sx={{
                // mt: {xs: 10, sm: 5, md: 10},
                width: 90,
                bgcolor: "transparent",
              }}
              component="img"
              height={90}
              image={imgLogo1}
              alt="icono-fitfashion"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
