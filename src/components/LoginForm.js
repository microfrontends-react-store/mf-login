import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginForm = () => {

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formValues;

    const navigate = useNavigate();

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (email && password) {
            window.localStorage.setItem("token", "AASDFAEQWEFVXZGBTYT");
            window.dispatchEvent( new Event('storage') )
            // navigate("/");
        }
    }

    return (
        <form className="mt-4" onSubmit={handleFormSubmit} >
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                <input type="email" name="email" value={email} onChange={handleInputChange} className="form-control" id="email" />
                <div id="emailHelp" className="form-text">No compartiremos tu correo con nadie.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                <input type="password" name="password" value={password} onChange={handleInputChange} className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-dark">Enviar</button>
        </form>
    )
}

