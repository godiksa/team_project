import { styled } from 'styled-components';

interface StyledContentProps {
  isOpen: boolean;
}

export const StyledHeader = styled.div`
  background-color: #f8f8f8;
  margin: 10px;

  .titles {
    color: black;
    text-decoration: none;

    &:hover {
      color: darkgrey;
    }
  }
`;

export const StyledHeaderNav = styled.ul`
  flex-direction: column;
  margin: 10px;
  padding: 10px;

  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
export const StyledLi = styled.li`
  list-style: none;
  padding: 5px;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
export const StyledTogglerIcon = styled.span`
  display: flex;

  justify-content: flex-end;

  padding: 8px 16px;
  cursor: pointer;
  font-size: 1rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledBurgerContent = styled.div<StyledContentProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  @media screen and (min-width: 767px) {
    display: block;
    background-color: #f8f8f8;
  }
`;

export const StyledSpan = styled.span`
  display: none;
  padding: 10px;
  @media screen and (min-width: 768px) {
    display: inline;
  }
`;
