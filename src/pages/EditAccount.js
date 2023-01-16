import React from "react";
import { Link } from "react-router-dom";

class EditAccount extends React.Component {
    render() {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Editare cont</h3>
                        <div className="form-group mt-3">
                            <label>Nume Complet</label>
                            <input type="email" className="form-control mt-1" placeholder="Introduceti numele complet" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Adresa email</label>
                            <input type="email" className="form-control mt-1" placeholder="Introduceti adresa de email" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Parola</label>
                            <input type="password" className="form-control mt-1" placeholder="Introduceti parola" />
                        </div>
                        <br />
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Trimitere
                            </button>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary btn-danger">
                                Dezactivare cont
                            </button>
                        </div>
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default EditAccount;
