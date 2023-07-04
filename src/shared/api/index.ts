import axios from 'axios';

interface ICurrencyRates {
  [key: string]: number;
}

const httpClient = axios.create({
  timeout: 1000,
});

class CurrencyAPI {
  private currencyApiUrl: string;

  constructor() {
    const currencyApiBaseUrl =
      'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies';

    this.currencyApiUrl = `${currencyApiBaseUrl}/eur.json`;
  }

  public async getCurrency(): Promise<ICurrencyRates> {
    try {
      const response = await httpClient.get(this.currencyApiUrl);
      const rates = response.data['eur'];
      return rates as ICurrencyRates;
    } catch (error) {
      console.log('Error fetching currency rates:', error);
      return {};
    }
  }
}

export const currencyAPI = new CurrencyAPI();
