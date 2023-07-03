import { useState } from 'react';
import Radio from '../../atoms/Radio';
import Input from '../../atoms/Input';
import DeleteButton from '../../atoms/DeleteButton';
import { StyledForm } from './styles';
import Dropdown from '../../atoms/Select/Select';

export interface FormField {
  key: string;
  text: string;
  type: 'text' | 'number' | 'radio' | 'checkbox' | 'select';
  textPlaceholder?: string;
  radioOptions?: string[];
  selectOptions?: string[];
  button?: boolean;
}

export interface FormValues {
  [key: string]: string | number | boolean | (string | number)[];
}

interface FormProps {
  fields: FormField[];
  displayValues: (values: FormValues) => void;
}

const Form = ({ fields, displayValues }: FormProps) => {
  const [formValues, setFormValues] = useState<FormValues>({});

  const handleInputChange = (key: string, value: string | number) => {
    const updatedValues = {
      ...formValues,
      [key]: value,
    };

    setFormValues(updatedValues);
    displayValues(updatedValues);
  };

  const handleCheckboxChange = (key: string, value: string) => {
    const selectedValues = (formValues[key] as (string | number)[]) || [];

    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((x) => x !== value)
      : [...selectedValues, value];

    const updatedFormValues = {
      ...formValues,
      [key]: updatedValues,
    };

    setFormValues(updatedFormValues);
    displayValues(updatedFormValues);
  };

  return (
    <StyledForm>
      {fields.map((field) => (
        <div key={field.key}>
          <p key={field.key}>{field.text}</p>
          {(field.type === 'text' || field.type === 'number') && (
            <div className={field.key}>
              <Input
                type={field.type}
                value={
                  String(formValues[field.key]) === 'undefined'
                    ? ''
                    : String(formValues[field.key])
                }
                setvalue={(value) => handleInputChange(field.key, value)}
                placeholder={field.textPlaceholder}
              />
            </div>
          )}
          {field.type === 'radio' &&
            field.radioOptions &&
            field.radioOptions.map((option) => (
              <div key={option} className={field.key}>
                <Radio
                  type='radio'
                  value={option}
                  checked={formValues[field.key] === option}
                  onChange={(value) =>
                    handleInputChange(field.key, String(value))
                  }
                />
              </div>
            ))}
          {field.type === 'checkbox' &&
            field.radioOptions &&
            field.radioOptions.map((option) => (
              <div key={option} className={field.key}>
                <Radio
                  type='checkbox'
                  value={option}
                  onChange={(value) =>
                    handleCheckboxChange(field.key, String(value))
                  }
                />
              </div>
            ))}
          {field.type === 'select' && (
            <select
              className={field.key}
              id={field.key}
              value={formValues[field.key] as string}
              onChange={(e) => handleInputChange(field.key, e.target.value)}
            >
              {field.selectOptions?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          {field.button && <DeleteButton />}
        </div>
      ))}
    </StyledForm>
  );
};

export default Form;
