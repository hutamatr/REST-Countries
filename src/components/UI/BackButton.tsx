import { useNavigate } from 'react-router-dom';

import { MdKeyboardBackspace } from 'react-icons/md';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="flex w-fit flex-row items-center justify-center gap-x-3 rounded py-1 px-3 font-medium shadow-material dark:bg-dark-blue dark:text-white"
      onClick={() => navigate(-1)}
    >
      <MdKeyboardBackspace className="text-lg" />
      Back
    </button>
  );
};

export default BackButton;
