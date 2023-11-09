import React from "react";
import {
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  // Collapse,
  //   MenuItem,
  //   Checkbox,
  //   FormControlLabel,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {
    usePassword,
    handleMouseDownPassword,
} from "../../components/context/UsePassword"

const FormRegistro = () => {
  const [showPassword, handleClickShowPassword] = usePassword(false);

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 2 }} elevation={0}>
        <Typography
          variant="h5"
          color="secondary.main"
          sx={{ textAlign: "center", margin: "15px 0" }}
        >
          Crea una cuenta nueva
        </Typography>
        <Box
          component={Form}
          //   onSubmit={formik.handleSubmit}
          sx={{
            "& > :not(style)": { my: { md: 1, sm: 0.75, xs: 0.5 } },
          }}
        >
          {/* NOMBRE Y APELLIDOS */}
          <Grid container spacing={1}>
            <Grid item md={6} sm={6} xs={12}>
              {/* NOMBRE */}
              <TextField
                component={Form.Input}
                fullWidth
                label="Nombre(s)"
                type="text"
                name="name"
                color="secondary"
                // onChange={formik.handleChange}
                // error={formik.errors.name ? true : false}
                // helperText={formik.errors.name}
                // value={formik.values.name}
                autoComplete="off"
                aria-label="por favor ingresa tu nombre"
              />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              {/* APELLIDOS */}
              <TextField
                component={Form.Input}
                fullWidth
                label="Apellidos"
                type="text"
                name="lastName"
                color="secondary"

                // onChange={formik.handleChange}
                // error={formik.errors.lastName ? true : false}
                // helperText={formik.errors.lastName}
                // value={formik.values.lastName}
                autoComplete="off"
                aria-label="por favor ingresa tus apellidos"
              />
            </Grid>
          </Grid>
          {/* <Grid item xs={12} md={9}>
              <TextField
                fullWidth
                label="Correo electronico"
                type="text"
                name="email"
                // onChange={(e) => {
                //   formik.handleChange(e);
                //   setEmail(e.target.value);
                // }}
                // error={formik.errors.email ? true : false}
                // helperText={formik.errors.email}
                // value={formik.values.email || email}
                // disabled={estado ? true : false}
                autoComplete="off"
                aria-label="por favor ingresa tu correo electronico"
              />
            </Grid> */}
            <Box
              sx={{
                "& > :not(style)": { my: { md: 1, sm: 0.75, xs: 1 } },
              }}
            >
                <TextField
                fullWidth
                label="Correo electronico"
                type="text"
                name="email"
                // onChange={(e) => {
                //   formik.handleChange(e);
                //   setEmail(e.target.value);
                // }}
                // error={formik.errors.email ? true : false}
                // helperText={formik.errors.email}
                // value={formik.values.email || email}
                // disabled={estado ? true : false}
                autoComplete="off"
                aria-label="por favor ingresa tu correo electronico"
              />
              {/* CONTRASEÑA */}
              <TextField
                component={Form.Input}
                fullWidth
                label="Contraseña"
                // type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="off"
                aria-label="por favor ingresa tu contraseña"
                // onChange={formik.handleChange}
                // error={formik.errors.password ? true : false}
                // helperText={formik.errors.password}
                // value={formik.values.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="mostrar u ocultar contraseña"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {/* BOTONES */}
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <Button
                    aria-label="enviar formulario para registro en corazon huasteco"
                    type="submit"
                    fullWidth
                    variant="contained"
                    endIcon={<LoginIcon />}
                    color="secondary"
                  >
                    Registrar
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    aria-label="limpiar formulario de registro en corazón huasteco"
                    type="button"
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    // onClick={formik.handleReset}
                    endIcon={<DeleteIcon />}
                  >
                    Limpiar
                  </Button>
                </Grid>
              </Grid>
            </Box>
            {/* enlaces */}
          <Grid container spacing={1}>
              <Grid item xs>
                <Typography textAlign="center" variant="body1">
                  ¿Tienes cuenta? <Link to="/acceso" aria-label="ir a la sección de iniciar sesion">inicia sesión</Link>
                </Typography>
              </Grid>
            </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default FormRegistro;
