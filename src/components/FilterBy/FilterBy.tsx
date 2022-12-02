const FilterBy = () => {
  return (
    <form className="max-w-fit rounded p-2 shadow">
      <select name="region" id="region" className="">
        <option disabled value={''}>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  );
};

export default FilterBy;
