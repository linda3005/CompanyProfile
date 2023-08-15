"use client"
import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Button, Typography } from "@mui/material";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme"; // Path to your custom theme file
import LindaNavbar from '../components/linda-navbar/LindaNavbar';

export default function Edit() {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        phoneNumber: Yup.string(),
        email: Yup.string().email('Invalid email').required('Email is required'),
        linkedin: Yup.string(),
        twitter: Yup.string(),
        description: Yup.string().required('Description is required'),
        placeofBirth: Yup.string().required('Place of Birth is required'),
        dateofBirth: Yup.date().required('Date of Birth is required'),
        gender: Yup.string().required('Gender is required'),
        language: Yup.array().of(
            Yup.object().shape({
                nameLanguage: Yup.string().required('Language name is required'),
            })
        ),
        details: Yup.array().of(
            Yup.object().shape({
                startYear: Yup.string(),
                endYear: Yup.string(),
                role: Yup.string(),
                description: Yup.string(),
            })
        ),
        details2: Yup.array().of(
            Yup.object().shape({
                startYear: Yup.string(),
                endYear: Yup.string(),
                role: Yup.string(),
                description: Yup.string(),
            })
        ),
        details3: Yup.array().of(
            Yup.object().shape({
                startYear: Yup.string(),
                endYear: Yup.string(),
                role: Yup.string(),
                description: Yup.string(),
            })
        ),
        section2: Yup.string(),
        section3: Yup.string(),
    });


    const formik = useFormik({
        initialValues: {
            name: '',
            phoneNumber: '',
            email: '',
            linkedin: '',
            twitter: '',
            description: '',
            placeofBirth: '',
            dateofBirth: '',
            gender: '',
            language: [{ nameLanguage: '' }],
            details: [
                {
                    startYear: '',
                    endYear: '',
                    role: '',
                    description: '',
                },
            ],
            details2: [
                {
                    startYear: '',
                    endYear: '',
                    role: '',
                    description: '',
                },
            ],
            details3: [
                {
                    startYear: '',
                    endYear: '',
                    role: '',
                    description: '',
                },
            ],
            section2: '',
            section3: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            localStorage.setItem('formData', JSON.stringify(values));
        },
    });

    const [formData, setFormData] = useState({
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        localStorage.setItem('formData', JSON.stringify(formData));
    };

    useEffect(() => {
        const storedData = localStorage.getItem('formData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            formik.setValues(parsedData);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth sx={{ width: 'max', height: 'max' }}>
                <Grid style={{ position: "sticky", top: 0, zIndex: 100 }}>
                    <LindaNavbar maxWidth />
                </Grid>

                <Grid container>
                    <Grid sx={{ m: 1 }} />
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    label="Name"
                                    name='name'
                                    fullWidth
                                    disabled
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Phone Number"
                                    name='phoneNumber'
                                    fullWidth
                                    value={formik.values.phoneNumber}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    label="Email"
                                    name='email'
                                    fullWidth
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="LinkedIn"
                                    name='linkedin'
                                    fullWidth
                                    value={formik.values.linkedin}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Twitter"
                                    name='twitter'
                                    fullWidth
                                    value={formik.values.twitter}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    label="Description"
                                    name='description'
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.description && Boolean(formik.errors.description)}
                                    helperText={formik.touched.description && formik.errors.description}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    label="Place of Birth"
                                    name='placeofBirth'
                                    fullWidth
                                    disabled
                                    value={formik.values.placeofBirth}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    label="Date of Birth"
                                    name='dateofBirth'
                                    type="date"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    disabled
                                    value={formik.values.dateofBirth}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    label="Gender"
                                    name='gender'
                                    fullWidth
                                    disabled
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            {/* Languages */}
                            <Grid item xs={12}>
                                <Typography variant="h6">Languages</Typography>
                                {formik.values.language?.map((language, index) => (
                                    <TextField
                                        required
                                        key={index}
                                        label={`Language ${index + 1}`}
                                        fullWidth
                                        name={`language[${index}].nameLanguage`}
                                        value={language.nameLanguage}
                                        onChange={(e) => {
                                            const newLanguages = [...formik.values.language];
                                            newLanguages[index] = { ...newLanguages[index], nameLanguage: e.target.value };
                                            formik.setFieldValue('language', newLanguages);
                                        }}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.language && formik.errors.language?.[index]?.nameLanguage !== undefined}
                                        helperText={formik.touched.language && formik.errors.language?.[index]?.nameLanguage}
                                    />
                                ))}
                                
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">Education</Typography>
                                {formik.values.details2?.map((detail, index) => (
                                    <Grid container spacing={2} key={index}>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label={`Start Year ${index + 1}`}
                                                fullWidth
                                                name={`details2[${index}].startYear`}
                                                value={detail.startYear}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label={`End Year ${index + 1}`}
                                                fullWidth
                                                name={`details2[${index}].endYear`}
                                                value={detail.endYear}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label={`Role ${index + 1}`}
                                                fullWidth
                                                name={`details2[${index}].role`}
                                                value={detail.role}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label={`Description ${index + 1}`}
                                                fullWidth
                                                multiline
                                                rows={4}
                                                name={`details2[${index}].description`}
                                                value={detail.description}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">Work Experience</Typography>
                                {formik.values.details?.map((detail, index) => (
                                    <Grid container spacing={2} key={index}>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label={`Start Year ${index + 1}`}
                                                fullWidth
                                                name={`details[${index}].startYear`}
                                                value={detail.startYear}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label={`End Year ${index + 1}`}
                                                fullWidth
                                                name={`details[${index}].endYear`}
                                                value={detail.endYear}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label={`Role ${index + 1}`}
                                                fullWidth
                                                name={`details[${index}].role`}
                                                value={detail.role}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label={`Description ${index + 1}`}
                                                fullWidth
                                                multiline
                                                rows={4}
                                                name={`details[${index}].description`}
                                                value={detail.description}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">Project</Typography>
                                {formik.values.details3?.map((detail, index) => (
                                    <Grid container spacing={2} key={index}>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label={`Start Year ${index + 1}`}
                                                fullWidth
                                                name={`details3[${index}].startYear`}
                                                value={detail.startYear}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label={`End Year ${index + 1}`}
                                                fullWidth
                                                name={`details3[${index}].endYear`}
                                                value={detail.endYear}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label={`Role ${index + 1}`}
                                                fullWidth
                                                name={`details3[${index}].role`}
                                                value={detail.role}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label={`Description ${index + 1}`}
                                                fullWidth
                                                multiline
                                                rows={4}
                                                name={`details3[${index}].description`}
                                                value={detail.description}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" onClick={formik.submitForm}>
                                    Save All Data
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Container >
        </ThemeProvider >
    );
}
