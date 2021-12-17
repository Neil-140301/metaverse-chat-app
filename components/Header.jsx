import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

const Header = () => {
  const { user } = useMoralis();
  return (
    <div className="text-pink-500 sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700 ">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center ">
        {/* logo */}
        <div className="relative w-24 h-24 mx-auto hidden lg:inline-grid ">
          <Image
            src="/images/logo.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-full "
          />
        </div>

        <div className="text-left lg:text-center col-span-4 ">
          <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full ">
            <Avatar logoutOnPress />
          </div>

          {/* welcome message */}
          <h1 className="text-3xl ">Welcome to the MetaVerse</h1>

          {/* username */}
          <h2 className="text-5xl font-bold truncate ">{user.getUsername()}</h2>

          {/* change username */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
};

export default Header;
