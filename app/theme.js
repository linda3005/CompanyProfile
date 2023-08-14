// styles/theme.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito, sans-serif',
  },
  classes: {
    header: {
      fontWeight: 'bold',
    },
    subTitle: {
      fontWeight: 'bold',
    },
    bodyText: {
      fontFamily: 'Nunito, sans-serif',
    },
  },
});

export default theme;