import './styles/ProjectTemplate.css';

const ProjectTemplate = ({
  customHeader,
  goal,
  userRole,
  tools,
  collaboration,
  timeline,
  challenges,
  samples,
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
          {/* My Role Box */}
          <div className="summary-box">
            <div className="box-header">
              <div className="box-icon">
                <img src="/icons/role.png" alt="Role" />
              </div>
              <h4 className="box-title">My Role</h4>
            </div>
            <div className="box-text-wrapper">
              <p className="box-text" dangerouslySetInnerHTML={{ __html: userRole }} />
            </div>
          </div>

          {/* Tools Box */}
          <div className="summary-box">
            <div className="box-header">
              <div className="box-icon">
                <img src="/icons/tools.png" alt="Tools" />
              </div>
              <h4 className="box-title">Tools</h4>
            </div>
            <div className="box-text-wrapper">
              <p className="box-text" dangerouslySetInnerHTML={{ __html: tools }} />
            </div>
          </div>

          {/* Collaboration Box */}
          <div className="summary-box">
            <div className="box-header">
              <div className="box-icon">
                <img src="/icons/collaboration.png" alt="Collaboration" />
              </div>
              <h4 className="box-title">Collaboration</h4>
            </div>
            <div className="box-text-wrapper">
              <p className="box-text">{collaboration}</p>
            </div>
          </div>

          {/* Timeline Box */}
          <div className="summary-box">
            <div className="box-header">
              <div className="box-icon">
                <img src="/icons/timeline.png" alt="Timeline" />
              </div>
              <h4 className="box-title">Timeline</h4>
            </div>
            <div className="box-text-wrapper">
              <p className="box-text">{timeline}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Samples Section */}
      {samples && (
        <div className="samples-section">
          <h3 className="section-title">Samples</h3>
          <div className="samples-content">
            {samples.map((sample, index) => (
              <div key={index} className="sample-item">
                <img
                  src={sample.src}
                  alt={sample.alt}
                  className="sample-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
                {sample.caption && (
                  <p className="sample-caption">{sample.caption}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

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
