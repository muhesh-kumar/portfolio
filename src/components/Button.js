import './Button.css';

const Button = ({ buttonText }) => {
  return (
    <a href="#" className="btn">
      {buttonText}
    </a>
  );
};

export default Button;
