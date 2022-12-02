import { useQuery } from '@tanstack/react-query';

import FilterBy from '../FilterBy/FilterBy';
import useHttp from '../../hooks/useHttp';

const CountryLists = () => {
  const { requestHttp } = useHttp();

  const {
    data: countriesData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['countries'],
    queryFn: () => requestHttp({ method: 'GET', url: 'all' }),
  });

  console.log(countriesData);

  return (
    <section>
      <FilterBy />
    </section>
  );
};

export default CountryLists;
