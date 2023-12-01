import React, { useState } from "react";
import { Link } from "react-router-dom";
// import withRoot from "./withRoot";
import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Grid,
  Divider
} from "@mui/material";
import { Form } from "react-final-form";
import { required } from "../../components/form/validation";
import FormButton from "../../components/form/FormButton";
import LoginIcon from "@mui/icons-material/Login";
// import DeleteIcon from "@mui/icons-material/Delete";
import { app } from "../../config/firebaseConnection";
import Swal from "sweetalert2";
import { useAuth } from "../../components/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon  from "../../components/assets/img/iconGoogleV2.svg"
import {
  usePassword,
  handleMouseDownPassword,
} from "../../components/context/UsePassword";

const FormAcceso = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    if (!password) return;
    const coleccionRef = app.firestore().collection("usuarios");
    const querySnapshot = await coleccionRef.where("email", "==", email).get();
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      const storedPassword = userData.password;
      await login(email, password);
      // console.log(storedPassword)
      if (password !== storedPassword) {
        // Contraseña incorrecta
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Contraseña incorrecta",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      navigate("/inicio");
    } else {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Correo no registrado, por favor regístrate",
        showConfirmButton: false,
        timer: 3500,
      });
      return;
    }
  };

  const validate = (values) => {
    const errors = required(["email", "password"], values);
    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }
    return errors;
  };

  const [showPassword, handleClickShowPassword] = usePassword(false);

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
                color: "#9c27b0",
                borderColor: "#9c27b0",
                textTransform: "none",
                borderRadius: "20rem",
                "&:hover": { backgroundColor: "#eae8e9", color: "#9c27b0", borderColor: "#9c27b0", },
              }}
            >
              Iniciar sesión con Google
            </Button>
          </Grid>
        </Grid>
        <Divider sx={{ my: 1 }}>o</Divider>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box
              component="form"
              onSubmit={handleSubmit2}
              noValidate
              sx={{
                "& > :not(style)": { my: { md: 1, sm: 0.75, xs: 0.5 } },
              }}
            >
              <TextField
                fullWidth
                label="Correo electrónico"
                name="email"
                type="email"
                color="secondary"
                value={email || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);
                }}
                required
                error={email.length === 0 || !/\S+@\S+\.\S+/.test(email)}
                helperText={
                  email.length === 0
                    ? "El correo electrónico no puede estar vacío"
                    : !/\S+@\S+\.\S+/.test(email)
                    ? "Ingrese un correo electrónico válido"
                    : ""
                }
              />
              <TextField
                fullWidth
                label="Contraseña"
                name="password"
                color="secondary"
                value={password || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setPassword(value);
                }}
                required
                error={
                  (password.length > 0 &&
                    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}/.test(
                      password
                    )) ||
                  password.length === 0
                }
                helperText={
                  password.length === 0 ? (
                    <span style={{ color: "red" }}>
                      La contraseña no puede estar vacía
                    </span>
                  ) : password.length > 0 &&
                    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}/.test(
                      password
                    ) ? (
                    "La contraseña debe tener al menos 5 caracteres, incluyendo al menos 1 letra minúscula, 1 letra mayúscula, 1 número y 1 carácter especial."
                  ) : (
                    ""
                  )
                }
                type={showPassword ? "text" : "password"}
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

              <FormButton
                type="submit"
                fullWidth
                variant="contained"
                aria-label="enviar formulario de acceso"
                color="secondary"
                endIcon={<LoginIcon />}
                onClick={handleSubmit}
              >
                Entrar
              </FormButton>
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
          )}
        </Form>
      </Paper>
    </Container>
  );
};

export default FormAcceso;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Box,
//   IconButton,
//   TextField,
//   Container,
//   InputAdornment,
//   Paper,
//   Typography,
//   Button,
//   Grid,
//   Divider
// } from "@mui/material";
// import { Form } from "semantic-ui-react";
// import { useAccessForm } from "./useAccessForm";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import {
//   usePassword,
//   handleMouseDownPassword,
// } from "../../components/context/UsePassword";
// import LoginIcon from "@mui/icons-material/Login";
// import DeleteIcon from "@mui/icons-material/Delete";
// import GoogleIcon  from "../../components/assets/img/iconGoogleV2.svg"

// export const FormAcceso = () => {
//   const [open, setOpen] = useState(false);
//   const [variant, setVariant] = useState("");
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, handleClickShowPassword] = usePassword(false);
//   const formik = useAccessForm({
//     setError,
//     open,
//     setOpen,
//     setSnackbarOpen,
//     setVariant,
//   });
//   return (
//     <Container maxWidth="sm">
//       <Paper sx={{ p: 2 }} elevation={0}>
//         <Typography variant="h4" color="black" textAlign="center">
//           Inicia sesión
//           {/* en FitFashion */}
//         </Typography>
//         <Typography variant="body1" color="black" textAlign="center" mb={3}>
//           Descubre, adquiere y comparte tus opiniones sobre los productos
//           deportivos más destacados de la temporada.
//         </Typography>

        // <Grid container spacing={1}>
        //   <Grid item xs>
        //     <Button
        //       type="button"
        //       fullWidth
        //       variant="outlined"
        //       aria-label="iniciar sesión con google"
        //       color="secondary"
        //     //   onClick={handleGoogleSignin}
        //       startIcon={
        //         <img height="25rem" alt="googleIcon" src={GoogleIcon} />
        //       }
        //       sx={{
        //         backgroundColor: "#efeaed",
        //         textTransform: "none",
        //         borderRadius: "20rem",
        //         "&:hover": { backgroundColor: "#eae8e9" },
        //       }}
        //     >
        //       Iniciar sesión con Google
        //     </Button>
        //   </Grid>
        // </Grid>
        // <Divider sx={{ my: 1 }}>o</Divider>

//         {/* formulario */}
//         <Box
//           component={Form}
//           onSubmit={formik.handleSubmit}
//           sx={{
//             "& > :not(style)": { my: { md: 1, sm: 0.75, xs: 0.5 } },
//           }}
//         >
//           {/* CORREO */}
//           <TextField
//             component={Form.Input}
//             fullWidth
//             label="Correo electronico"
//             type="text"
//             name="email"
//             color="secondary"
//             // onChange={formik.handleChange}
//             // error={formik.errors.email ? true : false}
//             // helperText={formik.errors.email}
//             // value={formik.values.email}
//             autoComplete="off"
//             aria-label="por favor ingrese su correo electronico"
//           />
//           {/* CONTRASEÑA */}
//           <TextField
//             component={Form.Input}
//             fullWidth
//             label="Contraseña"
//             type={showPassword ? "text" : "password"}
//             name="password"
//             color="secondary"
//             // onChange={formik.handleChange}
//             // error={formik.errors.password ? true : false}
//             // helperText={formik.errors.password}
//             // value={formik.values.password}
//             aria-label="por favor ingrese su contraseña"
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="mostrar u ocultar contraseña"
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                   >
//                     {showPassword ? <Visibility /> : <VisibilityOff />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />

//           {/* BOTONES */}
//           <Grid container spacing={1}>
//             <Grid item xs={12} md={6}>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 aria-label="enviar formulario de acceso"
//                 endIcon={<LoginIcon />}
//                 color="secondary"
//               >
//                 Entrar
//               </Button>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Button
//                 type="button"
//                 fullWidth
//                 variant="outlined"
//                 aria-label="limpiar formulario de acceso"
//                 // onClick={formik.handleReset}
//                 color="secondary"
//                 endIcon={<DeleteIcon />}
//               >
//                 Limpiar
//               </Button>
//             </Grid>
//           </Grid>
          // {/* enlaces */}
          // <Grid container spacing={1}>
          //   <Grid item xs>
          //     <Typography textAlign="center" variant="body2">
          //       ¿Sin cuenta?{" "}
          //       <Link
          //         to="/registro"
          //         aria-label="ir a la sección de registro en corazón huasteco"
          //       >
          //         registrate
          //       </Link>
          //     </Typography>
          //   </Grid>
          //   <Grid item xs>
          //     <Typography textAlign="center" variant="body2">
          //       <Link
          //         // to="/acceso/restaurar-pass"
          //         aria-label="ir a la sección de restaurar contraseña"
          //       >
          //         Restablecer
          //       </Link>
          //     </Typography>
          //   </Grid>
          // </Grid>
//         </Box>
//       </Paper>
//     </Container>
//   );
// };
