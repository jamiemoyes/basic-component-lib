import type { ButtonHTMLAttributes } from "react";
import "./BasicButton.css";
import "../global-styles.css";

interface BasicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  secondary?: boolean;
}

const BasicButton = ({ text, secondary, ...props }: BasicButtonProps) => {
  return (
    <button className={secondary ? "" : "primary"} {...props}>
      {text}
    </button>
  );
};

export { BasicButton };
