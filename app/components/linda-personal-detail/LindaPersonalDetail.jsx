import { Container, Grid, Typography } from "@mui/material";
import React from "react";

function LindaPersonalDetail({ Labels }) {
    return (
        <Container>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        {Labels.section}
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <Typography variant="subtitle1">
                                Place of Birth : {Labels.placeofBirth}
                            </Typography>
                            <Typography variant="subtitle1">
                                Date of Birth  : {Labels.dateofBirth}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography variant="subtitle1">
                                Gender      : {Labels.gender}
                            </Typography>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} md={8}>
                                <Typography variant="subtitle1" display="inline">
                                    Language : 
                                </Typography>
                                {Labels.language.map((label, index) => (
                                    <Typography key={index} variant="subtitle1" display="inline">
                                        {label.nameLanguage}
                                        {index < Labels.language.length - 1 ? ", " : ""}
                                    </Typography>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default LindaPersonalDetail;