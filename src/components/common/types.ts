export interface ButtonProps {
  text: string;
  variant: "editButton" | "deleteButton" | "createButton";
  onClick?: () => void;
}
