import { useState } from 'react';
import { useQuery, useQueries } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AxiosError } from 'axios';

import BackButton from '../components/UI/BackButton';
import CountryDetailList from '../components/CountryDetailList/CountryDetailList';
import useHttp from '../hooks/useHttp';

const CountryDetail = () => {
  const [queriesData, setQueriesData] = useState<string[]>([]);
  const { countryId } = useParams();
  const { requestHttp } = useHttp();

  const {
    data: countryDetail,
    isLoading: isLoadingDetail,
    isError: isErrorDetail,
    error: errorDetail,
  } = useQuery({
    queryKey: ['country-detail', countryId],
    queryFn: () => {
      return requestHttp({
        method: 'GET',
        url: `name/${countryId}`,
      });
    },
    onSuccess: (data) => {
      if (data.data[0].borders) {
        setQueriesData(data.data[0].borders);
      }
    },
    enabled: !!countryId,
  });

  const useQueriesBorder = useQueries({
    queries: queriesData.map((border) => {
      return {
        queryKey: ['border-countries', border],
        queryFn: () => {
          return requestHttp({ method: 'GET', url: `alpha/${border}` });
        },
      };
    }),
  });

  const borderQueries = useQueriesBorder.map((queryData) => {
    if (queryData.data?.data) {
      for (const query of queryData.data.data) {
        return query;
      }
    }
  });

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{countryDetail?.data[0].name.common}</title>
        <meta name='description' content={countryDetail?.data[0].capital[0]} />
      </Helmet>
      <section className='mx-auto flex max-w-6xl flex-col gap-y-12 px-6 pb-12 pt-28'>
        <BackButton />

        {isLoadingDetail && (
          <p className='text-center text-2xl font-semibold text-very-dark-blue-2 dark:text-white'>
            Loading Country...
          </p>
        )}
        {isErrorDetail && errorDetail instanceof AxiosError && (
          <p className='text-center text-2xl font-semibold text-red-600'>
            {errorDetail.response?.statusText}
          </p>
        )}

        {countryDetail?.data.map((country, index) => {
          return (
            <CountryDetailList
              key={index}
              country={country}
              borderQueries={borderQueries}
            />
          );
        })}
      </section>
    </>
  );
};

export default CountryDetail;
