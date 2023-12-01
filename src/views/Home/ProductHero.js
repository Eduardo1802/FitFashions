import * as React from 'react';
import ProductHeroLayout from './ProductHeroLayout';
import Typography from '../../components/items/Typography';
import Button from '../../components/items/Button';
import { Link } from 'react-router-dom';
import backgroundImage from "./png/fondo2.png";

// const backgroundImage = 
//   'https://firebasestorage.googleapis.com/v0/b/fit-fashions.appspot.com/o/Home%2Ffondo2.png?alt=media&token=c4e7fcc0-3259-4559-94e5-52989e58760c&_gl=1*1wp1y11*_ga*NjQ4NjA4NzUxLjE2OTU0NjExOTc.*_ga_CW55HF8NVT*MTY5ODk2MjI5MC4zOS4xLjE2OTg5NjUxNDYuNTMuMC4w'

const ProductHero = () => {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#A5A7AC', 
        backgroundPosition: 'center',
      }}
    >
      {/* Aumentar la prioridad de carga de la imagen de fondo. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
        color="inherit"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center" >
        Uniendo estilo y tendencia en una fusión fashion
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
       Aprovecha un descuento del 10% en tu primera compra.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component={Link}
        to="/registro"
        sx={{ minWidth: 200 }}
      >
        Registro
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Descubre la experiencia
      </Typography>
    </ProductHeroLayout>
  )
}

export default ProductHero
