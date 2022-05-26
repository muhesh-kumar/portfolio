import Button from './Button';
import './Project.css';

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
        <img
          // src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20220526115533_Maserati%20MC20%20Cielo%201.jpg&w=736&h=488&q=75&c=1"
          src={require('../assets/github-repo-lister.png')}
          alt=""
        />
      </div>
    </div>
  );
};

export default Project;
