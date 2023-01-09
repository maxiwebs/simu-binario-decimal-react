import { useReducer} from "react";
import Caja from "./components/Caja";
import { CalcuContext, CalcuDispatchContext, calcuInicial } from "./context";

export default function App() {
  //Inicializo calcu con estado inicial
  const [calcu, dispatch] = useReducer(calcuReducer, calcuInicial);
 
  return (
    <CalcuContext.Provider value={calcu}>
      <CalcuDispatchContext.Provider value={dispatch}>
        <Caja />
      </CalcuDispatchContext.Provider>
    </CalcuContext.Provider>
  );
}

//Acá está toda la posta. Tengo que actualizar el componente desde acá con los dispatchs
//Ver cómo hago para distinguir los botones. Sino puedo crear 8 cambios de estado diferentes.
function calcuReducer(calcu, action) {
  let newStateCalcu;
  switch (action.type) {
    case 'sigNum': {
      if (calcu.indiceNumeroDecimal < 19){
        let sigNumDecimal = arrayNumeros[calcu.indiceNumeroDecimal+1]
        newStateCalcu = {
          numeroDecimal: sigNumDecimal,
          indiceNumeroDecimal: calcu.indiceNumeroDecimal+1,
          sumaParcial: 0,
          botonSigInactivo: true,
          arrayBinarioActual: dameArrayBinarioOk(sigNumDecimal),
          numeroBinario: [0,0,0,0,0,0,0,0],
          puntaje: calcu.puntaje,
          mala_jugada: false,
        };
      }else {
        newStateCalcu = {
          numeroDecimal: 3,
          arrayBinarioActual: [0,0,0,0,0,0,0,0],
          indiceNumeroDecimal: 0,
          sumaParcial: 0,
          botonSigInactivo: true,
          numeroBinario: [0,0,0,0,0,0,0,0],
          puntaje: calcu.puntaje,
          mala_jugada: false,
        };
      }
      break;
    }
    case 'cambioBitA1':{
      let arrayBinario = calcu.numeroBinario
      let indice = action.pot.pot
      let pifio = false
      arrayBinario[indice] = 1
      let nuevaSumaParcial = calculoSumaParcial(arrayBinario)
      let nuevoPuntaje = actualizarPuntaje(arrayBinario,indice,calcu.puntaje, calcu.arrayBinarioActual)
      if (nuevoPuntaje < calcu.puntaje){pifio = true}
      let estadoBtnSig = botonInactivo(nuevaSumaParcial,calcu.numeroDecimal)
      //Si habilito btn sig es porque acertó. Sumo 20 ptos
      if (!estadoBtnSig){nuevoPuntaje=nuevoPuntaje+20}
      newStateCalcu = {
        numeroBinario: arrayBinario,
        numeroDecimal: calcu.numeroDecimal,
        indiceNumeroDecimal: calcu.indiceNumeroDecimal,
        sumaParcial: nuevaSumaParcial,
        botonSigInactivo: estadoBtnSig,
        puntaje: nuevoPuntaje,
        arrayBinarioActual: calcu.arrayBinarioActual,
        mala_jugada: pifio,
      };
      break;
    }
    case 'cambioBitA0':{
      let arrayBinario = calcu.numeroBinario
      let indice = action.pot.pot
      let pifio = false
      arrayBinario[indice] = 0
      let nuevaSumaParcial = calculoSumaParcial(arrayBinario)
      let nuevoPuntaje = actualizarPuntaje(arrayBinario,indice,calcu.puntaje, calcu.arrayBinarioActual)
      if (nuevoPuntaje < calcu.puntaje){pifio = true}
      let estadoBtnSig = botonInactivo(nuevaSumaParcial,calcu.numeroDecimal)
      //Si habilito btn sig es porque acertó. Sumo 20 ptos
      if (!estadoBtnSig){nuevoPuntaje=nuevoPuntaje+20}
      newStateCalcu = {
        numeroBinario: arrayBinario,
        numeroDecimal: calcu.numeroDecimal,
        indiceNumeroDecimal: calcu.indiceNumeroDecimal,
        sumaParcial: nuevaSumaParcial,
        botonSigInactivo: estadoBtnSig,
        puntaje: nuevoPuntaje,
        arrayBinarioActual: calcu.arrayBinarioActual,
        mala_jugada: pifio,
      };
      break;
    }
    default: {
      throw Error("Accion desconocida: " + action.type);
    }
  }
  return newStateCalcu;
}

function calculoSumaParcial(arregloBinario){
  let suma = 0
  for (let i= 0; i<8;i++){
    suma+=arregloBinario[i]*(2**i)
  }
  return suma
}

function botonInactivo(suma_parcial, numero_decimal){
  let inactivo = true
  if (suma_parcial === numero_decimal){ inactivo = false}
  return inactivo
}

//Resta 10 puntos si pusieron un 1 donde no debían.
function actualizarPuntaje( array_binario, indice, puntaje_actual, array_binario_actual){
  let nuevo_puntaje = puntaje_actual
  //Si lo que puso no es correcto
  if (array_binario[indice] !== array_binario_actual[indice]){
    //Resto 10
    nuevo_puntaje=nuevo_puntaje-10 
  }
  return nuevo_puntaje
}

function dameArrayBinarioOk(numDecimal){
  let arrayCorrecto = [0,0,0,0,0,0,0,0]
  let acum = 0, index = 7, aSumar = 0
  while (acum < numDecimal){
    //Completo desde el más significativo
    aSumar = 2**index
    //Si no me paso del numDecimal
    if ((acum+aSumar) <= numDecimal){
      arrayCorrecto[index] = 1
      acum=acum+aSumar
    }
    index--
  }
  return arrayCorrecto
}

const arrayNumeros = [
  3, 7, 14, 22, 26, 32, 40, 45, 63, 68, 80,
  100, 112, 129, 150, 170, 200, 223, 240, 255,
]
