import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import { useModal } from '../context/ModalContext';
import Avatar from './Avatar';
import Logo from './Logo';

const Header = () => {
  const { user } = useMoralis();
  const { toggleModal } = useModal();

  return (
    <div className="text-pink-500 sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700 ">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center ">
        <Logo className="w-[100px] h-[100px] mx-auto hidden lg:inline-grid cursor-pointer " />

        <div className="text-left lg:text-center col-span-4 space-y-4 ">
          <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full ">
            <Avatar logoutOnPress />
          </div>

          {/* welcome message */}
          <h1 className="text-3xl ">Welcome to the METAVERSE,</h1>

          {/* username */}
          <h2 className="text-5xl font-bold truncate ">{user.getUsername()}</h2>

          {/* change username */}
          <div className="text-sm absolute top-0 right-5 ">
            <button onClick={toggleModal} className="hover:text-pink-700 ">
              Change your Username
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
