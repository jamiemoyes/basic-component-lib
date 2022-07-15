import styled from "styled-components";

const StyledDiv = styled.div`
  min-width: 10rem;
  min-height: 8rem;
  border-radius: 1ch;
  background-color: hsl(84, 87%, 88%);
  border: solid 2px hsl(91, 66%, 66%);
  color: black;
  display: grid;
  place-items: center;
`;

const DummyBox = ({ number }: { number: number }) => {
  return <StyledDiv>{number}</StyledDiv>;
};

export { DummyBox };
