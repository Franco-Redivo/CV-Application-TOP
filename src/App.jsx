import { useState } from 'react';
import exampleData from './exampleData.js';

import PersonalInfoPanel from './components/personal-info/PersonalInfoPanel.jsx';
import EducationInfoPanel from './components/education/EducationInfoPanel.jsx';
import ExperienceInfoPanel from './components/experience/ExperienceInfoPanel.jsx';
import CollapsiblePanel from './components/CollapsiblePanel.jsx';
import CV from './components/CV.jsx';


import './App.css'

function App() {

  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [educationSectionsData, setEducationSectionsData] = useState(exampleData.sections.educations);
  const [experienceSectionsData, setExperienceSectionsData] = useState(exampleData.sections.experiences);
  const [panelCollapse, setPanelCollapse] = useState({isEducationCollapsed:true, isExperienceCollapsed:true});

  const handlePersonalInfoChange = (e) =>{
    const {key} = e.target.dataset;
    const copy = {...personalInfo, [key] : e.target.value};
    setPersonalInfo(copy);

  }

  const handleEducationSectionsDataChange = (e) => {
    const {key} = e.target.dataset;
    let value = e.target.value;
    const copy = {...educationSectionsData, [key] : value}
    setEducationSectionsData(copy);  
  }

  const handleExperienceSectionsDataChange = (e) => {
    const {key} = e.target.dataset;
    let value = e.target.value;
    const copy = {...experienceSectionsData, [key] : value}
    setExperienceSectionsData(copy);  
  }

  const handlePanelCollapse = (panel) =>{
    setPanelCollapse({
      isEducationCollapsed: panel === 'education' ? !panelCollapse.isEducationCollapsed : true,
      isExperienceCollapsed: panel === 'experience' ? !panelCollapse.isExperienceCollapsed : true,
    });
  }
  

  return(
    <div className='app-wrapper'>
      <div className='input-side'>
        <PersonalInfoPanel onChange={handlePersonalInfoChange} data={personalInfo}/>
        <CollapsiblePanel 
        onClick={handlePanelCollapse} 
        panelCollapse={panelCollapse} 
        value='education'
        Component={EducationInfoPanel}
        onChange={handleEducationSectionsDataChange}
        data={educationSectionsData}/>
        {/* <EducationInfoPanel onChange={handleEducationSectionsDataChange} data={educationSectionsData}/> */}
        <CollapsiblePanel 
        onClick={handlePanelCollapse} 
        panelCollapse={panelCollapse} 
        value='experience'
        Component={ExperienceInfoPanel}
        onChange={handleExperienceSectionsDataChange}
        data={experienceSectionsData}/>
        {/* <ExperienceInfoPanel onChange={handleExperienceSectionsDataChange} data={experienceSectionsData}/> */}
      </div>
      
      <CV personalInfo={personalInfo} educationData={educationSectionsData} experienceData={experienceSectionsData}/>
      
    </div>
  );
}

export default App
