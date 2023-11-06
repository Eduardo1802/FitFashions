import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../../components/items/Typography";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/fit-fashions.appspot.com/o/Secciones%2Fropa.png?alt=media&token=6d4e7cc2-eba8-454e-891f-f8b5e57e4ac9&_gl=1*1i68leq*_ga*NjQ4NjA4NzUxLjE2OTU0NjExOTc.*_ga_CW55HF8NVT*MTY5OTA0ODkyMy40MS4xLjE2OTkwNTA3NTMuMzEuMC4w",
    title: "ROPA",
    width: "50%",
    path: "/tienda",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/fit-fashions.appspot.com/o/Secciones%2Fcalzado.png?alt=media&token=ddec121d-dfc8-476f-97b6-95c94f52e1cf&_gl=1*1xo6txb*_ga*NjQ4NjA4NzUxLjE2OTU0NjExOTc.*_ga_CW55HF8NVT*MTY5OTA0ODkyMy40MS4xLjE2OTkwNDg5MzQuNDkuMC4w",
    title: "CALZADO",
    width: "50%",
    path: "/tienda",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/fit-fashions.appspot.com/o/Secciones%2Fequipamiento.png?alt=media&token=c9674b60-ba98-4426-a2c3-b8887f6c717c&_gl=1*1wz4z7b*_ga*NjQ4NjA4NzUxLjE2OTU0NjExOTc.*_ga_CW55HF8NVT*MTY5OTA0ODkyMy40MS4xLjE2OTkwNDk4MjYuNDkuMC4w",
    title: "EQUIPAMIENTO",
    width: "50%",
    path: "/tienda",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/fit-fashions.appspot.com/o/Secciones%2Fnutricion.png?alt=media&token=c570dc2c-8648-417c-a7ae-f0a0387ab34a&_gl=1*k5467a*_ga*NjQ4NjA4NzUxLjE2OTU0NjExOTc.*_ga_CW55HF8NVT*MTY5OTA0ODkyMy40MS4xLjE2OTkwNDk5NDcuNDQuMC4w",    
    title: "NUTRICIÓN",
    width: "50%",
    path: "/tienda",
  },
];

const ProductCategories = () => {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center">
        <Button
          variant="text"
          sx={{ fontSize: 40, color: "text.primary" }}
          component={Link}
          to="/tienda"
        >
          Categorías
        </Button>
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
            component={Link}
            to={`${image.path}`}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
};

export default ProductCategories;
