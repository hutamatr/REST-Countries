import axios, { AxiosResponse } from 'axios';

interface NativeName {
  [name: string]: {
    official: string;
    common: string;
  };
}
interface Flags {
  png: string;
  svg: string;
}
interface CountryName {
  common: string;
  nativeName?: NativeName;
}

interface Currencies {
  [currency: string]: {
    name: string;
    symbol: string;
  };
}

interface Languages {
  [name: string]: string;
}

export interface Country {
  name: CountryName;
  population: number;
  region: string;
  subregion?: string;
  flags: Flags;
  capital: string[];
  tld?: string[];
  currencies?: Currencies;
  languages?: Languages;
  borders?: string[];
}

interface RequestConf {
  method: string;
  url: string;
}

const countriesAPI = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
});

const useHttp = () => {
  const requestHttp = async (requestConf: RequestConf) => {
    const { method, url } = requestConf;
    const response: AxiosResponse<Country[]> = await countriesAPI({
      method,
      url,
    });

    if (response.status > 400) {
      throw new Error('Error Get Data');
    }

    return response;
  };

  return { requestHttp };
};

export default useHttp;
