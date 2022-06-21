import './Button.scss';

const Button = ({
  buttonText
}: any) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <a href="mailto:muhesh4102002@gmail.com" className="say-hello-btn btn">
      {buttonText}
    </a>
  );
};

export default Button;
