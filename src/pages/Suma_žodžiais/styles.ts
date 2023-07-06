import styled from 'styled-components';

export const StyledDisplay = styled.div`
  div {
    margin: auto;
    max-width: 1000px;
    padding: 8px 24px;
  }

  div div {
    width: 100%;
    justify-content: center;
    margin-top: 5px;
    background-color: ${(props) => props.theme.palette.primary.light};
    border-radius: 0.375em;
    margin-top: 20px;
  }

  p {
    color: ${(props) => props.theme.palette.shades.greyDark};
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const StyledFormWrapper = styled.div`
  div {
    width: 100%;
    margin: auto;
    max-width: 1000px;
  }

  input {
    color: ${(props) => props.theme.palette.shades.greyDarker};
    font-weight: 400;
    width: 100%;
  }
`;

export const StyledTitle = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  color: ${(props) => props.theme.palette.shades.greyDarker};
  margin-top: 65px;
  margin-bottom: 60px;
`;
