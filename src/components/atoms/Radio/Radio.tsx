import { StyledLabel } from './styles';

interface IRadioProps {
  type: 'radio' | 'checkbox';
  value: string | number;
  disabled?: boolean;
  checked?: boolean;
  onChange?: ((value: string) => void) | undefined;
}

const Radio = ({ type, value, disabled, checked, onChange }: IRadioProps) => {
  const id = value.toString();

  const handleInputChange = () => {
    if (onChange) {
      onChange(String(value));
    }
  };

  return (
    <div>
      <StyledLabel htmlFor={id} disabled={disabled}>
        <input
          type={type}
          id={id}
          disabled={disabled}
          checked={checked}
          onChange={handleInputChange}
        />
        {value}
      </StyledLabel>
    </div>
  );
};

export default Radio;
