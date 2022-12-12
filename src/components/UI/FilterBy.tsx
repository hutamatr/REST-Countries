interface Props {
  onFilterValue: string;
  onFilterHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const options = [
  { value: '', text: 'Filter by Region' },
  { value: 'africa', text: 'Africa' },
  { value: 'america', text: 'America' },
  { value: 'asia', text: 'Asia' },
  { value: 'europe', text: 'Europe' },
  { value: 'oceania', text: 'Oceania' },
];

const FilterBy = ({ onFilterValue, onFilterHandler }: Props) => {
  return (
    <div className="max-w-fit rounded p-2 shadow-material dark:bg-dark-blue">
      <select
        name="region"
        id="region"
        onChange={onFilterHandler}
        value={onFilterValue}
        className="cursor-pointer rounded bg-white py-2 px-4 text-sm font-semibold dark:bg-dark-blue dark:text-white"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-sm font-semibold"
          >
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBy;
