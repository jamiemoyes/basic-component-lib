import { InputHTMLAttributes } from "react";
import "./BasicInput.css";
import "../global-styles.css";

const BasicInput = ({
  type = "text",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return <input type={type} {...props} />;
};

export { BasicInput };
