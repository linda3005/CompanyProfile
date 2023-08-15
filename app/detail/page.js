"use client"
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme"; // Path to your custom theme file
import LindaNavbar from "../components/linda-navbar/LindaNavbar";
import LindaLayout from "../components/linda-layout/LindaLayout";
import LindaDivider from "../components/linda-divider/LindaDivider";
import LindaList from "../components/linda-list/LindaList";
import LindaPersonalDetail from "../components/linda-personal-detail/LindaPersonalDetail";
import LindaFooter from "../components/linda-footer/LindaFooter";
import LindaAutoscroll from "../components/linda-autoscroll/LindaAutoscroll";

export default function Detail() {
  const [formData, setFormData] = useState({});
  const [label, setLabel] = useState({});
  const [label2, setLabel2] = useState({});
  const [label3, setLabel3] = useState({});
  const [label4, setLabel4] = useState({});

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem("formData");
    const parsedData = storedData ? JSON.parse(storedData) : {};

    setFormData(parsedData);
    setLabel({
      section: "Work Experience",
      details: parsedData.details,
    });

    setLabel2({
      section: "Education",
      details: parsedData.details2,
    });   // Update this based on your data structure
    setLabel3({
      section: "Personal Detail",
      placeofBirth: parsedData.placeofBirth,
      dateofBirth: parsedData.dateofBirth,
      gender: parsedData.gender,
      language: parsedData.language,
    });
    setLabel4({
      section: "Project",
      details: parsedData.details3,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth
        sx={{
          width: "max",
          height: "max",
        }}
      >
        <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
          <LindaNavbar maxWidth />
        </div>
          <LindaAutoscroll />
          <LindaLayout srcImage={formData.photo} />
          <LindaDivider text="PERSONAL DETAIL" />
          <br />
          <LindaPersonalDetail Labels={label3} />
          <br />
          <LindaDivider text="WORK EXPERIENCES" />
          <br />
          <LindaList Labels={label} />
          <br />
          <LindaDivider text="EDUCATIONS" />
          <br />
          <LindaList Labels={label2} />
          <br />
          <LindaDivider text="PROJECT" />
          <br />
          <LindaList Labels={label4} />
          <br />
        <LindaFooter />
      </Container>
    </ThemeProvider>
  );
}
