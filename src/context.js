import {createContext} from "react";

export const calcuInicial = {
  indiceNumeroDecimal: 0,
  numeroBinario: [0, 0, 0, 0, 0, 0, 0, 0],
  sumaParcial: 0,
  botonSigInactivo: true,
  numeroDecimal: 3,
};

export const calcuFinal = {
    indiceNumeroDecimal: 19,
    numeroBinario: [1, 1, 1, 1, 1, 1, 1, 1],
    sumaParcial: 255,
    botonSigInactivo: true,
    numeroDecimal: 255,
  };



//Creo contexto
export const CalcuContext = createContext();
export const CalcuDispatchContext = createContext();


