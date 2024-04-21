interface ButtonProps {
  text?: string;
  additionalStyles?: string;
  onClick?: () => void; 
}

const Button: React.FC<ButtonProps> = ({ text, additionalStyles, onClick }) => {
  return (
    <button
      className={`font-medium not-italic text-center cursor-pointer rounded-[4px] ${additionalStyles}`}
      onClick={onClick} 
    >
      {text}
    </button>
  );
};

export default Button;
