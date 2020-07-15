import React, { useState } from "react";
// import logo from "../../assets/logo_h.png";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import {
  LoginForm,
  LoginHeader,
  LoginContainer,
} from "../../layout/Login/Login.style";
import icono from "../../assets/001-cart.svg";

const Login = () => {
    
  // Definir state para iniciar sesión
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  // Función onChange(handler) en campos dle formulario
  const userHandler = (e) => {
    setUser(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

//   Función para hacer el checkin --->Ver Button al final del form
/*   const checkIn = e => {
      e.preventDefault();


    //   Validar que no haya campos vacíos


  }; */

  return (
    <LoginContainer>
      <div className="container-fluid">
        <div className="overlay"></div>
        <div className="row">
          <div className="col-12">
            <LoginHeader>
              {/* <Image src={logo} alt="logo" fluid /> */}
              <Link to="/">
                <h1>
                  <img className="i-head" src={icono} alt={icono} />
                  CONTABLE
                </h1>
              </Link>
            </LoginHeader>
          </div>
        </div>
        <div className="row my-auto justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <LoginForm>
              <Form className="login-form">
                <h1 className="login-title text-center">Iniciar Sesión</h1>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="ejemplo@ejemplo.com"
                    value={user}
                    onChange={userHandler}
                    id="user"
                  />
                  <Form.Text className="text-muted">
                    Evita compartir tus credenciales con otros.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="ingrese su clave aquí"
                    value={password}
                    onChange={passwordHandler}
                    id="password"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="No soy un robot" />
                </Form.Group>
                <div className="btn-box">
                  <Link to="/dashboard">
                    <Button variant="primary" type="button" /* onClick={checkIn} */>
                      Ingresar
                    </Button>
                  </Link>
                </div>
              </Form>
            </LoginForm>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
