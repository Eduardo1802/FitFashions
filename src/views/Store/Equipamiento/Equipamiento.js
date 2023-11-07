import React from "react";
import { WrapperSingleRoute } from "../../../components/customs/WrapperSingleRoute";
import { Grid } from "@mui/material";
import { Bread } from "../../../components/customs/Bread";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Equipamiento = () => {
  return (
    <WrapperSingleRoute>
      <Grid container>
        <Grid item xs={12}>
          <Bread
            migas={[
              { miga: "INICIO", ruta: "/inicio", icono: <HomeIcon /> },
              { miga: "TIENDA", ruta: "/tienda", icono: <StoreIcon /> },
              { miga: "EQUIPAMIENTO", ruta: "/tienda/ropa", icono: <FitnessCenterIcon /> },
            ]}
          />
        </Grid>
      </Grid>
    </WrapperSingleRoute>
  )
}

export default Equipamiento