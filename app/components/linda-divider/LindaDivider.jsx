import { Container, Grid, Divider, Chip} from "@mui/material";
import React from "react";

function LindaDivider({text}) {
  return (
    <Container>
        <Grid>
            <Divider>
                <Chip label={text} />
            </Divider>
        </Grid>
    </Container>
  );
}

export default LindaDivider;

