import React from 'react'
import styled from "@emotion/styled";

const CalPantalla = styled.div`
    width: 100%;
    height: 100px;
    background-color: rgba(39, 33, 33, 0.89);
    display: flex;
    flex-direction: column;
    text-align: right;
`;

const PantallaHistorial = styled.div`
    height: 20%;
    font-size: 20px;
    color: rgb(192, 176, 176);
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    align-items: center;
    overflow: hidden;
`;

const PantallaActual = styled.div`
    height: 80%;
    color: #fff;
    font-size: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    overflow: hidden;
`;

const Pantalla = ({infoPantalla, pantalla, historial}) => {
    return ( 
        <CalPantalla>
            <PantallaHistorial>{historial}</PantallaHistorial>
            <PantallaActual>{pantalla}</PantallaActual>
        </CalPantalla>
     );
}
 
export default Pantalla;