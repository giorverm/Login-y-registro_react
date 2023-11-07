import React from 'react';

const LoginForm = () => {
  return (
    <form action="" className="formulario__login">
      <h2>Iniciar Sesión</h2>
      <input type="text" id="correo" placeholder="Correo Institucional o Personal" />
      <input type="number" id="credencial" placeholder="Credencial" />
      <input type="password" placeholder="Contraseña" />
      <button id="btnIniciarSesion">Entrar</button>
    </form>
  );
};

export default LoginForm;
