import "../../styles/Header.css";
import phoneIcon from "../../assets/phone-solid.svg"; // Phone icon
import emailIcon from "../../assets/envelope-solid.svg"; // Email icon
import locationIcon from "../../assets/location-dot-solid.svg"; // Location icon
const Header = ({personalInfo}) => {
    return(
        <header className="cv-header">
            <h1 className="header-title">
                {personalInfo.fullName}
            </h1>
            <div className="header-details">
                <p>
                    <img src={emailIcon} alt="Email icon" className="header-icon"/>
                    {personalInfo.email}</p>
                <p>
                    <img src={phoneIcon} alt="phone icon" className="header-icon"/>
                    {personalInfo.phoneNumber}</p>
                <p>
                    <img src={locationIcon} alt="location icon" className="header-icon"/>
                    {personalInfo.address}</p>
            </div>
        </header>
    );
}

export default Header;