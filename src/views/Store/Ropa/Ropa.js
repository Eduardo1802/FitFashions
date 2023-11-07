import React from "react";
import { WrapperSingleRoute } from "../../../components/customs/WrapperSingleRoute";
import { Grid } from "@mui/material";
import { Bread } from "../../../components/customs/Bread";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import CheckroomSharpIcon from '@mui/icons-material/CheckroomSharp';

const Ropa = () => {
  return (
    <WrapperSingleRoute>
      <Grid container>
        <Grid item xs={12}>
          <Bread
            migas={[
              { miga: "INICIO", ruta: "/inicio", icono: <HomeIcon /> },
              { miga: "TIENDA", ruta: "/tienda", icono: <StoreIcon /> },
              { miga: "ROPA", ruta: "/tienda/ropa", icono: <CheckroomSharpIcon /> },
            ]}
          />
        </Grid>
      </Grid>
    </WrapperSingleRoute>
  );
};

export default Ropa;
