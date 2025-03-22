import Input from "../Input.jsx";
import "../../styles/PanelForms.css";

const PersonalInfoPanel = ({onChange, data}) => {

    return(
        <div className="panel-wrapper">
            <h1 className="personal-details-title">Personal Information</h1>
            <form className="personal-details-form">
                <Input 
                onChange={onChange} 
                labelText="Full Name" 
                value={data.fullName} 
                data-key="fullName" 
                placeHolder="Full Name" 
                id="full-name" 
                type="text"
                />
                <Input 
                onChange={onChange} 
                labelText="Email" 
                value={data.email} 
                data-key="email" 
                placeHolder="Email address" 
                id="email" type="email"
                />
                <Input 
                onChange={onChange} 
                labelText="Phone Number" 
                value={data.phoneNumber} 
                data-key="phoneNumber" 
                placeHolder="Phone number" 
                id="phone-number" 
                type="tel"
                />
                <Input 
                onChange={onChange} 
                labelText="Address" 
                value={data.address} 
                data-key="address" 
                placeHolder="Address" 
                id="address" 
                type="text"
                />
            </form>
        </div>    
    );

}

export default PersonalInfoPanel;