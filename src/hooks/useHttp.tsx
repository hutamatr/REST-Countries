import axios, { AxiosResponse } from 'axios';

export interface Country {
  name: { common: string };
  population: number;
  region: string;
  flags: { png: string; svg: string };
  capital: string[];
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
