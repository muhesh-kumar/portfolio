import './Home.css';
import Button from './Button';

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__content">
        <div className="home__content__text">
          <div>
            <h1>Hello!👋🏻</h1>
            <h1>This is Muhesh</h1>
            <h1>I'm a Computer Science Student</h1>
          </div>
          <div>
            <p>I like to solve real world problems with software</p>
          </div>
        </div>
        <div className="home__content__btn">
          <Button buttonText="Say Hello" />
        </div>
      </div>

      {/* Background blur boxes */}
      <div className="blur-ellipse be-1"></div>
      <div className="blur-ellipse be-2"></div>
    </div>
  );
};

export default Home;
