import { ReactNode } from "react";
import styled from "styled-components";

const StyledGrid = styled.div<StyledTypes>`
  display: grid;
  grid-template-columns: ${({ numberOfColumns, columnWidth }) =>
    `repeat(${numberOfColumns}, ${columnWidth})`};
  grid-template-rows: ${({ numberOfRows, rowHeight }) =>
    `repeat(${numberOfRows}, ${rowHeight})`};
  grid-gap: ${({ gap }) => gap};
  align-items: center;
`;

type GridTrackType = number | "auto-fit" | "auto-fill";

type StyledTypes = {
  rowHeight: string;
  columnWidth: string;
  gap: string;
  numberOfColumns: GridTrackType;
  numberOfRows: GridTrackType;
};

interface GridTypes extends StyledTypes {
  children: ReactNode;
}

const BasicGrid = ({
  children,
  rowHeight = "1fr",
  columnWidth = "1fr",
  numberOfColumns = 2,
  numberOfRows = "auto-fit",
  gap = "5rem",
}: GridTypes) => {
  return (
    <StyledGrid
      rowHeight={rowHeight}
      columnWidth={columnWidth}
      numberOfRows={numberOfRows}
      numberOfColumns={numberOfColumns}
      gap={gap}
    >
      {children}
    </StyledGrid>
  );
};

export { BasicGrid };
