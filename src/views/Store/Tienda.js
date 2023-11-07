import * as React from "react";
import { Grid } from "@mui/material";
import { Bread } from "../../components/customs/Bread";
import { WrapperSingleRoute } from "../../components/customs/WrapperSingleRoute";
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
// import ProductCategories from '../Home/ProductCategories';

export const Tienda = () => {
  return (
    <WrapperSingleRoute>
      <Grid container>
        {/* B R E A D C R U M B S */}
        <Grid item xs={12}>
          <Bread
            migas={[
              { miga: "INICIO", ruta: "/inicio", icono: <HomeIcon /> },
              { miga: "TIENDA", ruta: "/tienda", icono: <StoreIcon /> },
            ]}
          />
        </Grid>
      </Grid>
      {/* <ProductCategories /> */}
    </WrapperSingleRoute>
  );
};
