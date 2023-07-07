import { styled } from 'styled-components';

interface StyledContentProps {
  onClick?: () => void;
}

export const StyledHeader = styled.div`
  margin: 10px;

  .titles {
    color: ${(props) => props.theme.palette.shades.greyDark};
    border-radius: 2px;
    text-decoration: none;
    padding: 0.5rem 1.25rem;
    line-height: 1.5;
    font-weight: 400;
    display: inline-block;
    width: 100%;

    &:hover {
      color: ${(props) => props.theme.palette.accent};
      background-color: ${(props) => props.theme.palette.shades.whiteTer};
    }

    &:active {
      background-color: ${(props) => props.theme.palette.accent};
      color: ${(props) => props.theme.palette.white};
    }
  }

  @media screen and (min-width: 1300px) {
    .titles {
      display: inline;
      width: initial;

      &:hover {
        color: ${(props) => props.theme.palette.accent};
        background-color: ${(props) => props.theme.palette.shades.whiteBis};
      }
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

  &:first-child {
    display: flex;
    flex-direction: column;
  }

  &:first-child::after {
    content: 'Skaičiuoklės';
    color: ${(props) => props.theme.palette.shades.grey};
    font-weight: 400;
    font-size: 0.75em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.5rem 0.7rem 0.2rem 0.7rem;
  }

  @media screen and (min-width: 1300px) {
    padding: 0;

    &:first-child {
      display: initial;
    }

    &:first-child::after {
      content: none;
    }
  }
`;

export const StyledTogglerIcon = styled.span`
  display: flex;
  justify-content: flex-start;
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
