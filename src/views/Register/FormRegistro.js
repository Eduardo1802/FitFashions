import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";
import { Form, FormSpy } from "react-final-form";
import Typography from "../../components/items/Typography";
// import AppForm from "./AppForm";
import { required } from "../../components/form/validation";
import FormButton from "../../components/form/FormButton";
import FormFeedback from "../../components/form/FormFeedback";
import {
  TextField,
  IconButton,
  InputAdornment,
  Container,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "../../components/context/AuthContext";
import { db } from "../../config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const FormRegistro = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordValid =
    password.length > 0 &&
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}/.test(
      password
    );
  const isSubmitDisabled =
    !firstName || !lastName || !email || !isPasswordValid;

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  
  const validate = (values) => {
    const errors = required(
      ["firstName", "lastName", "email", "password"],
      values
      );
      
      if (!errors.email) {
        const emailError = email(values.email);
        if (emailError) {
          errors.email = emailError;
        }
      }
      return errors;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (isSubmitDisabled) return;

    try {
      const info = await signup(email, password);
      console.log("Info:", info);

      const referencia = doc(db, "usuarios", info.user.uid);
      const querySnapshot = await getDoc(referencia);

      if (querySnapshot.exists()) {
        console.log("El correo ya está registrado");
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Correo existente",
          text: "La dirección de correo electrónico ya está registrada. Por favor, utiliza otro correo electrónico.",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      await setDoc(referencia, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        tipo_Usuario: "consultador",
      });

      // Mostrar mensaje de registro exitoso
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Registro exitoso!",
        text: "Ahora estás registrado. ¡Bienvenido!",
        showConfirmButton: false,
        timer: 1500,
      });

      // Puedes agregar más lógica aquí si es necesario

      navigate("/inicio");
    } catch (error) {
      console.log("Error:", error);

      if (error.code === "auth/email-already-in-use") {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Correo existente",
          text: "La dirección de correo electrónico ya está registrada. Por favor, utiliza otro correo electrónico.",
          showConfirmButton: false,
          timer: 1500,
        });
      } 
    }
    };

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
              sx={{ mt: 6 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nombre"
                    name="firstName"
                    value={firstName || ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      const regex = /^[a-zA-Z\s]*$/;

                      if (regex.test(value)) {
                        const formattedValue =
                          value.charAt(0).toUpperCase() + value.slice(1);

                        setFirstName(formattedValue);
                      }
                    }}
                    required
                    error={
                      firstName.length === 0 ||
                      firstName.length < 3 ||
                      firstName.length > 30
                    }
                    helperText={
                      firstName.length === 0
                        ? "El nombre no puede estar vacío"
                        : firstName.length < 3
                        ? "El nombre no puede tener menos de 3 caracteres"
                        : firstName.length > 30
                        ? "El nombre no puede tener más de 30 caracteres"
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Apellido"
                    name="LastName"
                    value={lastName || ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      const regex = /^[a-zA-Z\s]*$/;

                      if (regex.test(value)) {
                        const formattedValue =
                          value.charAt(0).toUpperCase() + value.slice(1);

                        setLastName(formattedValue);
                      }
                    }}
                    required
                    error={
                      lastName.length === 0 ||
                      lastName.length < 3 ||
                      lastName.length > 30
                    }
                    helperText={
                      lastName.length === 0
                        ? "El apellido no puede estar vacío"
                        : lastName.length < 3
                        ? "El apellido no puede tener menos de 3 caracteres"
                        : lastName.length > 30
                        ? "El apellido no puede tener más de 30 caracteres"
                        : ""
                    }
                  />
                </Grid>
              </Grid>
              <br />
              <TextField
                fullWidth
                label="Correo electrónico"
                name="email"
                type="email"
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
              <br />
              <br />
              <TextField
                fullWidth
                label="Contraseña"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                error={!isPasswordValid}
                helperText={
                  !isPasswordValid
                    ? "La contraseña debe tener al menos 5 caracteres, incluyendo al menos 1 letra minúscula, 1 letra mayúscula, 1 número y 1 carácter especial."
                    : ""
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleShowPassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{
                  mt: 3,
                  mb: 2,
                  minWidth: 200,
                }}
                color="secondary"
                fullWidth
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitDisabled}
              >
                Registrar
              </FormButton>
              <Grid container spacing={1}>
                <Grid item xs>
                  <Typography textAlign="center" variant="body1">
                    ¿Tienes cuenta? <Link to="/acceso" aria-label="ir a la sección de iniciar sesion">inicia sesión</Link>
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

export default FormRegistro;