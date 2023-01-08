import React, { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { CalcuContext } from "../context";

const CeldaSuma = () => {
  
    //Traigo contexto para usar estado
  const calcu = useContext(CalcuContext);

  return (
    <Grid item xs={2}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        align="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item></Grid>

        <Grid item>
          <Box
            color="secundary"
            bgcolor="secundary.main"
            borderColor="#000"
            marginTop={5}
            marginLeft={1}
            display="flex"
            justifyContent="center"
          >
            = {calcu.sumaParcial}
          </Box>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Grid>
  );
};

export default CeldaSuma;
