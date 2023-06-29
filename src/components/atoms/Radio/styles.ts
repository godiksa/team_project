import { styled } from 'styled-components';

export const StyledLabel = styled.label<{ disabled?: boolean }>`
  line-height: 1.25;
  font-weight: 400;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.3em;

  color: ${(props) =>
    props.disabled
      ? props.theme.palette.shades.grey
      : props.theme.palette.shades.greyDark};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;
