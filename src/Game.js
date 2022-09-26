import Boton from "./Componentes/Boton"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Masjuegos from "./Componentes/MasJuegos";
import NotFound from "./Componentes/NotFound";
import './css/estiloLG.css';
import Nosotros from "./Componentes/Nosotros";
import './css/estiloNR.css'

export default function Game()
{
    return(
        <>
        <Boton></Boton>
        <BrowserRouter>
        <Routes>
        <Route path="/" />;
        <Route path="/juego" />;
        <Route path="/nosotros" element= {<Nosotros/>} />;
            <Route path="/masjuegos" element={<Masjuegos/>} />;
            <Route path="*" element={<NotFound/>} />;
        </Routes>
        </BrowserRouter>
        </>
        
    )
}