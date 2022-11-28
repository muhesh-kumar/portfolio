import Button from '../Button/Button';

import './Project.scss';

const Project = ({
  projectName,
  projectDescription,
  projectImageURL,
  projectRepoURL,
  projectLiveURL,
  textOrder,
  imageOrder
}: any) => {
  return (
    <div className="project">
      <div className="project__text" style={{ order: textOrder }}>
        <div>
          <h2 className="project__name">{projectName}</h2>
          <p className="project__description">{projectDescription}</p>
        </div>
        <div>
          <div>
            <Button buttonText="View Project" buttonRedirectLink={projectRepoURL} />
          </div>
        </div>
      </div>
      <div className="project__image" style={{ order: imageOrder }}>
        <a href={projectLiveURL}>
          <img src={`${projectImageURL}`} alt="Project Demo" />
        </a>
      </div>
    </div>
  );
};

export default Project;
