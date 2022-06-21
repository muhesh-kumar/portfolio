import './Button.scss';

const Button = ({ buttonText }) => {
  return (
    <a href="mailto:muhesh4102002@gmail.com" className="say-hello-btn btn">
      {buttonText}
    </a>
  );
};

export default Button;
