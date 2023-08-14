import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Container, Grid } from "@mui/material";
import { usePathname } from "next/navigation"
import LindaButton from '../linda-button/LindaButton';

function LindaNavbar() {
    const pathname = usePathname();
    const showButtons = pathname === "/";
    return (
        <AppBar position="static" style={{
            'backgroundColor': "#d1d5d6",
            'boxShadow': "none"
        }}>
            <Container maxWidth style={{ padding: 0, margin: 0 }}>
                <Toolbar>
                    <Grid container justifyContent="space-between" alignItems="center" sx={{ gap: 10 }}>
                        <Grid item>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }} component="div" color='black'>
                                Linda Damayanti
                                {/* nama  */}
                            </Typography>
                            <Typography variant="subtitle1" component="div" color='black'>
                                Analyst, QA, Frontend Developer
                                {/* Deskripsi singkat */}
                            </Typography>
                        </Grid>
                        <Grid item sx={{ px: '5px' }} >
                            <Grid container spacing={2}>
                                {showButtons
                                    &&
                                    (
                                        <Grid item>
                                            <LindaButton text='Detail' />
                                        </Grid>
                                    )}
                                <Grid item>
                                    <LindaButton text='Edit' />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default LindaNavbar;