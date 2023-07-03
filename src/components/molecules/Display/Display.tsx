import {
  StyledDisplayWrapper,
  StyledItem,
  StyledDisplayLabel,
  StyledDisplayValue,
} from './styles';

interface IDisplayProps {
  labelTitles: string[];
  values: (string | number)[];
}

const Display = ({ labelTitles, values }: IDisplayProps) => {
  return (
    <StyledDisplayWrapper>
      {labelTitles.map((labelTitle, index) => (
        <StyledItem key={index}>
          <StyledDisplayLabel>{labelTitle}</StyledDisplayLabel>
          <StyledDisplayValue>{values[index]}</StyledDisplayValue>
        </StyledItem>
      ))}
    </StyledDisplayWrapper>
  );
};

export default Display;
