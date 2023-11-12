import React, { useState, useEffect } from "react";
// import { WrapperSingleRoute } from "../../../components/customs/WrapperSingleRoute";
import { Grid, Toolbar, TextField, MenuItem, Box, Button } from "@mui/material";
import { Bread } from "../../../components/customs/Bread";
import { Form } from "semantic-ui-react";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import RollerSkatingOutlinedIcon from "@mui/icons-material/RollerSkatingOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../elements/Elements.Tienda";
import { colores, tallas, marcas, generos } from "./optionList";
import GroupSkeleton from "../GroupSkeleton";
import { app } from "../../../config/firebaseConnection";
import MediaControlCard from '../MediaControlCard';

const Calzado = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const [color, setColor] = useState("");
  const [talla, setTalla] = useState("");
  const [marca, setMarca] = useState("");
  const [genero, setGenero] = useState("");
  const [proyectos, setProyectos] = useState([]);

  const obtenerInfo = async () => {
    const docList = await app.firestore().collection("productos").get();
    const data = docList.docs.filter(
      (doc) => doc.data().categoria === "calzado"
    );
    setProyectos(data);
    // console.log(data)
    // setDocs(listHombre);
    // setTablaProyectos(listHombre);
  };

  useEffect(() => {
    obtenerInfo();
  }, []);

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Grid container>
        <Grid item xs={12}>
          <Bread
            migas={[
              { miga: "INICIO", ruta: "/inicio", icono: <HomeIcon /> },
              { miga: "TIENDA", ruta: "/tienda", icono: <StoreIcon /> },
              {
                miga: "CALZADO",
                ruta: "/tienda/calzado",
                icono: <RollerSkatingOutlinedIcon />,
              },
            ]}
          />
        </Grid>
      </Grid>
      {/* Contenido */}
      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        sx={{ bgcolor: "background.paper", p: 1 }}
      >
        {/* B U S C A D O R 1 */}
        <Grid item xs={12}>
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar…"
                inputProps={{ "aria-label": "search" }}
                // value={busqueda}
                // onChange={handleChange}
              />
            </Search>
          </Toolbar>
        </Grid>

        {/* B U S C A D O R 2 -- FIltros*/}
        <Grid item md={4} sm={6} xs={6}>
          <TextField
            component={Form.Input}
            fullWidth
            select
            label="Color"
            type="text"
            name="color"
            color="secondary"
            onChange={(e) => setColor(e.target.value)}
            value={color || ""}
            autoComplete="off"
          >
            {colores.map((color) => (
              <MenuItem key={color.value} value={color.value}>
                {color.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item md={4} sm={6} xs={6}>
          <TextField
            component={Form.Input}
            fullWidth
            select
            label="Talla"
            type="text"
            color="secondary"
            name="talla"
            onChange={(e) => setTalla(e.target.value)}
            value={talla || ""}
            autoComplete="off"
          >
            {tallas.map((talla) => (
              <MenuItem key={talla.value} value={talla.value}>
                {talla.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* BUSCADOR */}
        <Grid item md={4} sm={12} xs={12}>
          <Box display="flex" height="100%">
            <Button fullWidth variant="contained" color="secondary">
              {" "}
              {/* onClick={handleSearch} */}
              Buscar
            </Button>
          </Box>
        </Grid>

        <Grid item md={4} sm={6} xs={6}>
          <TextField
            component={Form.Input}
            fullWidth
            select
            label="Marca"
            type="text"
            name="marca"
            onChange={(e) => setMarca(e.target.value)}
            value={marca || ""}
            autoComplete="off"
          >
            {marcas.map((marca) => (
              <MenuItem key={marca.value} value={marca.value}>
                {marca.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item md={4} sm={6} xs={6}>
          <TextField
            component={Form.Input}
            fullWidth
            select
            label="Genero"
            type="text"
            name="genero"
            onChange={(e) => setGenero(e.target.value)}
            value={genero || ""}
            autoComplete="off"
          >
            {generos.map((genero) => (
              <MenuItem key={genero.value} value={genero.value}>
                {genero.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Box sx={{ p: { xs: 1, md: 3 }, flexGrow: 1 }}>
        <Grid container spacing={{ xs: 3, sm: 2, md: 2 }}>
          {proyectos.length === 0 ? (
            <GroupSkeleton />
          ) : (
            proyectos.map((proyecto, index) => {
              return (
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4} key={index}>
                  <MediaControlCard
                    proyecto={proyecto}
                    handleClickOpen={handleClickOpen}
                  />
                </Grid>
              );
            })
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Calzado;
