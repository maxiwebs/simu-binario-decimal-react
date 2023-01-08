import React from "react";
//import { CalcuContext, CalcuDispatchContext } from "../context";
import { Box, Grid } from "@mui/material";
import CeldaSuma from "./CeldaSuma";
import CeldaSig from "./CeldaSig";
import CeldaBinario from "./CeldaBinario";

const Caja = () => {

  return (
    <Box
      width="70%"
      color="primary.contrastText"
      bgcolor="primary.main"
      border={1}
      borderColor="#777"
      boxShadow={true}
      borderRadius={4}
      p={2}
      m={2}
    >
      <Grid container direction="row" justifyContent="center">
        <CeldaBinario pot={7} suma="128"/>
        <CeldaBinario pot={6} suma="+64"/>
        <CeldaBinario pot={5} suma="+32"/>
        <CeldaBinario pot={4} suma="+16"/>
        <CeldaBinario pot={3} suma="+8"/>
        <CeldaBinario pot={2} suma="+4"/>
        <CeldaBinario pot={1} suma="+2"/>
        <CeldaBinario pot={0} suma="+1"/>
        <CeldaSuma />
        <CeldaSig />
      </Grid>
    </Box>
  );
};

export default Caja;
