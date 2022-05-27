import Header from './Header';
import BottomBar from './BottomBar';
import Skill from './Skill';

import './Skills.css';

const skills = [
  {
    skillType: 'Programming Languages',
    skills: [
      {
        skillName: 'C',
        skillImageName: 'c.png',
      },
      {
        skillName: 'C++',
        skillImageName: 'c.png',
      },
      {
        skillName: 'Python',
        skillImageName: 'python.png',
      },
      {
        skillName: 'Java',
        skillImageName: 'java.png',
      },
    ],
  },
  {
    skillType: 'Front End Technologies',
    skills: [
      {
        skillName: 'HTML',
        skillImageName: 'html.png',
      },
      {
        skillName: 'CSS',
        skillImageName: 'css.png',
      },
      {
        skillName: 'JavaScript',
        skillImageName: 'javascript.png',
      },
      {
        skillName: 'SASS',
        skillImageName: 'sass.png',
      },
      {
        skillName: 'ReactJS',
        skillImageName: 'react.png',
      },
    ],
  },
  {
    skillType: 'Back End Technologies',
    skills: [
      {
        skillName: 'NodeJS',
        skillImageName: 'nodejs.png',
      },
      {
        skillName: 'ExperssJS',
        skillImageName: 'express.png',
      },
      {
        skillName: 'MongoDB',
        skillImageName: 'mongodb.png',
      },
    ],
  },
  {
    skillType: 'Tools',
    skills: [
      {
        skillName: 'Git',
        skillImageName: 'git.png',
      },
      {
        skillName: 'Linux',
        skillImageName: 'linux.png',
      },
      {
        skillName: 'VIM',
        skillImageName: 'vim.png',
      },
    ],
  },
];

// How to display images inside public directory?
// https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder
const pathOfImages = 'assets/';

const Skills = () => {
  return (
    <div>
      <Header />
      <div className="home__container">
        <div className="home__content">
          <div className="home__content__text">
            <div>
              <h1>Skills</h1>
            </div>
            <div>
              <p>Here are some of my skills</p>
            </div>
            {skills.map((skill) => {
              return (
                <div className="skills-wrapper">
                  <h2>{skill.skillType}</h2>
                  <div className="skills__container">
                    {skill.skills.map((skillDetail) => {
                      return (
                        <Skill
                          skillImageUrl={
                            pathOfImages + skillDetail.skillImageName
                          }
                          skillName={skillDetail.skillName}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* Template */}
            {/* <div>
              <h2>Programming Languages</h2>
              <div className="skills__container">
                <Skill
                  skillImageUrl={require('../assets/c.png')}
                  skillName="C"
                />
                <Skill
                  skillImageUrl={require('../assets/python.png')}
                  skillName="python"
                />
              </div>
            </div> */}
          </div>
        </div>

        {/* Background blur boxes */}
        <div className="blur-ellipse be-1"></div>
        <div className="blur-ellipse be-2"></div>
      </div>
      <BottomBar />
    </div>
  );
};

export default Skills;
