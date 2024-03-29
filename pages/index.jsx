import Head from 'next/head';
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';
import Login from '../components/Login';
import Messages from '../components/Messages';
import Modal from '../components/Modal';

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div
      className="h-screen overflow-y-scroll bg-gradient-to-br from-black to-fuchsia-900 overflow-hi
       "
    >
      <Head>
        <title>MetaVerse Chat App | Nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto ">
        <Header />
        <Messages />
      </div>

      <Modal />
    </div>
  );
}
