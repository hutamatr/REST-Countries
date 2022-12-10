import React, { useState, useEffect } from 'react';
import { MdArrowUpward } from 'react-icons/md';

const ScrollTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollHandler = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollTopHandler = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`fixed bottom-[5%] right-6 z-30 rounded-full bg-very-dark-blue-1 p-3 duration-500 hover:-translate-y-2 hover:opacity-100 dark:bg-very-light-gray ${
        scrollPosition > 500 ? 'block' : 'hidden'
      }`}
      onClick={scrollTopHandler}
    >
      <MdArrowUpward className="text-xl text-white dark:text-very-dark-blue-2" />
    </button>
  );
};

export default ScrollTop;
