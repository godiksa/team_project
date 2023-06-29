import { styled } from 'styled-components';

export const StyledDeleteButton = styled.button`
  background-color: transparent;
  border: solid 0.0625rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.palette.danger.main};
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  &:hover {
    background-color: ${(props) => props.theme.palette.danger.main};
    color: ${(props) => props.theme.palette.danger.light};
  }

  &:focus {
    outline: none;
  }
`;

export const XIcon = styled.svg`
  fill: ${(props) => props.theme.palette.danger.main};
  width: 15px;
  height: 15px;

  ${StyledDeleteButton}:hover & {
    fill: ${(props) => props.theme.palette.danger.light};
  }
`;
