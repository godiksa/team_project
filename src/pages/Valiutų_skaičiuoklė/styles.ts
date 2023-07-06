import { styled } from 'styled-components';
import '../../index.css';

export const StyledWrapper = styled.div`
  margin-top: 60px;
  padding: 0 10px;

  input {
    margin: 5px;
  }
`;

export const StyledTitle2 = styled.span`
  text-transform: uppercase;
`;

export const StyledSelect = styled.select`
  background-color: ${(props) => props.theme.palette.white};
  border: 1px solid ${(props) => props.theme.palette.shades.greyLight};
  border-radius: 0.375em;
  color: ${(props) => props.theme.palette.dark};
  padding: calc(0.5em - 1px) 1em;
  text-align: center;
  white-space: nowrap;
  font-size: 1rem;
  line-height: 1.5;
  height: 2.175em;
  width: 30%;

  cursor: pointer;

  i {
    margin-left: 0.375em;
    color: ${(props) => props.theme.palette.link.main};
  }
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;

  @media screen and (max-width: 900px) {
    display: initial;

    div {
      width: 100%;
    }
  }
`;

export const StyledBoxLeft = styled.div`
  width: calc(50% - 10px);
  display: flex;
  flex-direction: column;
  padding: 25px;

  background-color: ${(props) => props.theme.palette.primary.light};
  border-radius: 10px;

  .input {
    width: 31.7%;
  }

  h3 {
    margin: 7px 0;
  }
`;
export const StyledBoxRight = styled.div`
  width: calc(50% - 10px);

  div {
    display: flex;
    justify-content: flex-start;
  }

  .input-right-c {
    width: 100px;
  }

  .input-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 60%;
    margin: 5px 0;
  }

  .input-right-w {
    width: 300px;
    margin: 0 8px;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 10px;

    div {
      display: flex;
      justify-content: flex-end;
    }
  }
`;
