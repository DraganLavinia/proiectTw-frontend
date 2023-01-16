import React from "react";
import { Link } from "react-router-dom";

class NewPost extends React.Component {
    render() {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Review nou</h3>
                        <div className="form-group mt-3">
                            <label>Punct de plecare</label>
                            <input type="text" className="form-control mt-1" placeholder="Punct de plecare" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Punct de sosire</label>
                            <input type="text" className="form-control mt-1" placeholder="Punct de sosire" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Mijloc de transport</label>
                            <input type="text" className="form-control mt-1" placeholder="Mijloc de transport" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Ora plecare si sosire</label>
                            <input type="password" className="form-control mt-1" placeholder="Ora de plecare" />
                            <input type="password" className="form-control mt-1" placeholder="Ora de sosire" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Grad de aglomerare</label>
                            <select className="form-select mt-1">
                                <option>Liber</option>
                                <option>Moderat</option>
                                <option>Ridicat</option>
                            </select>
                        </div>
                        <div className="form-group mt-3">
                            <label>Observatii</label>
                            <input type="text" className="form-control mt-1" placeholder="Observatii" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Nivel de satisfactie</label>
                            <input type="number" defaultValue="5" min="1" max="5" className="form-control mt-1" placeholder="Nivel de satisfactie" />
                        </div>
                        <br />
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">Adaugare</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewPost;
