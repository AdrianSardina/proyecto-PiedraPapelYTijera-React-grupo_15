import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import inicio from '../css/inicio.css';

import Spinner from 'react-bootstrap/Spinner';


class Inicio extends React.Component {
    render() {
        return (

            <>
                <div className="conteiner">
                    <h1 className="titulo"> Piedra - Papel - Tijera</h1>
                    <div className="img">
                        <img src="../img/piedrapapeltijera.png" ></img>
                    </div>


                    <div className="boton1">

                        <Link to="/juego"  >

                        <Spinner animation="grow" variant="light" />
                            <Button variant="secondary"  size="lg" active>
                                Empezar a Jugar
                            </Button>{' '}
                            <Spinner animation="grow" variant="light" />
                        </Link>
                    </div>

                </div>
                



            </>

        )
    }
}
export default Inicio