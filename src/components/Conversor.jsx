import { Grid } from "@mui/material";
import Caja from "./Caja";

export default function Conversor () {
  return (
    <Grid container direction="column" justifyContent="center" align="center">
      <Grid item xs={12}>
        <Caja/>
      </Grid>
    </Grid>
  );
};

