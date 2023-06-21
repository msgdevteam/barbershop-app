import './Button.scss'

interface ButtonProps {
    text: string,
    onClick: () => void;
  }

const Button = (ButtonProps: ButtonProps) => {


    return (
        <button className="button" onClick={ButtonProps.onClick}>{ButtonProps.text}</button>
    )
}

export default Button;