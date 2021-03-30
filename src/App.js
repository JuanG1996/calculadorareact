import React, { useState, useEffect, Fragment } from 'react';
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
const NombreCreador = styled.div`
  color: #e4d3cf;
  font-size: 24px;
  text-align: center;
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


  //Guardar que boton se hizo clic
  const [btn, cambiarBtn] = useState("");
  //Valor actual en la pantalla
  const [pantalla, cambiarPantalla] = useState("");
  //Pantalla de historial donde se muestra lo que ha hecho el usuario
  const [historial, cambiarHistorial] = useState("");
  

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
        
        //**Si es una operaciòn
      }else{

      if(operador && pantalla === "" && (btn !== "=" && btn !== "." && btn!== "=")){
        guardarOperador(btn);
        guardarOperadorHistorial(btn);
        cambiarBtn("");
        return;
      }
        //Evitar operacion sin escribir antes
        //algun numero
      if(pantalla === "") return;

      //Colocando solo 1 punto en pantalla
       if(btn === "."){
        if(!punto){
          cambiarPantalla(pantalla + ".");
          existePunto(true);
          hayPf(true);
        }
        return;
       }

       //Reseteando valores al original
       if(btn === "c"){
        existePunto(false);
        hayPf(false);
        guardarNumero1(null);
        guardarOperador(null);
        cambiarBtn("");
        cambiarPantalla("");
        cambiarHistorial("");
        return;
       }

       //Eliminar punto final si no se agrego nada
       //Antes de una operacion
       if(pf){
        let pantallaSinPunto = pantalla.slice(0, pantalla.length - 1);
        cambiarPantalla(pantallaSinPunto);
       }

       if(numero1){
         if(btn==="="){
          //Ejecuta la operacion anterior
          let valorFinal = realizarOperacion();          
          cambiarPantalla(valorFinal);
          
          //Reset de valores
          existePunto(false);
          hayPf(false);
          guardarNumero1(null);
          guardarOperador(null);
          cambiarBtn("");
          cambiarHistorial("");
          return;
         }else{
           //Ejecuta la operacion anterior
           guardarNumero1(realizarOperacion()); 
          }
        }else{
          if(btn === "=") return;
          guardarNumero1(parseFloat(pantalla));
          guardarHistorial(btn);
        }
        //reset pantalla
        cambiarPantalla("");
        
       guardarOperador(btn);
       guardarHistorial(btn);
       return;

    
      }//else
    }//if principal btn 

  },[btn]); //cierre useEffect

  //Realizar Operacion Anterior
  function realizarOperacion(){
    let nuevoValor;
    if(operador === "+"){
      nuevoValor = numero1 + parseFloat(pantalla);
    }
    
    if(operador === "-"){
       nuevoValor = numero1 - parseFloat(pantalla);
       
      }
      
      if(operador === "/"){
       nuevoValor = numero1 / parseFloat(pantalla);
       
      }
      
      if(operador === "x"){
        nuevoValor = numero1 * parseFloat(pantalla);
     }
     return nuevoValor;
  }


  //Cambiar el ultimo operador del historial
  const guardarOperadorHistorial = (oper)=>{
    let historialSinOperador = historial.slice(0, historial.length - 1);
    cambiarHistorial(historialSinOperador + oper);
  }

  //Guardar en el historial
  const guardarHistorial = (oper) =>{
    cambiarHistorial(`${historial} ${pantalla} ${oper}`);
  }

  return (
    <Fragment>
    <ContenedorCalculadora>
      <Pantalla 
        pantalla = {pantalla}
        historial = {historial}
      />
      <Botones 
        cambiarBtn = {cambiarBtn}
      />
    </ContenedorCalculadora>
    <NombreCreador>Juan Antonio Gaytán Sustaita</NombreCreador>
    </Fragment>
  );
}

export default App;
