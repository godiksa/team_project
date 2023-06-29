import { styled } from 'styled-components';

interface StyledContentProps {
  isOpen: boolean;
}

export const StyledHeader = styled.div`
  margin: 10px;

  .titles {
    color: ${(props) => props.theme.palette.shades.greyDark};
    text-decoration: none;
    padding: 1rem 1.25rem;
    line-height: 1.5;
    font-weight: 300;

    &:hover {
      color: ${(props) => props.theme.palette.link.main};
      background-color: ${(props) => props.theme.palette.shades.whiteBis};
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
  cursor: pointer;
  font-size: 1rem;

  .navi {
    padding: 10px;
  }

  .bul-svg {
    width: 15px;
    height: 15px;
  }

  .navi:hover {
    background-color: #f4f4f4;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledBurgerContent = styled.div<StyledContentProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  @media screen and (min-width: 767px) {
    display: block;
  }
`;
