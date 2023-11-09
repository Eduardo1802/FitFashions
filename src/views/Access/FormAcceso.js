import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  IconButton,
  TextField,
  Container,
  InputAdornment,
  Paper,
  Typography,
  Button,
  Grid,
  Divider
} from "@mui/material";
import { Form } from "semantic-ui-react";
import { useAccessForm } from "./useAccessForm";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  usePassword,
  handleMouseDownPassword,
} from "../../components/context/UsePassword";
import LoginIcon from "@mui/icons-material/Login";
import DeleteIcon from "@mui/icons-material/Delete";
import GoogleIcon  from "../../components/assets/img/iconGoogleV2.svg"

export const FormAcceso = () => {
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, handleClickShowPassword] = usePassword(false);
  const formik = useAccessForm({
    setError,
    open,
    setOpen,
    setSnackbarOpen,
    setVariant,
  });
  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 2 }} elevation={0}>
        <Typography variant="h4" color="black" textAlign="center">
          Inicia sesión 
          {/* en FitFashion */}
        </Typography>
        <Typography variant="body1" color="black" textAlign="center" mb={3}>
          Descubre, adquiere y comparte tus opiniones sobre los productos
          deportivos más destacados de la temporada.
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs>
            <Button
              type="button"
              fullWidth
              variant="outlined"
              aria-label="iniciar sesión con google"
              color="secondary"
            //   onClick={handleGoogleSignin}
              startIcon={
                <img height="25rem" alt="googleIcon" src={GoogleIcon} />
              }
              sx={{
                backgroundColor: "#efeaed",
                textTransform: "none",
                borderRadius: "20rem",
                "&:hover": { backgroundColor: "#eae8e9" },
              }}
            >
              Iniciar sesión con Google
            </Button>
          </Grid>
        </Grid>
        <Divider sx={{ my: 1 }}>o</Divider>

        {/* formulario */}
        <Box
          component={Form}
          onSubmit={formik.handleSubmit}
          sx={{
            "& > :not(style)": { my: { md: 1, sm: 0.75, xs: 0.5 } },
          }}
        >
          {/* CORREO */}
          <TextField
            component={Form.Input}
            fullWidth
            label="Correo electronico"
            type="text"
            name="email"
            color="secondary"
            // onChange={formik.handleChange}
            // error={formik.errors.email ? true : false}
            // helperText={formik.errors.email}
            // value={formik.values.email}
            autoComplete="off"
            aria-label="por favor ingrese su correo electronico"
          />
          {/* CONTRASEÑA */}
          <TextField
            component={Form.Input}
            fullWidth
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            name="password"
            color="secondary"
            // onChange={formik.handleChange}
            // error={formik.errors.password ? true : false}
            // helperText={formik.errors.password}
            // value={formik.values.password}
            aria-label="por favor ingrese su contraseña"
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
                type="submit"
                fullWidth
                variant="contained"
                aria-label="enviar formulario de acceso"
                endIcon={<LoginIcon />}
                color="secondary"
              >
                Entrar
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                type="button"
                fullWidth
                variant="outlined"
                aria-label="limpiar formulario de acceso"
                // onClick={formik.handleReset}
                color="secondary"
                endIcon={<DeleteIcon />}
              >
                Limpiar
              </Button>
            </Grid>
          </Grid>
          {/* enlaces */}
          <Grid container spacing={1}>
            <Grid item xs>
              <Typography textAlign="center" variant="body2">
                ¿Sin cuenta?{" "}
                <Link
                  to="/registro"
                  aria-label="ir a la sección de registro en corazón huasteco"
                >
                  registrate
                </Link>
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography textAlign="center" variant="body2">
                <Link
                  // to="/acceso/restaurar-pass"
                  aria-label="ir a la sección de restaurar contraseña"
                >
                  Restablecer
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};
