"use client"
import React, { useState } from "react";
import { Container, Grid, TextField, Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme"; // Path to your custom theme file
import LindaNavbar from '../components/linda-navbar/LindaNavbar';
import LindaButton from "../components/linda-button/LindaButton";

const label3 = {
    photo: "https://avatars.githubusercontent.com/u/56756925?v=4",
    name: "Linda Damayanti",
    phoneNumber: "089689900616",
    email: "lindadamayanti73@gmail.com",
    linkedin: "lindadamayanti30",
    twitter: "lindmynt",
    description: "My name is Linda Damayanti. I have experience as a system analyst and front-end developer. As a Software developer at PT Padepokan 79, I am a graduate of Informatics Engineering at Bandung State Polytechnic and play an active role in group projects for required system analysis, system design, and application implementation. I have expertise in programming, system analysis, project management, and time management. I am also a person who is disciplined and likes punctuality, and every job must be well organized.",
    experience: [{ experienceName: "Analyst" },
    { experienceName: "QA" },
    { experienceName: "Frontend Developer" }],
    placeofBirth: "Bandung",
    dateofBirth: "2001-05-30",
    gender: 'Female',
    language: [{
        nameLanguage: "Indonesia"
    },
    { nameLanguage: "English" }
    ],
    section1: "Work Experience", details:
        [{ startYear: "2022", endYear: "2022", role: "Intern System Analyst and Front End Developer", description: " CV Garuda Infinity Kreasindo " }],
    section2: "Education", details2: [
        { startYear: "2019", endYear: "2023", role: "Politeknik Negeri Bandung", description: "Cumlaude" },
        { startYear: "2016", endYear: "2019", role: "SMAN 1 Bandung", description: " IPA " },
        { startYear: "2013", endYear: "2016", role: "SMPN 1 Bandung", description: "-" },
        { startYear: "2007", endYear: "2013", role: "SDN Sukawarna 2", description: "-" }],
    section3: "Project",
    details3: [
        { startYear: "2022", endYear: "2022", role: "System Analyst", description: "This is an internal project from the company in the form of an application to manage talent in the company. Management in the form of employee data management, projects undertaken, and project budgeting undertaken. With the job description is Analyze the existing business processes in the application, Analyze user stories from each backlog, Create a backlog for the project team." },
        { startYear: "2022", endYear: "2022", role: "Frontend Developer", description: "This is an internal project from the company in the form of an application to manage talent in the company. Management in the form of employee data management, projects undertaken, and project budgeting undertaken. With the job description Create the pages required by the application. Routing between pages, Integration between Frontend and Backend, Bug fixes from existing logic in the application process." }
    ]
};

export default function Edit() {
    const [formData, setFormData] = useState(label3);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // Use the form data as needed (e.g., send to backend)
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth sx={{ width: 'max', height: 'max' }}>
                <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
                    <LindaNavbar maxWidth />
                </div>

                <Grid container>
                    <Grid sx={{m:1}}/>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Phone Number"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="LinkedIn"
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Twitter"
                                    name="twitter"
                                    value={formData.twitter}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    fullWidth
                                    multiline
                                    rows={4}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Place of Birth"
                                    name="placeofBirth"
                                    value={formData.placeofBirth}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Date of Birth"
                                    type="date"
                                    name="dateofBirth"
                                    value={formData.dateofBirth}
                                    onChange={handleChange}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <Typography variant="h6">Languages</Typography>
                                {formData.language.map((language, index) => (
                                    <TextField
                                        key={index}
                                        label={`Language ${index + 1}`}
                                        name={`language.${index}.nameLanguage`}
                                        value={language.nameLanguage}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                ))}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Section 1"
                                    name="section1"
                                    value={formData.section1}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">Work Experience</Typography>
                                {formData.details.map((detail, index) => (
                                    <Grid container spacing={2} key={index}>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label={`Start Year ${index + 1}`}
                                                name={`details.${index}.startYear`}
                                                value={detail.startYear}
                                                onChange={handleChange}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label={`End Year ${index + 1}`}
                                                name={`details.${index}.endYear`}
                                                value={detail.endYear}
                                                onChange={handleChange}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label={`Role ${index + 1}`}
                                                name={`details.${index}.role`}
                                                value={detail.role}
                                                onChange={handleChange}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label={`Description ${index + 1}`}
                                                name={`details.${index}.description`}
                                                value={detail.description}
                                                onChange={handleChange}
                                                fullWidth
                                                multiline
                                                rows={4}
                                            />
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">{formData.section2}</Typography>
                                {formData.details2.map((detail, index) => (
                                    <Grid container spacing={2} key={index}>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label={`Start Year ${index + 1}`}
                                                name={`details2.${index}.startYear`}
                                                value={detail.startYear}
                                                onChange={handleChange}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label={`End Year ${index + 1}`}
                                                name={`details2.${index}.endYear`}
                                                value={detail.endYear}
                                                onChange={handleChange}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label={`Role ${index + 1}`}
                                                name={`details2.${index}.role`}
                                                value={detail.role}
                                                onChange={handleChange}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label={`Description ${index + 1}`}
                                                name={`details2.${index}.description`}
                                                value={detail.description}
                                                onChange={handleChange}
                                                fullWidth
                                                multiline
                                                rows={4}
                                            />
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>

                            {/* Section 3: Project */}
                            <Grid item xs={12}>
                                <Typography variant="h6">{formData.section3}</Typography>
                                {formData.details3.map((detail, index) => (
                                    <Grid container spacing={2} key={index}>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label={`Start Year ${index + 1}`}
                                                name={`details3.${index}.startYear`}
                                                value={detail.startYear}
                                                onChange={handleChange}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label={`End Year ${index + 1}`}
                                                name={`details3.${index}.endYear`}
                                                value={detail.endYear}
                                                onChange={handleChange}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label={`Role ${index + 1}`}
                                                name={`details3.${index}.role`}
                                                value={detail.role}
                                                onChange={handleChange}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label={`Description ${index + 1}`}
                                                name={`details3.${index}.description`}
                                                value={detail.description}
                                                onChange={handleChange}
                                                fullWidth
                                                multiline
                                                rows={4}
                                            />
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <LindaButton text='Save' />
                    </form>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}
