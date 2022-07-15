import { ReactNode } from "react";
import "./BasicContainer.css";

const BasicContainer = ({ children }: { children: ReactNode }) => {
  return <div className="container">{children}</div>;
};

export { BasicContainer };
