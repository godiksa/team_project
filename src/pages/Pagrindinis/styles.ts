import { styled } from 'styled-components';

export const StyledMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  outline: none;
  height: 75vh;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 300;

  @media screen and (min-width: 900px) {
    padding: 0, 20px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 1.1rem;
  line-height: 1.5;
  font-weight: 500;
  margin: 25px 0 55px 0;
  color: ${(props) => props.theme.palette.shades.greyDark};
`;

export const StyledUl = styled.ul`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    width: 90%;
  }

  @media screen and (min-width: 1300px) {
    flex-direction: row;
    width: 80%;
  }
`;
export const StyledLi = styled.li`
  list-style: none;
  width: 100%;
  height: 70px;
  margin-bottom: 10px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    text-align: center;
    color: ${(props) => props.theme.palette.shades.greyDark};
    font-weight: 400;
    font-size: 16px;
    border: 1px solid transparent;
    border-radius: 0.375em;
    border-color: ${(props) => props.theme.palette.shades.greyLight};
    background-color: ${(props) => props.theme.palette.white};
    padding: 15px 5px;
    height: 100%;
  }

  &:hover a {
    color: ${(props) => props.theme.palette.white};
    background-color: ${(props) => props.theme.palette.primary.main};
    cursor: pointer;
    transform: scale(1.02);
    transition: 0.5s ease-in;
  }

  @media screen and (min-width: 900px) {
    height: 250px;
    width: calc(100% / 5 - 15px);
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1300px) {
    height: 300px;
    width: calc(100% / 5 - 30px);
  }
`;
