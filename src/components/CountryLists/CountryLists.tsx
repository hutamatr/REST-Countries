import { AxiosResponse, AxiosError } from 'axios';
import { Country } from '../../hooks/useHttp';
import Card from '../UI/Card';

export interface State {
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}

interface Props extends State {
  onPaginationData: () => Country[] | undefined;
}

const CountryLists = ({
  onPaginationData,
  isLoading,
  isError,
  error,
}: Props) => {
  const countryContent = (
    <div className="grid grid-flow-row grid-cols-1 items-center justify-items-center gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
      {onPaginationData()?.map((country, index) => {
        const populationFormat = new Intl.NumberFormat().format(
          country.population
        );

        return (
          <Card
            countryImage={country.flags.png}
            country={country.name.common}
            population={populationFormat}
            region={country.region}
            capital={country.capital}
            key={index}
          />
        );
      })}
    </div>
  );

  return (
    <section className="flex min-h-screen flex-col gap-y-4">
      {isLoading && (
        <p className="text-center text-2xl font-semibold text-very-dark-blue-2 dark:text-white">
          Loading...
        </p>
      )}
      {isError && error instanceof AxiosError && (
        <p className="text-center text-2xl font-semibold text-red-600">
          {error.response?.statusText}
        </p>
      )}
      {!isLoading && !isError && countryContent}
    </section>
  );
};

export default CountryLists;
