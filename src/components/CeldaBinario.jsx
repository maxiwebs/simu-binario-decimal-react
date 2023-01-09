import { useContext } from 'react';
import { Box, Grid, Button } from '@mui/material'
import {CalcuContext,CalcuDispatchContext} from "../context";

const CeldaBinario = ({pot, suma}) => {

  //Traigo contexto para usar estado
  const calcu = useContext(CalcuContext);
  const dispatch = useContext(CalcuDispatchContext);

  //Por defecto no muestro el "+X"
  let suma_visible_oculta = ""
  if (calcu.numeroBinario[pot] === 1){
    suma_visible_oculta = suma
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
          <Grid item>2<sup>{pot}</sup></Grid>
          <Grid item>
            <Button
              onClick={() => {
                //Discrimino porque react ejecuta el dispatch dos veces
                if (calcu.numeroBinario[pot] === 1){
                  dispatch({
                    type: 'cambioBitA0',
                    pot: {pot}
                  });
                }else{
                  dispatch({
                    type: 'cambioBitA1',
                    pot: {pot}
                  });
                }
              }}
              style={{
                maxWidth: "25px",
                maxHeight: "25px",
                minWidth: "10px",
                minHeight: "10px",
                color: "#0F0",
                backgroundColor: "#000",
                padding: "5px",
              }}
            >
              {calcu.numeroBinario[pot]}
            </Button>
          </Grid>
          <Grid item>
            {suma_visible_oculta}
          </Grid>
        </Grid>
      </Box>
    </Grid>
  </>
  )
}

export default CeldaBinario
