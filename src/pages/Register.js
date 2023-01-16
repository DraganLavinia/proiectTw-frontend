import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
    render() {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Inregistrare</h3>
                        <div className="text-center">
                            Aveti deja cont?{" "}
                            <span className="link-primary"><Link to="/login">Autentificare</Link></span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Nume complet</label>
                            <input type="email" className="form-control mt-1" placeholder="e.g Jane Doe" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Adresa email</label>
                            <input type="email" className="form-control mt-1" placeholder="ceva@domeniu.ro" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Parola</label>
                            <input type="password" className="form-control mt-1" placeholder="Parola" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Repetare parola</label>
                            <input type="password" className="form-control mt-1" placeholder="Repetare parola" />
                        </div>
                        <br />
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">Trimitere</button>
                        </div>
                    </div>
                </form>
            </div>
        );        
    }
}

export default Register;
