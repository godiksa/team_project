import { useEffect, useState } from 'react';
import Radio from '../../atoms/Radio';
import Input from '../../atoms/Input';
import DeleteButton from '../../atoms/DeleteButton';
import { StyledForm } from './styles';
import Dropdown from '../../atoms/Select/Select';

interface PopupInputFields {
  triggerText: string;
  key: string;
  text: string;
  type: 'text' | 'number' | 'radio' | 'checkbox' | 'select';
  textPlaceholder?: string;
  radioOptions?: string[];
  selectOptions?: string[];
  button?: boolean;
}

export interface FormField {
  key: string;
  text: string;
  type: 'text' | 'number' | 'radio' | 'checkbox' | 'select';
  textPlaceholder?: string;
  radioOptions?: string[];
  selectOptions?: string[];
  button?: boolean;
  popupInput?: PopupInputFields[];
}

export interface FormValues {
  [key: string]: string | number | boolean | (string | number)[];
}

interface FormProps {
  fields: FormField[];
  displayValues: (values: FormValues) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<FormProps> = ({
  fields,
  displayValues,
  onChange,
}: FormProps) => {
  const [formValues, setFormValues] = useState<FormValues>(() => {
    const defaultValues: FormValues = {};
    fields.forEach((field) => {
      if (field.type === 'select' && field.selectOptions) {
        defaultValues[field.key] = field.selectOptions[0];
      } else if (field.type === 'radio' && field.radioOptions) {
        defaultValues[field.key] = field.radioOptions[0];
      }
    });
    return defaultValues;
  });
  const [selectedTriggerTexts, setSelectedTriggerTexts] = useState<FormValues>(
    {}
  );
  const [selectedTriggerCheckboxes, setSelectedTriggerCheckboxes] = useState<
    (string | number | boolean)[]
  >([]);
  const [buttonPressed, setButtonPressed] = useState<string[]>([]);

  useEffect(() => {
    displayValues(formValues);
  }, []);

  const handleInputChange = (
    key: string,
    value: string | number | boolean,
    popupKey: string
  ) => {
    const updatedValues = {
      ...formValues,
      [key]: value,
    };

    setFormValues(updatedValues);
    displayValues(updatedValues);
    setSelectedTriggerTexts(updatedValues);

    const updatedDeleteKeys = buttonPressed.includes(popupKey)
      ? buttonPressed.filter((x) => x !== popupKey)
      : buttonPressed.filter((x) => x !== key);

    setButtonPressed(updatedDeleteKeys);

    if (onChange) {
      const event = {
        target: {
          name: key,
          value: value,
        },
      };
      onChange(event as React.ChangeEvent<HTMLInputElement>);
    }
  };

const handleCheckboxChange = (
  key: string,
  value: string,
  popupKey: string
) => {
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
  setSelectedTriggerCheckboxes(updatedValues);

  const updatedDeleteKeys = buttonPressed.includes(popupKey)
    ? buttonPressed.filter((x) => x !== popupKey)
    : buttonPressed.filter((x) => x !== key);

  setButtonPressed(updatedDeleteKeys);

  if (onChange) {
    const event = {
      target: {
        name: key,
        value: updatedValues,
        checked: selectedValues.includes(value), // Set checked based on inclusion of value
      },
    };
    onChange(event as unknown as React.ChangeEvent<HTMLInputElement>);
  }
};

  const handleDeleteButtonClick = (key: string) => {
    setButtonPressed((prevKey) => [...prevKey, key]);

    const updatedFormValues = { ...formValues };
    delete updatedFormValues[key];

    setFormValues(updatedFormValues);
    displayValues(updatedFormValues);
  };

  return (
    <StyledForm>
      {fields.map(
        (field) =>
          !buttonPressed.includes(field.key) && (
            <div
              key={field.key}
              className={`${field.button ? 'field-with-button' : ''}`}
            >
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
                    setvalue={(value) =>
                      handleInputChange(
                        field.key,
                        String(value),
                        field.popupInput ? field.popupInput[0].key : ''
                      )
                    }
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
                        handleInputChange(
                          field.key,
                          String(value),
                          field.popupInput ? field.popupInput[0].key : ''
                        )
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
                        handleCheckboxChange(
                          field.key,
                          String(value),
                          field.popupInput ? field.popupInput[0].key : ''
                        )
                      }
                    />
                  </div>
                ))}
              {field.type === 'select' && (
                <Dropdown
                  options={
                    field.selectOptions
                      ? field.selectOptions.map((option) => ({
                          id: option,
                          label: option,
                        }))
                      : [
                          {
                            id: 'Select',
                            label: 'Select',
                          },
                        ]
                  }
                  value={formValues[field.key] as string}
                  onChange={(value: string | number | boolean) =>
                    handleInputChange(
                      field.key,
                      value,
                      field.popupInput ? field.popupInput[0].key : ''
                    )
                  }
                />
              )}
              {field.popupInput?.map(
                (popupField: PopupInputFields) =>
                  !buttonPressed.includes(popupField.key) && (
                    <div
                      key={popupField.key}
                      className={`${
                        popupField.button ? 'field-with-button' : ''
                      }`}
                    >
                      {selectedTriggerCheckboxes.includes(
                        popupField.triggerText
                      ) && (
                        <>
                          <p>{popupField.text}</p>
                          {popupField.type === 'text' ||
                          popupField.type === 'number' ? (
                            <div className={popupField.key}>
                              <Input
                                type={popupField.type}
                                value={
                                  String(formValues[popupField.key]) ===
                                  'undefined'
                                    ? ''
                                    : String(formValues[popupField.key])
                                }
                                setvalue={(value) =>
                                  handleInputChange(popupField.key, value, '')
                                }
                                placeholder={popupField.textPlaceholder}
                              />
                            </div>
                          ) : popupField.type === 'radio' ? (
                            <div>
                              {popupField.radioOptions?.map((option) => (
                                <div key={option} className={popupField.key}>
                                  <Radio
                                    type='radio'
                                    value={option}
                                    checked={
                                      formValues[popupField.key] === option
                                    }
                                    onChange={(value) =>
                                      handleInputChange(
                                        popupField.key,
                                        value,
                                        ''
                                      )
                                    }
                                  />
                                  {option}
                                </div>
                              ))}
                            </div>
                          ) : popupField.type === 'checkbox' ? (
                            <div>
                              {popupField.radioOptions?.map((option) => (
                                <div key={option} className={popupField.key}>
                                  <Radio
                                    type='checkbox'
                                    value={option}
                                    onChange={(value) =>
                                      handleInputChange(
                                        popupField.key,
                                        value,
                                        ''
                                      )
                                    }
                                  />
                                  {option}
                                </div>
                              ))}
                            </div>
                          ) : popupField.type === 'select' ? (
                            <Dropdown
                              options={
                                popupField.selectOptions
                                  ? popupField.selectOptions.map((option) => ({
                                      id: option,
                                      label: option,
                                    }))
                                  : [
                                      {
                                        id: 'Select',
                                        label: 'Select',
                                      },
                                    ]
                              }
                              value={formValues[popupField.key] as string}
                              onChange={(value: string | number | boolean) =>
                                handleInputChange(popupField.key, value, '')
                              }
                            />
                          ) : null}
                          {popupField.button && (
                            <DeleteButton
                              onClick={() =>
                                handleDeleteButtonClick(popupField.key)
                              }
                            />
                          )}
                        </>
                      )}
                      {Object.values(selectedTriggerTexts).includes(
                        popupField.triggerText
                      ) && (
                        <>
                          <p>{popupField.text}</p>
                          {popupField.type === 'text' ||
                          popupField.type === 'number' ? (
                            <div className={popupField.key}>
                              <Input
                                type={popupField.type}
                                value={
                                  String(formValues[popupField.key]) ===
                                  'undefined'
                                    ? ''
                                    : String(formValues[popupField.key])
                                }
                                setvalue={(value) =>
                                  handleInputChange(popupField.key, value, '')
                                }
                                placeholder={popupField.textPlaceholder}
                              />
                            </div>
                          ) : popupField.type === 'radio' ? (
                            <div>
                              {popupField.radioOptions?.map((option) => (
                                <div key={option} className={popupField.key}>
                                  <Radio
                                    type='radio'
                                    value={option}
                                    checked={
                                      formValues[popupField.key] === option
                                    }
                                    onChange={(value) =>
                                      handleInputChange(
                                        popupField.key,
                                        value,
                                        ''
                                      )
                                    }
                                  />
                                  {option}
                                </div>
                              ))}
                            </div>
                          ) : popupField.type === 'checkbox' ? (
                            <div>
                              {popupField.radioOptions?.map((option) => (
                                <div key={option} className={popupField.key}>
                                  <Radio
                                    type='checkbox'
                                    value={option}
                                    onChange={(value) =>
                                      handleCheckboxChange(
                                        popupField.key,
                                        value,
                                        ''
                                      )
                                    }
                                  />
                                  {option}
                                </div>
                              ))}
                            </div>
                          ) : popupField.type === 'select' ? (
                            <Dropdown
                              options={
                                popupField.selectOptions
                                  ? popupField.selectOptions.map((option) => ({
                                      id: option,
                                      label: option,
                                    }))
                                  : [
                                      {
                                        id: 'select',
                                        label: 'Select',
                                      },
                                    ]
                              }
                              value={formValues[popupField.key] as string}
                              onChange={(value: string | number | boolean) =>
                                handleInputChange(popupField.key, value, '')
                              }
                            />
                          ) : null}
                          {popupField.button && (
                            <DeleteButton
                              onClick={() =>
                                handleDeleteButtonClick(popupField.key)
                              }
                            />
                          )}
                        </>
                      )}
                    </div>
                  )
              )}
              {field.button && (
                <DeleteButton
                  onClick={() => handleDeleteButtonClick(field.key)}
                />
              )}
            </div>
          )
      )}
    </StyledForm>
  );
};

export default Form;
