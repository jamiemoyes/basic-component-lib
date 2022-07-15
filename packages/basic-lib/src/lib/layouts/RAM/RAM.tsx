import { ReactNode } from "react";
import styled from "styled-components";

const StyledGrid = styled.div<StyledGridTypes>`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ minWidth }) => minWidth}, 1fr)
  );
`;

type StyledGridTypes = { minWidth: string };

interface RAMTypes extends StyledGridTypes {
  children: ReactNode;
}

const RAM = ({ children, minWidth = "150px" }: RAMTypes) => {
  return <StyledGrid minWidth={minWidth}>{children}</StyledGrid>;
};

export { RAM };
