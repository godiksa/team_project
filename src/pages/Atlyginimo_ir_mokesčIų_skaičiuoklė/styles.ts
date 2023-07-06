import { styled } from 'styled-components';

export const StyledPage = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  div {
    width: 100%;
  }
`;

export const StyledResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
    max-width: 1200px;
  }
`;
export const StyledTitle = styled.h2`
  font-size: 24px;
  line-height: 1.5;
  font-weight: 600;
  margin: 15px 0;
  color: ${(props) => props.theme.palette.shades.greyDarker};
  text-align: center;
  margin-bottom: 60px;
`;

export const StyledDisplayWrapper = styled.div`
  div div {
    &:nth-child(odd) {
      background-color: ${(props) => props.theme.palette.primary.main};
      border-radius: 2px;
    }
  }
`;
export const StyledFormWrapper = styled.div`
  background-color: ${(props) => props.theme.palette.primary.light};
  border-radius: 10px;
  padding-top: 10px;
`;
