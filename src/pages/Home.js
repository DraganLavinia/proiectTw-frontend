import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


import Post from "./Post";

class Home extends React.Component {
    render() {
        var placeholderText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.";

        return (
            <>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <select className="form-select">
                                <option value="1">Ordonare dupa data adaugarii</option>
                                <option value="2">Ordonare dupa satisfactie</option>
                                <option value="3">Ordonare dupa firma de transport</option>
                            </select>
                        </div>
                        <div className="col-md-8">
                            <div className="float-end">
                                <Link to="/newpost" className="btn btn-primary float-end">Review nou</Link>
                                <Link to="/" className="btn btn-primary btn-space float-end">Arata doar postarile mele</Link>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                    <Post postOwner={false} text={placeholderText} nume="Tudoreanu Ionut" mijlocTransport="STB 403" gradAglomeratie="Liber" locatia1="Locatia 1" locatia2="Locatia 2" oraPlecare="14:02" oraSosire="17:05" diferentaOre="3:03" />
                    <Post postOwner={true} text={placeholderText} nume="Popescu Diana" mijlocTransport="STB 1" gradAglomeratie="Ridicat" locatia1="Locatia 1" locatia2="Locatia 2" oraPlecare="12:02" oraSosire="13:02" diferentaOre="1:00" />
                    <Post postOwner={true} text={placeholderText} nume="Patrascu Mihai" mijlocTransport="STB-T 302" gradAglomeratie="Moderat" locatia1="Locatia 1" locatia2="Locatia 2" oraPlecare="15:01" oraSosire="17:15" diferentaOre="2:12" />
                    <Post postOwner={false} text={placeholderText} nume="Pitic Mihaela" mijlocTransport="Metrou" gradAglomeratie="Liber" locatia1="Locatia 1" locatia2="Locatia 2" oraPlecare="14:02" oraSosire="17:05" diferentaOre="3:03" />
                </div>
            </>
        );
    }
}

export default Home;
