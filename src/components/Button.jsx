import "../styles/CollapsiblePanel.css";
import chevronUp from "../assets/chevron-up-solid.svg"; // Chevron icon
import chevronDown from "../assets/chevron-down-solid.svg"; // Chevron down icon
import briefcaseIcon from "../assets/briefcase-solid.svg"; // Briefcase icon
import graduationHatIcon from "../assets/graduation-cap-solid.svg"; // Graduation hat icon
const Button = ({onClick,value,panelCollapse}) => {
    const isCollapsed = value === "education" ? panelCollapse.isEducationCollapsed : panelCollapse.isExperienceCollapsed;
    return(
        <button className="toggle-btn" onClick={() => onClick(value)}>
            <img
            src={value === "education" ? graduationHatIcon : briefcaseIcon}
            alt={value === "education" ? "Graduation Hat" : "Briefcase"}
            className="icon"
            />
            {/* Button Text */}
            {isCollapsed ? `Show ${value.charAt(0).toUpperCase() + value.slice(1)}` : `Hide ${value.charAt(0).toUpperCase() + value.slice(1)}`}
            {/* Chevron Icon */}
            <img
            src={isCollapsed ? chevronDown : chevronUp}
            alt={isCollapsed ? "Chevron Down" : "Chevron Up"}
            className="chevron-icon"
            />
        </button>
    );
}

export default Button;