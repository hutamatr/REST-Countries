import { useState, useEffect } from 'react';

import { Country } from '../../hooks/useHttp';
import { State } from '../CountryLists/CountryLists';
import CountryLists from '../CountryLists/CountryLists';

import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

interface Props extends State {
  data: Country[] | undefined;
  pageLimit: number;
  dataLimit: number;
}

const Pagination = ({
  data,
  pageLimit,
  dataLimit,
  isLoading,
  isError,
  error,
}: Props) => {
  // const [pages] = useState<number>(Math.round(data?.length / dataLimit));

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, [currentPage]);

  const firstPageHandler = () => {
    setCurrentPage(1);
  };

  const lastPageHandler = () => {
    setCurrentPage(13);
  };

  const nextPageHandler = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  const prevPageHandler = () => {
    setCurrentPage((prevState) => prevState - 1);
  };

  const changePageHandler = (event: any) => {
    if (event.target.textContent) {
      const pageNumber = +event.target.textContent;
      setCurrentPage(pageNumber);
    }
  };

  const getPaginationDataHandler = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data?.slice(startIndex, endIndex);
  };

  const getPaginationGroupHandler = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill(1).map((_, index) => start + index + 1);
  };

  return (
    <>
      <CountryLists
        isLoading={isLoading}
        isError={isError}
        error={error}
        onPaginationData={getPaginationDataHandler}
      />

      {data && data.length > 20 && !isLoading && !isError && (
        <div className="my-8 flex flex-row items-center justify-center gap-x-1 md:gap-x-4">
          <button
            onClick={firstPageHandler}
            className={`rounded-md bg-dark-blue py-1 px-4 font-semibold text-white ${
              currentPage < 5 ? 'hidden' : ''
            }`}
          >
            first
          </button>
          <button
            onClick={prevPageHandler}
            className={`rounded-md p-1 hover:bg-dark-blue hover:text-white ${
              currentPage === 1 ? 'hidden' : ''
            }`}
          >
            <MdNavigateBefore className="text-xl dark:text-white" />
          </button>

          {getPaginationGroupHandler().map((item, index) => (
            <button
              key={index}
              onClick={changePageHandler}
              className={`rounded-md py-1 px-2 font-semibold dark:text-white ${
                currentPage === item
                  ? 'bg-dark-blue text-white'
                  : currentPage > 12
                  ? 'hidden'
                  : ''
              }`}
            >
              <span>{item}</span>
            </button>
          ))}

          <button
            onClick={nextPageHandler}
            className={`rounded-md p-1 hover:bg-dark-blue hover:text-white ${
              currentPage === 13 ? 'hidden' : ''
            }`}
          >
            <MdNavigateNext className="text-xl dark:text-white" />
          </button>

          <button
            onClick={lastPageHandler}
            className={`rounded-md bg-dark-blue py-1 px-4 font-semibold text-white ${
              currentPage === 13 ? 'hidden' : ''
            }`}
          >
            last
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
