// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button/Button' was resolved to '/home/m... Remove this comment to see the full error message
import Button from '../Button/Button';

import './Project.scss';

const Project = ({
  projectName,
  projectDescription,
  projectImageURL,
  textOrder,
  imageOrder
}: any) => {
  return (
    <div className="project-container">
      <div className="project-container__text" style={{ order: textOrder }}>
        <div>
          <h2 className="project-name">{projectName}</h2>
          <p className="project-description">{projectDescription}</p>
        </div>
        <div>
          <div>
            <Button buttonText="View Project" />
          </div>
        </div>
      </div>
      <div className="project-container__image" style={{ order: imageOrder }}>
        <img src={`${projectImageURL}`} alt="Project Demo" />
      </div>
    </div>
  );
};

export default Project;
