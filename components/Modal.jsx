import { useRef } from 'react';
import { useMoralis } from 'react-moralis';
import { useModal } from '../context/ModalContext';

const Modal = () => {
  const { user, setUserData, isUserUpdating, userError } = useMoralis();
  const usernameRef = useRef('');
  const { modalOpen, toggleModal } = useModal();

  const setUsername = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;

    if (!username) return;

    setUserData({
      username,
    });

    toggleModal();
  };

  return (
    <div className={`${modalOpen ? 'opacity-1' : 'opacity-0'}`}>
      <div
        onClick={toggleModal}
        className="absolute top-0 left-0 right-0 h-screen bg-black z-[90] opacity-75  "
      ></div>
      <div className="absolute z-[90] top-[15%] left-0 right-0 flex justify-center h-[40%] items-center">
        <div className="min-w-[450px] bg-gray-200 px-4 py-8 rounded-lg space-y-6 ">
          <p className="text-3xl font-bold  ">
            Current :{' '}
            <span className="text-2xl italic underline underline-offset-1 text-pink-600  ">
              {user.getUsername()}
            </span>
          </p>
          <div className="">
            <p className="font-semibold my-2 ">Enter your new Username</p>
            <form className="">
              <input
                type="text"
                className="outline-none p-2 rounded-md w-[80%] text-slate-400 "
                ref={usernameRef}
              />
              <button
                disabled={isUserUpdating}
                onClick={setUsername}
                className="font-bold text-pink-500 ml-4 "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
