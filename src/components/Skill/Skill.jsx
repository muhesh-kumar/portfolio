import './Skill.scss';

const Skill = ({ skillImageUrl, skillName }) => {
  console.log(skillImageUrl);
  return (
    <div className="skill__container">
      <img src={skillImageUrl} alt="Logo of the skill" />
      <h2>{skillName}</h2>
    </div>
  );
};

export default Skill;
