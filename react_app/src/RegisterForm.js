import React, { useState } from 'react';
import {
  isNotEmpty,
  isValidEmail,
  isValidPhoneNumber,
  isValidDateOfBirth,
  isValidPassword,
} from './validaciones';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    address: '',
    email: '',
    phoneNumber: '',
    role: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza las validaciones aquí
    const newErrors = {};
    if (!isNotEmpty(formData.fullName)) {
      newErrors.fullName = 'El nombre completo es requerido';
    }
    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Correo electrónico no válido';
    }
    if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Número de teléfono no válido';
    }
    if (!isValidDateOfBirth(formData.dateOfBirth)) {
      newErrors.dateOfBirth = 'Fecha de nacimiento es requerida';
    }
    if (!isValidPassword(formData.password, 8)) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }

    setErrors(newErrors);

    // Si no hay errores, puedes enviar los datos del formulario
    if (Object.keys(newErrors).length === 0) {
      // Realiza la acción de registro aquí
    }
  };

  return (
    <form action="" className="formulario__register" onSubmit={handleSubmit}>
      <h2>Registrarse</h2>
      <input
        type="text"
        name="fullName"
        placeholder="Nombre completo"
        value={formData.fullName}
        onChange={handleInputChange}
        required // Campo requerido
      />
      {errors.fullName && <p className="error-message">{errors.fullName}</p>}
      <input
        type="date"
        name="dateOfBirth"
        placeholder="Fecha de Nacimiento"
        value={formData.dateOfBirth}
        onChange={handleInputChange}
        required // Campo requerido
      />
      {errors.dateOfBirth && <p className="error-message">{errors.dateOfBirth}</p>}
      <input
        type="text"
        name="address"
        placeholder="Dirección"
        value={formData.address}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Correo Institucional o Personal"
        value={formData.email}
        onChange={handleInputChange}
        required // Campo requerido
      />
      {errors.email && <p className="error-message">{errors.email}</p>}
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Numero de Telefono"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        required // Campo requerido
      />
      {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
      <input
        type="text"
        name="role"
        placeholder="Alumno, Profesor, Graduados, Otros.."
        value={formData.role}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={handleInputChange}
        required // Campo requerido
      />
      {errors.password && <p className="error-message">{errors.password}</p>}
      <button>Registrarse</button>
    </form>
  );
};

export default RegisterForm;
