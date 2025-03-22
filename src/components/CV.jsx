import Header from "./resume/Header.jsx";
import EducationSection from "./resume/EducationSection.jsx";
import ExperienceSection from "./resume/ExperienceSection.jsx";
import "../styles/CV.css";

const CV = ({ personalInfo, educationData, experienceData }) => {

    return(
        <div className="cv-wrapper">
        <Header personalInfo={personalInfo}/>
        <EducationSection educationData={educationData}/>
        <ExperienceSection experienceData={experienceData}/>
        </div>
    )
}

export default CV;