import { styled } from 'styled-components';

export const StyledMainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  outline: none;
  height: 35px;
  margin: 0, auto;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 300;
  padding-top: 50px;

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
  width: 100%;
  list-style: none;
  border: 1px solid transparent;
  border-radius: 0.375em;
  border-color: ${(props) => props.theme.palette.shades.greyLight};
  background-color: ${(props) => props.theme.palette.white};
  margin-bottom: 5px;
  padding: 15px 5px;
  text-align: center;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.palette.shades.greyDark};

    &:hover {
      color: ${(props) => props.theme.palette.link.main};
    }
  }

  &:hover {
    color: ${(props) => props.theme.palette.link.main};
    background-color: ${(props) => props.theme.palette.shades.whiteBis};
    cursor: pointer;
    transform: scale(1.02);
    transition: 0.5s ease-in;
  }

  @media screen and (min-width: 900px) {
    width: 19%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    height: 200px;
  }
`;
