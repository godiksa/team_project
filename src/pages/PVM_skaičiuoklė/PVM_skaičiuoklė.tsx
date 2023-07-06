import React, { useState } from 'react';
import Form from '../../components/molecules/Form';
import Display from '../../components/molecules/Display';
import {
  StyledPage,
  StyledResultsWrapper,
  StyledTitle,
  StyledFormWrapper,
} from '../Atlyginimo_ir_mokesčIų_skaičiuoklė/styles';
import { FormField } from '../../components/molecules/Form/Form';

const PVM_skaičiuoklė: React.FC = () => {
  const fields: FormField[] = [
    {
      key: 'calculationType',
      text: '',
      type: 'select',
      selectOptions: ['Suma be PVM', 'Suma su PVM'],
    },
    {
      key: 'amount',
      text: 'Suma (EUR)',
      type: 'number',
      textPlaceholder: 'Įveskite suma',
    },
    {
      key: 'percentage',
      text: 'PVM tarifas',
      type: 'select',
      selectOptions: ['21%', '9%', '5%'],
    },
  ];

  const [displayedValues, setDisplayedValues] = useState({
    calculationType: 'Suma be PVM',
    amount: '',
    percentage: '21%',
  });

  const handleDisplayValues = (values: any) => {
    setDisplayedValues((prevValues) => ({ ...prevValues, ...values }));
  };

  const calculatePVM = (amount: number, percentage: string) =>
    (amount * (parseInt(percentage.replace('%', '')) / 100)).toFixed(2);

  const calculateTotalAmount = (amount: number, pvmSum: number) =>
    (Number(amount) + Number(pvmSum)).toFixed(2);

  let amount: number | string =
    displayedValues.amount !== '' ? Number(displayedValues.amount) : 0;
  let pvmSum: string | number = '';
  let totalAmount: string | number = '';

  if (!isNaN(amount as number)) {
    pvmSum = calculatePVM(amount as number, displayedValues.percentage);
    totalAmount = calculateTotalAmount(amount as number, Number(pvmSum));

    if (displayedValues.calculationType === 'Suma su PVM') {
      totalAmount = amount;
      amount = (
        amount /
        (1 + parseFloat(displayedValues.percentage) / 100)
      ).toFixed(2);
      pvmSum = (
        parseFloat(totalAmount.toString()) - parseFloat(amount as string)
      ).toFixed(2);
    }
  } else {
    amount = '';
  }

  return (
    <StyledPage>
      <StyledTitle>PVM skaičiuoklė</StyledTitle>
      <StyledResultsWrapper>
        <StyledFormWrapper>
          <Form fields={fields} displayValues={handleDisplayValues} />
        </StyledFormWrapper>
        <Display
          labelTitles={[
            'PVM Tarifas',
            'Suma (be PVM)',
            'PVM suma',
            'Bendra suma (su PVM)',
          ]}
          values={[
            displayedValues.percentage,
            amount !== '' ? amount.toString() : '',
            pvmSum.toString(),
            totalAmount.toString(),
          ]}
        />
      </StyledResultsWrapper>
    </StyledPage>
  );
};

export default PVM_skaičiuoklė;
