import { styled } from 'styled-components';

export const StyledPage = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const StyledResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`;
export const StyledTitle = styled.h2`
  font-size: 1.1rem;
  line-height: 1.5;
  font-weight: 300;
  margin: 15px 0;
  color: ${(props) => props.theme.palette.shades.greyDark};
  text-align: center;
  margin-bottom: 60px;
`;
