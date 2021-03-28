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
  //Saber si hay punto al final de la pantalla (para aceptar solo numeros)
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
    //Evitamos que se ejecute al inicio de la app
    if(btn !== ""){
      //Si el clic del boton es un numero:
      if(parseFloat(btn)){
        console.log(parseFloat(btn));
        hayPf(false);
        cambiarOperador(null);
        cambiarPantalla(pantalla + btn);
        //Se reinicia btn para poder ingresar el mismo valor
        cambiarBtn("");
        
      }else{
        //Si el clic del boton es una operacion o un "."

        //Si la pantalla esta vacia y no hay operador no hagas nada
        if(pantalla === "" && !operador) return;

        // console.log("Operador es:", operador);
        // console.log("btn es: ", btn);

        //Si ya existe un operador y no se ingreso "=" o "."
        if( operador && (btn !== "=" && btn !== ".") ){
          //Se reemplaza el operador del state y del historial
          cambiarOperador(btn);
          cambiarOperadorHistorial(btn);
          return;
        }

        //Si se presiono suma
        if(btn === "+"){
          cambiarOperador(btn);
          guardarHistorial(btn);
          let nuevoTotal = total + parseFloat(pantalla);
          cambiarTotal(nuevoTotal);
          cambiarPantalla("");
          console.log(total);
          return;


          //********Pendiente revisar por que total no cambia la primera vez */
        }


      }
    }//if principal btn 

  },[btn]); //cierre useEffect

  //Cambiar total
  const cambiarTotal = (nuevoTotal) =>{
    guardarTotal(nuevoTotal);
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
