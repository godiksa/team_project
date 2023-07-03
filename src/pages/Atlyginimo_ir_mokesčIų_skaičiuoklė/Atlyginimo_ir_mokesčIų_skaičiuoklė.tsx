import { useState } from 'react';
import Form from '../../components/molecules/Form';
import { FormField, FormValues } from '../../components/molecules/Form/Form';
import Display from '../../components/molecules/Display';
import { StyledPage } from './styles';

const Page = () => {
  const fields: FormField[] = [
    {
      key: 'field1',
      text: 'Field 1',
      type: 'text',
      textPlaceholder: 'Enter text',
    },
    {
      key: 'field2',
      text: 'Field 2',
      type: 'number',
      textPlaceholder: 'Enter number',
    },
    {
      key: 'field3',
      text: 'Field 3',
      type: 'radio',
      radioOptions: ['Option 1', 'Option 2', 'Option 3'],
    },
    {
      key: 'field4',
      text: 'Field 4',
      type: 'checkbox',
      radioOptions: ['Option 1', 'Option 2', 'Option 3'],
    },
    {
      key: 'field5',
      text: 'Field 5',
      type: 'select',
      selectOptions: ['Option 1', 'Option 2', 'Option 3'],
    },
    {
      key: 'field6',
      text: 'Field 6',
      type: 'checkbox',
      radioOptions: ['Option 1', 'Option 2', 'Option 3'],
      button: true,
    },
  ];

  const [displayedValues, setDisplayedValues] = useState<FormValues>({});

  const handleDisplayValues = (values: FormValues) => {
    setDisplayedValues(values);
  };

  return (
    <StyledPage>
      <Form fields={fields} displayValues={handleDisplayValues} />
      <Display labelTitles={['Test1', 'Test2']} values={['value1', 'value2']} />
    </StyledPage>
  );
};

export default Page;
