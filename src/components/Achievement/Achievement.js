import Button from '../Button/Button';
import './Achievement.scss';

const Achievement = ({ data }) => {
  return (
    <div className="achievement-container">
      <div className="left-col">
        <img src="assets/codeforces.png" alt="" />
        {/* Achievement image */}
      </div>
      <div className="right-col">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <div className="button-container">
          <Button buttonText="Details" />
          <Button buttonText="View Achievement" />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
