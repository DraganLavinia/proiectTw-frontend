import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
    render() {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Autentificare</h3>
                        <div className="form-group mt-3">
                            <label>Adresa email</label>
                            <input type="email" className="form-control mt-1" placeholder="Introduceti email" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Parola</label>
                            <input type="password" className="form-control mt-1" placeholder="Introduceti parola" />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Autentificare
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Ati uitat <Link to="/forgotpass">parola?</Link>
                        </p>
                    </div>
                </form>
            </div>
        );
        
    }
}

export default Login;
