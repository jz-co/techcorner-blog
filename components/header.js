import Link from 'next/link';
import { Flex } from '@chakra-ui/react';

import Logo from './logo';
import NavBar from './navbar';

export default function Header({ currPage, ...props }) {
	return (
        <Flex w="100%" justifyContent="center" bg="white">
            <Flex
                as='nav'
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                width='100%'
                maxWidth='1024px'
                mx={12}
                mt={8}
                mb={4}>
                <Logo as="a" href="/"/>
                <NavBar selectedPage={currPage}/>
            </Flex>
        </Flex>
	);
}
