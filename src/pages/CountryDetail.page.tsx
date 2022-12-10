import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import useHttp from '../hooks/useHttp';

const CountryDetail = () => {
  const { countryId } = useParams();

  const { requestHttp } = useHttp();

  const { data: countryDetail } = useQuery({
    queryKey: ['country-detail', countryId],
    queryFn: () => {
      return requestHttp({
        method: 'GET',
        url: `name/${countryId}`,
      });
    },
  });

  return <section className="pt-28"></section>;
};

export default CountryDetail;
