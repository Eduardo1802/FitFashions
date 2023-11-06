import * as React from 'react';
import ProductHeroLayout from './ProductHeroLayout';
import Typography from '../../components/items/Typography';
import Button from '../../components/items/Button';
import { Link } from 'react-router-dom';

const backgroundImage = 
  'https://firebasestorage.googleapis.com/v0/b/fit-fashions.appspot.com/o/Home%2Ffondo2.png?alt=media&token=c4e7fcc0-3259-4559-94e5-52989e58760c&_gl=1*1wp1y11*_ga*NjQ4NjA4NzUxLjE2OTU0NjExOTc.*_ga_CW55HF8NVT*MTY5ODk2MjI5MC4zOS4xLjE2OTg5NjUxNDYuNTMuMC4w'
  // 'https://firebasestorage.googleapis.com/v0/b/fit-fashions.appspot.com/o/Home%2Ffondo6.png?alt=media&token=8aaf21a2-f3e6-4e55-96d7-c3745f2026fe&_gl=1*18q3d12*_ga*NjQ4NjA4NzUxLjE2OTU0NjExOTc.*_ga_CW55HF8NVT*MTY5ODk2MjI5MC4zOS4xLjE2OTg5NjY4ODMuNDkuMC4w'
  // 'https://firebasestorage.googleapis.com/v0/b/fit-fashions.appspot.com/o/Home%2Ffondo7.png?alt=media&token=2337972f-2500-45b6-90e3-c1e5f8780ef9&_gl=1*1y3m706*_ga*NjQ4NjA4NzUxLjE2OTU0NjExOTc.*_ga_CW55HF8NVT*MTY5ODk2MjI5MC4zOS4xLjE2OTg5NjY5MzAuMi4wLjA.'
  // 'https://firebasestorage.googleapis.com/v0/b/fit-fashions.appspot.com/o/Home%2Ffondo5.png?alt=media&token=8aed2897-08ed-4156-81d5-db3ff6f242a2&_gl=1*14xqunz*_ga*NjQ4NjA4NzUxLjE2OTU0NjExOTc.*_ga_CW55HF8NVT*MTY5ODk2MjI5MC4zOS4xLjE2OTg5NjU4MTIuNTAuMC4w'
  // 'https://firebasestorage.googleapis.com/v0/b/fit-fashions.appspot.com/o/Home%2Ffondo4.png?alt=media&token=412c2df6-498b-43fa-aae8-4e3183c47198&_gl=1*15grzzd*_ga*NjQ4NjA4NzUxLjE2OTU0NjExOTc.*_ga_CW55HF8NVT*MTY5ODk2MjI5MC4zOS4xLjE2OTg5NjU2NTMuNDMuMC4w'
  // 'https://firebasestorage.googleapis.com/v0/b/fit-fashions.appspot.com/o/Home%2Ffondo3.png?alt=media&token=14166e28-651c-45bd-8334-861462eb13ab&_gl=1*a4kvds*_ga*NjQ4NjA4NzUxLjE2OTU0NjExOTc.*_ga_CW55HF8NVT*MTY5ODk2MjI5MC4zOS4xLjE2OTg5NjUzNTYuNDguMC4w'
  // 'https://firebasestorage.googleapis.com/v0/b/fit-fashions.appspot.com/o/Home%2Ffondo1.png?alt=media&token=e8a3035f-8279-4111-b196-eae6a10ec9a4&_gl=1*9vo1ot*_ga*NjQ4NjA4NzUxLjE2OTU0NjExOTc.*_ga_CW55HF8NVT*MTY5ODk2MjI5MC4zOS4xLjE2OTg5NjU0MzYuNTAuMC4w'

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
        to="/sign-up"
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
