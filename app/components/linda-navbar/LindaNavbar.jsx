import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Container, Grid } from "@mui/material";
import { usePathname } from "next/navigation"
import LindaButton from '../linda-button/LindaButton';

function LindaNavbar() {
    const pathname = usePathname();
    const showButtons = pathname === "/";
    const isEditPage = pathname === "/edit";
    const [name, setName] = useState("");
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        // Retrieve data from local storage
        const storedData = localStorage.getItem('formData');
        const formData = storedData ? JSON.parse(storedData) : {};
        
        // Extract name and experience from the formData
        const { name, experience } = formData;

        setName(name || "");
        setExperience(experience || []);
    }, []);
    return (
        <AppBar position="static" style={{
            'backgroundColor': "#d1d5d6",
            'boxShadow': "none"
        }}>
            <Container maxWidth style={{ padding: 0, margin: 0 }}>
                <Toolbar>
                    <Grid container justifyContent="space-between" alignItems="center" sx={{ gap: 10 }}>
                        <Grid item>
                        {!isEditPage && (
                                <>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }} component="div" color='black'>
                                {name}
                                {/* nama  */}
                            </Typography>
                            <Typography variant="subtitle1" component="div" color='black'>
                                {experience && experience.map((exp, index) => (
                                    <span key={index}>{exp.experienceName}{index !== experience.length - 1 ? ', ' : ''}</span>
                                ))}
                            </Typography>
                            </>
                        )}
                        </Grid>
                        <Grid item sx={{ px: '5px' }} >
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
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default LindaNavbar;