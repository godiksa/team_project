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

const Atlyginimo_skaičiuoklė: React.FC = () => {
  const fields: FormField[] = [
    {
      key: 'year',
      text: 'Metai',
      type: 'select',
      selectOptions: ['2023', '2022'],
    },
    {
      key: 'calculationType',
      text: 'Atlyginimas',
      type: 'radio',
      radioOptions: ['Ant popieriaus', 'Į rankas'],
    },
    {
      key: 'npdType',
      text: 'NPD',
      type: 'radio',
      radioOptions: ['Paskaičiuos sistema', 'Nurodysiu pats'],
      popupInput: [
        {
          triggerText: 'Nurodysiu pats',
          key: 'userNpd',
          text: 'Įveskite NPD',
          type: 'number',
          textPlaceholder: 'Enter NPD',
        },
      ],
    },
    {
      key: 'amount',
      text: 'Atlyginimas (EUR)',
      type: 'number',
      textPlaceholder: 'Enter amount',
    },
    {
      key: 'additionalSodra',
      text: 'Kaupiu pensijai papildomai',
      type: 'select',
      selectOptions: ['0%', '2.7%', '3%'],
    },
  ];

  const [displayedValues, setDisplayedValues] = useState({
    amount: '',
    year: '2023',
    additionalSodra: '0%',
    calculationType: 'Ant popieriaus',
    npdType: 'Paskaičiuos sistema',
    userNpd: '',
  });

  const handleDisplayValues = (values: any) => {
    setDisplayedValues((prevValues) => ({ ...prevValues, ...values }));
  };

  const calculateNPD = (amount: number, selectedYear: string) => {
    let npd: number;

    if (selectedYear === '2023') {
      const minWage23 = 840;
      const avgWage23 = 1926;
      const maxWage = 2864;

      if (amount <= minWage23) {
        npd = 0;
      } else if (amount < avgWage23 && amount > minWage23) {
        npd = 625 - 0.42 * (amount - minWage23);
      } else if (amount > avgWage23 && amount < maxWage) {
        npd = 400 - 0.18 * (amount - 642);
      } else {
        npd = 0;
      }
    } else if (selectedYear === '2022') {
      const minWage22 = 730;
      const avgWage22 = 1704;
      const maxWage = 2864;

      if (amount <= minWage22) {
        npd = 540;
      } else if (amount < avgWage22 && amount > minWage22) {
        npd = 540 - 0.34 * (amount - minWage22);
      } else if (amount > avgWage22 && amount < maxWage) {
        npd = 400 - 0.18 * (amount - 642);
      } else {
        npd = 0;
      }
    } else {
      npd = 0;
    }

    return npd.toFixed(2);
  };

  const calculatePajamuMokestis = (amount: number, npd: number) => {
    if (amount - npd > 0) {
      return (((amount - npd) * 20) / 100).toFixed(2);
    }
    return 0;
  };

  const calculateSodra1 = (amount: number) => {
    return ((amount * 6.98) / 100).toFixed(2);
  };

  const calculateSodra2 = (amount: number, additionalSodra: string) => {
    switch (additionalSodra) {
      case '0%':
        return ((amount * 12.52) / 100).toFixed(2);
      case '2.7%':
        return ((amount * 15.22) / 100).toFixed(2);
      case '3%':
        return ((amount * 15.52) / 100).toFixed(2);
      default:
        return '0';
    }
  };

  const calculateAtlyginimasIrankas = (
    amount: number,
    pajamuMokestis: number,
    sodra1: number,
    sodra2: number
  ) => {
    return (amount - pajamuMokestis - sodra1 - sodra2).toFixed(2);
  };

  const calculateDarbdavioSodra = (amount: number) => {
    return ((amount * 1.77) / 100).toFixed(2);
  };

  const calculateVisaDarboVieta = (amount: number) => {
    return ((amount * 1.77) / 100 + amount).toFixed(2);
  };

  let amount: number | string =
    displayedValues.amount !== '' ? Number(displayedValues.amount) : 0;
  let npd: string | number = '';
  let pajamuMokestis: string | number = '';
  let sodra1: string | number = '';
  let sodra2: string | number = '';
  let atlyginimasIrankas: string | number = '';
  let darbdavioSodra: string | number = '';
  let visaDarboVieta: string | number = '';

  if (!isNaN(amount as number)) {
    npd = calculateNPD(amount as number, displayedValues.year);
    if (displayedValues.npdType === 'Nurodysiu pats') {
      npd = displayedValues.userNpd;
    }

    pajamuMokestis = calculatePajamuMokestis(amount as number, Number(npd));
    sodra1 = calculateSodra1(amount as number);
    sodra2 = calculateSodra2(amount as number, displayedValues.additionalSodra);
    atlyginimasIrankas = calculateAtlyginimasIrankas(
      amount as number,
      Number(pajamuMokestis),
      Number(sodra1),
      Number(sodra2)
    );
    darbdavioSodra = calculateDarbdavioSodra(amount as number);
    visaDarboVieta = calculateVisaDarboVieta(amount as number);

    // reversed

    if (displayedValues.calculationType === 'Į rankas') {
      atlyginimasIrankas = amount;
      let fakeAtlyginimas = calculateAtlyginimasIrankas(
        amount as number,
        Number(pajamuMokestis),
        Number(sodra1),
        Number(sodra2)
      );

      while (Number(fakeAtlyginimas) != atlyginimasIrankas) {
        amount = (Number(amount) + 0.01).toFixed(2);
        npd = calculateNPD(Number(amount), displayedValues.year);
        if (displayedValues.npdType === 'Nurodysiu pats') {
          npd = displayedValues.userNpd;
        }

        pajamuMokestis = calculatePajamuMokestis(Number(amount), Number(npd));
        sodra1 = calculateSodra1(Number(amount));
        sodra2 = calculateSodra2(
          Number(amount),
          displayedValues.additionalSodra
        );
        darbdavioSodra = calculateDarbdavioSodra(Number(amount));
        visaDarboVieta = calculateVisaDarboVieta(Number(amount));
        fakeAtlyginimas = calculateAtlyginimasIrankas(
          Number(amount),
          Number(pajamuMokestis),
          Number(sodra1),
          Number(sodra2)
        );
      }
    }
  } else {
    amount = '';
  }

  return (
    <StyledPage>
      <StyledTitle>Atlyginimo ir mokesčių skaičiuoklė</StyledTitle>
      <StyledResultsWrapper>
        <StyledFormWrapper>
          <Form fields={fields} displayValues={handleDisplayValues} />
        </StyledFormWrapper>
        <Display
          labelTitles={[
            'Atlyginimas "ant popieriaus"',
            'Pritaikytas NPD',
            'Pajamų mokestis 20%',
            'Sodra. Sveikatos draudimas 6.98%',
            'Sodra. Pensijų ir soc. draudimas 12,52%',
            'Išmokamas atlyginimas "į rankas"',
            'Darbdavio sumokami mokesčiai',
            'Sodra 1,77%',
            'Visa darbo vietos kaina',
          ]}
          values={[
            `${amount.toString()} €`,
            `${npd.toString()} €`,
            `${pajamuMokestis.toString()} €`,
            `${sodra1.toString()} €`,
            `${sodra2.toString()} €`,
            `${atlyginimasIrankas.toString()} €`,
            '',
            `${darbdavioSodra.toString()} €`,
            `${visaDarboVieta.toString()} €`,
          ]}
        />
      </StyledResultsWrapper>
    </StyledPage>
  );
};

export default Atlyginimo_skaičiuoklė;
