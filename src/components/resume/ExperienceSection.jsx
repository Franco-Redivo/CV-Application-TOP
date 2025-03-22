import "../../styles/CVSections.css";
const ExperienceSection = ({experienceData}) => {

    const formatMonthYear = (value) =>{
        const [year, month] = value.split('-');
        return `${month}/${year}`;
    }
    return(
        <section className="cv-experience cv-section">
            <h1 className="experience-title">
                Experience
            </h1>
            <div className="info">
                <div className="date-location">
                    <p>{formatMonthYear(experienceData.startDate)} - {formatMonthYear(experienceData.endDate)}</p>
                    <p>{experienceData.location}</p>
                </div>
                <div className="main-info">
                    <h3 className="name">{experienceData.companyName}</h3>
                    <p>{experienceData.positionTitle}</p>
                    <p>{experienceData.description}</p>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;