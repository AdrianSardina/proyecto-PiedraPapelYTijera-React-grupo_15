import React from "react";
import Button from 'react-bootstrap/Button';

class Boton extends React.Component {
    render() {
        return (
            <>
        <Button href="/" variant="danger">Inicio</Button>
        <Button href="/juego" variant="danger"> Juego</Button>
        <Button href="/nosotros" variant="danger">Nosotros</Button>
        <Button href="/masjuegos" variant="danger">Mas Juegos</Button>
        </>
        );
    }
}
export default Boton;