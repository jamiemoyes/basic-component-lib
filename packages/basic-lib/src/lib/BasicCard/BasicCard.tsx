import "./BasicCard.css";
import "../global-styles.css";
import { ArrowRight } from "@styled-icons/bootstrap";
import styled from "styled-components";

const EnterIcon = styled(ArrowRight)`
  height: 1rem;
  width: 1rem;
  transition: 0.2s;
`;

type BasicCardProps = {
  image?: string;
  title: string;
  subtitle?: string;
  description: string;
  showIcon: boolean;
};

const BasicCard = ({
  image,
  title,
  subtitle,
  description,
  showIcon = false,
}: BasicCardProps) => {
  return (
    <div className="content-card">
      {image && <img src={image} alt={title} />}
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
      {showIcon && <EnterIcon className="enter-icon" />}
    </div>
  );
};

export { BasicCard };
