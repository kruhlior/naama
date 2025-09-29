import './styles/SolutionBox.css';

const SolutionBox = ({ solution, solutionMore }) => {
  return (
    <div className="solution-box">
      <div className="box-icon">
        <img src="/icons/solution.png" alt="Solution" />
      </div>
      <h4 className="box-title">Solution:</h4>
      <p className="solution-text">{solution}</p>
      <p className="solution-more-text">{solutionMore}</p>
    </div>
  );
};

export default SolutionBox;
