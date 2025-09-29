import './styles/ProblemBox.css';

const ProblemBox = ({ problem, problemMore }) => {
  return (
    <div className="problem-box">
      <div className="box-icon">
        <img src="/icons/question.png" alt="Problem" />
      </div>
      <h4 className="box-title">Problem:</h4>
      <p className="problem-text">{problem}</p>
      <p className="problem-more-text">{problemMore}</p>
    </div>
  );
};

export default ProblemBox;
