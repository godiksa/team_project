import React, { useEffect, useState } from 'react';
import { currencyAPI } from '../../shared/api/index';

interface ICurrencyCounterProps {}

const CurrencyCounter: React.FC<ICurrencyCounterProps> = () => {
  const [availableCurrencies] = useState<string[]>(['eur', 'usd', 'gbp', 'aud', 'bgn', 'cad']);
  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>(['eur', 'usd', 'gbp', 'aud', 'bgn', 'cad']);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('');
  const [baseCurrencyInput, setBaseCurrencyInput] = useState<string>('');
  const [baseCurrencyValue, setBaseCurrencyValue] = useState<number | null>(null);
  const [currencyValues, setCurrencyValues] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const data = await currencyAPI.getCurrency();
        setCurrencyValues(data);
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };

    fetchCurrencies();
  }, []);

  const handleCurrencySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = e.target.value;
    setSelectedCurrency(selectedCurrency);
  
    if (selectedCurrency !== '') {
      const exchangeRate = currencyValues[selectedCurrency];
      const updatedBaseCurrencyValue = baseCurrencyValue !== null ? baseCurrencyValue * exchangeRate : null;
      setBaseCurrencyValue(updatedBaseCurrencyValue);
    }
  };

  const handleBaseCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBaseCurrencyInput(value);

    if (value === '') {
      setBaseCurrencyValue(null);
    } else {
      const parsedValue = Number(value);
      setBaseCurrencyValue(parsedValue);
    }
  };

  const handleAddCurrency = () => {
    if (selectedCurrency !== '' && !selectedCurrencies.includes(selectedCurrency)) {
      setSelectedCurrencies([...selectedCurrencies, selectedCurrency]);
      setSelectedCurrency('');
    }
  };

  const handleRemoveCurrency = (currency: string) => {
    const updatedCurrencies = selectedCurrencies.filter((c) => c !== currency);
    setSelectedCurrencies(updatedCurrencies);
  };

  return (
    <main>
      <input type="number" value={baseCurrencyInput} onChange={handleBaseCurrencyChange} />

      <select value={selectedCurrency} onChange={handleCurrencySelect}>
        <option value="">Select Currency</option>
        {availableCurrencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <button onClick={handleAddCurrency}>Add Currency</button>

      {selectedCurrencies.length > 0 && (
        <div>
          <p>Selected Currencies:</p>
          {selectedCurrencies.map((currency) => (
            <div key={currency}>
              {currency}: 
              <input
                type="number"
                value={
                  baseCurrencyValue !== null && currencyValues[currency] !== undefined
                    ? (baseCurrencyValue * currencyValues[currency]).toFixed(2)
                    : ''
                }
                readOnly
              />
              <button onClick={() => handleRemoveCurrency(currency)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default CurrencyCounter;
