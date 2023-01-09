import React, { useContext } from "react";
import {CalcuContext,CalcuDispatchContext} from "../context";
import { Button, Grid } from "@mui/material";

const CeldaSig = () => {
  //Traigo contexto para usar estado
  const calcu = useContext(CalcuContext);
  const dispatch = useContext(CalcuDispatchContext);

  //Por defecto no muestro Ok
  let muestro_ok = ""
  if (!calcu.botonSigInactivo){muestro_ok = "OK (+20)"}
  if (calcu.mala_jugada){muestro_ok = "MAL! (-10)"}
  
  return (
    <Grid item xs={2}>
    <Grid
      container
      direction="column"
      justifyContent="center"
      align="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item>Ptos: {calcu.puntaje}</Grid>
      <Grid item>{muestro_ok}</Grid>
      <Grid item>
        <Button
          color='success'
          onClick={() => {
            dispatch({
                type: "sigNum",
              });
          }}
          disabled={calcu.botonSigInactivo}
          style={{
            maxWidth: "30px",
            maxHeight: "30px",
            minWidth: "10px",
            minHeight: "10px",
            backgroundColor: "#FFF",
            padding: "5px",
          }}
        >
          Sig
        </Button>
      </Grid>
    </Grid>
  </Grid>
  )
}

export default CeldaSig
