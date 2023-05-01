import { useState } from "react";
import "./Mapa.css";
import { styled } from "@material-ui/core";

function Mapa() {

    const [adress, setAdress] = useState("");

    const handleChange = (e) => {
        setAdress(e.target.value);
    } 

    const handleSubmit = async(e) => {
        e.preventDefault();
        await fetch('https://ws.usig.buenosaires.gob.ar/rest/convertidor-coordenadas/2.0/callejero?desde=0&limite=100000&tipo=3&formato=json')
            .then(response => response.json())
            .then(data => {
                const calles = data.callejero.map(calle => calle.nombre);
                console.log(calles);
            });
    }

    return (
        <div class="center">
        <div class="property-card">
            <div class="property-image">
                <div class="property-image-title">
                    <input type="text" onChange={(e) => handleChange(e)} />
                </div>
            </div>
            <div class="property-description">
            <h5> Card Title </h5>
            <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
            </div>
        </div>
            <button type='submit' onClick={handleSubmit} style={{width:'100px'}}/>
        </div>
    );
}

export default Mapa