import Navbar from "../Navbar/Nav.jsx"
import Menu from '../Menu/Menu.jsx'
import { useMediaQuery } from '@material-ui/core';
import Introduccion from "../Introduccion/Introduccion.jsx";
import Trabajos from "../Trabajos/Trabajos.jsx";
import Mapa from "../Mapa/Mapa.jsx"

export default function Principal(){

    const isMobile = useMediaQuery('(min-width: 663px)');

    return (
        <div>
            <Menu isMobile={!isMobile}/>
            {isMobile &&
                <Navbar />
            }
            <Introduccion />
            {[1,2,3].map((i) => 
                <Trabajos />
            )}
            <Mapa />
        </div>
    )
}