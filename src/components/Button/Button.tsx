import './Button.scss';

const redirectLink = 'https://www.linkedin.com/in/muhesh-kumar-52b2391b9/';

const Button = ({
  buttonText
}: any) => {
  return (
    <a href={`${redirectLink}`} target="blank" className="say-hello-btn btn">
      {buttonText}
    </a>
  );
};

export default Button;
