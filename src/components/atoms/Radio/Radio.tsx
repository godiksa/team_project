import { StyledLabel } from './styles';

interface IInputProps {
  type: 'radio' | 'checkbox';
  value: string | number;
  disabled?: boolean;
}

const Radio = ({ type, value, disabled }: IInputProps) => {
  const id = value.toString();

  return (
    <div>
      <StyledLabel htmlFor={id} disabled={disabled}>
        <input type={type} id={id} disabled={disabled} />
        {value}
      </StyledLabel>
    </div>
  );
};

export default Radio;
