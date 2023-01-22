import { Link } from 'react-router-dom';
import { Country } from '../../hooks/useHttp';

import { populationFormat } from '../../utils/populationFormat';

interface Props {
  country: Country;
  borderQueries: (Country | undefined)[];
}

const CountryDetailList = ({ country, borderQueries }: Props) => {
  return (
    <div className='grid grid-cols-1 gap-8 dark:text-white sm:grid-cols-2 sm:items-center'>
      <img
        src={country.flags.png}
        alt={country.name.common}
        className='mb-4 shadow-material sm:mb-0 sm:h-max sm:w-[95%] lg:h-[90%] lg:w-[90%]'
      />
      <div className='flex flex-col gap-y-8'>
        <h2 className='text-2xl font-bold'>{country.name.common}</h2>
        <div className='flex flex-col gap-y-6 sm:flex-row sm:items-start sm:justify-between sm:gap-x-4'>
          <div className='flex flex-col gap-y-2'>
            <p className='font-semibold'>
              Native Name :{' '}
              <span className='font-medium'>
                {country.name.nativeName?.[
                  Object.keys(country.name.nativeName)[0]
                ].official || '-'}
              </span>
            </p>
            <p className='font-semibold'>
              Population :{' '}
              <span className='font-medium'>
                {populationFormat(country.population) || '-'}
              </span>
            </p>
            <p className='font-semibold'>
              Region :{' '}
              <span className='font-medium'>{country.region || '-'}</span>
            </p>
            <p className='font-semibold'>
              Sub Region :{' '}
              <span className='font-medium'>{country.subregion || '-'}</span>
            </p>
            <p className='font-semibold'>
              Capital :{' '}
              <span className='font-medium'>{country.capital || '-'}</span>
            </p>
          </div>

          <div className='flex flex-col gap-y-2'>
            <p className='font-semibold'>
              Top Level Domain :{' '}
              <span className='font-medium'>{country.tld || '-'}</span>
            </p>
            <p className='font-semibold'>
              Currencies :{' '}
              <span className='font-medium'>
                {country.currencies?.[Object.keys(country.currencies)[0]]
                  .name || '-'}
              </span>
            </p>
            <p className='font-semibold'>
              Language :{' '}
              <span className='font-medium'>
                {country.languages?.[Object.keys(country.languages)[0]] || '-'}
              </span>
            </p>
          </div>
        </div>
        <div className='flex flex-col items-start gap-y-4 sm:flex-row sm:gap-x-4'>
          <p className='whitespace-nowrap font-semibold'>Border Countries : </p>
          {borderQueries.length === 0 && <span>-</span>}
          <div className='flex flex-row flex-wrap gap-x-2 gap-y-2'>
            {borderQueries.map((border, index) => {
              return (
                <Link to={`/${border?.name.common}`} key={index}>
                  <button className='whitespace-nowrap rounded py-1 px-3 text-sm font-medium shadow-material dark:bg-dark-blue'>
                    {border?.name.common}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailList;
