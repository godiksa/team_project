import { styled } from 'styled-components';

export const StyledForm = styled.div`
  padding: 0 24px;

  p {
    color: ${(props) => props.theme.palette.shades.greyDarker};
    display: block;
    font-size: 1rem;
    font-weight: 700;
    margin: 8px 0;
  }

  button {
    margin: 8px 0;
  }
`;
