import { styled } from 'styled-components';

interface StyledContentProps {
  onClick?: () => void;
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

  @media screen and (min-width: 1300px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
export const StyledLi = styled.li`
  list-style: none;
  padding: 5px;

  @media screen and (min-width: 1300px) {
    padding: 0;
  }
`;
export const StyledTogglerIcon = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;

  .navi {
    padding: 10px;
    cursor: pointer;
  }

  .bul-svg {
    width: 15px;
    height: 15px;
  }

  .navi:hover {
    background-color: ${(props) => props.theme.palette.shades.whiteTer};
  }

  @media screen and (min-width: 1300px) {
    display: none;
  }
`;

export const StyledBurgerContent = styled.div<StyledContentProps>`
  display: ${({ onClick }) => (onClick ? 'block' : 'none')};

  @media screen and (min-width: 1300px) {
    display: block;
  }
`;
