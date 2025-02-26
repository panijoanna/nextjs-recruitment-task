import { ButtonProps } from "./types";

const Button = ({ text, variant, onClick }: ButtonProps) => {
  const buttonStyles = {
    editButton:
      "px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-600 transition-all",
    deleteButton:
      "px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all",
    createButton:
      "px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all",
  };

  return (
    <button className={`${buttonStyles[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
