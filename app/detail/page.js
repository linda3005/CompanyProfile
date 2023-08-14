'use client'
import '../globals.css';
import theme from "../theme"; // Path to your custom theme file
import { Container } from '@mui/material'
import { ThemeProvider } from "@mui/material/styles";
import LindaNavbar from '../components/linda-navbar/LindaNavbar'
import LindaLayout from '../components/linda-layout/LindaLayout';
import LindaDivider from '../components/linda-divider/LindaDivider';
import LindaList from '../components/linda-list/LindaList';
import LindaPersonalDetail from '../components/linda-personal-detail/LindaPersonalDetail';
import LindaFooter from '../components/linda-footer/LindaFooter';


export default function Detail() {
    const label = { section: "Work Experience", details : [
        { startYear: "2022", endYear: "2022", role: "Intern System Analyst and Front End Developer", description:  " CV Garuda Infinity Kreasindo " }]
        // Add more experiences as needed
    };
    const label2 = { section: "Education", details : [
        { startYear: "2019", endYear: "2023", role: "Politeknik Negeri Bandung", description: "Cumlaude" },
        { startYear: "2016", endYear: "2019", role: "SMAN 1 Bandung", description:  " IPA " },
        { startYear: "2013", endYear: "2016", role: "SMPN 1 Bandung", description: "-" },
        { startYear: "2007", endYear: "2013", role: "SDN Sukawarna 2", description: "-" }]
        // Add more experiences as needed
    };
    const label3 = { section : "Personal Detail",
                     placeofBirth: "Bandung",
                     dateofBirth: "2001-05-30",
                     gender :  'Female',
                     language : [{
                        nameLanguage : "Indonesia"},
                        {nameLanguage : "English"}
                     ]
    };

    const label4 = { section : "Project",
                     details : [
                        { startYear: "2022", endYear: "2022", role: "System Analyst", description: "This is an internal project from the company in the form of an application to manage talent in the company. Management in the form of employee data management, projects undertaken, and project budgeting undertaken. With the job description is Analyze the existing business processes in the application, Analyze user stories from each backlog, Create a backlog for the project team." },
                        { startYear: "2022", endYear: "2022", role: "Frontend Developer", description: "This is an internal project from the company in the form of an application to manage talent in the company. Management in the form of employee data management, projects undertaken, and project budgeting undertaken. With the job description Create the pages required by the application. Routing between pages, Integration between Frontend and Backend, Bug fixes from existing logic in the application process." }
                     ]
    };
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth sx={{
                    'width': 'max',
                    'height': 'max'}}>
        <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
             <LindaNavbar maxWidth/>
        </div>
        <LindaLayout srcImage="https://avatars.githubusercontent.com/u/56756925?v=4" />
        <LindaDivider text='PERSONAL DETAIL'/>
        <br/>
        <LindaPersonalDetail  Labels={label3} />
        <br />
        <LindaDivider text='WORK EXPERIENCES'/>
        <br/>
        <LindaList  Labels={label} />
        <br/>
        <LindaDivider text='EDUCATIONS'/>
        <br/>
        <LindaList  Labels={label2} />
        <br/>
        <LindaDivider text='PROJECT'/>
        <br/>
        <LindaList  Labels={label4} />
        <br />
        <LindaFooter />
      </Container>
    </ThemeProvider>
  )
}
