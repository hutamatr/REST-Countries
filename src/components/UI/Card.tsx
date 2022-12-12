interface Props {
  countryImage: string;
  country: string;
  population: string;
  region: string;
  capital: string[];
}

const Card = ({
  countryImage,
  country,
  population,
  region,
  capital,
}: Props) => {
  return (
    <div className="h-full w-fit rounded shadow-material dark:bg-dark-blue sm:h-80">
      <img
        src={countryImage}
        alt={country}
        className="aspect-video rounded-tl rounded-tr shadow"
        loading="lazy"
      />
      <div className="flex flex-col gap-y-4 p-5 dark:text-white">
        <h2 className="text-lg font-extrabold">{country}</h2>
        <div className="text-sm tracking-wide">
          <p className="font-medium">
            <span className="font-semibold">Population : </span>
            {population || '-'}
          </p>
          <p className="font-medium">
            <span className="font-semibold">Region : </span>
            {region || '-'}
          </p>
          <p className="font-medium">
            <span className="font-semibold">Capital : </span>
            {capital || '-'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
