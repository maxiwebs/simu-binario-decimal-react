import React, { useContext } from "react";
import {CalcuContext,CalcuDispatchContext} from "../context";
import { Button, Grid } from "@mui/material";

const CeldaSig = () => {
  //Traigo contexto para usar estado
  const calcu = useContext(CalcuContext);
  const dispatch = useContext(CalcuDispatchContext);

  //Por defecto no muestro Ok
  let muestro_ok = ""
  if (!calcu.botonSigInactivo){muestro_ok = "OK"}
  
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
      <Grid item>Ptos:</Grid>
      <Grid item>{muestro_ok}</Grid>
      <Grid item>
        <Button
          onClick={() => {
            dispatch({
                type: "sigNum",
              });
          }}
          disabled={calcu.botonSigInactivo}
          style={{
            maxWidth: "25px",
            maxHeight: "25px",
            minWidth: "10px",
            minHeight: "10px",
            backgroundColor: "#AAA",
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
