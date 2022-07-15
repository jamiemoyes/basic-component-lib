import { ReactNode } from "react";
import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr autos;
`;

const PancakeStack = ({ children }: { children: ReactNode }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export { PancakeStack };
