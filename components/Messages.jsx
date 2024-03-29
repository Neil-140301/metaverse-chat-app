import { useRef } from 'react';
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis';
import Message from './Message';
import SendMessage from './SendMessage';

const MIN_DURATION = 30;

const Messages = () => {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    'Messages',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan(
          'createdAt',
          new Date(Date.now() - 1000 * 60 * MIN_DURATION)
        ),
    [],
    { live: true }
  );

  return (
    <div className="pb-56 ">
      <div className="my-5 ">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>

      <div className="space-y-10 p-4 ">{
        data.map(m => (
          <Message key={m.id} message={m} />
        ))
      }</div>

      <div className="flex justify-center ">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>

      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5 ">
        <p>You're up to date {user.getUsername()}! 🎉</p>
      </div>
    </div>
  );
};

export default Messages;
