export const isValidEmail = (email) => {
  const match = String(email)
    .toLowerCase()
    .match(/^[A-Za-z0-9._%+-]+@lasillavacia\.com$/);

  return !!match;
};

export const isEmail = (email) => {
  return isValidEmail(email)
    ? undefined
    : "El correo no termina en @lasillavacia.com";
};

export const isValidPassword = (password) => {
  const match = String(password).match(
    // solo mayusculas
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  );
  return !!match;
};

export const isPassword = (password) => {
  return isValidPassword(password)
    ? undefined
    : "La contraseña debe tener al menos 8 caracteres, una mayúscula y un número";
};
