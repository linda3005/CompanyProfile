import { Button, Typography } from "@mui/material";
import React from "react";

function LindaButton({text}) {
  
    return (
        <Button
          variant="contained"
          style={{
            backgroundColor: "transparent",
            borderRadius: 3,
            border: "2px solid black",
            color: "black",
            height: 36,
            padding: "0 20px",
          }}
        >
            <Typography>
                {text}
            </Typography>
        </Button>
      );
}

export default LindaButton;
