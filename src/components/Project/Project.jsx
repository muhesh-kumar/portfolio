import Button from '../Button/Button';
import './Project.scss';

const Project = ({
  projectName,
  projectDescription,
  textOrder,
  imageOrder,
}) => {
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
        <img src="assets/github-repo-lister.png" alt="Project Demo" />
      </div>
    </div>
  );
};

export default Project;
