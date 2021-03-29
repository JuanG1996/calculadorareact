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
  //Saber si hay punto al final de la pantalla 
  //(para aceptar solo numeros)
  const [pf, hayPf] = useState(false);

  //****Numeros y operador con los que se trabajara******/
  //Primer numero ingresado
  const [numero1, guardarNumero1] = useState(null);
  //Operador actual con el que se esta trabajando
  const [operador, guardarOperador] = useState(null);
  //Segundo numero ingresado
  const [numero2, guardarNumero2] = useState(null);


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
        // guardarOperador(null);
        cambiarPantalla(pantalla + btn);
        cambiarBtn("");
        
        //**Si NO se presiono un numero
      }else{
        //Evitar operacion sin escribir antes
        //algun numero
      if(pantalla === "") return;

      //Colocando solo 1 punto en pantalla
       if(btn === "." && !punto){
        existePunto(true);
        hayPf(true);
        cambiarPantalla(pantalla + ".");
       }

       //Reseteando valores al original
       if(btn === "c"){
        existePunto(false);
        hayPf(false);
        guardarNumero1(null);
        guardarOperador(null);
        guardarNumero2(null);
        cambiarBtn("");
        guardarTotal(0);
        cambiarPantalla("");
        cambiarHistorial("");
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
  const guardarOperadorHistorial = (oper)=>{
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
