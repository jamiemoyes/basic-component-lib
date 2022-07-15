import styled from "styled-components";

const StyledNavBar = styled.div<StyledNavBarTypes>`
  display: grid;
  grid-template-columns: ${({ align, numberOfLinks }) =>
    align === "start"
      ? `1fr repeat(${numberOfLinks}, 5rem)`
      : `repeat(${numberOfLinks}, 5rem) 1fr `};
  ${({ align }) => align === "end" && "text-align: end;"}
`;

type StyledNavBarTypes = {
  numberOfLinks: number;
  align: "start" | "end";
};

const BasicNavBar = ({
  title,
  links,
  align = "start",
  newTab = true,
}: NavBarTypes) => {
  return (
    <StyledNavBar numberOfLinks={links.length} align={align}>
      {align === "start" && <h1>{title}</h1>}
      {links.map(({ text, link, nestedLinks }) => {
        return (
          <div>
            <a href={link} target={newTab ? "_blank" : ""}>
              {text}
            </a>
            <div>
              {nestedLinks?.map(({ text, link }) => {
                return (
                  <div>
                    <a href={link} target={newTab ? "_blank" : ""}>
                      {text}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      {align === "end" && <h1>{title}</h1>}
    </StyledNavBar>
  );
};

export { BasicNavBar };

type SimpleLink = {
  text: string;
  link: string;
};

interface ParentLink extends SimpleLink {
  nestedLinks?: SimpleLink[];
}

type NavBarTypes = {
  title: string;
  links: ParentLink[];
  align: "start" | "end";
  newTab: boolean;
};
