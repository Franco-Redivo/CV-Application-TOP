import Button from "./Button.jsx";
import "../styles/CollapsiblePanel.css";

const CollapsiblePanel = ({onClick,panelCollapse,Component,value,onChange,data}) => {
    const isCollapsed = value === "education" ? panelCollapse.isEducationCollapsed : panelCollapse.isExperienceCollapsed;
    return(
        <div className="collapsible-panel">
            <Button onClick={onClick} value={value} panelCollapse={panelCollapse}/>
            <div className={`panel-content ${isCollapsed ? "collapsed" : "expanded"}`}>
                <Component onChange={onChange} data={data}/>
            </div>
        </div>
    );

}

export default CollapsiblePanel;