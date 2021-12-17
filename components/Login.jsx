import Image from 'next/image';
import { useMoralis } from 'react-moralis';

const Login = () => {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative ">
      <div
        className="flex flex-col absolute z-50 h-[70%] items-center justify-center w-full
        space-y-6
      "
      >
        {/* logo */}
        <Image
          src="/images/logo.jpg"
          width="200"
          height="200"
          className="object-cover rounded-full "
        />

        {/* login button */}
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse "
        >
          Login to the METAVERSE
        </button>
      </div>

      <div className="w-full h-screen ">
        {/* login form */}
        <Image
          src="https://links.papareact.com/55n"
          // src="/images/login-bg.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;
