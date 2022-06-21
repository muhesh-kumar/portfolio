import Button from '../../components/Button/Button';
import BackgroundBlurEllipse from '../../components/BackgroundBlurEllipse/BackgroundBlurEllipse';

import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__text">
          <div>
            <h1>Hello!👋🏻</h1>
            <h1>This is Muhesh</h1>
            <h1>I'm a Computer Science Student</h1>
          </div>
          <div>
            <p>I like to solve real world problems with software</p>
          </div>
        </div>
        <div className="home__btn">
          <Button buttonText="Say Hello" buttonRedirectLink='https://www.linkedin.com/in/muhesh-kumar-52b2391b9/' />
        </div>
      </div>
      <BackgroundBlurEllipse />
    </div>
  );
};

export default Home;
