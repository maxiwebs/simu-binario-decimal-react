import { useReducer} from "react";
import Conversor from "./components/Conversor";
import { CalcuContext, CalcuDispatchContext, calcuInicial } from "./context";

export default function App() {
  //Inicializo calcu con estado inicial
  const [calcu, dispatch] = useReducer(calcuReducer, calcuInicial);
 
  return (
    <CalcuContext.Provider value={calcu}>
      <CalcuDispatchContext.Provider value={dispatch}>
        <Conversor />
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
        newStateCalcu = {
          numeroDecimal: arrayNumeros[calcu.indiceNumeroDecimal+1],
          indiceNumeroDecimal: calcu.indiceNumeroDecimal+1,
          sumaParcial: 0,
          botonSigInactivo: true,
          numeroBinario: [0,0,0,0,0,0,0,0]
        };
      }else {
        newStateCalcu = {
          numeroDecimal: 3,
          indiceNumeroDecimal: 0,
          sumaParcial: 0,
          botonSigInactivo: true,
          numeroBinario: [0,0,0,0,0,0,0,0]
        };
      }
      break;
    }
    case 'cambioBitA1':{
      let arrayBinario = calcu.numeroBinario
      let indice = action.pot.pot
      arrayBinario[indice] = 1
      let nuevaSumaParcial = calculoSumaParcial(arrayBinario)
      let estadoBtnSig = botonInactivo(nuevaSumaParcial,calcu.numeroDecimal)
      newStateCalcu = {
        numeroBinario: arrayBinario,
        numeroDecimal: calcu.numeroDecimal,
        indiceNumeroDecimal: calcu.indiceNumeroDecimal,
        sumaParcial: nuevaSumaParcial,
        botonSigInactivo: estadoBtnSig,
      };
      break;
    }
    case 'cambioBitA0':{
      let arrayBinario = calcu.numeroBinario
      let indice = action.pot.pot
      arrayBinario[indice] = 0
      let nuevaSumaParcial = calculoSumaParcial(arrayBinario)
      let estadoBtnSig = botonInactivo(nuevaSumaParcial,calcu.numeroDecimal)
      newStateCalcu = {
        numeroBinario: arrayBinario,
        numeroDecimal: calcu.numeroDecimal,
        indiceNumeroDecimal: calcu.indiceNumeroDecimal,
        sumaParcial: nuevaSumaParcial,
        botonSigInactivo: estadoBtnSig,
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

const arrayNumeros = [
  3, 7, 14, 22, 26, 32, 40, 45, 63, 68, 80,
  100, 112, 129, 150, 170, 200, 223, 240, 255,
]
