import { ReactNode } from "react";
import styled from "styled-components";

const StyledFlex = styled.div<StyledTypes>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
`;

type flexWrapType = "nowrap" | "wrap" | "wrap-reverse";
type justifyContentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "start"
  | "end"
  | "left"
  | "right";

type alignItemsType =
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "first baseline"
  | "last baseline"
  | "start"
  | "end"
  | "self-start"
  | "self-end";

type alignContentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | "start"
  | "end"
  | "baseline"
  | "first baseline"
  | "last baseline";

type flexDirectionType = "row" | "row-reverse" | "column" | "column-reverse";

type StyledTypes = {
  flexDirection: flexDirectionType;
  flexWrap: flexWrapType;
  justifyContent: justifyContentType;
  alignItems: alignItemsType;
  alignContent: alignContentType;
};

interface BasicFlexType extends StyledTypes {
  children: ReactNode;
}

const BasicFlex = ({
  children,
  flexDirection = "row",
  flexWrap = "wrap",
  justifyContent = "flex-start",
  alignItems = "center",
  alignContent = "center",
}: BasicFlexType) => {
  return (
    <StyledFlex
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignContent={alignContent}
    >
      {children}
    </StyledFlex>
  );
};

export { BasicFlex };
