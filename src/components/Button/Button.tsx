import './Button.scss';

const Button = ({
  buttonText,
  buttonRedirectLink
}: any) => {
  return (
    <a href={`${buttonRedirectLink}`} target="blank" className="say-hello-btn btn">
      {buttonText}
    </a>
  );
};

export default Button;
