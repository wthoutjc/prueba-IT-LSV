import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

// React hook form
import { useForm } from "react-hook-form";

// Utils
import { isEmail, isPassword } from "../utils";

// Icons
import EmailIcon from "@mui/icons-material/Email";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Register = ({ setNotification }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    setNotification({
      open: true,
      severity: "success",
      title: "Registro satisfactorio",
      message: "Bienvenido a La Silla Vacía",
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        p: 2,
        borderRadius: 3,
        color: "#f4f2ed",
      }}
    >
      <Typography variant="h4" fontWeight={600}>
        REGISTRO
      </Typography>
      <Typography variant="body1" className="body1">
        Regístrese en La Silla Vacía para interactuar con nuestro contenido y
        nuestros periodistas.
      </Typography>
      <Divider
        sx={{
          borderColor: "white",
          borderWidth: 1,
          mt: 1,
          mb: 1,
        }}
      />
      <Typography variant="h4" fontWeight={600}>
        DATOS PERSONALES
      </Typography>
      <Box
        sx={{
          backgroundColor: "#f4f2ed",
          p: 3,
          mt: 1,
          borderRadius: 3,
        }}
      >
        <form onSubmit={handleSubmit(handleRegister)}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-evenly",
            }}
          >
            <TextField
              sx={{ marginBottom: "1em", minWidth: "48%" }}
              type="text"
              placeholder="Nombres"
              label="Nombres"
              autoComplete="name-lsv"
              error={!!errors.name}
              helperText={
                !!errors.name ? errors.name.message : "Escribe tu nombre..."
              }
              {...register("name", {
                required: "El nombre es obligatorio",
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ marginBottom: "1em", minWidth: "48%" }}
              type="text"
              placeholder="Apellidos"
              label="Apellidos"
              autoComplete="apellido-lsv"
              error={!!errors.lastname}
              helperText={
                !!errors.lastname
                  ? errors.lastname.message
                  : "Escribe tu apellido..."
              }
              {...register("lastname", {
                required: "El apellido es obligatorio",
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ marginBottom: "1em", minWidth: "48%" }}
              type="email"
              placeholder="Correo electrónico"
              label="Correo electrónico"
              autoComplete="email-lsv"
              error={!!errors.email}
              helperText={
                !!errors.email
                  ? errors.email.message
                  : "Escribe tu correo electrónico..."
              }
              {...register("email", {
                validate: (val) => isEmail(val),
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ marginBottom: "1em", minWidth: "48%" }}
              type="email"
              placeholder="Confirmar correo electrónico"
              label="Confirmar correo electrónico"
              autoComplete="confirm-email-lsv"
              error={!!errors.cEmail}
              helperText={
                !!errors.cEmail
                  ? errors.cEmail.message
                  : "Confirma tu correo electrónico..."
              }
              {...register("cEmail", {
                required: "Este campo es obligatorio",
                validate: (val) =>
                  watch("email") !== val
                    ? "No coinciden los correos electrónicos"
                    : true,
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ThumbUpAltRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ marginBottom: "1em", minWidth: "48%" }}
              type={showPassword.password ? "text" : "password"}
              placeholder="Contraseña"
              label="Contraseña"
              autoComplete="password-lsv"
              error={!!errors.password}
              helperText={
                !!errors.password
                  ? errors.password.message
                  : "Escribe tu contraseña..."
              }
              {...register("password", {
                validate: (val) => isPassword(val),
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordRoundedIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip
                      title={
                        showPassword.password
                          ? "Ocultar contraseña"
                          : "Mostrar contraseña"
                      }
                    >
                      <IconButton
                        onClick={() =>
                          setShowPassword({
                            ...showPassword,
                            password: !showPassword.password,
                          })
                        }
                      >
                        {showPassword.password ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ marginBottom: "1em", minWidth: "48%" }}
              type={showPassword.confirmPassword ? "text" : "password"}
              placeholder="Confirmar contraseña"
              label="Confirmar contraseña"
              autoComplete="cPassword-lsv"
              error={!!errors.cPassword}
              helperText={
                !!errors.cPassword
                  ? errors.cPassword.message
                  : "Confirma tu contraseña..."
              }
              {...register("cPassword", {
                required: "Este campo es obligatorio",
                validate: (val) =>
                  watch("password") !== val
                    ? "Las contraseñas no coinciden"
                    : true,
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ThumbUpAltRoundedIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip
                      title={
                        showPassword.confirmPassword
                          ? "Ocultar contraseña"
                          : "Mostrar contraseña"
                      }
                    >
                      <IconButton
                        onClick={() =>
                          setShowPassword({
                            ...showPassword,
                            confirmPassword: !showPassword.confirmPassword,
                          })
                        }
                      >
                        {showPassword.confirmPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            sx={{
              p: 2,
            }}
          >
            <Button fullWidth variant="contained" type="submit">
              REGISTRARSE
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export { Register };
