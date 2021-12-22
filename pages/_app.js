import App from 'next/app';
import { createContext, useEffect } from 'react';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { fetchStrapi } from '../lib/api';
import 'katex/dist/katex.min.css'; // stylesheet for the math

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
						background: ${colorMode === 'light' ? 'white' : 'black'};
					}

          img + em {
            opacity: 0.75
          }
				`}
      />
      {children}
    </>
  );
};

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps, router }) {
  // const { colorMode } = useColorMode();
  const nextRouter = useRouter();
  const { global } = pageProps;

  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      })
    }
    nextRouter.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      nextRouter.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [nextRouter.events])

  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0.7
        },
        pageAnimate: {
          opacity: 1
        },
        pageExit: {
          opacity: 0,
        }
      }}>
      <GlobalContext.Provider value={global}>
        <ChakraProvider>
          <GlobalStyle>
            <Component {...pageProps} />
          </GlobalStyle>
        </ChakraProvider>
      </GlobalContext.Provider>
    </motion.div>
  );
}

MyApp.getInitialProps = async (ctx) => {
  // required by Next.js
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchStrapi("get.global");

  return { ...appProps, pageProps: { global } };
}

export default MyApp;
