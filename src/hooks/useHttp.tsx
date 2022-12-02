import axios from 'axios';

interface RequestConf {
  method: string;
  url: string;
  data?: Object;
}

const countriesAPI = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
});

const useHttp = () => {
  const requestHttp = async (requestConf: RequestConf) => {
    const { method, url, data } = requestConf;
    const response = await countriesAPI({
      method,
      url,
      data,
    });

    if (response.status > 400) {
      throw new Error('Error Get Data');
    }

    return response;
  };

  return { requestHttp };
};

export default useHttp;
