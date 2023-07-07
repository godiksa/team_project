import React, { useState, useEffect } from 'react';
import { currencyAPI } from '../../shared/api/index';
import DeleteButton from '../../components/atoms/DeleteButton';
import Input from '../../components/atoms/Input/Input';
import {
  StyledBox,
  StyledBoxLeft,
  StyledBoxRight,
  StyledSelect,
  StyledTitle2,
  StyledWrapper,
} from './styles';
import { StyledTitle } from '../Atlyginimo_ir_mokesčIų_skaičiuoklė/styles';
const CurrencyCalculator = () => {
  const [baseCurrency, setBaseCurrency] = useState('');
  const [baseValue, setBaseValue] = useState('');
  const [initialCurrencyRates, setInitialCurrencyRates] = useState<{
    [key: string]: number;
  }>({});
  const [selectedCurrency, setSelectedCurrency] = useState<string>('');
  const [displayedCurrencies, setDisplayedCurrencies] = useState<string[]>([]);
  const [dateValue, setDateValue] = useState('');

  const handleBaseCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const currency = e.target.value;
    setBaseCurrency(currency);
  };

  const handleBaseValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBaseValue(value);
  };

  const handleCurrencySelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currency = e.target.value;
    setSelectedCurrency(currency);
  };

  const handleCurrencyRemoval = (currency: string) => {
    setDisplayedCurrencies((prevCurrencies) =>
      prevCurrencies.filter((c) => c !== currency)
    );
  };

  const calculateCurrencyValues = () => {
    const parsedValue = parseFloat(baseValue.replace(',', '.')) || 0;

    const calculatedCurrencyValues = Object.entries(
      initialCurrencyRates
    ).reduce((result, [currency, rate]) => {
      result[currency] =
        (parsedValue * rate) / initialCurrencyRates[baseCurrency];
      return result;
    }, {} as { [key: string]: number });

    return calculatedCurrencyValues;
  };

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const data = await currencyAPI.getCurrency();
        setInitialCurrencyRates(data);
        setBaseCurrency(Object.keys(data)[0]);
        setDisplayedCurrencies([
          'eur',
          'pln',
          'gbp',
          'usd',
          'uah',
          'try',
          'aud',
          'cad',
          'nok',
        ]);
      } catch (error) {
        console.error('Error fetching currency rates:', error);
      }
    };

    fetchCurrencyRates();
  }, []);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json?_=${Date.now()}`
        );
        const data = await response.json();
        const formattedDate = data.date.toString();
        setDateValue(formattedDate);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };

    fetchCurrencyData();
    const interval = setInterval(fetchCurrencyData, 3600000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (selectedCurrency && !displayedCurrencies.includes(selectedCurrency)) {
      setDisplayedCurrencies((prevCurrencies) => [
        ...prevCurrencies,
        selectedCurrency,
      ]);
      setSelectedCurrency('');
    }
  }, [selectedCurrency, displayedCurrencies]);

  const calculatedCurrencyValues = {
    ...calculateCurrencyValues(),
    [baseCurrency]: parseFloat(baseValue.replace(',', '.')) || 0,
  };

  return (
    <StyledWrapper>
      <StyledTitle>Valiutos skaičiuoklė</StyledTitle>

      <StyledBox>
        {' '}
        <StyledBoxLeft>
          {' '}
          <div>Data: {dateValue}</div>
          <div>
            <h3>Bazinė valiuta:</h3>
            <div className='option'>
              <StyledSelect
                value={baseCurrency}
                onChange={handleBaseCurrencyChange}
              >
                {Object.keys(initialCurrencyRates).map((currency) => (
                  <option className='option' key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </StyledSelect>
            </div>
          </div>
          <div>
            <h3>Suma:</h3>
            <div className='input'>
              <Input
                type='text'
                placeholder='Įveskite sumą'
                value={baseValue}
                onChange={handleBaseValueChange}
                setvalue={setBaseValue}
              />
            </div>
          </div>
          <div>
            <h3>Pridėti valiutą:</h3>
            <div className='option'>
              <StyledSelect
                value={selectedCurrency}
                onChange={handleCurrencySelection}
              >
                <option value='' disabled>
                  Pasirinkite valiutą
                </option>

                {Object.keys(initialCurrencyRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </StyledSelect>
            </div>
          </div>
        </StyledBoxLeft>
        <StyledBoxRight>
          <h3 className='mobiletitle'>Valiutos:</h3>

          {displayedCurrencies.map((currency) => (
            <div key={currency}>
              <div className='input-right'>
                <div className='input-right-c'>
                  <StyledTitle2 className='currencyTitle'>
                    {currency}:{' '}
                  </StyledTitle2>
                </div>
                <div className='input-right-w'>
                  <Input
                    type='text'
                    value={(calculatedCurrencyValues[currency] || 0).toFixed(2)}
                    readOnly
                  />
                </div>
                <DeleteButton onClick={() => handleCurrencyRemoval(currency)} />
              </div>
            </div>
          ))}
        </StyledBoxRight>
      </StyledBox>
    </StyledWrapper>
  );
};

export default CurrencyCalculator;
