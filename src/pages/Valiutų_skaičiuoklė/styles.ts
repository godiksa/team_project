import { styled } from 'styled-components';
import '../../index.css';

export const StyledWrapper = styled.div`
  input {
    margin: 5px;
  }
`;

export const StyledTitle = styled.span`
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
`;

export const StyledBoxLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 25px;

  .input {
    width: 31.7%;
  }

  h3 {
    margin: 7px 0;
  }
`;
export const StyledBoxRight = styled.div`
  width: 50%;

  .input-right-c {
    width: 100px;
  }

  .input-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 50%;
    margin: 10px 0;
  }

  .input-right-w {
    width: 300px;
    margin: 0 8px;
  }
`;
