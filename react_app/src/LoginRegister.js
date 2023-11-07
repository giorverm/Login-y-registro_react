import React, { useState } from 'react';
import './LoginRegister.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="contenedor__todo">
      <div className="caja__trasera">
        <div className={`caja__trasera-login ${isLogin ? 'active' : ''}`}>
          <h3>¿Ya tienes una cuenta?</h3>
          <p>Inicia sesión para entrar en la página</p>
          <button id="btn__iniciar-sesion" onClick={toggleForm}>Iniciar Sesión</button>
        </div>
        <div className={`caja__trasera-register ${isLogin ? 'active' : ''}`}>

          <h3>¿Aún no tienes una cuenta?</h3>
          <p>Regístrate para que puedas iniciar sesión</p>
          <button id="btn__registrarse" onClick={toggleForm}>Registrarse</button>
        </div>
      </div>

      <div className="contenedor__login-register">
      {isLogin ? <LoginForm /> : <RegisterForm />}

      </div>
    </div>
  );
};

export default LoginRegister;
