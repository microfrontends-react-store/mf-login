import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';

export const LoginScreen = () => {
    return (
        <section className="container pt-5">
            <Link to="/">Regresar</Link>
            <h1 className="display-4 mt-5">Inicio de Sesión</h1>
            <LoginForm />
        </section>
    )
}
