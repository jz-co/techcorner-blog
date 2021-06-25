import React from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';

import Header from './header';
import Footer from './footer';

const Container = ({ children }) => {
	const { colorMode } = useColorMode();

	const bgColor = { light: '#F5F5F5', dark: 'gray.900' };
	const color = { light: 'black', dark: 'white' };

	return (
		<>
			<Header /> 
			<Flex w="100%" justifyContent="center" alignItems="center" flexDirection="column">
				{/* <Flex
					m='0 4rem 4rem 4rem'
					justifyContent='flex-start'
					alignItems='center'
					flexDirection='column'
					bg={bgColor[colorMode]}
					color={color[colorMode]}
					minHeight='80vh'
					maxWidth='1200px'>
					{children}
				</Flex> */}
				{children}
			</Flex>
			<Footer/>
		</>
	);
};

export default Container;
