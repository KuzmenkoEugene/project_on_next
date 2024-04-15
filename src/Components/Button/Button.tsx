interface ButtonProps {
  text?: string;
  additionalStyles?: string;
}

const Button: React.FC<ButtonProps> = ({ text, additionalStyles }) => {
  return (
    <button
      className={`font-medium not-italic text-center cursor-pointer rounded-[4px] ${additionalStyles}`}
    >
      {text}
    </button>
  );
};

export default Button;
