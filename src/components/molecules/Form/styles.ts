import { styled } from 'styled-components';

export const StyledForm = styled.div`
  padding: 0 24px;
  width: 50%;
  margin-bottom: 2.5em;

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

  .field-with-button {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
