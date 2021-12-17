import { useState } from 'react';
import { useMoralis } from 'react-moralis';

const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend('Messages');
    const messages = new Messages();

    messages
      .save({
        message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then(
        () => {},
        (error) => console.log(error.message)
      );

    endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });

    setMessage('');
  };

  return (
    <form
      className="flex border-4 border-blue-400 z-50 rounded-full w-11/12 fixed bottom-10 bg-black
    px-6 py-4 opacity-80 max-w-2xl shadow-xl "
    >
      <input
        type="text"
        className="outline-none bg-transparent text-white placeholder-gray-500 flex-1 pr-5 "
        placeholder={`Enter a message ${user.getUsername()}...`}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />

      <button onClick={sendMessage} className="font-bold text-pink-500 ">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
