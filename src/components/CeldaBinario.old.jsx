import React, { useState, useContext } from "react";
import { Box, Grid, Button } from "@mui/material";
import { CalcuContext, CalcuDispatchContext } from "../context";


const CeldaBinario = (pot,suma,valor) => {
   //Traigo contexto para usar estado
   const { calcu, handleEstadoCalcu } = useContext(CalcuContext);
   const dispatch = useContext(CalcuDispatchContext);
  

  const [valorDigito, setValorDigito] = useState(0);

  function cambiarValorDigito(valor) {
    valor === 0 ? (valor = 1) : (valor = 0);
    return valor;
  }

  return (
    <>
      <Grid item xs={1}>
        <Box
          sx={{ fontSize: "1rem" }}
          color="primary.contrastText"
          bgcolor="primary.main"
          borderColor="#000"
          p={1.5}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            align="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item>2^{pot}</Grid>
            <Grid item>
              <Button
                onClick={() => {
                    //actualizarSumaParcial(pot);
                    //setValorDigito(cambiarValorDigito(valorDigito))
                }}
                style={{
                  maxWidth: "25px",
                  maxHeight: "25px",
                  minWidth: "10px",
                  minHeight: "10px",
                  backgroundColor: "#AAA",
                  padding: "5px",
                }}
              >
                {valorDigito}
              </Button>
            </Grid>
            <Grid item>{suma}</Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default CeldaBinario;