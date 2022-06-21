import './Skill.scss';

const Skill = ({
  skillImageUrl,
  skillName
}: any) => {
  console.log(skillImageUrl);
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="skill__container">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <img src={skillImageUrl} alt="Logo of the skill" />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <h2>{skillName}</h2>
    </div>
  );
};

export default Skill;
