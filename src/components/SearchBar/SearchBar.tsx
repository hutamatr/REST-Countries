import { MdSearch } from 'react-icons/md';

const SearchBar = () => {
  return (
    <form className="flex flex-row items-center gap-x-4 rounded py-2 px-4 shadow-md">
      <MdSearch className="text-2xl text-dark-gray" />
      <input
        type="text"
        className="w-full p-1 outline-none"
        placeholder="Search for a country"
      />
    </form>
  );
};

export default SearchBar;
