import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"
import Link from "next/link";
import LindaButton from '../linda-button/LindaButton';


function LindaLayout({ srcImage }) {
  const pathname = usePathname();
  const showButtons = pathname === "/";
  const isEditPage = pathname === "/edit";
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('formData');
    const formData = storedData ? JSON.parse(storedData) : {};

    // For Extract photo and description from the formData
    const { photo, description } = formData;

    setPhoto(photo || "");
    setDescription(description || "");
  }, []);
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
          <img src={photo} alt="Profile" style={{ width: "auto", borderRadius: '50%' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Profile Text */}
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>Hellow!!</Typography>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>A little about Me</Typography>
          <Typography variant="subtitle1" style={{ fontFamily: "Nunito, sans-serif" }}>
            {description}
          </Typography>
          {/* Buttons */}
          <br />
          <Grid item >
            <Grid container spacing={2}>
              {showButtons &&
                (
                  <Grid item>
                    <Link href="/detail">
                      <LindaButton text='Detail' />
                    </Link>
                  </Grid>
                )}
              {isEditPage ? (
                <Grid item>
                  <LindaButton text='Save' />
                </Grid>
              ) : (
                <Grid item>
                  <Link href="/edit">
                    <LindaButton text='Edit' />
                  </Link>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LindaLayout;
