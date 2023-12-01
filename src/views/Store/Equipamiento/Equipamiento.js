import React, { useState, useEffect } from "react";
// import { WrapperSingleRoute } from "../../../components/customs/WrapperSingleRoute";
import { Grid, Toolbar, TextField, MenuItem, Box, Button } from "@mui/material";
import { Bread } from "../../../components/customs/Bread";
import { Form } from "semantic-ui-react";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../elements/Elements.Tienda";
import { colores, marcas } from "./optionList";
import GroupSkeleton from "../GroupSkeleton";
import { app } from "../../../config/firebaseConnection";
import MediaControlCard from '../MediaControlCard';

const Equipamiento = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
    console.log(selectedProject)
    console.log(open)
  };

  const [proyectos, setProyectos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [tablaProyectos, setTablaProyectos] = useState([]);
  const [docs, setDocs] = useState([]);

  const recuperarDatosLocalmente = async () => {
    try {
      const datos = localStorage.getItem('productos');
      if (datos !== null) {
        const datosParseados = JSON.parse(datos);
        const datosFiltrados = datosParseados.filter(item => item.categoria === 'equipamiento');
        // console.log(datosFiltrados);
        setProyectos(datosFiltrados)
        setDocs(datosFiltrados);
        setTablaProyectos(datosFiltrados);
        console.log("Productos obtenidos del Storage.")
      }else{
        const productoSnapshot = await app.firestore().collection("productos").get();
        const productoData = productoSnapshot.docs.filter((doc) => doc.data().categoria === "equipamiento");
        setProyectos(productoData)
        setDocs(productoData);
        setTablaProyectos(productoData);
        console.log("Productos obtenidos de firebase.")
      }
    } catch (error) {
      console.error('Error al recuperar datos locales:', error);
    }
  }

  // const obtenerInfo = async () => {
  //   const docList = await app.firestore().collection("productos").get();
  //   const data = docList.docs.filter(
  //     (doc) => doc.data().categoria === "equipamiento"
  //   );
  //   setProyectos(data);
  //   // console.log(data)
  //   setDocs(data);
  //   setTablaProyectos(data);
  // };

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value.toString().toUpperCase());
    // console.log(e.target.value);
  }

  
  const filtrar = (terminoBusqueda) => {
    // eslint-disable-next-line
   var resultadoBusqueda = tablaProyectos.filter((elemento) => {
     if (elemento.modelo.includes(terminoBusqueda)) {
       return elemento;
     }
   });
   setProyectos(resultadoBusqueda);
   setDocs(resultadoBusqueda);
   console.log(isLoading)
   console.log(docs)
  }

  
  const [color, setColor] = useState("");
  const [marca, setMarca] = useState("");

  const handleSearch = async () => {
    try {
      const datos = localStorage.getItem('productos');
      const datosParseados = JSON.parse(datos);
      let filteredData = datosParseados.filter(item => item.categoria === 'equipamiento');
  
      if (color !== "Todos" && color !== "") {
        filteredData = filteredData.filter(item => item.color === color);
      }
   
      if (marca !== "Todos" && marca !== "") {
        filteredData = filteredData.filter(item => item.marca === marca);
      }
  
      setProyectos(filteredData);
  
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    recuperarDatosLocalmente()
    // Simulamos una carga de datos de 2 segundos
    const timeoutId = setTimeout(() => {
      // Una vez que se han cargado los datos, actualizamos el estado
      setIsLoading(false);
    }, 1000);
    // Limpiamos el timeout si el componente se desmonta antes de que termine la carga
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
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
                value={busqueda}
                onChange={handleChange}
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

        {/* BUSCADOR */}
        <Grid item md={4} sm={12} xs={12}>
          <Box display="flex" height="100%">
            <Button fullWidth variant="contained" color="secondary" onClick={handleSearch}>
              Buscar
            </Button>
          </Box>
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

export default Equipamiento