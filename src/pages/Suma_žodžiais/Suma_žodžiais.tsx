import { useState } from 'react';
import Display from '../../components/molecules/Display';
import Form from '../../components/molecules/Form';
import { FormField } from '../../components/molecules/Form/Form';
import { StyledDisplay, StyledFormWrapper, StyledTitle } from './styles';

const formFields: FormField[] = [
  {
    key: 'suma',
    text: 'Suma',
    type: 'number',
  },
];

const wordValues = {
  vienetai: [
    '',
    'vienas',
    'du',
    'trys',
    'keturi',
    'penki',
    'šeši',
    'septyni',
    'aštuoni',
    'devyni',
  ],
  niolikiniai: [
    'dešimt',
    'vienuolika',
    'dvylika',
    'trylika',
    'keturiolika',
    'penkiolika',
    'šešiolika',
    'septyniolika',
    'aštuoniolika',
    'devyniolika',
  ],
  desimtys: [
    '',
    'dešimt',
    'dvidešimt',
    'trisdešimt',
    'keturiasdešimt',
    'penkiasdešimt',
    'šešiasdešimt',
    'septyniasdešimt',
    'aštuoniasdešimt',
    'devyniasdešimt',
  ],
};

const Suma_žodžiais = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleDisplay = (values: any) => {
    const { suma } = values;
    if (!suma) {
      setDisplayValue('Įveskite skaičių sumą ir ji bus paversta žodžiais.');
      return;
    }
    const result = convertNumberToWords(parseFloat(suma));
    setDisplayValue(result);
  };

  const convertNumberToWords = (number: number) => {
    const [integerPart, decimalPart] = number.toString().split('.');
    let words = '';

    if (integerPart) {
      words += convertIntegerToWords(parseInt(integerPart)) + ' eur';
    }
    if (decimalPart) {
      words += ' ir ' + convertIntegerToWords(parseInt(decimalPart)) + ' ct ';
    }

    return words || 'Nepavyko nuskaityti sumos.';
  };

  const convertIntegerToWords = (number: number) => {
    if (number === 0) {
      return 'nulis';
    }
    let words = '';

    const GANA = 999999999999999;
    const trillion = Math.floor(number / 1000000000000) % 1000;
    const tenThousandTrillions = Math.floor(number / 10000000000000) % 10;
    const billion = Math.floor(number / 1000000000) % 1000;
    const tenThousandBillions = Math.floor(number / 10000000000) % 10;
    const millions = Math.floor(number / 1000000) % 1000;
    const tenThousandMillions = Math.floor(number / 10000000) % 10;
    const hundredThousands = Math.floor(number / 1000) % 1000;
    const tenThousands = Math.floor((number % 100000) / 10000);
    const hundreds = Math.floor((number % 1000) / 100);
    const tens = Math.floor((number % 100) / 10);
    const ones = number % 10;

    if (GANA < number) {
      return 'Pateikta suma nenustatyta';
    }

    if (tenThousandTrillions !== 1 && trillion % 10 === 1) {
      words += convertIntegerToWords(trillion) + ' trilijonas ';
    } else if (tenThousandTrillions !== 1 && trillion % 10 > 1) {
      words += convertIntegerToWords(trillion) + ' trilijonai ';
    } else if (trillion > 9 || tenThousandTrillions === 1) {
      words += convertIntegerToWords(trillion) + ' trilijonų ';
    }

    if (tenThousandBillions !== 1 && billion % 10 === 1) {
      words += convertIntegerToWords(billion) + ' bilijonas ';
    } else if (tenThousandBillions !== 1 && billion % 10 > 1) {
      words += convertIntegerToWords(billion) + ' bilijonai ';
    } else if (billion > 9 || tenThousandBillions === 1) {
      words += convertIntegerToWords(billion) + ' bilijonų ';
    }

    if (tenThousandMillions !== 1 && millions % 10 === 1) {
      words += convertIntegerToWords(millions) + ' milijonas ';
    } else if (tenThousandMillions !== 1 && millions % 10 > 1) {
      words += convertIntegerToWords(millions) + ' milijonai ';
    } else if (millions > 9 || tenThousandMillions === 1) {
      words += convertIntegerToWords(millions) + ' milijonų ';
    }

    if (tenThousands !== 1 && hundredThousands % 10 === 1) {
      words += convertIntegerToWords(hundredThousands) + ' tūkstantis ';
    } else if (tenThousands !== 1 && hundredThousands % 10 > 1) {
      words += convertIntegerToWords(hundredThousands) + ' tūkstančiai ';
    } else if (hundredThousands > 9 || tenThousands === 1) {
      words += convertIntegerToWords(hundredThousands) + ' tūkstančių ';
    }

    if (hundreds === 1) {
      words += ' šimtas ';
    } else if (hundreds > 0) {
      words += wordValues.vienetai[hundreds] + ' šimtai ';
    }

    if (tens === 1) {
      words += wordValues.niolikiniai[ones];
    } else if (tens > 1) {
      words += wordValues.desimtys[tens];
      if (ones > 0) {
        words += ' ' + wordValues.vienetai[ones];
      }
    } else if (ones > 0) {
      words += wordValues.vienetai[ones];
    }

    return words;
  };

  return (
    <main>
      <StyledTitle>Suma žodžiais</StyledTitle>
      <StyledFormWrapper>
        <Form fields={formFields} displayValues={handleDisplay} />
      </StyledFormWrapper>
      <StyledDisplay>
        <Display
          labelTitles={['']}
          values={
            displayValue
              ? [displayValue]
              : ['Įveskite sumą ir ji bus paversta žodžiais.']
          }
        />
      </StyledDisplay>
    </main>
  );
};

export default Suma_žodžiais;
