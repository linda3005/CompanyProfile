import { Container, Grid, Typography } from "@mui/material";
import React from "react";

function LindaList( {Labels} ) {
    console.log(Labels.section);
  return (
    <Container>
        <Grid container spacing={2} >
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{fontWeight: 'bold'}}>
                {Labels.section}
            </Typography>
          </Grid>
          <Grid item md={6}>
        {Labels.details?.map((label, index) => (
            <Grid container key={index}>
                <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1">
                    {label.startYear} - {label.endYear}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" sx={{fontWeight: 'bold'}}>{label.role}</Typography>
                    <Typography variant="subtitle1">{label.description}</Typography>
                </Grid>
            </Grid>
        ))}
        </Grid>
    </Grid>
    </Container>
  );
}

export default LindaList;
