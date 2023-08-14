import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { usePathname } from "next/navigation"

import LindaButton from '../linda-button/LindaButton';


function LindaLayout({srcImage}) {
    const pathname = usePathname();
    const showButtons = pathname === "/";
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{ minHeight: "80vh" }}
      >
        <Grid item xs={12} md={6}>
          {/* Image */}
          <img src={srcImage} alt="Profile" style={{ width: "auto", borderRadius: '50%'}} />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Profile Text */}
          <Typography variant="h2" sx={{fontWeight: 'bold'}}>Hellow!!</Typography>
          <Typography variant="h5" sx={{fontWeight: 'bold'}}>A little about Me</Typography>
          <Typography variant="subtitle1" style={{ fontFamily: "Nunito, sans-serif" }}> 
          My name is Linda Damayanti. I have experience as a system analyst and front-end developer. As a Software developer at PT Padepokan 79, 
          I am a graduate of Informatics Engineering at Bandung State Polytechnic 
          and play an active role in group projects for required system analysis, 
          system design, and application implementation. 
          I have expertise in programming, system analysis, project management, and time management. 
          I am also a person who is disciplined and likes punctuality, 
          and every job must be well organized.

          </Typography>
          {/* Buttons */}
          <br/>
          {showButtons 
          &&
          (
            <Grid item>
                <Grid container spacing={2}>
                    <Grid item>
                        <LindaButton text='Detail'/>
                    </Grid>
                    <Grid item>
                        <LindaButton text= 'Edit' />
                    </Grid>
                </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default LindaLayout;
