import React from 'react'
import styled from "@emotion/styled";

const CalPantalla = styled.div`
    width: 100%;
    height: 100px;
    background-color: rgba(39, 33, 33, 0.89);
    display: flex;
    flex-direction: column;
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
    word-wrap: break-word;
    white-space: nowrap;
`;

const PantallaActual = styled.div`
    height: 80%;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 50px;
    user-select: none;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
`;

const Pantalla = ({pantalla, historial}) => {
    return ( 
        <CalPantalla>
            <PantallaHistorial>{historial}</PantallaHistorial>
            <PantallaActual><span>{pantalla===""?0:pantalla}</span></PantallaActual>
        </CalPantalla>
     );
}
 
export default Pantalla;