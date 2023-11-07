// Validaciones.js

// Valida si el campo está vacío
export const isNotEmpty = (value) => {
    return value.trim() !== '';
  };
  
  // Valida si el campo es una dirección de correo electrónico válida
  export const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };
  
  // Valida si el campo es un número de teléfono válido
  export const isValidPhoneNumber = (phoneNumber) => {

    const phoneNumberRegex = /^\d{10,}$/;
    return phoneNumberRegex.test(phoneNumber);
  };
  
  // Valida si el campo es una fecha de nacimiento válida
  export const isValidDateOfBirth = (dateOfBirth) => {
   
    return isNotEmpty(dateOfBirth);
  };
  
  // Valida si el campo cumple con un requisito específico, por ejemplo, longitud de contraseña
  export const isValidPassword = (password, minLength) => {
    return password.length >= minLength;
  };
  