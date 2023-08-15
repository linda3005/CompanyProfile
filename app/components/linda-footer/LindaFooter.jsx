import { Container, Grid, Typography, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

function LindaFooter() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");

  useEffect(() => {
      // Retrieve data from local storage
      const storedData = localStorage.getItem('formData');
      const formData = storedData ? JSON.parse(storedData) : {};

      // Extract phone number, email, LinkedIn, and Twitter from the formData
      const { phoneNumber, email, linkedin, twitter } = formData;

      setPhoneNumber(phoneNumber || "");
      setEmail(email || "");
      setLinkedin(linkedin || "");
      setTwitter(twitter || "");
  }, []);
  return (
    <footer style={{ backgroundColor: "transparent", padding: "20px 0" }}>
      <Container>
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography>Phone: {phoneNumber} </Typography>
            <Typography>Email: {email}</Typography>
          </Grid>
          <Grid item>
            <div>
              <IconButton href={linkedin} target="_blank"> 
                <LinkedInIcon />
              </IconButton>
              <IconButton href={twitter} target="_blank">
                <TwitterIcon />
              </IconButton>
              <IconButton href={`mailto:${email}`} target="_blank">
                <EmailIcon />
              </IconButton>
            </div>
            <Typography variant="caption">© 2023 Your Company</Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default LindaFooter;
