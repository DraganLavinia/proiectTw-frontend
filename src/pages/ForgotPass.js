import React from "react";
import { Link } from "react-router-dom";

class ForgotPass extends React.Component {
    render() {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Ati uitat parola?</h3>
                        <div className="form-group mt-3">
                            <label>Adresa email</label>
                            <input type="email" className="form-control mt-1" placeholder="Introduceti emailul" />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Trimitere
                            </button>
                        </div>
                        <br />
                        <p className="forgot-password text-right mt-2">
                            Daca adresa de mail este valida, veti primi un mail cu o noua parola.
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

export default ForgotPass;
