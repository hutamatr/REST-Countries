import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

interface Props {
  onSearchValue: (value: string) => void;
}

const SearchBar = ({ onSearchValue }: Props) => {
  const [searchInput, setSearchInput] = useState<string>('');

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const searchSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchValue(searchInput);
    setSearchInput('');
  };

  return (
    <form
      onSubmit={searchSubmitHandler}
      className='flex w-full flex-row items-center gap-x-4 rounded py-2 px-4 shadow-material dark:bg-dark-blue sm:w-96'
    >
      <MdSearch className='text-2xl text-dark-gray dark:text-white' />
      <input
        type='text'
        className='w-full p-1 outline-none dark:bg-dark-blue dark:text-white dark:placeholder:text-white'
        placeholder='Search for a country'
        value={searchInput}
        onChange={searchInputHandler}
      />
    </form>
  );
};

export default SearchBar;
