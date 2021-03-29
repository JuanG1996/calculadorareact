import React, { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import Pantalla from './components/Pantalla';
import Botones from './components/Botones';

// Styled components
const ContenedorCalculadora  = styled.div`
    width: 320px;
    margin: 100px auto;
    border-radius: 5px;
    overflow: hidden;
    user-select: none;
`;

function App() {

  //**Use States

  // Validar si existe o no un punto ya en pantalla
  const [punto, existePunto] = useState(false);
  //Operador actual con el que se esta trabajando
  const [operador, cambiarOperador] = useState(null);
  //Saber si hay punto al final de la pantalla 
  //(para aceptar solo numeros)
  const [pf, hayPf] = useState(false);

  //Guardar que boton se hizo clic
  const [btn, cambiarBtn] = useState("");
  //Total que se va guardamdp y no se muestra al usuario
  const[total, guardarTotal] = useState(0);
  //Valor actual en la pantalla
  const [pantalla, cambiarPantalla] = useState("");
  //Pantalla de historial donde se muestra lo que ha hecho el usuario
  const [historial, cambiarHistorial] = useState("");

  let infoPantalla = "";

  useEffect(()=>{
    //**Evitamos que se ejecute 
    //  al inicio de la app
    if(btn !== ""){
      //**Si el clic del boton es un numero:
      if(parseFloat(btn) || parseFloat(btn) === 0){
        //Evitar poder colocar 0 si la pantalla esta vacia
        if(!pantalla && parseFloat(btn) === 0) return;

        hayPf(false);
        cambiarOperador(null);
        cambiarPantalla(pantalla + btn);
        cambiarBtn("");
        
        //**Si NO se presiono un numero
      }else{

        // Si la pantalla esta vacia 
        // y no hay operador, no hacer nada
        if(pantalla === "" && !operador) return;

        //Si ya existe un operador y no se ingreso "=" o "."
        //Se reemplaza el operador del state y del historial
        if( operador && (btn !== "=" && btn !== ".") ){
          cambiarOperador(btn);
          cambiarOperadorHistorial(btn);
          return;
        }

        //Si se presiono suma
        //Cambia el operador
        //Guarda en el historial de la pantalla
        //Sumar la pantalla al total
        if(btn === "+"){
          cambiarOperador(btn);
          guardarHistorial(btn);
          let nuevoTotal = total + parseFloat(pantalla);
          cambiarTotal(nuevoTotal);
          cambiarPantalla("");
          return;
        }


        if(btn === "-"){
          let nuevoTotal = total - parseFloat(pantalla);
          //Si no es la primera vuelta,
          //Permitir total negativo
          if(historial !== ""){
            cambiarTotal(nuevoTotal);
          }else{
            //Si es total es 0 pero
            //Es la primera vez, pasar pantalla a total
            //(no empezar con negativos)
            cambiarTotal(parseFloat(pantalla));
          }
          cambiarOperador(btn);
          guardarHistorial(btn);
          cambiarPantalla("");
          return;
        }    
              


        if(btn === "x"){
          cambiarOperador(btn);
          guardarHistorial(btn);
          let nuevoTotal = 0;
          if(historial !== ""){
            nuevoTotal = total * parseFloat(pantalla);
          }else{
            nuevoTotal = parseFloat(pantalla);
          }
          cambiarTotal(nuevoTotal);
          cambiarPantalla("");
          return;
        }  

        if(btn === "/"){
          cambiarOperador(btn);
          guardarHistorial(btn);
          let nuevoTotal = 0;
          if(historial !== ""){
            nuevoTotal = total / parseFloat(pantalla);
          }else{
            nuevoTotal = parseFloat(pantalla);
          }
          console.log("El resultado de / es", total);
          cambiarTotal(nuevoTotal);
          cambiarPantalla("");
          return;
        }  



      }//else
    }//if principal btn 

  },[btn]); //cierre useEffect

  //Cambiar valor en total
  const cambiarTotal = (nuevoTotal) =>{
    guardarTotal(nuevoTotal);
    console.log("El nuevo total es: ", nuevoTotal);
    console.log("#########");
  }

  //Cambiar el ultimo operador del historial
  const cambiarOperadorHistorial = (oper)=>{
    const historialSinOperador = historial.slice(0, historial.length - 1);
    cambiarHistorial(historialSinOperador + oper);
  }

  //Guardar en el historial
  const guardarHistorial = (oper) =>{
    cambiarHistorial(`${historial} ${pantalla} ${oper}`);
  }

  return (
    <ContenedorCalculadora>
      <Pantalla 
        infoPantalla = {infoPantalla}
        pantalla = {pantalla}
        historial = {historial}
      />
      <Botones 
        cambiarBtn = {cambiarBtn}
      />
    </ContenedorCalculadora>
  );
}

export default App;
