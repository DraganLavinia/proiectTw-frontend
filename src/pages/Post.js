import React from "react";
import { Card } from "react-bootstrap";
import ArrowImg from '../images/arrow.png'
import ArrowEndImg from '../images/arrow-end.png'
import { Link } from "react-router-dom";

class Post extends React.Component {

    moderatorButtons(check) {
        if(check) return(
            <div className="float-end">
                <Link to="/" className="btn btn-danger float-end">Stergere</Link>
                <Link to="/newpost" className="btn btn-warning btn-space float-end">Editare</Link>
            </div>
        );
    }

    render() {
        var colorBind = {
            "Ridicat": "red",
            "Moderat": "orange",
            "Liber": "green",
            default: "green"
        };

        return (
            <div className="row row-post">
                <div className="col-md-12">
                    <Card>
                        <Card.Header>Calatorie cu {this.props.mijlocTransport} - Grad aglomeratie: <span style={{color: colorBind[this.props.gradAglomeratie]}}>{this.props.gradAglomeratie}</span></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                {this.props.text}
                                {' '}
                                <br />
                                <div className="container traseu-container">
                                    <div className="row">
                                        <div className="col-sm-2"><div class="float-end"><b>({this.props.oraPlecare})</b> {this.props.locatia1}</div></div>
                                        <div className="col-sm-8"><div className="arrow-container"><img src={ArrowImg} className="arrow"></img><img src={ArrowEndImg} className="arrow-end"></img></div></div>
                                        <div className="col-sm-2">{this.props.locatia2} <b>({this.props.oraSosire})</b></div>
                                    </div>
                                </div>
                                <center>
                                    <p>Durata calatoriei: <b>{this.props.diferentaOre}</b></p>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                </center>
                                {this.moderatorButtons(this.props.postOwner)}
                            </p>
                            <footer className="blockquote-footer">
                                {this.props.nume}
                            </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Post;
