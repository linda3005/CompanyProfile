import { Container, Grid, Typography, IconButton } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

function LindaFooter() {
  return (
    <footer style={{ backgroundColor: "transparent", padding: "20px 0" }}>
      <Container>
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography>Phone: (123) 456-7890</Typography>
            <Typography>Email: example@example.com</Typography>
          </Grid>
          <Grid item>
            <div>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
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
