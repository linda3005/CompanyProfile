'use client'
import './globals.css';
import { Container } from '@mui/material'
import { ThemeProvider } from "@mui/material/styles";
import LindaNavbar from './components/linda-navbar/LindaNavbar'
import LindaLayout from './components/linda-layout/LindaLayout';
import LindaFooter from './components/linda-footer/LindaFooter';
import theme from "./theme"; // Path to your custom theme file


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth sx={{
                    'width': 'max',
                    'height': 'max'}}>
        <LindaNavbar maxWidth/>
        <LindaLayout srcImage="https://avatars.githubusercontent.com/u/56756925?v=4"/>
        <LindaFooter />
      </Container>
    </ThemeProvider>
  )
}
