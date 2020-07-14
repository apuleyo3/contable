import React from 'react';
import { Link } from 'react-router-dom';
// import logo from "../../assets/logo.png";
import { Form, Button } from "react-bootstrap";
import { LoginForm, LoginHeader, LoginContainer } from "../../layout/Login/Login.style.js";

const Login = () => {
	return (
        <LoginContainer>
            <div className="container-fluid">
                <div className="overlay">
                </div>
                <div className="row">
                    <div className="logo-header col-12">
                        <LoginHeader>
                            {/* <Image src={logo} alt="logo" fluid /> */}
                            <Link to="/">
                                <h1>SGA</h1>
                            </Link>
                        </LoginHeader>
                    </div>
                </div>
                <div className="row my-auto justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <LoginForm>
                            <Form className="login-form">
                                <h1 className="login-title text-center">Crear Usuario</h1>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="ejemplo@eted.gov.do"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="ingrese su clave aquí"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPasswordCheck">
                                    <Form.Label>Repetir contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="repita su clave aquí"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check
                                        type="checkbox"
                                        label="Acepto las condiciones de uso"
                                    />
                                </Form.Group>
                                <div className="btn-single">
                                    <Link to="/">
                                        <Button variant="primary" type="button">
                                            Registrarse
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
