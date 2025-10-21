import './styles/SummaryBox.css';

const SummaryBox = ({ icon, title, content, className }) => {
  return (
    <div className={`summary-box ${className || ''}`}>
      <div className="box-header">
        <div className="box-icon">
          <img src={icon} alt={title} />
        </div>
        <h4 className="box-title">{title}</h4>
      </div>
      <div className="box-text-wrapper">
        <p className="box-text" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default SummaryBox;
