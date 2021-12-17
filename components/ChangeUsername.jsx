import { useMoralis } from 'react-moralis';

const ChangeUsername = () => {
  const { user, setUserData, isUserUpdating, userError } = useMoralis();

  const setUsername = (e) => {
    const username = prompt(
      `Enter your new Username (current: ${user.getUsername()})`
    );

    if (!username) return;

    setUserData({
      username,
    });
  };

  return (
    <div className="text-sm absolute top-0 right-5 ">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        i
        className="hover:text-pink-700 "
      >
        Change your Username
      </button>
    </div>
  );
};

export default ChangeUsername;
