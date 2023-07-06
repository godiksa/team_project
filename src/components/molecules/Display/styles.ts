import { styled } from 'styled-components';
export const StyledDisplayWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 1.05rem;
`;

export const StyledDisplayLabel = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 300;
`;

export const StyledDisplayValue = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 300;
`;

export const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid transparent;
  padding: 0.5rem 1.05rem;
  border-top-color: ${(props) => props.theme.palette.shades.greyLight};
`;
