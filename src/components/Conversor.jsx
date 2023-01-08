import { useContext } from "react";
import { CalcuContext} from "../context";
import { Grid } from "@mui/material";
import Caja from "./Caja";

export default function Conversor () {
  //Traigo contexto para usar estado
  const calcu = useContext(CalcuContext);
  


  return (
    <Grid container direction="column" justifyContent="center" align="center">
      <Grid item xs={12}>
        Convierta a binario el siguiente número decimal: {calcu.numeroDecimal}
      </Grid>
      <Grid item xs={12}>
        <Caja/>
      </Grid>
    </Grid>
  );
};

