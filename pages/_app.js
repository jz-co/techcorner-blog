import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { useState } from 'react';
import Router from 'next/router';

import Loader from '../components/loader';

/* Not sure if this is best way to add global styles */
const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
					::selection {
						background-color: #90cdf4;
						color: #fefefe;
					}
					::-moz-selection {
						background: #ffb7b7;
						color: #fefefe;
					}
					html {
						min-width: 356px;
						scroll-behavior: smooth;
					}
					#__next {
						display: flex;
						flex-direction: column;
						min-height: 100vh;
						background: ${colorMode === 'light' ? '#F5F5F5' : 'black'};
					}
				`}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  const { colorMode } = useColorMode();
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', () => {
    setLoading(true);
  });
  Router.events.on('routeChangeComplete', () => {
    setLoading(false);
  });

  return (
    <ChakraProvider>
      {loading ? (
        <Loader />
      ) : (
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      )}
    </ChakraProvider>
  );
}

export default MyApp;
