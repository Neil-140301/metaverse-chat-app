import Image from 'next/image';

const Logo = ({ className }) => {
  return (
    <div
      className={
        'relative h-[200px] w-[200px] rounded-full bg-gradient-to-br from-black via-gray-500 to-gray-100 ' +
        className
      }
    >
      <Image
        src="/images/M.png"
        layout="fill"
        objectFit="contain"
        className="rounded-lg "
      />
    </div>
  );
};

export default Logo;
