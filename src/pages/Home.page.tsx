import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import useHttp, { Country } from '../hooks/useHttp';
import SearchBar from '../components/UI/SearchBar';
import FilterBy from '../components/UI/FilterBy';
import Pagination from '../components/UI/Pagination';

import { MdArrowBack } from 'react-icons/md';

const Home = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [isButtonShow, setIsButtonShow] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<string>('');
  const [countriesData, setCountriesData] = useState<Country[]>(
    [] as Country[]
  );
  const { requestHttp } = useHttp();

  useEffect(() => {
    if (searchValue || filterValue) {
      setIsButtonShow(true);
    }
  }, [searchValue, filterValue]);

  const {
    isLoading: isLoadingCountries,
    isError: isErrorCountries,
    error: errorCountries,
    refetch,
  } = useQuery({
    queryKey: ['countries'],
    queryFn: () => {
      return requestHttp({ method: 'GET', url: 'all' });
    },
    onSuccess: (data) => {
      setCountriesData(data.data);
    },
    refetchOnWindowFocus: false,
  });

  const {
    isFetching: isFetchingSearch,
    isError: isErrorSearch,
    error: errorSearch,
  } = useQuery({
    queryKey: ['country', searchValue],
    queryFn: () => {
      return requestHttp({ method: 'GET', url: `name/${searchValue}` });
    },
    onSuccess: (data) => {
      setCountriesData(data.data);
    },
    enabled: !!searchValue,
  });

  const {
    isFetching: isFetchingFilter,
    isError: isErrorFilter,
    error: errorFilter,
  } = useQuery({
    queryKey: ['countriesFilter', filterValue],
    queryFn: () => {
      return requestHttp({ method: 'GET', url: `region/${filterValue}` });
    },
    onSuccess: (data) => {
      setCountriesData(data.data);
    },
    enabled: !!filterValue,
  });

  const searchValueHandler = (data: string) => {
    setSearchValue(data);
  };

  const filterChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event.target.value);
  };

  const backButtonHandler = () => {
    refetch();
    setIsButtonShow(false);
    setSearchValue(null);
    setFilterValue('');
  };

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>REST Countries</title>
      </Helmet>
      <section className='mx-auto flex max-w-6xl flex-col gap-y-12 px-6 pt-28'>
        <div className='flex w-full flex-col gap-y-6 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex flex-row items-center gap-x-4'>
            {isButtonShow && (
              <button onClick={backButtonHandler}>
                <MdArrowBack className='text-2xl dark:text-white' />
              </button>
            )}
            <SearchBar onSearchValue={searchValueHandler} />
          </div>
          <FilterBy
            onFilterHandler={filterChangeHandler}
            onFilterValue={filterValue}
          />
        </div>
        <Pagination
          data={countriesData}
          dataLimit={20}
          pageLimit={4}
          isLoading={isLoadingCountries || isFetchingSearch || isFetchingFilter}
          isError={isErrorCountries || isErrorSearch || isErrorFilter}
          error={errorCountries || errorSearch || errorFilter}
        />
      </section>
    </>
  );
};

export default Home;
