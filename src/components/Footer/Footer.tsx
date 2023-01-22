import { RiHeart2Fill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className='flex flex-row items-center justify-center py-6 dark:bg-very-dark-blue-1'>
      <p className='flex flex-row gap-x-1 text-sm font-bold text-very-dark-blue-1 dark:text-white'>
        Made with
        <RiHeart2Fill className='animate-bounce text-lg text-red-600' />
        by
        <a
          href='https://github.com/hutamatr'
          target='_blank'
          className='hover:text-primary-cyan'
          rel='noreferrer'
        >
          hutamatr
        </a>
      </p>
    </div>
  );
};

export default Footer;
