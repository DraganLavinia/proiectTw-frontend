import React from "react";
import { Link } from "react-router-dom";

class NoPage extends React.Component {
    render() {
        return (
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-3"> <span className="text-danger">Ups!</span> Pagina nu a fost gasita.</p>
                    <p className="lead">
                        Pagina pe care ai accesat-o nu exista!
                    </p>
                    <Link as={Link} to="/" className="btn btn-primary">Pagina principala</Link>
                </div>
            </div>
        );
    }
}

export default NoPage;
