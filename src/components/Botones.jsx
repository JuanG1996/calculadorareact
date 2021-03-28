import React from 'react'
import styled from '@emotion/styled';

//Styled components
const ContenedorBotones = styled.div`
    display: grid;
    grid-template-columns: repeat(4,80px);
    grid-auto-rows: 80px;
`;

const Boton = styled.button`
    background-color: teal;
    border: none;
    font-size: 20px;
    outline: none;

    &:hover{
        background-color: rgb(9, 94, 94);
        color: rgb(219, 209, 209); 
    }

    &:active{
        background-color: rgb(6, 39, 39);
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, .7);
        color: white; 
    }
`;

const Botones = ({cambiarBtn}) => {


    const actualizarBtn = (e) => {
        cambiarBtn(e.target.value);
    }


    return ( 
        <ContenedorBotones>
            <Boton 
                type = "button"
                onClick = {actualizarBtn}
                value="+"
            >+</Boton>
            <Boton 
                type = "button"
                onClick = {actualizarBtn}
                value="-"
            >-</Boton>
            <Boton 
                type = "button"
                onClick = {actualizarBtn}
                value="x"
            >x</Boton>
            <Boton 
                type = "button"
                onClick = {actualizarBtn}
                value="/"
            >/</Boton>
            <Boton className ="igual"
                type = "button"
                onClick = {actualizarBtn}
                value="="
            >=</Boton>
            <Boton 
                type = "button"
                onClick = {actualizarBtn}
                value="1"
            >1</Boton>
            <Boton 
                type = "button"
                onClick = {actualizarBtn}
                value="2"
            >2</Boton>
            <Boton 
                type = "button"
                onClick = {actualizarBtn}
                value="3"
            >3</Boton>
            <Boton 
                type = "button"
                onClick = {actualizarBtn}
                value="4"
            >4</Boton>
            <Boton 
                type = "button"
                onClick = {actualizarBtn}
                value="5"
            >5</Boton>
            <Boton 
                type = "button"
                onClick = {actualizarBtn}
                value="6"
            >6</Boton>
            <Boton 
                type = "button"
                onClick = {actualizarBtn}
                value="7"
            >7</Boton>
            <Boton 
                type = "button"
                onClick = {actualizarBtn}
                value="8"
            >8</Boton>
            <Boton 
                type = "button"
                onClick = {actualizarBtn}
                value="9"
            >9</Boton>
            <Boton 
                type = "button"
                onClick = {actualizarBtn}
                value="0"
            >0</Boton>
            <Boton 
                type = "button"
                onClick = {actualizarBtn}
                value="."
            >.</Boton>
            <Boton 
                type = "button"
                onClick = {actualizarBtn}
                value="c"
            >C</Boton>
        </ContenedorBotones>
     );
}
 
export default Botones;