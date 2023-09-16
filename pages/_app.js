//import '../styles/globals.css';
//import { Button } from 'react-bootstrap'; // Import Button from React Bootstrap
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider from Chakra UI

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
