// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button/Button' was resolved to '/home/m... Remove this comment to see the full error message
import Button from '../Button/Button';
import './Achievement.scss';

const Achievement = ({
  data
}: any) => {
  return (
    <div className="achievement-container">
      <div className="left-col">
        {/* Achievement image */}
        <img src="assets/codeforces.png" alt="" />
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
