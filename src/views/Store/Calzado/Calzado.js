import React from "react";
import { WrapperSingleRoute } from "../../../components/customs/WrapperSingleRoute";
import { Grid } from "@mui/material";
import { Bread } from "../../../components/customs/Bread";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import RollerSkatingOutlinedIcon from '@mui/icons-material/RollerSkatingOutlined';

const Calzado = () => {
  return (
    <WrapperSingleRoute>
      <Grid container>
        <Grid item xs={12}>
          <Bread
            migas={[
              { miga: "INICIO", ruta: "/inicio", icono: <HomeIcon /> },
              { miga: "TIENDA", ruta: "/tienda", icono: <StoreIcon /> },
              { miga: "CALZADO", ruta: "/tienda/calzado", icono: <RollerSkatingOutlinedIcon /> },
            ]}
          />
        </Grid>
      </Grid>
    </WrapperSingleRoute>
  )
}

export default Calzado