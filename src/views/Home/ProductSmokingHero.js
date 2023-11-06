import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "../../components/items/Typography";
import Box from '@mui/material/Box';
import logo512 from './svg/logo512.svg'

const ProductSmokingHero = () => {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 9,
      }}
    >
      <Button
        sx={{
          border: "4px solid currentColor",
          borderColor: "#7B1FA2",
          borderRadius: 0,
          height: "auto",
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span" sx={{ color: "#7B1FA2" }}>
          Estamos aquí para ayudar. 
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        ¡Ponerse en contacto!
      </Typography>
      <Box component="img" src={logo512} alt="icono" sx={{ width: 60 }} />
    </Container>
  );
};

export default ProductSmokingHero;
