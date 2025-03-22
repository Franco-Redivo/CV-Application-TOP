import "../../styles/CVSections.css";
const EducationSection = ({educationData}) => {
    const formatMonthYear = (value) =>{
        const [year, month] = value.split('-');
        return `${month}/${year}`;
    }
    
    return(
        <section className="cv-education cv-section">
            <h1 className="education-title">
                Education
            </h1>
            <div className="info">
                <div className="date-location">
                    <p>{formatMonthYear(educationData.startDate)} - {formatMonthYear(educationData.endDate)}</p>
                    <p>{educationData.location}</p>
                </div>
                <div className="main-info">
                    <h3 className="name">{educationData.school}</h3>
                    <p>{educationData.degree}</p>
                </div>
            </div>
        </section>
    );
}

export default EducationSection;