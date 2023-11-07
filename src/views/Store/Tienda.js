import * as React from 'react';
import { Grid } from '@mui/material'
import {Bread} from '../../components/customs/Bread'
import  {WrapperSingleRoute}  from '../../components/customs/WrapperSingleRoute';
// import ProductCategories from '../Home/ProductCategories';


export const Tienda = () => {
  return (
    <WrapperSingleRoute>
      <Grid container>
        {/* B R E A D C R U M B S */}
        <Grid item xs={12}>
          <Bread migas={[{ miga: "INICIO", ruta: "/inicio" }, { miga: "TIENDA", ruta: "/tienda" }]} />
        </Grid>
      </Grid>
      {/* <ProductCategories /> */}
    </WrapperSingleRoute>
  )
}
