import './styles/ProjectTemplate.css';
import SummaryBox from './SummaryBox';

const ProjectTemplate = ({
  customHeader,
  goal,
  userRole,
  tools,
  collaboration,
  timeline,
  challenges,
}) => {
  return (
    <div className="project-template">
      {/* Custom Header Section */}
      {customHeader && (
        <div className="project-custom-header">
          {customHeader}
        </div>
      )}

      {/* Goal Section */}
      <div className="goal-section">
        <h3 className="section-title">Goal</h3>
        <p className="goal-text">{goal}</p>
      </div>

      {/* Summary Section */}
      <div className="summary-section">
        <h3 className="section-title">Summary</h3>
        <div className="summary-grid">
          <SummaryBox
            icon="/icons/role.png"
            title="My Role"
            content={userRole}
          />
          <SummaryBox
            icon="/icons/tools.png"
            title="Tools"
            content={tools}
          />
          <SummaryBox
            icon="/icons/collaboration.png"
            title="Collaboration"
            content={collaboration}
          />
          <SummaryBox
            icon="/icons/timeline.png"
            title="Timeline"
            content={timeline}
          />
        </div>
      </div>


      {/* Challenges Section */}
      {challenges && (
        <div className="challenges-section">
          <h3 className="challenges-title">Challenges and solutions</h3>
          <p className="challenges-text">{challenges}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectTemplate;
