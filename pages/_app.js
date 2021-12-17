import { MoralisProvider } from 'react-moralis';
import '../styles/globals.css';
import ContextProvider from '../context/ContextProvider';

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </MoralisProvider>
  );
}

export default MyApp;
