import * as React from 'react';
import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductCategories from './ProductCategories';

export const Inicio = () => {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
    </React.Fragment>
  )
}
