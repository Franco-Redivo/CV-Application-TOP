import Input from "../Input.jsx";
import "../../styles/PanelForms.css";

const EducationInfoPanel = ({ onChange, data}) => {
    return(
        <div className="panel-wrapper">
            <form 
            className="education-inputs-form"
            >
                <h2>Education</h2>
                <Input 
                onChange={onChange} 
                labelText="School" 
                value={data.school} 
                data-key="school" 
                placeHolder="School" 
                id="school" 
                type="text"
                />
                <Input
                onChange={onChange} 
                labelText="Degree" 
                value={data.degree} 
                data-key="degree" 
                placeHolder="Degree" 
                id="degree" 
                type="text"
                />
                <div className="date-inputs">
                    <Input
                    onChange={onChange} 
                    labelText="Start Date" 
                    value={data.startDate} 
                    data-key="startDate" 
                    placeHolder="Start Date" 
                    id="start-date" 
                    type="month"
                    />
                    <Input
                    onChange={onChange} 
                    labelText="End Date" 
                    value={data.EndDate} 
                    data-key="endDate" 
                    placeHolder="End Date" 
                    id="end-date" 
                    type="month"
                    />
                </div>
                <Input
                onChange={onChange} 
                labelText="Location" 
                value={data.location} 
                data-key="location" 
                placeHolder="Location" 
                id="location" 
                type="text"
                />
            </form>
        </div>
       
    );

}

export default EducationInfoPanel;