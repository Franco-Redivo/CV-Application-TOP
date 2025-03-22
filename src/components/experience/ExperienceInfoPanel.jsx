import Input from "../Input.jsx";
import "../../styles/PanelForms.css";

const ExperienceInfoPanel = ({ onChange, data}) => {
    return(
        <div className="panel-wrapper">
            <form 
            className="experience-inputs-form"
            >
                <h2>Experience</h2>
                <Input 
                onChange={onChange} 
                labelText="Company" 
                value={data.companyName} 
                data-key="companyName" 
                placeHolder="Company name" 
                id="company-name" 
                type="text"
                />
                <Input
                onChange={onChange} 
                labelText="Position Title" 
                value={data.positionTitle} 
                data-key="positionTitle" 
                placeHolder="Position title" 
                id="position-title" 
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
                <Input
                onChange={onChange} 
                labelText="Description" 
                value={data.description} 
                data-key="description" 
                placeHolder="Description" 
                id="description" 
                type="textarea"
                />
            </form>
        </div>
        
    );

}

export default ExperienceInfoPanel;